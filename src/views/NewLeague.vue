<template>
  <div class="main-div">
    <TheHeader />
    <main>
      <PrimaryContainer v-if="formIsVisible">
        <h2>Please enter data</h2>
        <p class="error" v-show="formError">Please fill all inputs!</p>
        <input type="text" placeholder="League name" v-model="newLeagueName">
        <input type="text" placeholder="Team 1 name" v-model="team1">
        <input type="text" placeholder="Team 2 name" v-model="team2">
        <input type="text" placeholder="Team 3 name" v-model="team3">
        <input type="text" placeholder="Team 4 name" v-model="team4">
        <PrimaryButton @click="addLeague">Add League</PrimaryButton>
      </PrimaryContainer>
      <PrimaryContainer v-if="!formIsVisible">
        <h1>Congratulations! League has been created. Your League ID is:</h1>
        <h1>{{randomId}}</h1>
        <h2>Remember that!</h2>
        <router-link to="/Dashboard"><PrimaryButton>Go to dashboard</PrimaryButton></router-link>
      </PrimaryContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import PrimaryContainer from '@/components/PrimaryContainer.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
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
  }
}
</script>