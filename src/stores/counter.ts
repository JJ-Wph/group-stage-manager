export class League {
    leagueName: string = "";
    id: string = "";
    teams: Array<any> = [
      {
        teamName: "",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: ""
      },
      {
        teamName: "",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: ""
      },
      {
        teamName: "",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: ""
      },
      {
        teamName: "",
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: "",
        secondGameResult: "",
        thirdGameResult: ""
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
