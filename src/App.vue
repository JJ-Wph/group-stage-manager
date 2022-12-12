<script setup lang="ts">
import { ref } from 'vue'
import { League } from './stores/counter';
import { useLeagueStore } from './stores/leagueStore'

const leagueStore = useLeagueStore();
const newLeagueName = ref<string>('');
const team1 = ref<object>();
const team2 = ref<string>();
const team3 = ref<string>();
const team4 = ref<string>();

function addLeague() {
    let randomId = (Math.random() + 1).toString(36).substring(7);
    let newLeague = new League(newLeagueName.value, randomId, team1.value, team2.value, team3.value, team4.value);
    console.log(randomId);
    console.log(newLeague);
    return leagueStore.leagues.push(newLeague)
}

</script>

<template>
  <header>
    <h1>Hello Piłkarzyki Leagues!</h1>
  </header>

  <main>
    <form @submit.prevent="addLeague">
      <input type="text" placeholder="League name" v-model="newLeagueName">
      <input type="text" placeholder="Team 1" v-model="team1">
      <input type="text" placeholder="Team 2" v-model="team2">
      <input type="text" placeholder="Team 3" v-model="team3">
      <input type="text" placeholder="Team 4" v-model="team4">
      <button type="submit">Add League</button>
    </form>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
