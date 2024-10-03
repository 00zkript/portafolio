<script setup>
import Job from '../Job.vue';
import Modal from '../Modal.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

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
            <h2 class="section-title text-white">Mi Trabajo</h2>
            <h3 class="section-subtitle text-white">Una colección de proyectos en las que eh trabajado</h3>
        </div>
        <div class="section-content max-w-full md:max-w-7xl " >
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
    
                <Job title="Optimania" img="img/screenshot_1.png" url="https://optimania.pe/" >
                    <template #content>
                        <p>
                            Tienda online especializada en la venta de lentes de medida, lentes de sol con medida y lentes deportivos para hombres, mujeres y niños. Ofrecen una amplia variedad de estilos y marcas para satisfacer las necesidades visuales de sus clientes.
                        </p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Mercado pago </span>
                    </template>
                </Job>
    
                <Job title="Puro Amor" img="img/screenshot_2.png" url="https://puroamorshop.com/" >
                    <template #content>
                        <p>
                            Tienda en línea que ofrece cajas de regalo personalizadas y productos de diseño únicos. Ideal para quienes buscan regalos especiales y personalizados para cualquier ocasión.
                        </p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                    </template>
                </Job>
    
                <Job title="Compu Andina" img="img/screenshot_4.png" url="https://compuandina.com.pe/" >
                    <template #content>
                        <p>
                            Empresa peruana dedicada a la comercialización y distribución de suministros y equipos de tecnología informática. Proveen soluciones tecnológicas tanto para empresas como para usuarios individuales.
                        </p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Mercado pago </span>
                    </template>
                </Job>
    
                <Job title="Tortas lucas" img="img/screenshot_5.png" url="https://tortaslucas.com.pe/" >
                    <template #content>
                        <p>
                            Pastelería que elabora tortas y postres artesanales con ingredientes naturales. Sus productos destacan por mantener un sabor casero y auténtico, ideal para celebraciones y eventos especiales.
                        </p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Izipay </span>
                    </template>
                </Job>
    
                <Job title="Brit" img="img/screenshot_3.png" url="https://brit.pe/" >
                    <template #content>
                        <p>
                            Marca de alimentos naturales y sostenibles para perros y gatos. Ofrecen productos premium y libres de granos, asegurando una alimentación saludable y balanceada para las mascotas.
                        </p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        <!-- <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Mercado pago </span> -->
                    </template>
                </Job>
    
                <Job title="Linea" img='img/linea_panel_login.png' 
                    @abrirModal="openModal([
                        'img/linea_panel_login.png',
                        'img/linea_panel_gimnasio_venta_create.png',
                        'img/linea_panel_gimnasio_productos.png',
                        'img/linea_panel_gimnasio_membresia.png',
                    ])" 
                    >
                    <template #content>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus dolore explicabo odit modi saepe sequi odio repellendus non veritatis!
                        </p>
                    </template>
                    <template #tags>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                        <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Mercado pago </span>
                    </template>
                </Job>
    
                <div v-show="showMore" class="grid grid-cols-subgrid col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-3 gap-8 overflow-hidden transition-all duration-300 ease-in-out" :class="showMore ? 'max-h-100' : 'max-h-0' ">
                 
                    <Job title="Power Fenix" img='img/photo-1522252234503-e356532cafd5.jpeg' url="" >
                        <template #content>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus dolore explicabo odit modi saepe sequi odio repellendus non veritatis!
                            </p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Mercado pago </span>
                        </template>
                    </Job>
    
                    <Job title="Tecmah" img='img/photo-1522252234503-e356532cafd5.jpeg' url="" >
                        <template #content>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusamus dolore explicabo odit modi saepe sequi odio repellendus non veritatis!
                            </p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="arcticons:mercado-pago" width="1rem" height="1rem"  style="color: white" /> Mercado pago </span>
                        </template>
                    </Job>
        
                    <Job title="Iarebet" img="img/screenshot_6.png" url="https://iarebt.org/" >
                        <template #content>
                            <p>
                                Instituto especializado en la formación y certificación en terapias de comportamiento racional emotivo. Ofrecen cursos y programas para profesionales interesados en esta área de la psicología.
                            </p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        </template>
                    </Job>
    
                    <Job title="Waira" img="img/screenshot_7.png" url="https://waira.com.pe/" >
                        <template #content>
                            <p>
                                Empresa que ofrece soluciones tecnológicas y servicios de consultoría en transformación digital. Ayudan a las empresas a adaptarse y prosperar en la era digital mediante la implementación de tecnologías innovadoras.
                            </p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        </template>
                    </Job>
    
                    <Job title="Cyber plaza" img="img/screenshot_8.png" url="https://cyberplaza.com.pe/" >
                        <template #content>
                            <p>
                                Centro comercial en Lima especializado en la venta de productos tecnológicos y electrónicos. Es un punto de referencia para quienes buscan lo último en tecnología a precios competitivos.
                            </p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
                        </template>
                    </Job>
    
                    <Job title="Piaggio" img="img/screenshot_9.png" url="https://piaggiope.com/" >
                        <template #content>
                            <p>
                                Distribuidor oficial de motocicletas y scooters Piaggio en Perú. Ofrecen una variedad de modelos que combinan estilo, eficiencia y tecnología italiana.
                            </p>
                        </template>
                        <template #tags>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Laravel</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:laravel" width="1rem" height="1rem"  style="color: white" /> Blade</span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="akar-icons:vue-fill" width="1rem" height="1rem"  style="color: white" /> Vuejs </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="raphael:js" width="1rem" height="1rem"  style="color: white" /> Vanilla Js </span>
                            <span class="chip bg-indigo-500 text-white"><Icon icon="simple-icons:jquery" width="1rem" height="1rem"  style="color: white" /> Jquery </span>
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


