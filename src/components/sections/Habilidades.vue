<script setup>
    import { Icon } from '@iconify/vue';
  import translations from '../../data/habilidades.json';
  import stackData from '../../data/stack.json';
  import stackIcons from '../../data/stack-icons.json';
  import stackColors from '../../data/stack-colors.json';
    
    import { computed } from 'vue';
    import { useStore } from '@nanostores/vue';
    import { languageStore } from '../../stores/languageStore';

    const store = useStore(languageStore);

    const content = computed(() => {
        const lang = store.value.language;
        return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
    });

  const stack = computed(() => {
    const lang = store.value.language;
    return stackData[lang] || stackData['esp'];
  });

  // Resuelve iconos tolerando diferencias menores en el texto (puntos, espacios, mayúsculas)
  const findIcon = (tech) => {
    if (!tech) return null;
    if (stackIcons[tech]) return stackIcons[tech];
    const norm = (s) => s.replace(/\W/g, '').toLowerCase();
    const target = norm(tech);
    const key = Object.keys(stackIcons).find(k => norm(k) === target);
    return key ? stackIcons[key] : null;
  };

  const findColor = (tech) => {
    if (!tech) return null;
    if (stackColors[tech]) return stackColors[tech];
    const norm = (s) => s.replace(/\W/g, '').toLowerCase();
    const key = Object.keys(stackColors).find(k => norm(k) === norm(tech));
    return key ? stackColors[key] : null;
  };

  // Listas canónicas para frontend y backend (deben coincidir con etiquetas en stack.items o ser normalizables)
  const frontendList = ['HTML', 'Vanilla JS', 'jQuery', 'CSS', 'Vue.js', 'Astro', 'React', 'Bootstrap', 'Tailwind CSS'];
  const backendList = ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Node.js', 'Python', 'CodeIgniter'];

  // Calcular 'otros' como los elementos en stack.items que no están en frontendList ni backendList
  const otros = computed(() => {
    const items = stack.value.items || [];
    const norm = (s) => (s || '').replace(/\W/g, '').toLowerCase();
    const inEither = (s) => {
      const n = norm(s);
      return frontendList.concat(backendList).some(x => norm(x) === n);
    };
    return items.filter(i => !inEither(i));
  });

</script>
<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Tarjeta de Frontend -->
      <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div class="text-center mb-6">
          <div class="rounded-full bg-white/20 backdrop-blur-md text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:code-tags" width="2rem" height="2rem" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ content.frontend.title }}</h2>
          <p class="text-sm text-gray-300">{{ content.frontend.content }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white/80 mb-3">{{ content.frontend.title_2 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tech, i) in frontendList.slice(0,4)" :key="i" class="chip bg-white/20 backdrop-blur-md text-white flex items-center gap-2" :style="{ background: findColor(tech) ? findColor(tech) + '22' : undefined, borderColor: findColor(tech) ? findColor(tech) + '44' : undefined, borderWidth: findColor(tech) ? '1px' : undefined }">
              <Icon v-if="findIcon(tech)" :icon="findIcon(tech)" width="1rem" height="1rem" />
              <span>{{ tech }}</span>
            </span>
          </div>
          <h3 class="text-lg font-semibold text-white/80 mt-4 mb-3">{{ content.frontend.title_3 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tech, i) in frontendList.slice(4)" :key="i" class="chip bg-white/20 backdrop-blur-md text-white flex items-center gap-2" :style="{ background: findColor(tech) ? findColor(tech) + '22' : undefined, borderColor: findColor(tech) ? findColor(tech) + '44' : undefined, borderWidth: findColor(tech) ? '1px' : undefined }">
              <Icon v-if="findIcon(tech)" :icon="findIcon(tech)" width="1rem" height="1rem" />
              <span>{{ tech }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Tarjeta de Backend -->
      <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div class="text-center mb-6">
          <div class="rounded-full bg-white/20 backdrop-blur-md text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:server" width="2rem" height="2rem" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ content.backend.title }}</h2>
          <p class="text-sm text-gray-300">{{ content.backend.content }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white/80 mb-3">{{ content.backend.title_2 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tech, i) in backendList.slice(0,3)" :key="i" class="chip bg-white/20 backdrop-blur-md text-white flex items-center gap-2" :style="{ background: findColor(tech) ? findColor(tech) + '22' : undefined, borderColor: findColor(tech) ? findColor(tech) + '44' : undefined, borderWidth: findColor(tech) ? '1px' : undefined }">
              <Icon v-if="findIcon(tech)" :icon="findIcon(tech)" width="1rem" height="1rem" />
              <span>{{ tech }}</span>
            </span>
          </div>
          <h3 class="text-lg font-semibold text-white/80 mt-4 mb-3">{{ content.backend.title_3 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tech, i) in backendList.slice(3)" :key="i" class="chip bg-white/20 backdrop-blur-md text-white flex items-center gap-2" :style="{ background: findColor(tech) ? findColor(tech) + '22' : undefined, borderColor: findColor(tech) ? findColor(tech) + '44' : undefined, borderWidth: findColor(tech) ? '1px' : undefined }">
              <Icon v-if="findIcon(tech)" :icon="findIcon(tech)" width="1rem" height="1rem" />
              <span>{{ tech }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Tarjeta de Otros -->
      <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div class="text-center mb-6">
          <div class="rounded-full bg-white/20 backdrop-blur-md text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:tools" width="2rem" height="2rem" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ content.others.title }}</h2>
          <p class="text-sm text-gray-300">{{ content.others.content }}</p>
        </div>
        <div>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tech, i) in otros" :key="i" class="chip bg-white/20 backdrop-blur-md text-white flex items-center gap-2" :style="{ background: findColor(tech) ? findColor(tech) + '22' : undefined, borderColor: findColor(tech) ? findColor(tech) + '44' : undefined, borderWidth: findColor(tech) ? '1px' : undefined }">
              <Icon v-if="findIcon(tech)" :icon="findIcon(tech)" width="1rem" height="1rem" />
              <span>{{ tech }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
