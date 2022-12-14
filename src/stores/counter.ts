export class League {
  leagueName: string;
  id: string;
  team1: Object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };
  team2: Object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };
  team3: Object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };
  team4: Object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
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