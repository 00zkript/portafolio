
<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';


const props = defineProps(['img', 'url', 'title'])
const emits = defineEmits(['abrirModal'])
const { img, url, title} = props;

</script>

<template>
    <div class="mx-8 md:mx-auto bg-black bg-opacity-50 pb-6">
        <a 
            :href=" url ?? 'javascript:void(0);'" 
            :target="url ? '_target': '' " 
            @click="!url ? emits('abrirModal',true): ''"
            >

            <div class="relative aspect-[3/2]">
                <img 
                    :src="img"
                    :alt="title"
                    class="object-cover object-center  aspect-[3/2] absolute inset-0"
                >
                <!-- <div class="h-full w-full  bg-black bg-opacity-20 absolute intset-0"></div> -->
                <div class="h-full w-full relative flex justify-center items-center bg-black opacity-0 hover:bg-opacity-50 hover:opacity-100 transition ease-in-out duration-0 hover:duration-500">
                    <slot name="hoverContent">
                        <h1 class="text-white text-bold text-xl flex gap-2 items-center" >
                            <span class="mdi--eye-outline" style="width:7rem;height: 7rem" ></span>
                        </h1>
                    </slot>
                </div>
            </div>
        </a>
        
        <div class="px-4 pb-4 pt-2">
            <a :href=" url ?? 'javascript:void(0);'" :target="url ? '_target': '' " @click="!url ? emits('abrirModal',true): ''" class="transition ease-in-out duration-0 hover:duration-300">
                <h3 class="text-xl font-bold my-4 text-white flex gap-2 items-center hover:text-black-russian-300">
                    <Icon icon="solar:link-bold" width="1rem" height="1rem" v-if="url" />
                    <Icon icon="tabler:lock" width="1rem" height="1rem" v-else />
                    
                    {{ title }}

                </h3>
            </a>
            <div class=" text-white opacity-90 text-md">
                <slot name="content"></slot>
            </div>
        </div>
    
        <div class="px-4 py-2 ">
            <div class="flex flex-wrap justify-start content-end items-end align-bottom inset-1">
                <slot name="tags" />
            </div>
        </div>
    </div>
</template>


