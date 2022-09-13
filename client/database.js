import React from 'react';

export const coreCompetencies = [
  {
    name: 'CSS',
    icon: 'devicon-css3-plain-wordmark',
    level: 8
  },
  {
    name: 'HTML',
    icon: 'devicon-html5-plain-wordmark',
    level: 7
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain',
    level: 8
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
    level: 5
  },
  {
    name: 'PostgreSQL',
    icon: 'devicon-postgresql-plain',
    level: 5
  },
  {
    name: 'React.js',
    icon: 'devicon-react-plain',
    level: 7
  }
];

/* 
Levels:
  1: I've used it
  2: Moderate amount of use - I could most likely troubleshoot it with a little help
  3: Comfortable familiarity - Able to use autonomously
  4: Thorough exploration - I know a good deal
  5: I could teach it
*/
export const otherSkills = [
  {
    name: 'AWS',
    icon: 'devicon-amazonwebservices-original',
    level: 2
  },
  {
    name: 'Babel',
    icon: 'devicon-babel-plain',
    level: 2
  },
  {
    name: 'Bootstrap',
    icon: 'devicon-bootstrap-plain',
    level: 2
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain',
    level: 2
  },
  {
    name: 'Docker',
    icon: 'devicon-docker-plain',
    level: 1
  },
  {
    name: 'ESLint',
    icon: 'devicon-eslint-original',
    level: 1
  },
  {
    name: 'Express.js',
    icon: 'devicon-express-original-wordmark',
    level: 3
  },
  {
    name: 'figma',
    icon: 'devicon-figma-plain',
    level: 1
  },
  {
    name: 'git',
    icon: 'devicon-git-plain',
    level: 3
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
    level: 3
  },
  {
    name: 'GraphQL',
    icon: 'devicon-graphql-plain',
    level: 1
  },
  {
    name: 'Heroku',
    icon: 'devicon-heroku-original',
    level: 2
  },
  {
    name: 'Jasmine',
    icon: 'devicon-jasmine-plain',
    level: 1
  },
  {
    name: 'Java',
    icon: 'devicon-java-plain',
    level: 1
  },
  {
    name: 'Jest',
    icon: 'devicon-jest-plain',
    level: 2
  },
  {
    name: 'jQuery',
    icon: 'devicon-jquery-plain-wordmark',
    level: 2
  },
  {
    name: 'k3s',
    icon: 'devicon-k3s-original',
    level: 1
  },
  {
    name: 'Kubernetes',
    icon: 'devicon-kubernetes-plain',
    level: 2
  },
  {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain',
    level: 2
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain',
    level: 1
  },
  {
    name: 'npm',
    icon: 'devicon-npm-original-wordmark',
    level: 3
  },
  {
    name: 'Ruby',
    icon: 'devicon-ruby-plain',
    level: 1
  },
  {
    name: 'Sequelize',
    icon: 'devicon-sequelize-plain',
    level: 3
  },
  {
    name: 'Trello',
    icon: 'devicon-trello-plain',
    level: 2
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain',
    level: 2
  },
  {
    name: 'Ubuntu',
    icon: 'devicon-ubuntu-plain',
    level: 2
  },
  {
    name: 'Unity',
    icon: 'devicon-unity-original',
    level: 2
  },
  {
    name: 'VS Code',
    icon: 'devicon-vscode-plain',
    level: 3
  },
  {
    name: 'Webpack',
    icon: 'devicon-webpack-plain',
    level: 2
  }
];

/* PROJECT TEMPLATE
{
  name: '',
  type: 'personal/professional/educational',
  thumbnail: '',
  techstack: [],
  story: '',
  links: {
    github: '',
    hosted: ''
  }
}
*/
export const projects = [
  {
    name: 'Grid Battle Game',
    type: 'personal',
    thumbnail: 'https://i.ibb.co/Ns0LRWq/mmbn.png',
    techstack: ['Replit', 'Kaboom.js'],
    story: 'Building the core of an old Game Boy Advance game, that I intend to turn into a mobile game. Currently there is only a player and one enemy. The player can move within their constraints and "shoot" with right-click.',
    links: {
      replit: 'https://replit.com/@tspr0tege/MMBN-1#code/main.js',
      hosted: 'https://mmbn-1.tspr0tege.repl.co/'
    }
  },
  {
    name: 'Quest Log',
    type: 'personal',
    thumbnail: 'https://i.ibb.co/whYYR8V/quest-log.png',
    techstack: ['auth0', 'Axios', 'Babel', 'dotenv', 'Express', 'Font Awesome', 'Heroku', 'PostgreSQL', 'React', 'Sequelize', 'stormdb', 'uuid', 'Webpack'],
    story: 'This app has gone through several early iterations, and will likely go through several more. The ultimate concept is a personal organizer that has RPG elements, and will create a personal journey story through its use. I have yet to create a UI/UX layout that I like, which has much to do with the constant redesigns.',
    links: {
      github: 'https://github.com/tspr0tege/quest-log',
      hosted: 'https://new-quest-log.herokuapp.com/'
    }
  },
  {
    name: 'Project Catwalk',
    type: 'educational',
    thumbnail: null,
    techstack: ['Axios', 'Babel', 'Express', 'Font Awesome', 'Jest', 'jQuery', 'Mocha/Chai', 'React', 'uuid', 'Webpack'],
    story: 'This was a retail website design project that I did as part of a team at Hack Reactor. My part was the overview (main product display). Currently, the project is not viewable, as the API we used for product info no longer exists. I plan to rework the project and create an API to fix this.',
    links: {
      github: 'https://github.com/tspr0tege/Project-Catwalk'
    }
  }
]
