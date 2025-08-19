<script setup>
import translations from '../data/menu.json';
import { ref, onMounted, computed, watch } from 'vue';
import { useStore } from '@nanostores/vue';
import { languageStore, setLanguage } from '../stores/languageStore';
import { uiStore } from '../stores/uiStore';


const store = useStore(languageStore);
const ui = useStore(uiStore);

const content = computed(() => {
	const lang = store.value.language;
    return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
});

const changeLanguage = (lang) => {
    setLanguage(lang);
};

const showMenuMobil = ref(false);
const modalOpen = computed(() => ui.value.modalOpen);

// cerrar menú si modal se abre
watch(modalOpen, (val) => {
  if (val) showMenuMobil.value = false;
});

const toggleMenu = () => {
  // no abrir menú si modal está abierto
  if (modalOpen.value) return;
  showMenuMobil.value = !showMenuMobil.value;
};
</script>

<template>
  <div :aria-hidden="modalOpen" class="bg-white/10 backdrop-blur-md text-white w-full sticky top-0 z-20 shadow-md">
    <header class="sm:p-4">
      <div class="flex justify-between items-center px-4">
        <!-- Enlaces a la izquierda -->
        <nav class="hidden lg:flex space-x-6 py-2 items-center">
          <a
            v-for="(item, idx) in content.links"
            :key="idx"
            :href="item.url"
            class="hover:text-indigo-400 transition duration-300"
          >
            {{ item.text }}
          </a>
        </nav>

        <!-- Botón de hamburguesa para menú móvil -->
        <button
          id="menu-btn"
          @click="toggleMenu"
          :disabled="modalOpen"
          :class="{'opacity-40 cursor-not-allowed': modalOpen}"
          class="lg:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
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

        <!-- Elementos a la derecha en pantallas grandes -->
        <div class="hidden lg:flex items-center space-x-6">
          <!-- Selector de idioma -->
          <div class="flex space-x-4 items-center">
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

          <!-- Redes sociales -->
          <div class="flex space-x-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/henry-quispe-cabello-1742a99b/"
              class="hover:text-indigo-400 transition duration-300 flex items-center justify-center w-8 h-8 bg-white/10 rounded-full"
            >
              <i class="foundation--social-linkedin w-5 h-5"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/00zkript"
              class="hover:text-indigo-400 transition duration-300 flex items-center justify-center w-8 h-8 bg-white/10 rounded-full"
            >
              <i class="ion--social-github w-5 h-5"></i>
            </a>
            <a
              href="mailto:hg305718@gmail.com"
              class="hover:text-indigo-400 transition duration-300 flex items-center justify-center w-8 h-8 bg-white/10 rounded-full"
            >
              <i class="material-symbols-light--mail w-5 h-5"></i>
            </a>
          </div>

          <!-- Botón de descarga CV -->
          <a
            :href="content.download_cv.url"
            :download="content.download_cv.name"
            class="py-1 px-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-300 text-sm flex items-center gap-2"
          >
            <i class="line-md--cloud-alt-download-filled-loop w-4 h-4"></i>
            {{ content.download_cv.text }}
          </a>
        </div>
      </div>

      <!-- Menú móvil desplegable -->
      <div
        id="mobile-menu"
        class="lg:hidden flex flex-col space-y-4 mt-4 px-4 pb-6 transition-all duration-300 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg relative"
        :class="(showMenuMobil && !modalOpen) ? 'flex' : 'hidden'"
        :aria-hidden="modalOpen"
      >
        <!-- Botón de cerrar dentro del menú -->
        <button
          @click="showMenuMobil = false"
          class="absolute top-4 right-4 text-white focus:outline-none hover:scale-110 transition duration-300"
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

        <!-- Enlaces del menú móvil -->
        <nav class="flex flex-col space-y-4">
          <a
            v-for="(item, idx) in content.links"
            :key="idx"
            :href="item.url"
            class="py-2 px-4 bg-white/10 backdrop-blur-md rounded hover:bg-indigo-500 transition duration-300"
          >
            {{ item.text }}
          </a>
        </nav>

        <!-- Botón de descarga CV -->
        <a
          :href="content.download_cv.url"
          :download="content.download_cv.name"
          class="py-2 px-4 bg-white/10 backdrop-blur-md rounded flex items-center gap-2 hover:bg-indigo-500 transition duration-300"
        >
          <i class="line-md--cloud-alt-download-filled-loop w-6 h-6"></i>
          {{ content.download_cv.text }}
        </a>

        <hr class="border-gray-500" />

        <!-- Selector de idioma -->
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