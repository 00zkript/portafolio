<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { setModalOpen } from '../stores/uiStore';

const currentImageIndex = ref(0);
const isZoomed = ref(false);

const props = defineProps(['images']);
const emits = defineEmits(['close']);

const { images } = props;

let lockedScrollY = 0;

const lockScroll = () => {
  if (typeof window === 'undefined') return;
  lockedScrollY = window.scrollY || window.pageYOffset || 0;
  // fijar el body para evitar scroll y conservar posición
  document.documentElement.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.width = '100%';
};

const unlockScroll = () => {
  if (typeof window === 'undefined') return;
  document.documentElement.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  // restaurar posición
  window.scrollTo(0, lockedScrollY);
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

const closeModal = () => {
  setModalOpen(false);
  unlockScroll();
  emits('close');
};

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
};

onMounted(() => {
  setModalOpen(true);
  lockScroll();
});

onUnmounted(() => {
  setModalOpen(false);
  unlockScroll();
});
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 z-40 bg-black bg-opacity-70"></div>
    <div class="relative z-50 bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full overflow-hidden">
      <!-- Botón de cierre -->
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-50"
        @click="closeModal"
        aria-label="Cerrar modal"
      >
        <Icon icon="mdi:close" width="1.5rem" height="1.5rem" />
      </button>

      <!-- Carrusel de imágenes con zoom -->
      <div class="relative flex items-center justify-center">
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors z-50"
          @click="prevImage"
          aria-label="Imagen anterior"
        >
          <Icon icon="mdi:chevron-left" width="2rem" height="2rem" />
        </button>

        <div class="relative">
          <img
            :src="images[currentImageIndex]"
            class="max-h-[70vh] w-auto rounded-md cursor-zoom-in"
            alt="Carousel Image"
            @click="toggleZoom"
            :class="{ 'scale-150': isZoomed }"
          />
        </div>

        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors z-50"
          @click="nextImage"
          aria-label="Siguiente imagen"
        >
          <Icon icon="mdi:chevron-right" width="2rem" height="2rem" />
        </button>
      </div>

      <!-- Miniaturas debajo del carrusel -->
      <div class="flex justify-center mt-4 space-x-2 px-4 pb-4">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          class="h-16 w-16 object-cover cursor-pointer border-2 rounded-md transition-transform transform hover:scale-105"
          :class="{'border-indigo-500': index === currentImageIndex, 'border-gray-700': index !== currentImageIndex}"
          @click="currentImageIndex = index"
          :alt="`miniatura-${index}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scale-150 {
  transform: scale(1.5);
  transition: transform 0.3s ease-in-out;
}
</style>
