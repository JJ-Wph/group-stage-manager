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
      <div>
        <table>
          <tbody>
            <tr>
              <td>L.p.</td>
              <td>Team</td>
              <td>GF</td>
              <td>GA</td>
              <td>GF</td>
              <td>Pts</td>
            </tr>
            <tr v-for="(item, index) in loadedLeague" :key="item.teamName">
              <td>{{ index+1 }}</td>
              <td>{{ item.teamName }}</td>
              <td>{{ item.goalsScored }}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

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
      // console.log(leaguesList[i].id)
      if(leaguesList[i].id === searchedId.value) {
        loadedLeague.push(leaguesList[i].teams);
        console.log(leaguesList[i].teams)
        isLoaded.value = true;
      }
    }
    
    // console.log(searchedId.value);
    // console.log(loadedLeague)
  }



</script>