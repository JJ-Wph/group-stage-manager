export class League {
  leagueName: string;
  id: string;
  team1: any = {
    teamName: '',
    points: 0,
    goalsScored: 0,
    goalsConceded: 0,
  };
  team2: any = {
    teamName: '',
    points: 0,
    goaslScored: 0,
    goalsConceded: 0,
  };
  team3: any = {
    teamName: '',
    points: 0,
    goalsScored: 0,
    goalsConceded: 0,
  };
  team4: any = {
    teamName: '',
    points: 0,
    goalsScored: 0,
    goalsConceded: 0,
  };

  constructor(theName: string, theId: string, team1: Object, team2: Object, team3: Object, team4: Object) {
    this.leagueName = theName;
    this.id = theId;
    this.team1.teamName = team1;
    this.team2.teamName = team2;
    this.team3.teamName = team3;
    this.team4.teamName = team4;
  }
}