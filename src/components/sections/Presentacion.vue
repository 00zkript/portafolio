<script setup>
import translations from '@/data/presentacion.json';

import { computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { languageStore } from '@/stores/languageStore';
import { useTypewriter } from '@/composables/useTypewriter';

const store = useStore(languageStore);

const content = computed(() => {
    const lang = store.value.language;
    return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
});

// Usamos el composable reutilizable
const { typed: typedTitle, start, stop } = useTypewriter(() => content.value.title_2 || '', {
    typeDelay: 120,
    deleteDelay: 60,
    pauseAfterType: 1400,
    pauseAfterDelete: 400,
    loop: true
});

</script>
<template>
    <section class="w-full flex flex-col justify-center items-center py-20 sm:py-28 px-6 sm:px-8">
        <div class="text-center text-gray-200 max-w-3xl w-full">
            <p class="text-lg md:text-2xl font-mono">{{ content.title }}</p>

            <h1 class="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                <span>{{ typedTitle }}</span><span class="type-cursor">|</span>
            </h1>

            <h2 class="text-lg md:text-2xl mt-4">{{ content.title_3 }}</h2>

            <p class="mt-6 text-base sm:text-lg px-2 sm:px-0 leading-relaxed">
                {{ content.content }}
            </p>

            <div class="flex justify-center gap-6 mt-8">
                <a target="_blank" href="https://www.linkedin.com/in/henry-quispe-cabello-1742a99b/" class="hover:text-indigo-400 p-3 hover:border-indigo-400 border-2 rounded-full flex items-center transition duration-300">
                    <i class="foundation--social-linkedin" style="width: 1.5rem; height: 1.5rem;"></i>
                </a>
                <a target="_blank" href="https://github.com/00zkript" class="hover:text-indigo-400 p-3 hover:border-indigo-400 border-2 rounded-full flex items-center transition duration-300">
                    <i class="ion--social-github" style="width: 1.5rem; height: 1.5rem;"></i>
                </a>
                <a href="mailto:hg305718@gmail.com" class="hover:text-indigo-400 p-3 hover:border-indigo-400 border-2 rounded-full flex items-center transition duration-300">
                    <i class="material-symbols-light--mail" style="width: 1.5rem; height: 1.5rem;"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.type-cursor {
    display: inline-block;
    width: 0.5rem;
    height: 1.05em;
    color: #fff;
    margin-left: 0.25rem;
    font-weight: 700;
    line-height: 1.05em;
    animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
    0% { opacity: 0; }
}

/* Pequeños ajustes responsive para mejor distribución en móvil */
@media (max-width: 640px) {
    .leading-tight { line-height: 1.05; }
    .text-center p { margin-left: 0; margin-right:0; }
}
</style>