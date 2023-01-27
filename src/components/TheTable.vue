<template>
    <div class="table-container">    
        <table>
            <tr>
              <th>L.p.</th>
              <th>Team</th>
              <th>G+</th>
              <th>G-</th>
              <th>G+/-</th>
              <th>Pts</th>
            </tr>
            <tbody>
            <tr v-for="(item, index) in props.league.teams" :key="item.teamName">
              <td>{{ index + 1 + '.' }}</td>
              <td>{{ item.teamName }}</td>
              <td>{{ item.scoredGoalsTotal = item.firstGameScoredGoals+item.secondGameScoredGoals+item.thirdGameScoredGoals }}</td>
              <td>{{ item.concededGoalsTotal = item.firstGameConcededGoals+item.secondGameConcededGoals+item.thirdGameConcededGoals }}</td>
              <td>{{ item.scoredGoalsTotal - item.concededGoalsTotal }}</td>
              <td>{{ item.pointsTotal = item.firstGamePoints+item.secondGamePoints+item.thirdGamePoints }}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    league: Object
})

// props.league.teams.sort((a, b) => (a.pointsTotal < b.pointsTotal) ? 1 : -1);


</script>

<style scoped>
  .table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: TheTable;
  }

  table { 
    width: 100%;
    height: 100%;
    font-size: 2rem;
    border-collapse: collapse;
    text-align: center;
  }
  
  th, td, tr {
    font-size: 1.8vw;
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
</style>