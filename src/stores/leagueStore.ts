import { defineStore } from "pinia"
export const useLeagueStore = defineStore("store", {
  state: () => {
    return {
      leagues: [
        {
          leagueName: "Portfolio League",
          id: "portf",
          teams: [
            {
              teamName: "Sharks United",
              points: 6,
              goalsScored: 12,
              goalsConceded: 3,
              firstGameResult: 6,
              secondGameResult: 6,
              thirdGameResult: ""
            },
            {
              teamName: "Blue Whales",
              points: 0,
              goalsScored: 5,
              goalsConceded: 11,
              firstGameResult: 2,
              secondGameResult: 3,
              thirdGameResult: ""
            },
            {
              teamName: "Space Lions",
              points: 4,
              goalsScored: 8,
              goalsConceded: 6,
              firstGameResult: 3,
              secondGameResult: 5,
              thirdGameResult: ""
            },
            {
              teamName: "Netfinders",
              points: 1,
              goalsScored: 4,
              goalsConceded: 9,
              firstGameResult: 3,
              secondGameResult: 1,
              thirdGameResult: ""
            }
          ]
        }
      ]
    }
  }
})



