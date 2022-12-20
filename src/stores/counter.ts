export class League {
    leagueName: string = '';
    id: any = '';
    teams: any = [
      {
        teamName: '',
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
      },
      {
        teamName: '',
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
      },
      {
        teamName: '',
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
      },
      {
        teamName: '',
        points: 0,
        goalsScored: 0,
        goalsConceded: 0,
      }
    ];

    teamsForFixtures: Array<any> = [];

    constructor(theName: string, theId: string, team1: Object, team2: Object, team3: Object, team4: Object) {
      this.leagueName = theName;
      this.id = theId;
      this.teams[0].teamName = team1;
      this.teams[1].teamName = team2;
      this.teams[2].teamName = team3;
      this.teams[3].teamName = team4;

      teamsForFixtures: [
        this.teams[0].teamName,
        this.teams[1].teamName,
        this.teams[2].teamName,
        this.teams[3].teamName
      ];
    };
}