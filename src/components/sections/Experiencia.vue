<script setup>
import translations from '../../data/experiencia.json';
import { computed, ref } from 'vue';
import { useStore } from '@nanostores/vue';
import { languageStore } from '../../stores/languageStore';

const store = useStore(languageStore);

const content = computed(() => {
  const lang = store.value.language;
  return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
});

// Estado local para controlar expansión por empresa (dos empresas)
const expanded = ref([false, false]);

function toggleExpand(i) {
  expanded.value[i] = !expanded.value[i];
}

const isEsp = computed(() => store.value.language === 'esp');

function toggleLabel(isOpen) {
  return isOpen ? (isEsp.value ? 'Mostrar menos' : 'Show less') : (isEsp.value ? 'Mostrar más' : 'Show more');
}

function itemsFor(company, idx) {
  if (!company || !company.list) return [];
  return expanded.value[idx] ? company.list : company.list.slice(0, 3);
}
</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10 max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4">{{ content.title }}</h2>
    </div>

    <div class="relative border-l-2 border-white/20">
      <div
        v-for="(company, index) in [content.company_1, content.company_2]"
        :key="index"
        class="mb-10 ml-6"
      >
        <div
          class="absolute w-6 h-6 bg-white/20 backdrop-blur-md rounded-full -left-3 border-2 border-white flex items-center justify-center"
        >
          <span class="w-3 h-3 rounded-full" style="background: rgba(79,70,229,0.12);"></span>
        </div>

        <div class="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div class="flex items-start justify-between gap-4">
            <div>
              <time class="block mb-2 text-sm font-medium text-gray-300">
                {{ company.time }}
              </time>
              <h3 class="text-lg font-semibold text-white mb-2">
                {{ company.name }}
              </h3>
              <p v-if="company.summary" class="text-sm text-gray-200 mb-3 italic">{{ company.summary }}</p>
            </div>
            <div class="text-sm">
              <button
                class="text-indigo-400 hover:text-indigo-300 text-xs font-medium text-nowrap"
                @click="toggleExpand(index)"
              >
                {{ toggleLabel(expanded[index]) }}
              </button>
            </div>
          </div>

          <ul class="mt-4 text-sm text-gray-300 pl-0 space-y-3">
            <li
              v-for="(item, idx) in itemsFor(company, index)"
              :key="idx"
              class="flex gap-3 items-start"
            >
              <svg class="w-4 h-4 mt-1 text-indigo-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="rgba(79,70,229,0.18)" />
                <path d="M7 12l3 3 7-7" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex-1" v-html="item"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>