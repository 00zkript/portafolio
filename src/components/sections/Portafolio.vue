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
  <section class="py-16 px-6 md:px-12 lg:px-24  relative z-10" :id="props.id">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold text-white mb-4">{{ content.title }}</h2>
      <p class="text-lg text-gray-400">{{ content.sub_title }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <!-- Tarjetas principales -->
      <Job
        v-for="(item, idx) in jobsData.slice(0, 6)"
        :key="idx"
        :title="item.title"
        :img="item.img"
        @abrirModal="openModal(item.images ?? [])"
        :url="item.url"
      >
        <template #content>
          <p class="text-sm text-gray-300">{{ item.content[store.language] }}</p>
        </template>
        <template #tags>
          <span
            v-for="(icon, idx) in item.icons"
            :key="idx"
            class="chip chip-primary flex items-center gap-2 px-2 py-1 rounded-full"
          >
            <Icon :icon="icon.icon" width="1rem" height="1rem" />
            {{ icon.text }}
          </span>
        </template>
      </Job>

      <!-- Trabajos adicionales -->
      <div
        v-show="showMore"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 col-span-full"
      >
        <Job
          v-for="(item, idx) in jobsData.slice(6, jobsData.length)"
          :key="idx"
          :title="item.title"
          :img="item.img"
          @abrirModal="openModal(item.images ?? [])"
          :url="item.url"
        >
          <template #content>
            <p class="text-sm text-gray-300">{{ item.content[store.language] }}</p>
          </template>
          <template #tags>
            <span
              v-for="(icon, idx) in item.icons"
              :key="idx"
              class="chip chip-primary flex items-center gap-2 px-2 py-1 rounded-full"
            >
              <Icon :icon="icon.icon" width="1rem" height="1rem" />
              {{ icon.text }}
            </span>
          </template>
        </Job>
      </div>
    </div>

    <!-- Botón para mostrar más/menos trabajos -->
    <div class="flex justify-center mt-12">
      <button
        class="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-400 hover:border-white rounded-full px-4 py-2 transition-all"
        @click="showMore = !showMore"
      >
        <Icon :icon="showMore ? 'ep:arrow-up-bold' : 'ep:arrow-down-bold'" width="1rem" height="1rem" />
        <span>{{ showMore ? content.see_less : content.see_more }}</span>
      </button>
    </div>

    <!-- Modal para imágenes -->
    <Modal v-if="showModal" :images="imagesModal" @close="closeModal" />
  </section>
</template>

