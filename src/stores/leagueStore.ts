import { defineStore } from 'pinia'

export const useLeagueStore = defineStore('store', {
  state: () => {
    return {
      leagues: [
        {
          leagueName: 'Random League',
          id: '182e5',
          teams: [
            {
              teamName: 'team1',
              points: 0,
              goalsScored: 0,
              goalsConceded: 0,
            },
            {
              teamName: 'team2',
              points: 0,
              goaslScored: 0,
              goalsConceded: 0,
            },
            {
              teamName: 'team3',
              points: 0,
              goalsScored: 0,
              goalsConceded: 0,
            },
            {
              teamName: 'team4',
              points: 0,
              goalsScored: 0,
              goalsConceded: 0,
            }
          ]
        }
      ]
    }
  },
})
