<template>
  <div class="main">
    <TheHeader />
  </div>
</template>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
}
</style>
<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import PrimaryButton from '@/components/PrimaryButton.vue'
</script>