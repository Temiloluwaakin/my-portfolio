import Github from './components/icons/logo-github.png'
import twitter from './components/icons/twitter-icon.png'


import LogoJavascript from './components/icons/icon-javascript.svg';
import LogoTypescript from './components/icons/icon-typescript.svg';
import LogoReact from './components/icons/icon-react.svg';
import LogoNextjs from './components/icons/icon-nextjs.svg';
import LogoNodejs from './components/icons/icon-nodejs.svg';
import LogoExpress from './components/icons/icon-express.svg';
import LogoExpressLight from './components/icons/icon-express-light.svg';
import LogoNest from './components/icons/icon-nest.svg';
import LogoSocket from './components/icons/icon-socket.svg';
import LogoSocketLight from './components/icons/icon-socket-light.svg';
import LogoPostgreSQL from './components/icons/icon-postgresql.svg';
import LogoMongoDB from './components/icons/icon-mongodb.svg';
import LogoSass from './components/icons/icon-sass.svg';
import LogoTailwindcss from './components/icons/icon-tailwindcss.svg';
import LogoFigma from './components/icons/icon-figma.svg';
import LogoCypress from './components/icons/icon-cypress.svg';
import LogoCypressLight from './components/icons/icon-cypress-light.svg';
import LogoStorybook from './components/icons/icon-storybook.svg';
import LogoGit from './components/icons/icon-git.svg';
import darul from './components/images/darul.PNG'
import admin from './components/images/admin.PNG'
import lendsqr from './components/images/lendsqr.PNG'

export const Res_Nav_links = [
    {label: 'Hero', pass: 'hero'},
    {label: 'About', pass: 'about'},
    {label: 'Work', pass: 'work'},
    {label: 'Experience', pass: 'experience'},
]


export const NAV_LINKS = [
    {
      label: 'Work',
      href: 'work',
    },
    {
      label: 'About',
      href: 'about',
    },
    {
      label: 'Experience',
      href: 'experience',
    },
    {
      label: 'Contact',
      href: 'contact',
    },
];
  

export const SOCIAL_LINKS = [
    {
      icon: Github,
      url: 'https://github.com/Temiloluwaakin',
    },
    {
      icon: twitter,
      url: 'https://x.com/itsTemmyy',
    }
];


export const TECHNOLOGIES = [
    {
      label: 'Javascript',
      logo: LogoJavascript,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      label: 'Typescript',
      logo: LogoTypescript,
      url: 'https://www.typescriptlang.org/',
    },
    {
      label: 'React',
      logo: LogoReact,
      url: 'https://react.dev/',
    },
    {
      label: 'Next.js',
      logo: LogoNextjs,
      url: 'https://nextjs.org/',
    },
    {
      label: 'Node.js',
      logo: LogoNodejs,
      url: 'https://nodejs.org/en',
    },
    {
      label: 'Express.js',
      logo: LogoExpress,
      darkModeLogo: LogoExpressLight,
      url: 'https://expressjs.com/',
    },
    {
      label: 'Nest.js',
      logo: LogoNest,
      url: 'https://nestjs.com/',
    },
    {
      label: 'Socket.io',
      logo: LogoSocket,
      darkModeLogo: LogoSocketLight,
      url: 'https://socket.io/',
    },
    {
      label: 'PostgreSQL',
      logo: LogoPostgreSQL,
      url: 'https://www.postgresql.org/',
    },
    {
      label: 'MongoDB',
      logo: LogoMongoDB,
      url: 'https://www.mongodb.com/',
    },
    {
      label: 'Sass/Scss',
      logo: LogoSass,
      url: 'https://sass-lang.com/',
    },
    {
      label: 'Tailwindcss',
      logo: LogoTailwindcss,
      url: 'https://tailwindcss.com/',
    },
    {
      label: 'Figma',
      logo: LogoFigma,
      url: 'https://www.figma.com/',
    },
    {
      label: 'Cypress',
      logo: LogoCypress,
      darkModeLogo: LogoCypressLight,
      url: 'https://www.cypress.io/',
    },
    {
      label: 'Storybook',
      logo: LogoStorybook,
      url: 'https://storybook.js.org/',
    },
    {
      label: 'Git',
      logo: LogoGit,
      url: 'https://git-scm.com/',
    },
];

export const PROJECTS = [
  {
		name: "School LMS", 
		description: "A website for a school that show different details and able to receive messages from people",
		url: 'https://school-result.onrender.com/admin/auth',
		previewImage: admin,
		technologies: [
			'React',
			'Typescript',
			'React Bootstrap',
			'Firebase',
			'Express.js',
			'PostgreSQL',
			'Styled Components',
			'Redux',
		],
	},
	{
		name: "DARUL ATHAR", 
		description: "A website for a school that show different details and able to receive messages from people",
		url: 'https://school-website-gold-omega.vercel.app/',
		previewImage: darul,
		technologies: [
			'React',
			'JavaScript',
			'React Bootstrap',
			'Express.js',
			'MongoDB',
			'Redux',
			'context API'
		],
	},
	{
		name: "Lendsqr", 
		description: "A website for a school that show different details and able to receive messages from people",
		url: 'http://akinboade-temiloluwa-lendsqr-ad6e6fc4a02f.herokuapp.com/',
		previewImage: lendsqr,
		technologies: [
			'React',
			'Typescript',
			'React Bootstrap',
			'Firebase',
			'Express.js',
			'PostgreSQL',
			'Styled Components',
			'Redux',
		],
	}
];