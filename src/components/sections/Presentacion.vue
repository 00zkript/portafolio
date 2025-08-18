<script setup>
    import translations from '@/data/presentacion.json';

    import { computed } from 'vue';
    import { useStore } from '@nanostores/vue';
    import { languageStore } from '@/stores/languageStore';
    
    const store = useStore(languageStore);

    const content = computed(() => {
        const lang = store.value.language;
        return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
    });
</script>
<template>
    <section class="w-full flex flex-col justify-center items-center py-24 sm:py-32 ">
        <div class="text-center text-gray-200">
            <p class="text-xl md:text-3xl font-mono">{{ content.title }}</p>

            <h1 class="text-4xl md:text-6xl font-bold animate-typing mt-4">{{ content.title_2 }} &nbsp;</h1>

            <h2 class="text-xl md:text-3xl mt-4">{{ content.title_3 }}</h2>

            <p class="mt-6 md:w-2/3 mx-auto">{{ content.content }}</p>

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