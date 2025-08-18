<script setup>
import translations from '../data/menu.json';
import { ref, onMounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { languageStore, setLanguage } from '../stores/languageStore';


const store = useStore(languageStore);

const content = computed(() => {
	const lang = store.value.language;
    return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
});

const changeLanguage = (lang) => {
    setLanguage(lang);
};

const showMenuMobil = ref(false);

</script>

<template>
  <div class="bg-white/10 backdrop-blur-md text-white w-full sticky top-0 z-20 shadow-md">
    <header class="sm:p-4">
      <div class="flex justify-between items-center px-4">
        <!-- Menú principal para pantallas grandes -->
        <nav class="hidden lg:flex space-x-6 py-2 items-center">
          <a
            v-for="(item, idx) in content.links"
            :key="idx"
            :href="item.url"
            class="hover:text-indigo-400 transition duration-300"
          >
            {{ item.text }}
          </a>
          <a
            :href="content.download_cv.url"
            :download="content.download_cv.name"
            class="py-1 px-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-300 text-sm flex items-center gap-2"
          >
            <i class="line-md--cloud-alt-download-filled-loop w-4 h-4"></i>
            {{ content.download_cv.text }}
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/henry-quispe-cabello-1742a99b/"
            class="hover:text-indigo-400 transition duration-300"
          >
            <i class="foundation--social-linkedin w-6 h-6"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/00zkript"
            class="hover:text-indigo-400 transition duration-300"
          >
            <i class="ion--social-github w-6 h-6"></i>
          </a>
          <a
            href="mailto:hg305718@gmail.com"
            class="hover:text-indigo-400 transition duration-300"
          >
            <i class="material-symbols-light--mail w-6 h-6"></i>
          </a>
        </nav>

        <!-- Botón para menú móvil -->
        <button
          id="menu-btn"
          @click="showMenuMobil = !showMenuMobil"
          class="lg:hidden text-white focus:outline-none"
        >
          <svg
            v-if="!showMenuMobil"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Menú móvil desplegable -->
      <div
        id="mobile-menu"
        class="lg:hidden flex-col space-y-4 mt-4 px-4 pb-6 transition-all duration-300 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg relative"
        :class="showMenuMobil ? 'flex' : 'hidden'"
      >
        <!-- Botón de cerrar dentro del menú -->
        <button
          @click="showMenuMobil = false"
          class="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <a
          v-for="(item, idx) in content.links"
          :key="idx"
          :href="item.url"
          class="py-2 px-4 bg-white/10 backdrop-blur-md rounded hover:bg-indigo-500 transition duration-300"
        >
          {{ item.text }}
        </a>
        <a
          :href="content.download_cv.url"
          :download="content.download_cv.name"
          class="py-2 px-4 bg-white/10 backdrop-blur-md rounded flex items-center gap-2 hover:bg-indigo-500 transition duration-300"
        >
          <i class="line-md--cloud-alt-download-filled-loop w-6 h-6"></i>
          {{ content.download_cv.text }}
        </a>
        <hr class="border-gray-500" />
        <div class="flex justify-around">
          <button
            type="button"
            @click="changeLanguage('esp')"
            class="hover:text-indigo-300 transition duration-300"
          >
            {{ content.languages.spanish }}
          </button>
          <button
            type="button"
            @click="changeLanguage('eng')"
            class="hover:text-indigo-300 transition duration-300"
          >
            {{ content.languages.english }}
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
#mobile-menu {
  overflow: hidden;
}
</style>