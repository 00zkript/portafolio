<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';


const props = defineProps(['img', 'url', 'title'])
const emits = defineEmits(['abrirModal'])
const { img, url, title} = props;

</script>

<template>
  <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full">
    <a
      :href="url ?? 'javascript:void(0);'"
      :target="url ? '_blank' : ''"
      @click="!url ? emits('abrirModal', true) : ''"
      class="block relative group flex-shrink-0"
    >
      <div class="relative w-full h-48">
        <img
          :src="img"
          :alt="title"
          class="object-cover w-full h-full group-hover:opacity-80 transition-opacity duration-300"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <slot name="hoverContent">
            <h1 class="text-white text-2xl font-bold flex items-center gap-2">
              <Icon icon="mdi:eye-outline" width="2rem" height="2rem" />
              {{ title }}
            </h1>
          </slot>
        </div>
      </div>
    </a>

    <div class="p-4 flex-grow flex flex-col justify-between">
      <div>
        <a
          :href="url ?? 'javascript:void(0);'"
          :target="url ? '_blank' : ''"
          @click="!url ? emits('abrirModal', true) : ''"
          class="text-lg font-semibold text-white hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2"
        >
          <Icon :icon="url ? 'solar:link-bold' : 'tabler:lock'" width="1rem" height="1rem" />
          {{ title }}
        </a>
        <div class="mt-2 text-sm text-gray-300">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex flex-wrap gap-2">
          <slot name="tags"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


