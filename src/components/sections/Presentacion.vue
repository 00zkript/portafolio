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
            <p class="text-base md:text-lg font-mono text-primary/80">{{ content.title }}</p>

            <h1 class="text-4xl md:text-6xl font-extrabold mt-4 leading-tight text-[var(--text)]">
                <span>{{ typedTitle }}</span><span class="type-cursor">|</span>
            </h1>

            <h2 class="text-lg md:text-2xl mt-4 text-gray-300">{{ content.title_3 }}</h2>

            <p class="mt-6 text-base sm:text-lg px-2 sm:px-0 leading-relaxed text-gray-300">
                {{ content.content }}
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8 items-center">
                <a href="#mis-trabajos" class="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
                    Ver mi trabajo
                </a>
                <a target="_blank" href="/cv-spanish-2024.pdf" class="inline-flex items-center gap-3 border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/5 transition duration-300">
                    Descargar CV
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