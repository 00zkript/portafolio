<template>
    <div>
      <h1>¡Hola desde Vue!</h1>
      <p>Montado: {{ mountCount }} veces</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const mountCount = ref(0);
  
      onMounted(() => {
        mountCount.value++;
        console.log("HelloWorld montado");
      });
  
      return {
        mountCount,
      };
    },
  };
  </script>
  