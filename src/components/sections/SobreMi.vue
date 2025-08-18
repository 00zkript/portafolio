<script setup>
    import translations from '../../data/sobreMi.json';
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
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
        <i class="material-symbols-light--person" style="font-size: 1.5rem;"></i>
        {{ content.title }}
      </h2>
      <p class="text-lg text-gray-300">{{ content.sub_title }}</p>
    </div>
    <div class="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8">
      <p class="text-gray-300 text-base leading-7 mb-4">{{ content.content }}</p>
      <p class="text-gray-300 text-base leading-7">{{ content.content_2 }}</p>
    </div>
  </section>
</template>
