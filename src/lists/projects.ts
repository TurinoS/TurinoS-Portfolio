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
    name: "pokedex",
    imgs: [
        "/pokedex-thumb.jpg", 
        "/pokedex-thumb.jpg", 
        "/pokedex-thumb.jpg"],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "#",
    app: "#",
  },
];
