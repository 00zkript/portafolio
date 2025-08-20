import { ref, watch, onMounted, onUnmounted } from 'vue';

// useTypewriter(getText, options)
// getText: a ref/computed or a function that returns the current string to type
// options: { typeDelay, deleteDelay, pauseAfterType, pauseAfterDelete, loop }
export function useTypewriter(getText, options = {}) {
  const typed = ref('');
  let timers = [];
  let running = false;

  const opts = Object.assign({
    typeDelay: 120,
    deleteDelay: 60,
    pauseAfterType: 1400,
    pauseAfterDelete: 400,
    loop: true
  }, options);

  const clearAllTimers = () => {
    timers.forEach(t => clearTimeout(t));
    timers = [];
  };

  const readText = () => {
    try {
      if (getText && typeof getText === 'function') return getText() || '';
      if (getText && typeof getText === 'object' && 'value' in getText) return getText.value || '';
      return String(getText || '');
    } catch (e) {
      return '';
    }
  };

  const runTypeLoop = async () => {
    clearAllTimers();
    running = true;
    typed.value = '';

    const doType = (text) => {
      return new Promise((resolve) => {
        let i = 0;
        const step = () => {
          if (!running) return resolve();
          if (i <= text.length) {
            typed.value = text.slice(0, i);
            i++;
            const t = setTimeout(step, opts.typeDelay);
            timers.push(t);
          } else {
            resolve();
          }
        };
        step();
      });
    };

    const doDelete = (text) => {
      return new Promise((resolve) => {
        let i = text.length;
        const step = () => {
          if (!running) return resolve();
          if (i >= 0) {
            typed.value = text.slice(0, i);
            i--;
            const t = setTimeout(step, opts.deleteDelay);
            timers.push(t);
          } else {
            resolve();
          }
        };
        step();
      });
    };

    // loop
    while (running) {
      const text = readText();
      if (!text) {
        // if empty, wait a bit and retry
        await new Promise((r) => { const t = setTimeout(r, 500); timers.push(t); });
        if (!opts.loop) break;
        continue;
      }

      await doType(text);
      // pausa al terminar
      await new Promise((res) => { const t = setTimeout(res, opts.pauseAfterType); timers.push(t); });
      await doDelete(text);
      // pausa antes de volver a escribir
      await new Promise((res) => { const t = setTimeout(res, opts.pauseAfterDelete); timers.push(t); });

      if (!opts.loop) break;
    }
  };

  const start = () => {
    if (running) return;
    runTypeLoop();
  };

  const stop = () => {
    running = false;
    clearAllTimers();
  };

  // If getText is a ref/computed, watch for changes and restart
  if (getText && typeof getText === 'object' && 'value' in getText) {
    watch(getText, (newVal) => {
      stop();
      // small delay to avoid race
      const t = setTimeout(() => start(), 80);
      timers.push(t);
    });
  }

  onUnmounted(() => {
    stop();
  });

  onMounted(() => {
    start();
  });

  return {
    typed,
    start,
    stop
  };
}
