export type ProjectsTypes = {
  id: number;
  name: string;
  imgs: string[];
  text: string;
  repo: string;
  app: string;
};

export const projects: ProjectsTypes[] = [
  {
    id: 1,
    name: "Pokédex",
    imgs: [
      "/pokedex1.jpg", 
      "/pokedex2.jpg", 
      "/pokedex3.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/Pokedex",
    app: "https://pokedex-turinos.vercel.app/",
  },
  {
    id: 2,
    name: "Rock Paper Scissors",
    imgs: [
      "/jokenpo1.jpg", 
      "/jokenpo2.jpg", 
      "/jokenpo3.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/Rock-Paper_Scissors-Game",
    app: "https://rock-paper-scissors-game-turinos.vercel.app/",
  },
  {
    id: 3,
    name: "NBA Players Stats",
    imgs: [
      "/nba1.jpg", 
      "/nba2.jpg", 
      "/nba3.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/NBA-Players-Stats",
    app: "https://nba-players-stats-turinos.vercel.app/",
  },
  {
    id: 4,
    name: "TurinoS Store",
    imgs: [
      "/ecommerce1.jpg", 
      "/ecommerce2.jpg", 
      "/ecommerce3.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/TurinoS-Store",
    app: "https://turinos-store.vercel.app/",
  },
  {
    id: 5,
    name: "Multi Step Form",
    imgs: [
      "/multistep1.jpg", 
      "/multistep2.jpg", 
      "/multistep3.jpg",
      "/multistep4.jpg",
      "/multistep5.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/Multi-step-Form",
    app: "https://vercel.com/turinos/multi-step-form",
  },
  {
    id: 5,
    name: "TMDB App",
    imgs: [
      "/tmdb1.jpg", 
      "/tmdb2.jpg", 
      "/tmdb3.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/TMDB-app",
    app: "https://top-movies-turinos.vercel.app/",
  },
];
