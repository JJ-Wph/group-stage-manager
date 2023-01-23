export class League {
    leagueName: string = "";
    id: string = "";
    teams: Array<any> = [
      {
        teamName: "",
        pointsTotal: 0,
        goalsScoredTotal: 0,
        goalsConcededTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: "",
        firstGameConceded: "",
        secondGameConceded: "",
        thirdGameConceded: ""
      },
      {
        teamName: "",
        pointsTotal: 0,
        goalsScoredTotal: 0,
        goalsConcededTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: "",
        firstGameConceded: "",
        secondGameConceded: "",
        thirdGameConceded: ""
      },
      {
        teamName: "",
        pointsTotal: 0,
        goalsScoredTotal: 0,
        goalsConcededTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: "",
        firstGameConceded: "",
        secondGameConceded: "",
        thirdGameConceded: ""
      },
      {
        teamName: "",
        pointsTotal: 0,
        goalsScoredTotal: 0,
        goalsConcededTotal: 0,
        firstGamePoints: 0,
        secondGamePoints: 0,
        thirdGamePoints: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: "",
        firstGameConceded: "",
        secondGameConceded: "",
        thirdGameConceded: ""
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
