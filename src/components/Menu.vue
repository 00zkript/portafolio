<script setup>
import data from '../data/menu.json';
import { ref, onMounted } from 'vue';

const languaje = ref('esp');

const changeLanguaje = (lan) => {
    localStorage.setItem('languaje',lan);
    languaje.value = lan;
}

const setLanguaje = _ => {
	if (localStorage.getItem('languaje')) {
		languaje.value = localStorage.getItem('languaje')
	}
}

const getLanguaje = _ => {
	return localStorage.getItem('languaje');
}

onMounted(_ => {
    getLanguaje();
})


const content = data[languaje.value];


</script>

<template>
    <div class="bg-indigo-950 text-gray-200 w-full inset-0 sticky z-20">
			
		<header class="main p-4 sm:p-2">
			<div class="flex justify-between items-center">
				<nav class="hidden md:flex space-x-2">
					<a v-for="(item,idx) in content.links" :key="idx" :href="item.url" class="hover:text-indigo-400 px-4 py-2"  >{{ item.text }}</a>
				</nav>
		
				<button id="menu-btn" class="md:hidden text-white focus:outline-none">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>                      
				</button>
			
				<nav id="menu" class="hidden md:flex space-x-1 ">
									
					<button v-if="languaje == 'eng'" type="button" @click="changeLanguaje('esp')" class="hover:text-indigo-400 p-2 hover:border-indigo-400 rounded-full flex items-center" >
						{{ content.languages.spanish }}
					</button>
					<button v-else type="button" @click="changeLanguaje('eng')" class="hover:text-indigo-400 p-2 hover:border-indigo-400 rounded-full flex items-center" >
						{{ content.languages.english }}
					</button>

					<a target="_blank" href="https://www.linkedin.com/in/henry-quispe-cabello-1742a99b/" class="hover:text-indigo-400 p-2 hover:border-indigo-400 rounded-full flex items-center" >
						<i class="foundation--social-linkedin" style="width: 1.5rem; height: 1.5rem;"></i>
					</a>
					<a target="_blank" href="https://github.com/00zkript" class="hover:text-indigo-400 p-2 hover:border-indigo-400 rounded-full flex items-center" >
						<i class="ion--social-github" style="width: 1.5rem; height: 1.5rem;"></i>
					</a>
					<a href="mailto:hg305718@gmail.com" class="hover:text-indigo-400 p-2 hover:border-indigo-400 rounded-full flex items-center" >
						<i class="material-symbols-light--mail" style="width: 1.5rem; height: 1.5rem;"></i>
					</a>
					<a :href="content.download_cv.url" :download="content.download_cv.name" class="hover:text-indigo-400 px-4 py-2 hover:border-indigo-400 border-2 rounded-full flex items-center gap-2 animate-pulse" >
						<i class="line-md--cloud-alt-download-filled-loop" style="width: 1.5rem; height: 1.5rem;"></i>
						{{ content.download_cv.text }}
					</a>
				</nav>
			
			</div>
	
			<div id="mobile-menu" class="md:hidden hidden flex flex-col space-y-1 mt-5">
                <a v-for="(item,idx) in content.links" :key="idx" :href="item.url" class="py-2 px-2 hover:bg-indigo-800 rounded"  >{{ item.text }}</a>
				<a :href="content.download_cv.url" :download="content.download_cv.name" class="py-2 px-2 hover:bg-indigo-800 rounded flex gap-2" >
					<i class="line-md--cloud-alt-download-filled-loop" style="width: 1.5rem; height: 1.5rem;"></i>
					{{ content.download_cv.text }}
				</a>
			</div>
		</header>
	</div>
</template>

<style scoped>
    
</style>