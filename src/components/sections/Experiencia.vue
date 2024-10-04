<script setup>
import { esp, eng } from '../../data/experiencia.json';

const content = esp;
</script>

<template>
    <section class="section bg-black bg-no-repeat bg-cover bg-center bg-fixed" style="background-image: url('img/1031-1000x500.jpg');">
                
        <div class="section-header">
            <h2 class="section-title text-white">{{ content.title }}</h2>
        </div>
        <div class="section-content max-w-5xl">
    
            <div class="px-8 mt-10">
        
                <ol class="relative border-s border-gray-200">  
                                        
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-6 -start-1.5 border border-white"></div>
                        <div class="bg-black bg-opacity-50 p-4 rounded-md">
                            <time class="mb-1 text-sm font-normal leading-none text-gray-200">
                                {{ content.company_1.time }}
                            </time>
                            <h3 class="text-lg font-semibold text-white">
                                {{ content.company_1.name }}
                            </h3>
                                
                            <ul class="text-base font-normal text-slate-300 list-disc ps-4">
                                <li v-for="(item,idx) in content.company_1.list" :key="idx" >{{ item }}</li>
                            </ul>
                        </div>
                            
                    </li>
                    <li class="mb-10 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-6 -start-1.5 border border-white"></div>
                        <div class="bg-black bg-opacity-50 p-4 rounded-md">
                            <time class="mb-1 text-sm font-normal leading-none text-gray-200">
                                {{ content.company_2.time }}
                            </time>
                            <h3 class="text-lg font-semibold text-white">
                                {{ content.company_2.name }}
                            </h3>
                            <ul class=" text-base font-normal text-slate-300 list-disc ps-4">
                                <li v-for="(item,idx) in content.company_2.list" :key="idx" >{{ item }}</li>
                            </ul>
                        </div>
                    </li>
    
                </ol>
    
            </div>    
    
        </div>
    </section>
</template>