import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, BriefcaseBusiness, Award, FolderOpenDot} from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import CapgeminiLogo from '$lib/imgs/capgemini.png';
import HighradiusLogo from '$lib/imgs/Highradius.png';
import KalahandiUniLogo from '$lib/imgs/KalahandiUniversity.jpeg';
import GIETLogo from '$lib/imgs/GIET.png';
import LagazonLogo from '$lib/imgs/Lagazon.jpeg';
import ProfileLogo from '$lib/imgs/profile.jpg';
import SnakeAiImg from '$lib/imgs/SnakeAi.png';
import EcommerceImg from '$lib/imgs/Ecommerce.png';
import VisualizerImg from '$lib/imgs/Visualizer.png';
import MazeGenImg from '$lib/imgs/MazeGen.png';

// Your resume data
export let DATA = {
	name: 'Suprada Tripathy',
	initials: 'ST',
	url: 'https://github.com/Suprada-2002',
	img: 'https://drive.google.com/file/d/1v9FzQqg0SlhhDQOvOgQSSeUl9KXzahPe/view',
	location: 'Pune, India',
	locationLink: 'https://www.google.com/maps/place/pune',
	description:
		'Full Stack Web Developer. I love building things and helping people. Here and there Linux Enthusiast.',
	summary:'Dedicated software engineer with 2 years of experience specializing in Java full stack development. My expertise lies in leveraging Spring Boot to build robust and scalable applications. Strong background in working with Azure, ensuring seamless cloud integration and deployment. Additionally, I have a passion for Linux, which I often use to enhance my development workflow and system administration tasks.',
	// summary:
	// 	'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Sil// icon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
	
	avatarUrl: ProfileLogo,
	skills: [
		'Svelte',
		'Sveltekit',
		'Typescript',
		'Node.js',
		'Selenium',
		'SpringBoot',
		'Postgres',
		'Docker',
		'Kubernetes',
		'Java',
		'C++'
	],

	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '#skills', icon: NotebookIcon, label: 'Skills' },
		{ href: '#work', icon: BriefcaseBusiness, label: 'Experience' },
		{ href: '#projects', icon: FolderOpenDot, label: 'Projects' },
	],

	contact: {
		email: 'supradatripathy@gmail.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Suprada-2002',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/suprada-tripathy-2981a1201/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},

	education: [
		{
			company: 'B.Tech In Computer Science',
			href: 'https://www.capgemini.com/',
			badges: [],
			location: 'Gunupur, Odisha, India',
			title: 'Gandhi Institute of Engineering and technology.',
			logoUrl: GIETLogo,
			start: '2019',
			end: '2023',
			description:
				'CGPA: 9.1 ',

		},
		{
			company: 'Higher Seconday',
			badges: [],
			href: 'https://www.highradius.com/',
			location: 'Kalahandi, Odisha, India',
			title: 'Kalahandi Univerity',
			logoUrl: KalahandiUniLogo,
			start: '2017',
			end: '2019',
			description:
				'Subjects: PCMB',
		},
	],

	work: [
		{
			school: 'Buildspace',
			href: 'https://buildspace.so',
			degree: 's3, s4, sf1, s5',
			logoUrl: CapgeminiLogo,
			start: '2023',
			end: '2024'
		},
		{
			school: 'University of Waterloo',
			href: 'https://uwaterloo.ca',
			degree: "Bachelor's Degree of Computer Science (BCS)",
			logoUrl: CapgeminiLogo,
			start: '2016',
			end: '2021'
		},
		{
			school: 'Wilfrid Laurier University',
			href: 'https://wlu.ca',
			degree: "Bachelor's Degree of Business Administration (BBA)",
			logoUrl: CapgeminiLogo,
			start: '2016',
			end: '2021'
		},
		{
			school: 'International Baccalaureate',
			href: 'https://ibo.org',
			degree: 'IB Diploma',
			logoUrl: CapgeminiLogo,
			start: '2012',
			end: '2016'
		}
	],

	projects: [
		{
			title: 'Visualizer',
			href: 'https://www.google.com',
			dates: 'Jan 2024 - Feb 2024',
			active: true,
			description:
				'A Web application for visualizing different algorithms. It has viusalization for sorting, searching algorithms and path finding algorithms.',
			technologies: [
				'React.js',
				'Javascript',
				'Algoirhtms',
				'SCSS',
				'TailwindCSS',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.google.com',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/Suprada-2002/visualizer',
					// icon: <Icons.globe className="size-3" />,
					icon: Github
				}
			],
			image: VisualizerImg,
			video: ''
		},
		{
			title: 'Snake AI',
			href: 'https://snake-ai-inky.vercel.app/visualization',
			dates: 'June 2023 - Present',
			active: true,
			description: 'Visualization of A* search algorithm using Snake Game.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://snake-ai-inky.vercel.app/visualization',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/Suprada-2002/snake_AI',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: SnakeAiImg,
			video: ''
		},
		{
			title: 'Maze Generation',
			href: 'https://suprada-2002.github.io/Maze-Generation-using-DFS/',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'Web Application to visualize maze generation using DFS (Depth First Search) Algroithm.',
			technologies: [
				'Javascript',
				'DFS',
				'Algorithm',
				'SCSS',
				'TailwindCSS',
				'HTML',
			],
			links: [
				{
					type: 'Website',
					href: 'https://suprada-2002.github.io/Maze-Generation-using-DFS/',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/Suprada-2002/Maze-Generation-using-DFS',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: MazeGenImg,
			video: ''
		},
		{
			title: 'Ecommerce Website',
			href: 'https://www.google.com',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				'A Ecommerce application to surf and buy goods and nessitites.',
			technologies: [
				'Java',
				'SpringBoot',
				'PostgreSQL',
				'React.js',
				'Git',
				'Intellij',
				'Restful APIs'
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.google.com',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://www.google.com',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: EcommerceImg,
			video: ''
		}
	],
	workProfile: [
		{
			title: 'Capgemini',
			dates: 'December 2023 - current',
			location: 'Pune, Maharastra',
			description:
				'Working as Full Stack developer. Collborated with multiple teams and learned to be a team player and enhanced my communication skills.',
			image: CapgeminiLogo,
			tags: ['Java', 'SpringBoot', 'MVC','React.js', 'Azure','Tailwind CSS', 'Selenium Automation','MySQL', 'PostgresSQL'],
			links: [
				{
					title: 'Website',
					icon: Globe,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://www.capgemini.com'
				},
				{
					title: 'Certificate',
					icon: Award,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://drive.google.com/file/d/1NtIG8CLuMYHIto-zU8u-L6qlt-BmWVvm/view?usp=sharing'
				},
			]
		},
		{
			title: 'Highradius Corporation',
			dates: 'June 2022 - April 2023',
			location: 'Bhubneswar, Odisha',
			description:
				'Gained expertise in Full Stack Web Development. Worked with product team, learned and applied Agile Methodology.',
			image: HighradiusLogo,
			tags: ['React.js', 'Java', 'SpringBoot', 'Material UI', 'Tailwind CSS', 'JUnit','MySQL', 'MongoDB','Agile'],
			links: [
				{
					title: 'Website',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://www.highradius.com/'
				},
				{
					title: 'Certificate',
					icon: Award,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://drive.google.com/file/d/1-SN7iHuVJDDhMfuBfluQIjCjAO1f0m_e/view?usp=sharing'
				},
			]
		},
		{
			title: 'Lagazon Edutech',
			dates: 'May 2021 - July 2021',
			location: 'Remote', 
			description:
				'Completed a 2 months Internship and gained insightful knowledge in Power BI. Learned concepts like Data visualization and Modeling',
			image: LagazonLogo,
			tags: ['Power BI', 'Data Visualization', 'Data Modeling', 'ETL Process', 'Tailwind CSS', 'DAX','MySQL', 'Data Cleaning & Warehousing'],
			links: [
				{
					title: 'Website',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://www.lagozonedutech.com/'
				},
				{
					title: 'Certificate',
					icon: Award,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://drive.google.com/file/d/1xRHsJZHfzGN72FeLSk1r7Zrmzj_gnnsN/view'
				},
			]
		},
	]

};
