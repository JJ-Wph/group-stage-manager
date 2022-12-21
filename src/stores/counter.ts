export class League {
    leagueName: string = '';
    id: any = '';
    teams: any = [
      {
        teamName: '',
        id: 1,
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: '',
        secondGameResult: '',
        thirdGameResult: ''
      },
      {
        teamName: '',
        id: 2,
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: '',
        secondGameResult: '',
        thirdGameResult: ''
      },
      {
        teamName: '',
        id: 3,
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: '',
        secondGameResult: '',
        thirdGameResult: ''
      },
      {
        teamName: '',
        id: 4,
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
        firstGameResult: '',
        secondGameResult: '',
        thirdGameResult: ''
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


// fixtures: Object = {};
// this.fixtures = {
//   0: [{ team1: this.teams[0].teamName, team2: this.teams[1].teamName }, { team1: this.teams[2].teamName, team2: this.teams[3].teamName }],
//   1: [{ team1: this.teams[1].teamName, team2: this.teams[2].teamName }, { team1: this.teams[0].teamName, team2: this.teams[3].teamName }],
//   2: [{ team1: this.teams[2].teamName, team2: this.teams[0].teamName }, { team1: this.teams[3].teamName, team2: this.teams[1].teamName }]
// };