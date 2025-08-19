<script setup>
import translations from '@/data/presentacion.json';

import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from '@nanostores/vue';
import { languageStore } from '@/stores/languageStore';
import { useTypewriter } from '@/composables/useTypewriter';

const store = useStore(languageStore);

const content = computed(() => {
    const lang = store.value.language;
    return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
});

// Preparar rotación de frases para el typewriter
const phraseIndex = ref(0);
const phrases = computed(() => (content.value.phrases && content.value.phrases.length) ? content.value.phrases : [content.value.title_3 || '']);
const currentPhrase = computed(() => phrases.value[phraseIndex.value % phrases.value.length]);

// Usamos el composable reutilizable sobre la frase actual (timings ajustados para mecanografía más realista)
const { typed: typedPhrase, start, stop } = useTypewriter(() => currentPhrase.value || '', {
    typeDelay: 110,
    deleteDelay: 50,
    pauseAfterType: 1800,
    pauseAfterDelete: 600,
    loop: true
});

let rotInterval = null;
const anchorId = computed(() => (store.value.language === 'eng' ? '#my-work' : '#mis-trabajos'));
const cvLink = computed(() => content.value.cv || '/cv-spanish-2024v3.pdf');

onMounted(() => {
    // arrancar typewriter
    start();
    // ciclo para cambiar la frase después de un tiempo aproximado del ciclo de typing+pause+delete
    rotInterval = setInterval(() => {
        phraseIndex.value++;
    }, 6000);
});

onBeforeUnmount(() => {
    stop();
    if (rotInterval) clearInterval(rotInterval);
});

</script>
<template>
    <section class="w-full flex flex-col justify-center items-center py-20 sm:py-28 px-6 sm:px-8">
        <div class="text-center text-gray-200 max-w-3xl w-full">
            <p class="text-base md:text-lg font-mono text-primary/80">{{ content.title }}</p>

            <h1 class="text-5xl md:text-7xl font-extrabold mt-6 leading-tight text-[var(--text)]">
                <span class="block text-4xl md:text-6xl font-extrabold text-[var(--text)] mb-3">{{ content.title_2 }}</span>
                <span class="block mt-2 text-xl md:text-2xl font-medium text-muted tracking-tight">{{ typedPhrase }}<span class="type-cursor">|</span></span>
            </h1>

            <h2 class="text-sm md:text-lg mt-6 text-gray-400 font-medium">{{ content.title_3 }}</h2>

            <p class="mt-2 text-sm text-gray-400">{{ content.location }} · {{ content.years_experience }} years</p>

            <p class="mt-6 text-base sm:text-lg px-2 sm:px-0 leading-relaxed text-gray-300">
                {{ content.content }}
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8 items-center">
                <a :href="anchorId" class="inline-flex items-center gap-3 btn-primary" aria-label="{{ content.cta_primary }}">
                    {{ content.cta_primary }}
                </a>
                <a target="_blank" :href="cvLink" class="inline-flex items-center gap-3 btn-secondary" aria-label="{{ content.cta_secondary }}">
                    {{ content.cta_secondary }}
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.type-cursor {
    display: inline-block;
    width: 0.45rem;
    height: 1.05em;
    color: #fff;
    margin-left: 0.35rem;
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

.btn-primary {
    background: var(--color-primary);
    color: white;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0 8px 20px rgba(79,70,229,0.12);
    transition: transform .14s ease, box-shadow .14s ease, background .12s ease;
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(79,70,229,0.14); }
.btn-primary:active { transform: translateY(-1px); }

.btn-secondary {
    background: transparent;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255,255,255,0.12);
    transition: background .12s ease, transform .12s ease;
}
.btn-secondary:hover { background: rgba(255,255,255,0.04); transform: translateY(-2px); }

.text-muted { color: rgba(243,244,246,0.82); }

/* Ajustes de espaciado extra para el hero */
.hero-top { padding-top: 0.25rem; padding-bottom: 0.25rem; }
</style>