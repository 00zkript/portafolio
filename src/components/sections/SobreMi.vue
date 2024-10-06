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
    <section class="section">
        
        <div class="section-header">
            <h2 class="section-title text-black-russian-400 flex gap-2 justify-center items-center">
                {{ content.title }}
            </h2>
            <p class="section-subtitle ">{{ content.sub_title }}</p>
        </div>
    
        <div class="section-content max-w-2xl text-center" >    
            <p class="p-2">{{ content.content }}</p>
            <p class="p-2">{{ content.content_2 }}</p>
        </div>
    </section>
</template>
