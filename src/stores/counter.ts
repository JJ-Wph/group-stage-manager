export class League {
    leagueName: string = "";
    id: string = "";
    teams: Array<any> = [
      {
        teamName: "",
        teamId: 1,
        pointsTotal: 0,
        scoredGoalsTotal: 0,
        concededGoalsTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameScoredGoals: null,
        secondGameScoredGoals: null,
        thirdGameScoredGoals: null,
        firstGameConcededGoals: null,
        secondGameConcededGoals: null,
        thirdGameConcededGoals: null
      },
      {
        teamName: "",
        teamId: 2,
        pointsTotal: 0,
        scoredGoalsTotal: 0,
        concededGoalsTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameScoredGoals: null,
        secondGameScoredGoals: null,
        thirdGameScoredGoals: null,
        firstGameConcededGoals: null,
        secondGameConcededGoals: null,
        thirdGameConcededGoals: null
      },
      {
        teamName: "",
        teamId: 3,
        pointsTotal: 0,
        scoredGoalsTotal: 0,
        concededGoalsTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameScoredGoals: null,
        secondGameScoredGoals: null,
        thirdGameScoredGoals: null,
        firstGameConcededGoals: null,
        secondGameConcededGoals: null,
        thirdGameConcededGoals: null
      },
      {
        teamName: "",
        teamId: 4,
        pointsTotal: 0,
        scoredGoalsTotal: 0,
        concededGoalsTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameScoredGoals: null,
        secondGameScoredGoals: null,
        thirdGameScoredGoals: null,
        firstGameConcededGoals: null,
        secondGameConcededGoals: null,
        thirdGameConcededGoals: null
      }
    ];
    
    constructor(theName: string, theId: string, team1: Object, team2: Object, team3: Object, team4: Object) {
      this.leagueName = theName;
      this.id = theId;
      this.teams[0].teamName = team1;
      this.teams[1].teamName = team2;
      this.teams[2].teamName = team3;
      this.teams[3].teamName = team4;
    };
}


