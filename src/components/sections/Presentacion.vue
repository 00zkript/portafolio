<script setup>
    import translations from '../../data/presentacion.json';

    import { computed,onMounted } from 'vue';
    import { useStore } from '@nanostores/vue';
    import { languageStore } from '../../stores/languageStore';
    
    const store = useStore(languageStore);

    const content = computed(() => {
        const lang = store.value.language;
        return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
    });
    

    
</script>
<template>
    <section class="w-full h-[40rem] relative py-24 sm:py-32 bg-no-repeat bg-center bg-cover bg-fixed bg-black" style="background-image: url('img/banner.jpg');">
        <div class="absolute inset-0 bg-black opacity-50"></div>
            
        <div class="absolute mx-[7%]">
            
            <!-- <div class="flex">
                <div class="text-2xl font-mono overflow-hidden whitespace-nowrap">
                    <div class="animate-typing">Este es un efecto de escritura.</div>
                </div>
            </div> -->
            
            
            <div class="flex text-gray-200">
                <div class="font-mono overflow-hidden whitespace-nowrap">
                    <p class="text-3xl ">{{ content.title }}</p>
                </div>
            </div>

            <div class="flex text-gray-200 pt-2">
                <div class="font-mono overflow-hidden whitespace-nowrap">
                    <h1 class="text-6xl font-bold animate-typing">{{ content.title_2 }} &nbsp;</h1>
                </div>
            </div>

            <div class="flex text-gray-200 pt-2">
                <div class="font-mono overflow-hidden whitespace-nowrap">
                    <h2 class="text-3xl">{{ content.title_3 }}</h2>
                </div>
            </div>
            
            <div class=" text-gray-200 mt-6">
                <p class="md:w-1/2">
                    {{ content.content }}
                </p>
                
                <div class="flex gap-2 p-2 mt-4">
                    <a target="_blank" href="https://www.linkedin.com/in/henry-quispe-cabello-1742a99b/" class="hover:text-indigo-400 p-2 hover:border-indigo-400 border-2 rounded-full flex items-center" >
                        <i class="foundation--social-linkedin" style="width: 1rem; height: 1rem;"></i>
                    </a>
                    <a target="_blank" href="https://github.com/00zkript" class="hover:text-indigo-400 p-2 hover:border-indigo-400 border-2 rounded-full flex items-center" >
                        <i class="ion--social-github" style="width: 1rem; height: 1rem;"></i>
                    </a>
                    <a href="mailto:hg305718@gmail.com" class="hover:text-indigo-400 p-2 hover:border-indigo-400 border-2 rounded-full flex items-center" >
                        <i class="material-symbols-light--mail" style="width: 1rem; height: 1rem;"></i>
                    </a>
                </div>
            </div>
            
        </div>
    
    </section>
</template>