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
    <div class="side-bar">
      <h1>{{loadedLeague.leagueName}}</h1>

      <div class="matchday-result-selector">
        <button @click="resultDiv = !resultDiv">Add Results</button>
        <div v-if="resultDiv">
          <select v-model="selectedMatchday">
            <option value="Matchday 1">Matchday 1</option>
            <option value="Matchday 2">Matchday 2</option>
            <option value="Matchday 3">Matchday 3</option>
          </select>
          <button @click="activateMatchday">Accept</button>
        </div>
      </div>

      <div class="matchday-result" v-if="m1selected">
        <h2>Matchday 1</h2>
        <div class="matchday-result-inputs">
          <div class="pair">
            <p>{{ loadedLeague.teams.find(item => item.teamName === team1).teamName}}</p>
            <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team1).firstGameResult">
            <p>vs</p>
            <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team2).firstGameResult">
            <p>{{ loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
          </div>
          <button @click="addFirstResult(loadedLeague.teams.find(item => item.teamName === team1), loadedLeague.teams.find(item => item.teamName === team2))">Add Result</button>
        </div>
        <div class="matchday-result-inputs">
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team3).teamName }}</p>
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team3).firstGameResult">
          :
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team4).firstGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team4).teamName }}</p>
        </div>
        <button @click="addFirstResult(loadedLeague.teams.find(item => item.teamName === team3), loadedLeague.teams.find(item => item.teamName === team4))">Add Result</button>
        </div>
      </div>
      <div class="matchday-result" v-if="m2selected">
        <h2>Matchday 2</h2>
        <div class="pair">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
          <input type="number" min="0" v-model="loadedLeague.teams.find(item => item.teamName === team2).secondGameResult">
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
      <div class="matchday-result" v-if="m3selected">
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
          <input type="number" min="0" v-model="loadedLeague.teams.find(item => item.teamName === team4).thirdGameResult">
          : 
          <input type="number" v-model="loadedLeague.teams.find(item => item.teamName === team2).thirdGameResult">
          <p>{{ loadedLeague.teams.find(item => item.teamName === team2).teamName }}</p>
          <button @click="addThirdResult(loadedLeague.teams.find(item => item.teamName === team4), loadedLeague.teams.find(item => item.teamName === team2))">Add Result</button>
        </div>
      </div>
    </div>
    <div class="table-container">
      <table>
          <tr>
            <th>L.p.</th>
            <th>Team</th>
            <th>GF</th>
            <th>GA</th>
            <th>GB</th>
            <th>Pts</th>
          </tr>
          <tbody>
          <tr v-for="(item, index) in loadedLeague.teams.sort((a, b) => (a.points < b.points) ? 1 : -1)" :key="item.index">
            <td>{{ index + 1 + '.' }}</td>
            <td>{{ item.teamName }}</td>
            <td>{{ item.goalsScored }}</td>
            <td>{{ item.goalsConceded }}</td>
            <td>{{ item.goalsScored - item.goalsConceded }}</td>
            <td>{{ item.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="matchday-schedule">
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

.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-area: 1 / 1 / 6 / 2;
  background-color: #181f21;
}

.side-bar > *{
  margin: 4rem 0 4rem 0;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 6 / 4 / 8;

}

table { 
  width: 100%;
  height: 100%;
  font-size: 2rem;
  border-collapse: collapse;
  text-align: center;
}

tr > th {
  height: 2rem;
  background-color: #053273;
}

tr > td {
  height: 6rem;
  padding: 0;
  background-color: #0c2634;
}

.div4 { grid-area: 1 / 4 / 4 / 6; }
.div5 { grid-area: 1 / 2 / 4 / 4; }

.matchday-schedule {
  display: flex;
  grid-area: 4 / 2 / 6 / 9;
  align-items: center;
  justify-content: space-evenly;
  background-color: #181f21;
}

.matchday-result {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.matchday-result-selector {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
}

.matchday-result-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 3rem 0;
}

.pair {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
  appearance: textfield;
  -moz-appearance: textfield;
}

</style>