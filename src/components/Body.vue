<script setup>
import SectionPresentacion from '@/components/sections/Presentacion.vue';
import SectionHabilidades from '@/components/sections/Habilidades.vue';
import SectionSobreMi from '@/components/sections/SobreMi.vue';
import SectionPortafolio from '@/components/sections/Portafolio.vue';
import SectionExperiencia from '@/components/sections/Experiencia.vue';
import SectionContactame from '@/components/sections/Contactame.vue';


</script>

<template>
    <div>
		<SectionPresentacion id="presentacion" />
		<SectionSobreMi id="sobre-mi" />
		<SectionHabilidades id="habilidades" />
		<SectionPortafolio id="mis-trabajos" />
		<SectionExperiencia id="experiencia" />
		<SectionContactame id="contactame" />
	</div>
</template>

<style scoped>
</style>