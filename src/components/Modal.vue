<template>
  <teleport to="body">
    <div class="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Visor de imágenes">
      <!-- Overlay que cubre toda la página -->
      <div class="absolute inset-0 z-[9998] bg-black bg-opacity-90"></div>

      <!-- Contenedor fullscreen minimalista -->
      <div ref="modalRoot" class="relative z-[9999] w-full h-full flex items-center justify-center">
        <!-- Botón de cierre (esquina superior derecha) -->
        <button
          ref="closeBtn"
          class="absolute top-4 right-4 text-gray-200 hover:text-white p-2 z-[10000]"
          @click="closeModal"
          aria-label="Cerrar modal"
        >
          <Icon icon="mdi:close" width="1.6rem" height="1.6rem" />
        </button>

        <!-- Botón anterior (lado izquierdo) -->
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-white p-3 rounded-full bg-indigo-600/20 backdrop-blur-sm z-[10000]"
          @click="prevImage"
          aria-label="Imagen anterior"
        >
          <Icon icon="mdi:chevron-left" width="1.6rem" height="1.6rem" />
        </button>

        <!-- Imagen central -->
        <div class="flex items-center justify-center max-w-full max-h-full px-6">
          <img
            :src="images[currentImageIndex]"
            class="modal-image"
            alt="Imagen del proyecto"
            @click="toggleZoom"
            :class="{ 'zoomed': isZoomed }"
          />
        </div>

        <!-- Botón siguiente (lado derecho) -->
        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-white p-3 rounded-full bg-indigo-600/20 backdrop-blur-sm z-[10000]"
          @click="nextImage"
          aria-label="Siguiente imagen"
        >
          <Icon icon="mdi:chevron-right" width="1.6rem" height="1.6rem" />
        </button>

        <!-- Miniaturas (opcional) -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[10000] flex gap-2">
          <button
            v-for="(img, index) in images"
            :key="index"
            @click="currentImageIndex = index"
            class="focus:outline-none"
          >
            <img
              :src="img"
              class="thumbnail"
              :class="{'selected': index === currentImageIndex}"
              :alt="`miniatura-${index}`"
            />
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

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
const modalRoot = ref(null);
const closeBtn = ref(null);

const lockScroll = () => {
  if (typeof window === 'undefined') return;
  lockedScrollY = window.scrollY || window.pageYOffset || 0;
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

const onKeyDown = (e) => {
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
    return;
  }
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    nextImage();
    return;
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevImage();
    return;
  }
  if (e.key === 'Tab') {
    // focus trap: keep focus inside modal
    const root = modalRoot.value;
    const focusable = root && root.querySelectorAll ? root.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])') : null;
    if (!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      if (last && typeof last.focus === 'function') last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      if (first && typeof first.focus === 'function') first.focus();
    }
  }
};

onMounted(() => {
  setModalOpen(true);
  lockScroll();
  // focus close button for accessibility
  if (closeBtn.value) closeBtn.value.focus();
  window.addEventListener('keydown', onKeyDown);
});

onUnmounted(() => {
  setModalOpen(false);
  unlockScroll();
  window.removeEventListener('keydown', onKeyDown);
});
</script>

<style scoped>
.modal-image {
  max-width: 95vw;
  max-height: 85vh;
  object-fit: contain;
  transition: transform 0.25s ease, filter 0.25s ease;
  cursor: zoom-in;
  user-select: none;
  box-shadow: 0 8px 30px rgba(2,6,23,0.6);
}

.modal-image.zoomed {
  transform: scale(1.6);
  cursor: zoom-out;
}

.thumbnail {
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: 6px;
  opacity: 0.6;
  border: 2px solid transparent;
  transition: transform 0.12s ease, opacity 0.12s ease, border-color 0.12s ease;
}

.thumbnail:hover {
  transform: scale(1.05);
  opacity: 1;
}

.thumbnail.selected {
  opacity: 1;
  border-color: rgba(99, 102, 241, 1); /* indigo-500 */
}

/* botones laterales minimalistas */
button[aria-label="Imagen anterior"], button[aria-label="Siguiente imagen"] {
  backdrop-filter: blur(6px);
}
</style>
