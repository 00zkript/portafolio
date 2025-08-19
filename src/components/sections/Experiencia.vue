<script setup>
    import translations from '../../data/experiencia.json';
    import { computed } from 'vue';
    import { useStore } from '@nanostores/vue';
    import { languageStore } from '../../stores/languageStore';

    const store = useStore(languageStore);

    const content = computed(() => {
        const lang = store.value.language;
        return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
    });
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
          <time class="block mb-2 text-sm font-medium text-gray-300">
            {{ company.time }}
          </time>
          <h3 class="text-lg font-semibold text-white mb-2">
            {{ company.name }}
          </h3>
          <ul class="mt-2 text-sm text-gray-300 list-disc pl-5">
            <li
              v-for="(item, idx) in company.list"
              :key="idx"
              v-html="item"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>