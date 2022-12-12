import { defineStore } from 'pinia'

export const useLeagueStore = defineStore('store', {
  state: () => {
    return {
      leagues: []
    }
  },
})
