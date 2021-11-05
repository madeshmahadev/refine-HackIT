export interface ITeam {
  id: string;
  name: string;
  description: string;
};

export interface IHackathoner {
  id: string;
  name: string;
  team_id: string;
};

export interface IHackathon {
  id: string;
  start_date: string;
  end_date: string;
  name: string;
  description: string;
};

export interface IProject {
  id: string;
  name: string;
  description: string;
  url: string;
  hackathon_id: string;
  hackathoner_id: string;
};

export interface ICriteria {
  id: string;
  name: string;
  hackathon_id: string;
};

export interface IProjectScore {
  project_id: string;
  criteria_id: string;
  score: string;
};