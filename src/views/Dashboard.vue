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

    <div class="matchday-schedule">
        <MatchdayContainer>
          <template #header>
            <h2>Matchday 1</h2>
          </template>
          <template #default>
            <div class="pair">
              <p>{{loadedLeague.teams.find(item => item.teamName === team1).teamName}}</p><p> {{loadedLeague.teams.find(item => item.teamName === team1).firstGameResult}}</p>:<p>{{loadedLeague.teams.find(item => item.teamName === team2).firstGameResult}}</p><p>{{loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
            </div>
            <div class="pair">
              <p>{{loadedLeague.teams.find(item => item.teamName === team3).teamName}}</p><p>{{loadedLeague.teams.find(item => item.teamName === team3).firstGameResult}}</p> : <p>{{loadedLeague.teams.find(item => item.teamName === team4).firstGameResult }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
            </div>
          </template>
      </MatchdayContainer>
      <MatchdayContainer>
        <template #header>
          <h2>Matchday 2</h2>
        </template>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team2).teamName}}</p><p>{{loadedLeague.teams.find(item => item.teamName === team2).secondGameResult}}</p> : <p>{{loadedLeague.teams.find(item => item.teamName === team3).secondGameResult }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p>
        </div>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team1).teamName }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team1).secondGameResult }}</p> : <p>{{loadedLeague.teams.find(item => item.teamName === team4).secondGameResult }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
        </div>
      </MatchdayContainer>
      <MatchdayContainer>
        <template #header>
          <h2>Matchday 3</h2>
        </template>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team3).thirdGameResult }}</p> : <p>{{loadedLeague.teams.find(item => item.teamName === team1).thirdGameResult }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team1).teamName }}</p>
        </div>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team4).thirdGameResult }}</p> : <p>{{loadedLeague.teams.find(item => item.teamName === team2).thirdGameResult }}</p><p>{{loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
        </div>
      </MatchdayContainer>
    </div>
  </main>
</template>

<script setup lang="ts">
  import TheHeader from '@/components/TheHeader.vue';
  import PrimaryContainer from '@/components/PrimaryContainer.vue';
  import MatchdayContainer from '@/components/MatchdayContainer.vue'
  import PrimaryButton from '@/components/PrimaryButton.vue';
  import TheTable from '@/components/TheTable.vue';
  import TheGoalsChart from '@/components/TheGoalsChart.vue';
  import TheMainInputs from '@/components/TheMainInputs.vue';
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
        team1.value = loadedLeague.teams[0].teamName;
        team2.value = loadedLeague.teams[1].teamName;
        team3.value = loadedLeague.teams[2].teamName;
        team4.value = loadedLeague.teams[3].teamName;
        isLoaded.value = true;
      } else {
        wrongId.value = true;
      }
    }
  };
</script>

<style>
.main-grid {
    display: grid;
    height: 100vh;
    width: 100vw;
    background-color: #080c0d;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0.4rem;
    grid-row-gap: 0.4rem; 
}

.matchday-schedule {
  display: flex;
  grid-area: 4 / 1 / 6 / 9;
  align-items: center;
  justify-content: space-evenly;
  background-color: #181f21;
}

.pair {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>