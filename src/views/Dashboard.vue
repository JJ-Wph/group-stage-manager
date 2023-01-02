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

  <main v-else>
    <div>
      <div>
        <button @click="resultDiv = !resultDiv">Add Results</button>
      </div>
      <div class="resultdiv" v-if="resultDiv">
        <select v-model="selectedMatchday">
          <option value="Matchday 1">Matchday 1</option>
          <option value="Matchday 2">Matchday 2</option>
          <option value="Matchday 3">Matchday 3</option>
        </select>
        <button @click="activateMatchday">Accept</button>
      </div>

      <div v-if="m1selected">
        <h2>Matchday 1</h2>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team1).teamName}}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team1).firstGameResult">
          : 
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team2).firstGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
          <button @click="addFirstResult(loadedLeague.teams.find(item => item.teamName === team1), loadedLeague.teams.find(item => item.teamName === team2))">Add Result</button>
        </div>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team3).firstGameResult">
          :
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team4).firstGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
          <button @click="addFirstResult(loadedLeague.teams.find(item => item.teamName === team3), loadedLeague.teams.find(item => item.teamName === team4))">Add Result</button>
        </div>
      </div>
      <div v-if="m2selected">
        <h2>Matchday 2</h2>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team2).secondGameResult">
          : 
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team3).secondGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p>
          <button @click="addSecondResult(loadedLeague.teams.find(item => item.teamName === team2), loadedLeague.teams.find(item => item.teamName === team3))">Add Result</button>
        </div>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team1).teamName }}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team1).secondGameResult">
          : 
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team4).secondGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
          <button @click="addSecondResult(loadedLeague.teams.find(item => item.teamName === team1), loadedLeague.teams.find(item => item.teamName === team4))">Add Result</button>
        </div>
      </div>
      <div v-if="m3selected">
        <h2>Matchday 3</h2>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team3).thirdGameResult">
          : 
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team1).thirdGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team1).teamName }}</p>
          <button @click="addThirdResult(loadedLeague.teams.find(item => item.teamName === team3), loadedLeague.teams.find(item => item.teamName === team1))">Add Result</button>
        </div>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team4).thirdGameResult">
          : 
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team2).thirdGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
          <button @click="addThirdResult(loadedLeague.teams.find(item => item.teamName === team4), loadedLeague.teams.find(item => item.teamName === team2))">Add Result</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <td>L.p.</td>
            <td>Team</td>
            <td>GF</td>
            <td>GA</td>
            <td>GB</td>
            <td>Pts</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in leagueTableToSort.sort((a, b) => (a.points < b.points) ? 1 : -1)" :key="item.index">
            <td>{{ index+1 }}</td>
            <td>{{ item.teamName }}</td>
            <td>{{ item.goalsScored }}</td>
            <td>{{ item.goalsConceded }}</td>
            <td>{{ item.goalsScored - item.goalsConceded }}</td>
            <td>{{ item.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div class="results">
        <MatchdayContainer>
          <template #header>
            <h2>Matchday 1</h2>
          </template>
          <template #default>
            <div class="pair">
              <p>{{loadedLeague.teams.find(item => item.teamName === team1).teamName + '&nbsp;'}} </p><p> {{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team1).firstGameResult + '&nbsp;'}}</p>:<p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team2).firstGameResult + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
            </div>
            <div class="pair">
              <p>{{loadedLeague.teams.find(item => item.teamName === team3).teamName + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team3).firstGameResult + '&nbsp;'}}</p> : <p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team4).firstGameResult + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
            </div>
          </template>
      </MatchdayContainer>
      <MatchdayContainer>
        <template #header>
          <h2>Matchday 2</h2>
        </template>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team2).teamName + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team2).secondGameResult + '&nbsp;'}}</p> : <p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team3).secondGameResult + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p>
        </div>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team1).teamName + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team1).secondGameResult + '&nbsp;'}}</p> : <p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team4).secondGameResult + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
        </div>
      </MatchdayContainer>
      <MatchdayContainer>
        <template #header>
          <h2>Matchday 3</h2>
        </template>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team3).teamName + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team3).thirdGameResult + '&nbsp;'}}</p> : <p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team1).thirdGameResult + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team1).teamName }}</p>
        </div>
        <div class="pair">
          <p>{{loadedLeague.teams.find(item => item.teamName === team4).teamName + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team4).thirdGameResult + '&nbsp;'}}</p> : <p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team2).thirdGameResult + '&nbsp;'}}</p><p>{{'&nbsp;' + loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
        </div>
      </MatchdayContainer>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import TheHeader from '@/components/TheHeader.vue';
  import PrimaryContainer from '@/components/PrimaryContainer.vue';
  import MatchdayContainer from '@/components/MatchdayContainer.vue'
  import PrimaryButton from '@/components/PrimaryButton.vue';
  import { ref } from 'vue';
  import { useLeagueStore } from '@/stores/leagueStore'

  const leagueStore = useLeagueStore();
  const isLoaded = ref<boolean>(false);
  const wrongId = ref<boolean>(false);
  const searchedId = ref<string>(''); 
  let loadedLeague = ref<any>('');
  let leagueTableToSort = [];
  const resultDiv = ref<boolean>(false);
  const selectedMatchday = ref<string>('');
  const m1selected = ref<boolean>(false);
  const m2selected = ref<boolean>(false);
  const m3selected = ref<boolean>(false);
  const team1 = ref<string>('');
  const team2 = ref<string>('');
  const team3 = ref<string>('');
  const team4 = ref<string>('');

  const loadSpecificLeague = () => {
    let leaguesList = leagueStore.leagues;
    for(let i = 0; i < leaguesList.length; i++) {
      if(leaguesList[i].id === searchedId.value) {
        loadedLeague = leaguesList[i];
        leagueTableToSort = leaguesList[i].teams;
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


  function activateMatchday() {
    if(selectedMatchday.value === 'Matchday 1') {
      m1selected.value = true;
      m2selected.value = false;
      m3selected.value = false;
    } else if(selectedMatchday.value === 'Matchday 2') {
      m1selected.value = false;
      m2selected.value = true;
      m3selected.value = false;
    } else if(selectedMatchday.value === 'Matchday 3') {
      m1selected.value = false;
      m2selected.value = false;
      m3selected.value = true;
    }
    resultDiv.value = false;
  };

  function addFirstResult(homeTeam, awayTeam) {
    if(homeTeam.firstGameResult > awayTeam.firstGameResult) {
      homeTeam.points += 3;
      homeTeam.goalsScored += homeTeam.firstGameResult;
      homeTeam.goalsConceded += awayTeam.firstGameResult;
      awayTeam.goalsScored += awayTeam.firstGameResult;
      awayTeam.goalsConceded += homeTeam.firstGameResult;
      console.log(homeTeam.firstGameResult, awayTeam.firstGameResult);
      console.log(homeTeam.points, awayTeam.points)
    } else if(homeTeam.firstGameResult < awayTeam.firstGameResult) {
      awayTeam.points += 3;
      homeTeam.goalsScored += homeTeam.firstGameResult;
      homeTeam.goalsConceded += awayTeam.firstGameResult;
      awayTeam.goalsScored += awayTeam.firstGameResult;
      awayTeam.goalsConceded += homeTeam.firstGameResult;
      console.log(homeTeam.firstGameResult, awayTeam.firstGameResult);
      console.log(homeTeam.points, awayTeam.points)
    } else if(homeTeam.firstGameResult === awayTeam.firstGameResult) {
      homeTeam.points += 1;
      awayTeam.points += 1;
      homeTeam.goalsScored += homeTeam.firstGameResult;
      homeTeam.goalsConceded += awayTeam.firstGameResult;
      awayTeam.goalsScored += awayTeam.firstGameResult;
      awayTeam.goalsConceded += homeTeam.firstGameResult;
      console.log(homeTeam.firstGameResult, awayTeam.firstGameResult);
      console.log(homeTeam.points, awayTeam.points)
    }
  }

  function addSecondResult(homeTeam, awayTeam) {
    if(homeTeam.secondGameResult > awayTeam.secondGameResult) {
      homeTeam.points += 3;
      homeTeam.goalsScored += homeTeam.secondGameResult;
      homeTeam.goalsConceded += awayTeam.secondGameResult;
      awayTeam.goalsScored += awayTeam.secondGameResult;
      awayTeam.goalsConceded += homeTeam.secondGameResult;
      console.log(homeTeam.secondGameResult, awayTeam.secondGameResult);
      console.log(homeTeam.points, awayTeam.points)
    } else if(homeTeam.secondGameResult < awayTeam.secondGameResult) {
      awayTeam.points += 3;
      homeTeam.goalsScored += homeTeam.secondGameResult;
      homeTeam.goalsConceded += awayTeam.secondGameResult;
      awayTeam.goalsScored += awayTeam.secondGameResult;
      awayTeam.goalsConceded += homeTeam.secondGameResult;
      console.log(homeTeam.secondGameResult, awayTeam.secondGameResult);
      console.log(homeTeam.points, awayTeam.points)
    } else if(homeTeam.secondGameResult === awayTeam.secondGameResult) {
      homeTeam.points += 1;
      awayTeam.points += 1;
      homeTeam.goalsScored += homeTeam.secondGameResult;
      homeTeam.goalsConceded += awayTeam.secondGameResult;
      awayTeam.goalsScored += awayTeam.secondGameResult;
      awayTeam.goalsConceded += homeTeam.secondGameResult;
      console.log(homeTeam.secondGameResult, awayTeam.secondGameResult);
      console.log(homeTeam.points, awayTeam.points)
    }
  }
  
  function addThirdResult(homeTeam, awayTeam) {
    if(homeTeam.thirdGameResult > awayTeam.thirdGameResult) {
      homeTeam.points += 3;
      homeTeam.goalsScored += homeTeam.thirdGameResult;
      homeTeam.goalsConceded += awayTeam.thirdGameResult;
      awayTeam.goalsScored += awayTeam.thirdGameResult;
      awayTeam.goalsConceded += homeTeam.thirdGameResult;
      console.log(homeTeam.thirdGameResult, awayTeam.thirdGameResult);
      console.log(homeTeam.points, awayTeam.points)
    } else if(homeTeam.thirdGameResult < awayTeam.thirdGameResult) {
      awayTeam.points += 3;
      homeTeam.goalsScored += homeTeam.thirdGameResult;
      homeTeam.goalsConceded += awayTeam.thirdGameResult;
      awayTeam.goalsScored += awayTeam.thirdGameResult;
      awayTeam.goalsConceded += homeTeam.thirdGameResult;
      console.log(homeTeam.thirdGameResult, awayTeam.thirdGameResult);
      console.log(homeTeam.points, awayTeam.points)
    } else if(homeTeam.thirdGameResult === awayTeam.thirdGameResult) {
      homeTeam.points += 1;
      awayTeam.points += 1;
      homeTeam.goalsScored += homeTeam.thirdGameResult;
      homeTeam.goalsConceded += awayTeam.thirdGameResult;
      awayTeam.goalsScored += awayTeam.thirdGameResult;
      awayTeam.goalsConceded += homeTeam.thirdGameResult;
      console.log(homeTeam.thirdGameResult, awayTeam.thirdGameResult);
      console.log(homeTeam.points, awayTeam.points)
    }
  }
</script>
<style>
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pair {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30rem;
}

input[type=number] {
  height: 20px;
  width: 30px;
}

.resultdiv{
  background-color: grey;
}
</style>