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
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Tarjeta de Frontend -->
      <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div class="text-center mb-6">
          <div class="rounded-full bg-white/20 backdrop-blur-md text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:code-tags" width="2rem" height="2rem" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ content.frontend.title }}</h2>
          <p class="text-sm text-gray-300">{{ content.frontend.content }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white/80 mb-3">{{ content.frontend.title_2 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="flowbite:html-solid" width="1rem" height="1rem" /> Html</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="raphael:js" width="1rem" height="1rem" /> Vanilla Js</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem" /> Jquery</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="streamline:css-three-solid" width="1rem" height="1rem" /> Css</span>
          </div>
          <h3 class="text-lg font-semibold text-white/80 mt-4 mb-3">{{ content.frontend.title_3 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem" /> Vuejs</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="simple-icons:astro" width="1rem" height="1rem" /> Astro</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="uil:react" width="1rem" height="1rem" /> React</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="ri:bootstrap-fill" width="1rem" height="1rem" /> Bootstrap</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="file-icons:tailwind" width="1rem" height="1rem" /> Tailwindcss</span>
          </div>
        </div>
      </div>

      <!-- Tarjeta de Backend -->
      <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div class="text-center mb-6">
          <div class="rounded-full bg-white/20 backdrop-blur-md text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:server" width="2rem" height="2rem" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ content.backend.title }}</h2>
          <p class="text-sm text-gray-300">{{ content.backend.content }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white/80 mb-3">{{ content.backend.title_2 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="zondicons:php-elephant" width="1rem" height="1rem" /> Php</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="raphael:js" width="1rem" height="1rem" /> Vanilla Js</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="akar-icons:python-fill" width="1rem" height="1rem" /> Python</span>
          </div>
          <h3 class="text-lg font-semibold text-white/80 mt-4 mb-3">{{ content.backend.title_3 }}</h3>
          <div class="flex flex-wrap gap-2">
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem" /> Laravel</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="fontisto:mysql" width="1rem" height="1rem" /> MySQL</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="cib:postgresql" width="1rem" height="1rem" /> PostgreSQL</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="cib:codeigniter" width="1rem" height="1rem" /> Codeigniter</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="la:node" width="1rem" height="1rem" /> Node</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="fa6-brands:opencart" width="1rem" height="1rem" /> Opencart</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="ic:sharp-wordpress" width="1rem" height="1rem" /> Wordpress</span>
          </div>
        </div>
      </div>

      <!-- Tarjeta de Otros -->
      <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div class="text-center mb-6">
          <div class="rounded-full bg-white/20 backdrop-blur-md text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:tools" width="2rem" height="2rem" />
          </div>
          <h2 class="text-xl font-bold text-white">{{ content.others.title }}</h2>
          <p class="text-sm text-gray-300">{{ content.others.content }}</p>
        </div>
        <div>
          <div class="flex flex-wrap gap-2">
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="simple-icons:amazonec2" width="1rem" height="1rem" /> Amazon EC2</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="simple-icons:amazons3" width="1rem" height="1rem" /> Amazon S3</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="teenyicons:face-id-outline" width="1rem" height="1rem" /> Amazon Rekognition</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="teenyicons:face-id-outline" width="1rem" height="1rem" /> Face ++</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="pajamas:git" width="1rem" height="1rem" /> Git</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="bxl:docker" width="1rem" height="1rem" /> Docker</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="file-icons:vscode" width="1rem" height="1rem" /> Vscode</span>
            <span class="chip bg-white/20 backdrop-blur-md text-white"><Icon icon="devicon-plain:phpstorm" width="1rem" height="1rem" /> Php Storm</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
