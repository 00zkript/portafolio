<script setup>
    import { Icon } from '@iconify/vue';
    import translations from '../../data/habilidades.json';
    
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
    <section class="py-16 mx-[7%] rounded-lg bg-slate-100 -mt-24 z-10 relative shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 justify-items-center text-center divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0">
            <div class="p-5 md:py-0 md:px-12 md:w-full ">
                <div class="mb-3 flex flex-col items-center">
                    <div class="rounded-full bg-black-russian-400 text-white mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 m-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                        </svg>
                                  
                    </div>
                              
                    <h2 class="font-bold mb-2 text-xl ">{{ content.frontend.title }}</h2>
                    <p class="text-sm">{{ content.frontend.content }}</p>
                </div>
    
                <div class="pb-3">
                    <h2 class="font-bold mb-2">{{ content.frontend.title_2 }}</h2>
                    <div class="flex flex-wrap justify-center">
                        <span class="chip bg-indigo-500 text-white"><Icon icon="flowbite:html-solid" width="1rem" height="1rem"  style="color: white" /> Html</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" />Jquery</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="streamline:css-three-solid" width="1rem" height="1rem"  style="color: white" /> Css</span>
                    </div>
                </div>
    
                <div class="pb-3">
                    <h2 class="font-bold mb-2">{{ content.frontend.title_3 }}</h2>
                    <div class="flex flex-wrap justify-center">
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:astro" width="1rem" height="1rem"  style="color: white" /> Astro</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="uil:react" width="1rem" height="1rem"  style="color: white" /> React</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="ri:bootstrap-fill" width="1rem" height="1rem"  style="color: white" /> Bootstrap</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="file-icons:tailwind" width="1rem" height="1rem"  style="color: white" /> Tailwindcss</span>
                    </div>
                </div>
                    
                    
            </div>
    
            <div class="p-5 md:py-0 md:px-12 md:w-full ">
                <div class="mb-3 flex flex-col items-center">
                    <div class="rounded-full bg-black-russian-400 text-white mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-16 h-16 m-5" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </div>
                    <h2 class="font-bold mb-2 text-xl">{{ content.backend.title }}</h2>
                    <p class="text-sm">{{ content.backend.content }}</p>
                </div>
                <div class="pb-3">
                    <h2 class="font-bold mb-2">{{ content.backend.title_2 }}</h2>
                    <div class="flex flex-wrap justify-center">
                        <span class="chip bg-indigo-500 text-white"><Icon icon="zondicons:php-elephant" width="1rem" height="1rem"  style="color: white" /> Php</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:python-fill" width="1rem" height="1rem"  style="color: white" /> Python</span>
                    </div>
                </div>
                <div class="pb-3">
                    <h2 class="font-bold mb-2">{{ content.backend.title_3 }}</h2>
                    <div class="flex flex-wrap justify-center">
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="fontisto:mysql" width="1rem" height="1rem"  style="color: white" /> MySQL</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="cib:postgresql" width="1rem" height="1rem"  style="color: white" /> PostgreSQL</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="cib:codeigniter" width="1rem" height="1rem"  style="color: white" /> Codeigniter</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="la:node" width="1rem" height="1rem"  style="color: white" /> Node</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="fa6-brands:opencart" width="1rem" height="1rem"  style="color: white" /> Opencart</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="ic:sharp-wordpress" width="1rem" height="1rem"  style="color: white" /> Wordpress</span>
                    </div>
                </div>
            </div>
    
            <div class="p-5 md:py-0 md:px-12 md:w-full ">
                <div class="mb-3 flex flex-col items-center">
                    <div class="rounded-full bg-black-russian-400 text-white mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 m-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </div>
                    <h2 class="font-bold mb-2 text-xl">{{ content.others.title }}</h2>
                    <p class="text-sm">{{ content.others.content }}</p>
                </div>
                <div class="pb-3">
                    <div class="flex flex-wrap justify-center">
                        
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:amazonec2" width="1rem" height="1rem"  style="color: white" /> Amazon C2</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:amazons3" width="1rem" height="1rem"  style="color: white" /> Amazon S3</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="teenyicons:face-id-outline" width="1rem" height="1rem"  style="color: white" /> Amazon Rekognition</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="teenyicons:face-id-outline" width="1rem" height="1rem"  style="color: white" /> Face ++</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="pajamas:git" width="1rem" height="1rem"  style="color: white" /> Git</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="bxl:docker" width="1rem" height="1rem"  style="color: white" /> Docker</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="file-icons:vscode" width="1rem" height="1rem"  style="color: white" /> Vscode</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="devicon-plain:phpstorm" width="1rem" height="1rem"  style="color: white" /> >Php Storm</span>
                    </div>
                </div>
            </div>
    
    
        </div>
    </section>
    
</template>
