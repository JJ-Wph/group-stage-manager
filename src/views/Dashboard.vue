<template>
    <header>
      <h1>Hello Piłkarzyki League!</h1>
    </header>
  
    <main v-if="!isLoaded">
      <div>
        <p>Enter your League ID</p>
        <input type="text" v-model="searchedId" placeholder="ID">
        <button @click="loadSpecificLeague">Search</button>
      </div>
    </main>

    <main v-else>
      <div v-for="league in leagueStore.leagues">
        <h1>{{ league.leagueName }}</h1>
        <p>{{ league.id }}</p>
        <p>{{ league.team1.teamName }}</p>
      </div>
    </main>

</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useLeagueStore } from '@/stores/leagueStore'

  const isLoaded = ref<boolean>(false);
  const leagueStore = useLeagueStore();
  const searchedId = ref<string>(''); 
  const loadedLeague = new Array;

  const loadSpecificLeague = () => {
    let leaguesList = leagueStore.leagues;
    
    for(let i = 0; i < leaguesList.length; i++) {
      console.log(leaguesList[i].id)
      if(leaguesList[i].id === searchedId.value) {
        loadedLeague.push(leaguesList[i]);
      }
    }
    console.log(searchedId.value);
    console.log(loadedLeague)
  }



</script>