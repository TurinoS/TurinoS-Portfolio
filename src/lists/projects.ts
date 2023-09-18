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
    name: "Multi Step Form",
    imgs: [
        "/pokedex-thumb.jpg", 
        "/pokedex-thumb.jpg", 
        "/pokedex-thumb.jpg"],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/NBA-Players-Stats",
    app: "#",
  },
  {
    id: 5,
    name: "NBA Players Stats",
    imgs: [
        "/pokedex-thumb.jpg", 
        "/pokedex-thumb.jpg", 
        "/pokedex-thumb.jpg"],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/NBA-Players-Stats",
    app: "#",
  },
];
