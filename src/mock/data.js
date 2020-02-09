import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Oloruntobi Awoderu | Software developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Oloruntobi Awoderu',
  subtitle: "I'm a fullstack developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `A Full Stack Developer based in Lagos, Nigeria. Loves learning and implementing new technologies. I'm hardworking, with a flair for creating elegant solutions in the least amount of time. I'm a full-stack developer with a growing affinity to JAMstack applications.`,
  paragraphTwo: `I am proficient in Javascript, React, Node, Express, and Python.`,
  paragraphThree: `Over the past two years, I've developed strong creative problem-solving, communication, and organizational skills. I am interested in applying those skills in combination with modern web technologies to build engaging and cutting-edge products.`,
  resume: 'https://drive.google.com/file/d/1jYTDpeivXOlhrZdXGXmVepaup-tGK19v/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'artfunder.jpg',
    title: 'ArtFunder',
    info: 'ArtFunder is an E-commerce art web app where schools can sell art to fund their art programs',
    info2: 'React, Redux, Express, Node.js, MongoDB, Firebase, Stripe',
    url: 'https://art-funder.com/',
    repo: 'https://github.com/orgs/LABS-EU3/teams/studentartcollection', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pluto.jpg',
    title: 'Pluto',
    info: 'Pluto is a quiz app',
    info2: 'React, Node.js, SQLite3',
    url: 'https://getpluto.netlify.com/',
    repo: 'https://github.com/webeu3-pluto', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'naijaworks.jpg',
    title: 'NaijaWorks',
    info: 'NaijaWorks is a software directory where for Nigerian IT enthusiasts ',
    info2: 'React, TypeScript, Node.js, GraphQL and MongoDB',
    url: 'https://www.naijaworks.xyz/',
    repo: 'https://github.com/NaijaWorks', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'wunderlist.jpg',
    title: 'Wunderlist',
    info: 'Wunderlist is a Todo app',
    info2: 'HTML, CSS, React,',
    url: 'https://wunderlist-eu.netlify.com/',
    repo: 'https://github.com/Wunderlist-2-0-EU', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'starwars.jpg',
    title: 'StarWars',
    info: 'Starwars is an app that displays the bio of starwars characters',
    info2: 'React, CSS',
    url: 'https://starwars-battle.netlify.com/',
    repo: 'https://github.com/OloruntobiAwoderu/Sprint-Challenge-React-Wars', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'crown.jpg',
    title: 'Crown e-commerce',
    info: 'Crown is an e-commerce plaform',
    info2: 'React, Redux, Firebase, CSS, Stripe',
    url: 'https://oloruntoby-commerce.herokuapp.com/',
    repo: 'https://github.com/OloruntobiAwoderu/E-commerce', // if no repo, the button will not show up
  },
];


// CONTACT DATA
export const contactData = {
  cta: 'Contact me',
  btn: 'Send an Email',
  email: 'awoderuoloruntobi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Oloruntoby_',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oloruntobiawoderu/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/OloruntobiAwoderu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
