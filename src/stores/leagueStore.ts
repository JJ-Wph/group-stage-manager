import { defineStore } from 'pinia'

export const useLeagueStore = defineStore('store', {
  state: () => {
    return {
      leagues: [
        {
          leagueName:"randomleague",
          id:"182e5",
          team1:{
            teamName:"tim1",
            points:0,
            goalsScored:0,
            goalsConceded:0
          },
          team2:{
            teamName:"tim2",
            points:0,
            goaslScored:0,
            goalsConceded:0
          },
          team3:{
            teamName:"tim3",
            points:0,
            goalsScored:0,
            goalsConceded:0
          },
          team4:{
            teamName:"tim4",
            points:0,
            goalsScored:0,
            goalsConceded:0
          }
        }
      ]
    }
  },
})
