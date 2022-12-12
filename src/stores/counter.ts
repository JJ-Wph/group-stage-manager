export class League {
  leagueName: string;
  id: string;
  team1: object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };
  team2: object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };
  team3: object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };
  team4: object = {
    teamName: '',
    points: 0,
    goalScored: 0,
    goalConceded: 0,
    goalBalance: 0,
  };

  constructor(theName: string, theId: string, team1: object, team2: string, team3: string, team4: string,) {
    this.leagueName = theName;
    this.id = theId;
    this.team1.teamName = team1;
    this.team2.teamName = team2;
    this.team3.teamName = team3;
    this.team4.teamName = team4; 
  }
}