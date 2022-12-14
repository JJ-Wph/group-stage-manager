<template>
  <header>
    <h1>Hello Piłkarzyki League!</h1>
  </header>

  <main>
    <div v-if="formIsVisible">
      <p v-if="formError">Please fill all inputs!</p>
      <input type="text" placeholder="League name" v-model="newLeagueName">
      <input type="text" placeholder="Team 1" v-model="team1">
      <input type="text" placeholder="Team 2" v-model="team2">
      <input type="text" placeholder="Team 3" v-model="team3">
      <input type="text" placeholder="Team 4" v-model="team4">
      <button @click="addLeague">Add League</button>
    </div>
    <div v-if="!formIsVisible">
      <h2>Congratulations! League has been created. Your League ID is:</h2>
      <h1>{{randomId}}</h1>
      <h2>Remember that!</h2>
      <router-link to="/Dashboard"><button>Go to dashboard</button></router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { League } from '@/stores/counter'
import { useLeagueStore } from '@/stores/leagueStore'

const leagueStore = useLeagueStore();
const newLeagueName = ref<string>('');
const randomId = (Math.random() + 1).toString(36).substring(7);
const formIsVisible = ref<boolean>(true);
const formError = ref<boolean>(false);
const team1 = ref<object>();
const team2 = ref<object>();
const team3 = ref<object>();
const team4 = ref<object>();

function addLeague() {
  if (newLeagueName.value && team1.value && team2.value && team3.value && team4.value)  {
    let newLeague = new League(newLeagueName.value, randomId, team1.value, team2.value, team3.value, team4.value);
    console.log(randomId);
    console.log(newLeague);
    leagueStore.leagues.push(newLeague)
    team1.value = null;
    team2.value = null;
    team3.value = null;
    team4.value = null;
    formIsVisible.value = false;
  } else {
    formError.value = true;
    setTimeout(() => {
      formError.value = false
    }, 4000)
  }
}

</script>