<template>
    <header>
      <h1>Piłkarzyki League!</h1>
    </header>
    <main v-if="!isLoaded">
      <div>
        <p>Enter your League ID</p>
        <p v-if="wrongId">Wrong Id!</p>
        <input type="text" v-model="searchedId" placeholder="ID">
        <button @click="loadSpecificLeague">Search</button>
      </div>
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
            <p>{{ loadedLeague.teams[0].teamName}}</p>
            <input type="number" v-model="loadedLeague.teams[0].firstGameResult">
            : 
            <input type="number" v-model="loadedLeague.teams[1].firstGameResult">
            <p>{{ loadedLeague.teams[1].teamName }}</p>
            <button @click="addResult(loadedLeague.teams[0], loadedLeague.teams[1])">Add Result</button>
          </div>
          <div class="pair">
            <p>{{ loadedLeague.teams[2].teamName }}</p><p>{{loadedLeague.teams[2].firstGameResult}}</p> : <p>{{loadedLeague.teams[3].firstGameResult}}</p><p>{{ loadedLeague.teams[3].teamName }}</p>
          </div>
        </div>
        <div v-if="m2selected">
          <h2>Matchday 2</h2>
          <div class="pair">
            <p>{{ loadedLeague.teams[1].teamName + ' '}}</p><p>{{loadedLeague.teams[1].secondGameResult + ' '}}</p> : <p>{{' ' + loadedLeague.teams[2].secondGameResult}}</p><p>{{ loadedLeague.teams[2].teamName }}</p>
          </div>
          <div class="pair">
            <p>{{ loadedLeague.teams[0].teamName }}</p><p>{{loadedLeague.teams[0].secondGameResult}}</p> : <p>{{loadedLeague.teams[3].secondGameResult}}</p><p>{{ loadedLeague.teams[3].teamName }}</p>
          </div>
        </div>
        <div v-if="m3selected">
          <h2>Matchday 3</h2>
          <div class="pair">
            <p>{{ loadedLeague.teams[2].teamName + ' '}}</p><p>{{loadedLeague.teams[2].thirdGameResult + ' '}}</p> : <p>{{' ' + loadedLeague.teams[0].thirdGameResult}}</p><p>{{ loadedLeague.teams[0].teamName }}</p>
          </div>
          <div class="pair">
            <p>{{ loadedLeague.teams[3].teamName }}</p><p>{{loadedLeague.teams[3].thirdGameResult}}</p> : <p>{{loadedLeague.teams[1].thirdGameResult}}</p><p>{{ loadedLeague.teams[1].teamName }}</p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <td>L.p.</td>
              <td>Team</td>
              <td>GF</td>
              <td>GA</td>
              <td>Pts</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in loadedLeague.teams" :key="item.index">
              <td>{{ index+1 }}</td>
              <td>{{ item.teamName }}</td>
              <td>{{ item.goalsScored }}</td>
              <td>{{ item.goalsConceded }}</td>
              <td>{{ item.points }}</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div>
        <div class="results">
          <h2>Matchday 1</h2>
          <div class="pair">
            <p>{{ loadedLeague.teams[0].teamName + ' '}}</p><p>{{loadedLeague.teams[0].firstGameResult + ' '}}</p> : <p>{{' ' + loadedLeague.teams[1].firstGameResult}}</p><p>{{ loadedLeague.teams[1].teamName }}</p>
          </div>
          <div class="pair">
            <p>{{ loadedLeague.teams[2].teamName }}</p><p>{{loadedLeague.teams[2].firstGameResult}}</p> : <p>{{loadedLeague.teams[3].firstGameResult}}</p><p>{{ loadedLeague.teams[3].teamName }}</p>
          </div>
          <h2>Matchday 2</h2>
          <div class="pair">
            <p>{{ loadedLeague.teams[1].teamName + ' '}}</p><p>{{loadedLeague.teams[1].secondGameResult + ' '}}</p> : <p>{{' ' + loadedLeague.teams[2].secondGameResult}}</p><p>{{ loadedLeague.teams[2].teamName }}</p>
          </div>
          <div class="pair">
            <p>{{ loadedLeague.teams[0].teamName }}</p><p>{{loadedLeague.teams[0].secondGameResult}}</p> : <p>{{loadedLeague.teams[3].secondGameResult}}</p><p>{{ loadedLeague.teams[3].teamName }}</p>
          </div>
          <h2>Matchday 3</h2>
          <div class="pair">
            <p>{{ loadedLeague.teams[2].teamName + ' '}}</p><p>{{loadedLeague.teams[2].thirdGameResult + ' '}}</p> : <p>{{' ' + loadedLeague.teams[0].thirdGameResult}}</p><p>{{ loadedLeague.teams[0].teamName }}</p>
          </div>
          <div class="pair">
            <p>{{ loadedLeague.teams[3].teamName }}</p><p>{{loadedLeague.teams[3].thirdGameResult}}</p> : <p>{{loadedLeague.teams[1].thirdGameResult}}</p><p>{{ loadedLeague.teams[1].teamName }}</p>
          </div>
        </div>
      </div>
    </main>

</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useLeagueStore } from '@/stores/leagueStore'

  const leagueStore = useLeagueStore();
  const isLoaded = ref<boolean>(false);
  const wrongId = ref<boolean>(false);
  const searchedId = ref<string>(''); 
  const loadedLeague = ref<any>(null);

  const resultDiv = ref<boolean>(false);
  const selectedMatchday = ref<string>('');
  const m1selected = ref<boolean>(false);
  const m2selected = ref<boolean>(false);
  const m3selected = ref<boolean>(false);
  const team1Result = ref<number>(null);
  const team2Result = ref<number>(null);
  const team3Result = ref<number>(0);
  const team4Result = ref<number>(0);


  const loadSpecificLeague = () => {
    let leaguesList = leagueStore.leagues;
    for(let i = 0; i < leaguesList.length; i++) {
      if(leaguesList[i].id === searchedId.value) {
        loadedLeague.value = leaguesList[i];
        console.log(leaguesList[i].teams)
        isLoaded.value = true;
        console.log(loadedLeague.value);
      } else {
        wrongId.value = true;
      }
    }
  };

  function activateMatchday() {
    if(selectedMatchday.value === 'Matchday 1') {
      m1selected.value = true;
    } else if(selectedMatchday.value === 'Matchday 2') {
      m2selected.value = true;
    } else if(selectedMatchday.value === 'Matchday 3') {
      m3selected.value = true;
    }
    resultDiv.value = false;
  };

  function addResult(homeTeam, awayTeam) {
    if(homeTeam.firstGameResult > awayTeam.firstGameResult) {
      homeTeam.points += 3;
      homeTeam.goalsScored += homeTeam.firstGameResult;
      homeTeam.goalsConceded += awayTeam.firstGameResult;
      awayTeam.goalsScored += awayTeam.firstGameResult;
      awayTeam.goalsConceded += homeTeam.firstGameResult;
      console.log(homeTeam.firstGameResult, awayTeam.firstGameResult);
      console.log(homeTeam.points.value, awayTeam.points)
    } else if(homeTeam.firstGameResult < awayTeam.firstGameResult) {
      // awayTeam.points.value += 3;
      // homeTeam.goalsScored.value += team1Result.value;
      // homeTeam.goalsConceded.value += team2Result.value;
      // awayTeam.goalsScored.value += team2Result.value;
      // awayTeam.goalsConceded.value += team1Result.value;
    } else if(homeTeam.firstGameResult === awayTeam.firstGameResult) {
      // homeTeam.points.value += 1;
      // awayTeam.points.value += 1;
      // homeTeam.goalsScored.value += team1Result.value;
      // homeTeam.goalsConceded.value += team2Result.value;
      // awayTeam.goalsScored.value += team2Result.value;
      // awayTeam.goalsConceded.value += team1Result.value;
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
  align-items: center;
}

input[type=number] {
  height: 20px;
  width: 30px;
}

.resultdiv{
  background-color: grey;
}
</style>