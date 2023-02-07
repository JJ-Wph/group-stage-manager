<template>
    <div class="container">
        <h1>Group Stage</h1>
        <h1>Manager</h1>
        <p>Welcome to Group Stage Manager</p> 
        <p>App for Four-team league management</p>
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
    margin: 1rem 1rem 1rem 20rem;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: start;
}

h1 {
    font-size: 4vw;
    margin: 0; 
}

h1:last-of-type {
    margin-bottom: 1.5rem;
}

p {
    font-size: 2vw;
    margin: 0;
}

p:last-of-type {
    margin-bottom: 2.5rem;
}

@media screen and (max-width: 1080px) {
    .container {
        margin: 1rem;
        align-items: center;
    }

    h1 {
        font-size: 8vw;
    }

    p {
        font-size: 4vw;
    }
}

@media screen and (max-width: 1080px) and (orientation: landscape) {
    .container {
        margin: 1rem 1rem 1rem 10rem;
    }

    h1 {
        font-size: 4vw;
    }

    p {
        font-size: 2vw;
    }
}
</style>
<script setup lang="ts">
    import PrimaryButton from '@/components/PrimaryButton.vue';
</script>