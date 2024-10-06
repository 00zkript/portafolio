
<script setup>
import { ref } from 'vue';

// Estado del modal y carrusel
const currentImageIndex = ref(0);

const props = defineProps(['images']);
const emits = defineEmits(['close']);

// Lista de imágenes para el carrusel
const { images } = props;


const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
}

const closeModal = () => {
  emits('close');
}


</script>



<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" >
    <div class="p-4 rounded-lg max-w-2xl w-full ">
      <button class="absolute z-10 right-3 top-1 text-white" @click="closeModal"><span class="material-symbols--close" style="width: 2.5rem;height: 2.5rem;"></span></button>
      <button class="absolute z-10 left-8 top-1/2 text-white bg-black bg-opacity-45 rounded-full p-4 flex font-light" @click="prevImage"><span class="ep--arrow-left-bold" style="width: 3rem;height: 3rem;"></span></button>
      <button class="absolute z-10 right-8 top-1/2 text-white bg-black bg-opacity-45 rounded-full p-4 flex font-light" @click="nextImage"><span class="ep--arrow-right-bold" style="width: 3rem;height: 3rem;"></span></button>

      <!-- Carrusel de imágenes -->
      <div class="absolute inset-0 flex justify-center items-center space-x-4">
        <img
          :src="images[currentImageIndex]"
          class="max-h-full w-auto"
          alt="Carousel Image"
        />
      </div>

      <!-- Miniaturas debajo del carrusel -->
      <!-- <div class="flex justify-center mt-4 space-x-2">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          class="h-16 cursor-pointer border-2"
          :class="{'border-blue-500': index === currentImageIndex}"
          @click="currentImageIndex = index"
        />
      </div> -->
    </div>
  </div>
</template>



<style scoped>
/* Estilos opcionales para el modal */
</style>
