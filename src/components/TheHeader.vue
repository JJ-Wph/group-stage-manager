<template>
    <div class="container">
        <h1>Group Stage</h1>
        <h1>Manager</h1>
        <p>Welcome to Group Stage Manager</p> 
        <p>Four-team league management app</p>
        <div class="button-container">
            <router-link to="/NewLeague"><PrimaryButton>Create New League</PrimaryButton></router-link>
            <router-link to="/Dashboard"><PrimaryButton>Load League</PrimaryButton></router-link>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 0 0 30rem;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: start;
}

h1 {
    font-size: 6rem;
    margin: 0; 
}

h1:last-of-type {
    margin-bottom: 1.5rem;
}

p {
    font-size: 2rem;
    margin: 0;
}

p:last-of-type {
    margin-bottom: 2.5rem;
}
</style>
<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue';
</script>