<script setup>
    import Job from '../Job.vue';
    import Modal from '../Modal.vue';
    import { ref, computed } from 'vue';
    import { Icon } from '@iconify/vue';
    import translations from '../../data/portafolio.json'
    import jobsData from '../../data/jobs.json'

    import { useStore } from '@nanostores/vue';
    import { languageStore } from '../../stores/languageStore';

    const store = useStore(languageStore);

    const content = computed(() => {
        const lang = store.value.language;
        return translations[lang] || translations['esp']; // Accede a las traducciones usando el idioma
    });


    const props = defineProps(['id']);

    const showMore = ref(false);
    const showModal = ref(false);
    const imagesModal = ref([]);

    const openModal = (imagen) => {
        imagesModal.value = imagen; 
        showModal.value = true; 
    }

    const closeModal = () => {
        showModal.value = false; 
    }


</script>
<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10" :id="props.id">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4">{{ content.title }}</h2>
      <h3 class="text-lg text-gray-300">{{ content.sub_title }}</h3>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <!-- Tarjetas de trabajos principales -->
      <div
        v-for="(item, idx) in jobsData.slice(0, 6)"
        :key="idx"
        class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        <img :src="item.img" alt="" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h4 class="text-xl font-semibold text-white mb-2">{{ item.title }}</h4>
          <p class="text-sm text-gray-300 mb-4">{{ item.content[store.language] }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(icon, idx) in item.icons"
              :key="idx"
              class="chip"
            >
              <Icon :icon="icon.icon" width="1rem" height="1rem" /> {{ icon.text }}
            </span>
          </div>
          <button
            class="mt-4 text-indigo-400 hover:underline"
            @click="openModal(item.images ?? [])"
          >
            {{ content.view_more }}
          </button>
        </div>
      </div>

      <!-- Trabajos adicionales -->
      <div
        v-show="showMore"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 col-span-full"
      >
        <div
          v-for="(item, idx) in jobsData.slice(6, jobsData.length)"
          :key="idx"
          class="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img :src="item.img" alt="" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h4 class="text-xl font-semibold text-white mb-2">{{ item.title }}</h4>
            <p class="text-sm text-gray-300 mb-4">{{ item.content[store.language] }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(icon, idx) in item.icons"
                :key="idx"
                class="chip bg-white/20 backdrop-blur-md text-white"
              >
                <Icon :icon="icon.icon" width="1rem" height="1rem" /> {{ icon.text }}
              </span>
            </div>
            <button
              class="mt-4 text-indigo-400 hover:underline"
              @click="openModal(item.images ?? [])"
            >
              {{ content.view_more }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón para mostrar más/menos trabajos -->
    <div class="text-center mt-8">
      <button
        class="text-lg text-indigo-400 hover:underline flex items-center justify-center"
        @click="showMore = !showMore"
      >
        <template v-if="showMore">
          <Icon icon="ep:arrow-up-bold" class="mr-2" /> {{ content.see_less }}
        </template>
        <template v-else>
          <Icon icon="ep:arrow-down-bold" class="mr-2" /> {{ content.see_more }}
        </template>
      </button>
    </div>

    <!-- Modal para imágenes -->
    <Modal v-if="showModal" :images="imagesModal" @close="closeModal" />
  </section>
</template>


