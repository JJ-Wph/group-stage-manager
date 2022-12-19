<template>
    <header>
      <h1>Piłkarzyki League!</h1>
    </header>
  
    <main v-if="!isLoaded">
      <div>
        <p>Enter your League ID</p>
        <input type="text" v-model="searchedId" placeholder="ID">
        <button @click="loadSpecificLeague">Search</button>
      </div>
    </main>

    <main v-else>
      <div>
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
            <tr v-for="(item, index) in loadedLeague" :key="item.index">
              <td>{{ index+1 }}</td>
              <td>{{ item.teamName }}</td>
              <td>{{ item.goalsScored }}</td>
              <td>{{ item.goalsConceded }}</td>
              <td>{{ item.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useLeagueStore } from '@/stores/leagueStore'

  const leagueStore = useLeagueStore();
  const isLoaded = ref<boolean>(false);
  const searchedId = ref<string>(''); 
  const loadedLeague = new Array;

  const loadSpecificLeague = () => {
    let leaguesList = leagueStore.leagues;
    for(let i = 0; i < leaguesList.length; i++) {
      if(leaguesList[i].id === searchedId.value) {
        loadedLeague.push(leaguesList[i].teams);
        console.log(leaguesList[i].teams)
        isLoaded.value = true;
        console.log(loadedLeague);
      }
    }
    
    // console.log(searchedId.value);
    // console.log(loadedLeague)
  }



</script>