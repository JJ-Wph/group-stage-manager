<template>
  <div class="matchday-schedule">
    <MatchdayContainer>
      <template #header>
        <h2>Matchday 1</h2>
      </template>
      <template #default>
        <div class="pair">
          <p class="team-paragraph">{{specifiedTeam(team1).teamName}}</p><p>{{specifiedTeam(team1).firstGameScoredGoals}}</p><p class="vs-paragraph">:</p><p>{{specifiedTeam(team2).firstGameScoredGoals}}</p><p class="team-paragraph">{{specifiedTeam(team2).teamName }}</p>
        </div>
        <div class="pair">
          <p class="team-paragraph">{{specifiedTeam(team3).teamName}}</p><p>{{specifiedTeam(team3).firstGameScoredGoals}}</p><p class="vs-paragraph">:</p><p>{{specifiedTeam(team4).firstGameScoredGoals }}</p><p class="team-paragraph">{{specifiedTeam(team4).teamName }}</p>
        </div>
      </template>
  </MatchdayContainer>
  <MatchdayContainer>
    <template #header>
      <h2>Matchday 2</h2>
    </template>
    <div class="pair">
      <p class="team-paragraph">{{specifiedTeam(team2).teamName}}</p><p>{{specifiedTeam(team2).secondGameScoredGoals}}</p><p class="vs-paragraph">:</p><p>{{specifiedTeam(team3).secondGameScoredGoals }}</p><p class="team-paragraph">{{specifiedTeam(team3).teamName }}</p>
    </div>
    <div class="pair">
      <p class="team-paragraph">{{specifiedTeam(team1).teamName }}</p><p>{{specifiedTeam(team1).secondGameScoredGoals }}</p><p class="vs-paragraph">:</p><p>{{specifiedTeam(team4).secondGameScoredGoals }}</p><p class="team-paragraph">{{specifiedTeam(team4).teamName }}</p>
    </div>
  </MatchdayContainer>
  <MatchdayContainer>
    <template #header>
      <h2>Matchday 3</h2>
    </template>
    <div class="pair">
      <p class="team-paragraph">{{specifiedTeam(team3).teamName }}</p><p>{{specifiedTeam(team3).thirdGameScoredGoals }}</p><p class="vs-paragraph">:</p><p>{{specifiedTeam(team1).thirdGameScoredGoals }}</p><p class="team-paragraph">{{specifiedTeam(team1).teamName }}</p>
    </div>
    <div class="pair">
      <p class="team-paragraph">{{specifiedTeam(team4).teamName }}</p><p>{{specifiedTeam(team4).thirdGameScoredGoals }}</p><p class="vs-paragraph">:</p><p>{{specifiedTeam(team2).thirdGameScoredGoals }}</p><p class="team-paragraph">{{specifiedTeam(team2).teamName }}</p>
    </div>
  </MatchdayContainer>
</div>
</template>

<script setup lang="ts">
  import MatchdayContainer from '@/components/MatchdayContainer.vue'

  const props = defineProps({
      league: Object,
      team1: String,
      team2: String,
      team3: String,
      team4: String
  })

  function specifiedTeam(v) {
    return props.league.teams.find(item => item.teamName === v)
  }

</script>

<style scoped>
.matchday-schedule {
  display: flex;
  grid-area: TheMatchdaySchedule;
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
</style>