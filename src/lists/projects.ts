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
    text: "Projeto desenvolvido usando Next.js, TypeScript e Styled Components. Os dados foram recebidos da RESTful API chamada PokéApi. O objetivo foi entender um pouco mais sobre context API e sobre as tipagens do TypeScript. Fiquei muito satisfeito por ter conseguido construir as barras dos stats dos pokémons usando CSS, algo que se mostrou um desafio.",
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
    text: "Construido utilizando Next.js, TypeScript e Tailwind CSS. Foi meu primeiro projeto fazendo uso do Local Storage para armazenar dados. Então o usuário pode sair da página e quando voltar sua pontuação estará salva no navegador e poderá constinuar de onde parou.",
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
    text: "Utilizei Next.js, TypeScript e, pela primeira vez, Tailwind CSS para desenvolver esse projeto. No NBA Payers Stats o usuário pode comparar as estatísticas dos jogadores da NBA selecionando por temporada. A API consumida foi a 'balldontlie'.",
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
    text: "A TurinoS Store foi construida usando Next.js, TypeScript e Styled Components. Foi minha primeira experiência aplicando o 'mobile first', o que facilitou muito a trabalhar com a responsividade da aplicação. Foi bem interessante também trabalhar com a lógica necessária para fazer um carrinho de compras dinâmico.",
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
    text: "Desafio tirado do site 'frontendmentor.io'. desenvolvido com Next.js, TypeScript e Styled Components. Como trata-se de um fomulário em várias etapas, gerenciar os estados e passá-los para toda a aplicação transformou esse projeto num verdadeiro desafio de lógica de programação que me ajudou a entender melhor a importância de saber usar o React hook useContext.",
    repo: "https://github.com/TurinoS/Multi-step-Form",
    app: "https://vercel.com/turinos/multi-step-form",
  },
  {
    id: 6,
    name: "TMDB App",
    imgs: [
      "/tmdb1.jpg", 
      "/tmdb2.jpg", 
      "/tmdb3.jpg"
    ],
    text: "Projeto desenvolvido com Next.js, TypeScript e Styled Components. Feito com o intuito de implementar a troca de temas no site. Os dados foram consumidos da API TMDB. O maior aprendizado do projeto foi a importância do planejamento e da definição do projeto antes do início dos trabalhos.",
    repo: "https://github.com/TurinoS/TMDB-app",
    app: "https://top-movies-turinos.vercel.app/",
  },
  {
    id: 7,
    name: "Advice Generator",
    imgs: [
      "/advice1.jpg", 
      "/advice2.jpg", 
      "/advice3.jpg"
    ],
    text: "Desenvolvido utilizando Next.js, TypeScript e Styled Components. Foi consumida a 'Advice Slip JSON API' para gerar conselhos aleatórios, porém, como os conselhos são gerados em inglês, trabalhei para implementar a 'Cloud Translation API' para traduzir automaticamente, mas por ser uma API paga, fiz a implementação mas deixei no README como fazer a ativação da tradução.",
    repo: "https://github.com/TurinoS/advice-generator",
    app: "https://advice-generator-turinos.vercel.app/",
  },
  {
    id: 8,
    name: "Marvel Heroes",
    imgs: [
      "/marvel1.jpg", 
      "/marvel2.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/marvel-fpass",
    app: "https://marvel-fpass-turinos.vercel.app/",
  },
  {
    id: 9,
    name: "World Countries",
    imgs: [
      "/countries1.jpg", 
      "/countries2.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/world-countries",
    app: "https://world-countries-turinos.vercel.app/",
  },
  {
    id: 10,
    name: "World Countries",
    imgs: [
      "/age1.jpg", 
      "/age2.jpg"
    ],
    text: "Minha pokedex que ficou lindíssima mas que demora para receber os dados da APi essa bosta hehehe",
    repo: "https://github.com/TurinoS/Age-calculator",
    app: "https://age-calculator-turinos.vercel.app/",
  },
];
