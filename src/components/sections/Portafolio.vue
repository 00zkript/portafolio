<script setup>
import Job from '../Job.vue';
import Modal from '../Modal.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { esp, eng } from '../../data/portafolio.json'
import jobsData from '../../data/jobs.json'

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

const content = esp;

// const toggleJobs = () => {
//     const btnHiddenJobs = document.querySelector('#btnHiddenJobs');
//     const btnShowJobs = document.querySelector('#btnShowJobs');
//     const jobsHidden = document.querySelector('#jobsHidden');

//     btnShowJobs.addEventListener('click', (e) => {
//         jobsHidden.style.maxHeight = jobsHidden.scrollHeight + "px"; 
//         btnShowJobs.classList.toggle('hidden');
//         btnHiddenJobs.classList.toggle('hidden');
//     });

//     btnHiddenJobs.addEventListener('click', (e) => {
//         jobsHidden.style.maxHeight = null;
//         btnShowJobs.classList.toggle('hidden');
//         btnHiddenJobs.classList.toggle('hidden');
//     });

// }

// toggleJobs();

</script>
<template>
    <section class="section bg-black bg-no-repeat bg-cover bg-center bg-fixed" style="background-image: url('img/1031-1000x500.jpg');" :id="props.id">
        <div class="section-header">
            <h2 class="section-title text-white">{{ content.title }}</h2>
            <h3 class="section-subtitle text-white">{{ content.sub_title }}</h3>
        </div>
        <div class="section-content max-w-full md:max-w-7xl " >
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">

                <Job 
                    v-for="(item,idx) in jobsData.slice(0,6)"
                    :key="idx"
                    :title="item.title" 
                    :img="item.img" 
                    @abrirModal="openModal(item.images ?? [])" 
                    :url="item.url" 
                    >
                    <template #content>
                        <p>{{ item.content }}</p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white" v-for="(icon, idx) in item.icons" :key="idx">
                            <Icon :icon="icon.icon" width="1rem" height="1rem"  style="color: white" /> 
                            {{ icon.text }}
                        </span>
                    </template>
                </Job>
                
                <div v-show="showMore" class="grid grid-cols-subgrid col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-3 gap-8 overflow-hidden transition-all duration-300 ease-in-out" :class="showMore ? 'max-h-100' : 'max-h-0' ">
                    <Job 
                        v-for="(item,idx) in jobsData.slice(6,jobsData.length)"
                        :key="idx"
                        :title="item.title" 
                        :img="item.img" 
                        @abrirModal="openModal(item.images ?? [])" 
                        :url="item.url" 
                        >
                        <template #content>
                            <p>{{ item.content }}</p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white" v-for="(icon, idx) in item.icons" :key="idx">
                                <Icon :icon="icon.icon" width="1rem" height="1rem"  style="color: white" /> 
                                {{ icon.text }}
                            </span>
                        </template>
                    </Job>
                </div>
    
                <div class="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-3 flex flex-col items-center">
                    <button type="button" class="text-lg text-white text-center flex flex-col items-center hover:text-black-russian-400" @click="showMore = !showMore">
                        <template v-if="showMore">
                            <span class="ep--arrow-up-bold" style="width:1.5rem;height:1.5rem"></span>
                            Ver menos
                        </template>
                        <template v-else>
                            Ver más
                            <span class="ep--arrow-down-bold" style="width:1.5rem;height:1.5rem"></span>
                        </template>
                    </button>
                </div>
       
    
            </div>
        </div>
    

    </section>
    <Modal v-if="showModal" :images="imagesModal" @close="closeModal" />
    
</template>


