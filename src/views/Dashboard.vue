<template>
  <main class="main-div" v-if="!isLoaded">
  <TheHeader />
    <PrimaryContainer>
      <h2>Enter your League ID</h2>
      <p class="error" v-if="wrongId">Wrong Id!</p>
      <input type="text" v-model="searchedId" placeholder="ID">
      <PrimaryButton @click="loadSpecificLeague">Search</PrimaryButton>
    </PrimaryContainer>
  </main>

  <main class="main-grid" v-else>
    <TheMainInputs :league="loadedLeague" :team1="team1" :team2="team2" :team3="team3" :team4="team4"/>
    <TheGoalsChart :league="loadedLeague"/>
    <TheTable :league="loadedLeague"/>
    <TheMatchdaySchedule :league="loadedLeague" :team1="team1" :team2="team2" :team3="team3" :team4="team4" />
  </main>
</template>

<script setup lang="ts">
  import TheHeader from '@/components/TheHeader.vue';
  import PrimaryContainer from '@/components/PrimaryContainer.vue';
  import PrimaryButton from '@/components/PrimaryButton.vue';
  import TheTable from '@/components/TheTable.vue';
  import TheGoalsChart from '@/components/TheGoalsChart.vue';
  import TheMainInputs from '@/components/TheMainInputs.vue';
  import TheMatchdaySchedule from '@/components/TheMatchdaySchedule.vue';
  import { ref } from 'vue';
  import { useLeagueStore } from '@/stores/leagueStore'

  const leagueStore = useLeagueStore();
  const isLoaded = ref<boolean>(false);
  const wrongId = ref<boolean>(false);
  const searchedId = ref<string>(''); 
  let loadedLeague = ref<any>('');


  const team1 = ref<string>('');
  const team2 = ref<string>('');
  const team3 = ref<string>('');
  const team4 = ref<string>('');

  const loadSpecificLeague = () => {
    let leaguesList = leagueStore.leagues;
    for(let i = 0; i < leaguesList.length; i++) {
      if(leaguesList[i].id === searchedId.value) {
        loadedLeague = leaguesList[i];
        team1.value = specifiedId(1).teamName;
        team2.value = specifiedId(2).teamName;
        team3.value = specifiedId(3).teamName;
        team4.value = specifiedId(4).teamName;
        isLoaded.value = true;
      } else {
        wrongId.value = true;
      }
    }
  };

  function specifiedId(v) {
    return loadedLeague.teams.find(item => item.teamId === v)
  }

</script>

<style>

.main-grid {
  display: grid; 
  background-color: #080c0d;
  height: calc(100vh - 0.8rem);
  width: 100vw;
  border: 0.4rem solid black;
  grid-column-gap: 0.4rem;
  grid-row-gap: 0.4rem; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-areas: 
    "TheGoalsChart TheGoalsChart TheMainInputs TheMainInputs TheMainInputs TheTable TheTable"
    "TheGoalsChart TheGoalsChart TheMainInputs TheMainInputs TheMainInputs TheTable TheTable"
    "TheGoalsChart TheGoalsChart TheMainInputs TheMainInputs TheMainInputs TheTable TheTable"
    "TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule"
    "TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule TheMatchdaySchedule"; 
}

.main-div { 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
}


input[type=number] {
  text-align: center;
  background-color: #053273;
  color: #f4f1f1;
  border: 0.1rem solid #053273;
  outline: none;
  height: 2rem;
  width: 2rem;
  margin: 0rem 1.5rem 0rem 1.5rem;
  -moz-appearance: textfield;
}

input[type=text] {
  width: 18rem;
  height: 4rem;
  margin: 1rem;
  border: 0;
  border-bottom: 0.1rem solid #f4f1f17b;
  color: #f4f1f1;
  background: none;
}

input[type=text]:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media screen and (orientation: portrait) {
  .main-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-div > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    grid-template-areas: 
    "TheTable TheMatchdaySchedule"
    "TheTable TheMatchdaySchedule"
    "TheMainInputs TheMatchdaySchedule"
    "TheMainInputs TheGoalsChart"
  }

  input[type=text] {
    width: 16rem;
    height: 2rem;
  }
}

@media screen and (max-width: 1080px) and (orientation: landscape) {
  input[type=text] {
    width: 14rem;
    height: 1.6rem;
  }
}
</style>


