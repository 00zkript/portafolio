<script setup>
import translations from '../../data/sobreMi.json';
import { computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { languageStore } from '../../stores/languageStore';
import { Icon } from '@iconify/vue';
import stackData from '../../data/stack.json';
import stackIcons from '../../data/stack-icons.json';
import stackColors from '../../data/stack-colors.json';

const store = useStore(languageStore);

const content = computed(() => {
  const lang = store.value.language;
  return translations[lang] || translations['esp'];
});

const anchorId = computed(() => (store.value.language === 'eng' ? '#contact' : '#contactame'));
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
</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-2">
        <Icon icon="mdi:account-circle-outline" class="w-6 h-6" />
        {{ content.title }}
      </h2>
      <p class="text-lg text-gray-300">{{ content.sub_title }}</p>
    </div>

    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      <div class="md:col-span-2 bg-white/5 backdrop-blur-md rounded-lg shadow-md p-6">
        <p class="text-gray-300 text-base leading-7 mb-4">{{ content.intro || content.content }}</p>

        <ul class="space-y-3 mt-4">
          <li v-for="(h, idx) in content.highlights" :key="idx" class="flex gap-3 items-start">
            <Icon icon="mdi:check-circle" class="text-[var(--color-accent)] w-5 h-5 flex-shrink-0" />
            <span class="text-gray-200">{{ h }}</span>
          </li>
        </ul>

        <p class="text-gray-300 text-base leading-7 mt-6">{{ content.content }}</p>
        <p class="text-gray-300 text-base leading-7 mt-3">{{ content.contact_hint }}</p>
      </div>

      <aside class="md:col-span-1 bg-white/5 backdrop-blur-md rounded-lg shadow-md p-6 flex flex-col gap-4">
        <div>
          <h3 class="text-sm text-gray-300 mb-2 font-semibold">Tech stack</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tech, i) in (stack.items || stackData[store.value.language].items).slice(0,4)" :key="i" class="tech-chip text-gray-100 flex items-center gap-2" :style="{ background: findColor(tech) ? findColor(tech) + '22' : undefined, borderColor: findColor(tech) ? findColor(tech) + '44' : undefined, borderWidth: findColor(tech) ? '1px' : undefined }">
                <Icon v-if="findIcon(tech)" :icon="findIcon(tech)" class="w-4 h-4" />
                <span>{{ tech }}</span>
              </span>
              <a href="#habilidades" class="ml-2 inline-flex items-center px-3 py-1 text-sm rounded-full border border-white/10 text-white/90 hover:bg-white/5">Ver más</a>
            </div>
        </div>

        <div>
          <h3 class="text-sm text-gray-300 mb-2 font-semibold">Availability</h3>
          <p class="text-gray-200 text-sm">{{ content.availability }}</p>
        </div>

        <div class="mt-auto flex gap-2">
          <a :href="content.cv" class="btn-primary w-full text-center" :aria-label="content.cta_cv" target="_blank" rel="noopener" download>{{ content.cta_cv }}</a>
          <button @click.prevent="document.querySelector('#contactame')?.scrollIntoView({ behavior: 'smooth' })" class="btn-secondary w-full text-center" :aria-label="content.cta_hire">{{ content.cta_hire }}</button>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
/* Chips responsivos */
.tech-chip { padding: 0.25rem 0.6rem; font-size: 0.75rem; border-radius: 9999px; background: rgba(255,255,255,0.04); }
@media (min-width: 768px) {
  .tech-chip { padding: 0.35rem 0.75rem; font-size: 0.85rem; }
}

.btn-secondary { border: 1px solid rgba(255,255,255,0.1); }
</style>
