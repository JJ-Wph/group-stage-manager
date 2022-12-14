<template>
    <header>
      <h1>Hello Piłkarzyki League!</h1>
    </header>
  
    <main>
      <div v-if="!isLoaded">
        <p>Enter your League ID</p>
        <input type="text" placeholder="ID">
      </div>
      <div v-else>

      </div>
    </main>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  
  const isLoaded = ref<boolean>(false);


</script>