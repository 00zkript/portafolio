<script setup>
import SectionPresentacion from './sections/Presentacion.vue';
import SectionHabilidades from './sections/Habilidades.vue';
import SectionSobreMi from './sections/SobreMi.vue';
import SectionPortafolio from './sections/Portafolio.vue';
import SectionExperiencia from './sections/Experiencia.vue';
import SectionContactame from './sections/Contactame.vue';
import Menu from './Menu.vue';


</script>

<template>
    
	<Menu id="menu" />
	
	<SectionPresentacion id="presentacion" />
	<SectionHabilidades  id="habilidades" />
	<SectionSobreMi      id="sobre-mi" />	
	<SectionPortafolio   id="mis-trabajos"  />	
	<SectionExperiencia  id="experiencia"  />	
	<SectionContactame   id="contactame" />	
</template>

<style scoped>
    
</style>