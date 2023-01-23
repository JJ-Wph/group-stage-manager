<template>
  <div class="side-bar">
    <h1>{{props.league.leagueName}}</h1>
    
    <div class="matchday-result-selector">
      <PrimaryButton v-if="!resultDiv" @click="resultDiv = !resultDiv">Add Results</PrimaryButton>
      <div class="matchday-result-selector-options" v-if="resultDiv">
        <select v-model="selectedMatchday">
          <option value="Matchday 1">Matchday 1</option>
          <option value="Matchday 2">Matchday 2</option>
          <option value="Matchday 3">Matchday 3</option>
        </select>
        <SecondaryButton @click="activateMatchday">Accept</SecondaryButton>
      </div>
    </div>

    <div class="matchday-result" v-if="m1selected">
      <h2>Matchday 1</h2>
      <div class="matchday-result-inputs">
        <div class="pair">
          <p class="team-paragraph">{{ specifiedTeam(team1).teamName}}</p>
          <input type="number" v-model="specifiedTeam(team1).firstGameResult">
          <p class="vs-paragraph">vs</p>
          <input type="number" v-model="specifiedTeam(team2).firstGameResult">
          <p class="team-paragraph">{{ specifiedTeam(team2).teamName }}</p>
        </div>
        <SecondaryButton @click="addFirstResult(specifiedTeam(team1), specifiedTeam(team2))">Add Result</SecondaryButton>
      </div>
      <div class="matchday-result-inputs">
        <div class="pair">
          <p class="team-paragraph">{{ specifiedTeam(team3).teamName }}</p>
          <input type="number" v-model="specifiedTeam(team3).firstGameResult">
          <p class="vs-paragraph">vs</p>
          <input type="number" v-model="specifiedTeam(team4).firstGameResult">
          <p class="team-paragraph">{{ specifiedTeam(team4).teamName }}</p>
        </div>
        <SecondaryButton @click="addFirstResult(specifiedTeam(team3), specifiedTeam(team4))">Add Result</SecondaryButton>
      </div>
    </div>

    <div class="matchday-result" v-if="m2selected">
      <h2>Matchday 2</h2>
      <div class="matchday-result-inputs">
        <div class="pair">
          <p class="team-paragraph">{{ specifiedTeam(team2).teamName }}</p>
          <input type="number" min="0" v-model="specifiedTeam(team2).secondGameResult">
          <p class="vs-paragraph">vs</p>
          <input type="number" v-model="specifiedTeam(team3).secondGameResult">
          <p class="team-paragraph">{{ specifiedTeam(team3).teamName }}</p>
        </div>
        <SecondaryButton @click="addSecondResult(specifiedTeam(team2), specifiedTeam(team3))">Add Result</SecondaryButton>
      </div>
      <div class="matchday-result-inputs">
        <div class="pair">
          <p class="team-paragraph">{{ specifiedTeam(team1).teamName }}</p>
          <input type="number" v-model="specifiedTeam(team1).secondGameResult">
          <p class="vs-paragraph">vs</p>
          <input type="number" v-model="specifiedTeam(team4).secondGameResult">
          <p class="team-paragraph">{{ specifiedTeam(team4).teamName }}</p>
        </div>
        <SecondaryButton @click="addSecondResult(specifiedTeam(team1), specifiedTeam(team4))">Add Result</SecondaryButton>
      </div>
    </div>

    <div class="matchday-result" v-if="m3selected">
      <h2>Matchday 3</h2>
      <div class="matchday-result-inputs">
        <div class="pair">
          <p class="team-paragraph">{{ specifiedTeam(team3).teamName }}</p>
          <input type="number" v-model="specifiedTeam(team3).thirdGameResult">
          <p class="vs-paragraph">vs</p>
          <input type="number" v-model="specifiedTeam(team1).thirdGameResult">
          <p class="team-paragraph">{{ specifiedTeam(team1).teamName }}</p>
        </div>
        <SecondaryButton @click="addThirdResult(specifiedTeam(team3), specifiedTeam(team1))">Add Result</SecondaryButton>
      </div>
      <div class="matchday-result-inputs">
        <div class="pair">
          <p class="team-paragraph">{{ specifiedTeam(team4).teamName }}</p>
          <input type="number" min="0" v-model="specifiedTeam(team4).thirdGameResult">
          <p class="vs-paragraph">vs</p>
          <input type="number" v-model="specifiedTeam(team2).thirdGameResult">
          <p class="team-paragraph">{{ specifiedTeam(team2).teamName }}</p>
        </div>
        <SecondaryButton @click="addThirdResult(specifiedTeam(team4), specifiedTeam(team2))">Add Result</SecondaryButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import PrimaryButton from './PrimaryButton.vue';
  import SecondaryButton from './SecondaryButton.vue';

  const props = defineProps({
      league: Object,
      team1: String,
      team2: String,
      team3: String,
      team4: String
  })

  const m1selected = ref<boolean>(false);
  const m2selected = ref<boolean>(false);
  const m3selected = ref<boolean>(false);
  const resultDiv = ref<boolean>(false);
  const selectedMatchday = ref<string>('');

  function specifiedTeam(v) {
    return props.league.teams.find(item => item.teamName === v)
  }

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
      homeTeam.firstGamePoints = 3;
      awayTeam.firstGamePoints = 0;
      homeTeam.firstGameConceded = awayTeam.firstGameResult;
      awayTeam.firstGameConceded = homeTeam.firstGameResult;
    } else if(homeTeam.firstGameResult < awayTeam.firstGameResult) {
      awayTeam.firstGamePoints = 3;
      homeTeam.firstGamePoints = 0;
      homeTeam.firstGameConceded = awayTeam.firstGameResult;
      awayTeam.firstGameConceded = homeTeam.firstGameResult;
    } else if(homeTeam.firstGameResult === awayTeam.firstGameResult) {
      homeTeam.firstGamePoints = 1;
      awayTeam.firstGamePoints = 1;
      homeTeam.firstGameConceded = awayTeam.firstGameResult;
      awayTeam.firstGameConceded = homeTeam.firstGameResult;
    }
  }

  function addSecondResult(homeTeam, awayTeam) {
    if(homeTeam.secondGameResult > awayTeam.secondGameResult) {
      homeTeam.secondGamePoints = 3;
      awayTeam.secondGamePoints = 0;
      homeTeam.secondGameConceded = awayTeam.secondGameResult;
      awayTeam.secondGameConceded = homeTeam.secondGameResult;
    } else if(homeTeam.secondGameResult < awayTeam.secondGameResult) {
      awayTeam.secondGamePoints = 3;
      homeTeam.secondGamePoints = 0;
      homeTeam.secondGameConceded = awayTeam.secondGameResult;
      awayTeam.secondGameConceded = homeTeam.secondGameResult;
    } else if(homeTeam.secondGameResult === awayTeam.secondGameResult) {
      homeTeam.secondGamePoints = 1;
      awayTeam.secondGamePoints = 1;
      homeTeam.secondGameConceded = awayTeam.secondGameResult;
      awayTeam.secondGameConceded = homeTeam.secondGameResult;
    }
  }
  
  function addThirdResult(homeTeam, awayTeam) {
    if(homeTeam.thirdGameResult > awayTeam.thirdGameResult) {
      homeTeam.thirdGamePoints = 3;
      awayTeam.thirdGamePoints = 0;
      homeTeam.thirdGameConceded = awayTeam.thirdGameResult;
      awayTeam.thirdGameConceded = homeTeam.thirdGameResult;
    } else if(homeTeam.thirdGameResult < awayTeam.thirdGameResult) {
      awayTeam.thirdGamePoints = 3;
      homeTeam.thirdGamePoints = 0;
      homeTeam.thirdGameConceded = awayTeam.thirdGameResult;
      awayTeam.thirdGameConceded = homeTeam.thirdGameResult;
    } else if(homeTeam.thirdGameResult === awayTeam.thirdGameResult) {
      homeTeam.thirdGamePoints = 1;
      awayTeam.thirdGamePoints = 1;
      homeTeam.thirdGameConceded = awayTeam.thirdGameResult;
      awayTeam.thirdGameConceded = homeTeam.thirdGameResult;
    }
  }
</script>



<style scoped>

.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: 1 / 3 / 4 / 6; 
  background-color: #181f21;
}

.side-bar > * {
  margin: 1rem 0 1rem 0;
}

.matchday-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.matchday-result-selector {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}

.matchday-result-selector-options {
  display: flex;
  flex-direction: column;
}

.matchday-result-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0 3rem 0;
}

.pair {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}


.vs-paragraph {
  display: flex;
  align-items: flex-end;
  margin: 0rem 1.5rem 0rem 1.5rem;
}

.team-paragraph {
  display: flex;
  justify-content: center;
  min-width: 10rem;
  max-width: 20rem;
}

select {
  text-align: center;
  background-color: #053273;
  color: #f4f1f1;
  border: 0.1rem solid #053273;
  height: 3rem;
  width: 10rem;
  margin: 0.5rem;
}

option {
  border: none;
}
</style>