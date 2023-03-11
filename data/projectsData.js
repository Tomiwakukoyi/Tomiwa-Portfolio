import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "Disney X Clone ",
    url: "disney-x-clone",
    category: "Web Application",
    img: "/images/disney.png",
    ProjectHeader: {
      title: "Disney X Clone App",
      publishDate: "Oct, 2022",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Disney X Clone ",
        img: "/images/disney1.png",
      },
      {
        id: uuidv4(),
        title: "Disney X Clone ",
        img: "/images/disney2.png",
      },
      {
        id: uuidv4(),
        title: "Disney X Clone ",
        img: "/images/disney3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web Development",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The main objective was to make a next to perfect Disney X website using React JS",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React JS",
            "Firebase",
            "JavaScript",
            "Redux Toolkit",
            "Styled Component",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "A major challenge I faced was integrating the login feature with Firebase. That was because there was a recent upgrade with Firebase so some of the old syntax wasn't working anymore.",
        },
        {
          id: uuidv4(),
          details:
            "I scaled through by reading through the Firebase docs and using StackOverflow to navigate through the issues and fix them.",
        },
        {
          id: uuidv4(),
          details:
            "A lesser challenge I faced was building the UI. It was pretty straight forward to build and debug because I used styled-components for it.",
        },
      ],
      // SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: "ShopIT Ecommerce",
    url: "shopit",
    category: "Web Application",
    img: "/images/shopit.png",
    ProjectHeader: {
      title: "ShopIT Web APP",
      publishDate: "Nov, 2021",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "ShopIT",
        img: "/images/shopit1.png",
      },
      {
        id: uuidv4(),
        title: "ShopIT",
        img: "/images/shopit2.png",
      },
      {
        id: uuidv4(),
        title: "ShopIT",
        img: "/images/shopit3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Services",
          details: "Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          webdetails: "https://shopit-iota.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The main objective of this project was to create an Ecommerce WebApp with Next Js and Integrate stripe payment with it",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next JS", "Context API", "Sanity", "CSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The major challenge I faced was working with Sanity. This was the first project I used Sanity on a project on but with the help of the docs and a colleague i was able to navigate through the problems.",
        },
        {
          id: uuidv4(),
          details:
            "I also used Context API which was quite challenging but I also had help from a partner who helped me through things I didnt understand.",
        },
        {
          id: uuidv4(),
          details: "Asides that, it was all good thanks to the docs.",
        },
      ],
      // SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 3,
    title: "Youtube Clone",
    url: "youtube-clone",
    category: "Web Devleopment",
    img: "/images/youtube.png",
    ProjectHeader: {
      title: "Youtube Clone App",
      publishDate: "Jul 26, 2021",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Youtube Clone",
        img: "/images/youtube1.png",
      },
      {
        id: uuidv4(),
        title: "Youtube Clone",
        img: "/images/youtube2.png",
      },
      {
        id: uuidv4(),
        title: "Youtube Clone",
        img: "/images/youtube3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: " Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          webdetails: "https://tomiwakukoyi.github.io/youtube-clone",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The plan was to build a web app that was similar to youtube. Not exactly like the youtube website but worked a bit similar to youtube.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Javacript", "React JS", "Material UI", "API", "AXIOS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "On this project, I collaborated with a collegue to work on it and we didnt face issues as it was quite straight forward.",
        },
      ],
      // SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 4,
    title: "InfoCrypto",
    url: "infocrypto",
    category: "Web Application",
    img: "/images/infocrypto.png",
    ProjectHeader: {
      title: "InfoCrypto",
      publishDate: "Apr, 2020",
      tags: "Web & Cloud",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "InfoCrypto",
        img: "/images/infocrypto1.png",
      },
      {
        id: uuidv4(),
        title: "InfoCrypto",
        img: "/images/infocrypto2.png",
      },
      {
        id: uuidv4(),
        title: "InfoCrypto",
        img: "/images/infocrypto3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web App Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          webdetails: "https://tomiwakukoyi.github.io/infocrypto/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The plan for this project was to make a Web App that displays realtime cryptocurrency information which is gotten form an API.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React JS", "Axios", "API", "Ant Design", "Millify"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "On this project, the major  challenge I faced was successfully fetching the necessary data from the API. I was however able to navigate by working with a friend and also consulting google.",
        },
        {
          id: uuidv4(),
          details:
            "The other serious issue I had was the search feature being implemented, it was quite difficult. I however found my wasy round it somehow and ensured the feature was working.",
        },
      ],
      // SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 5,
    title: "Artsy",
    url: "artsy",
    category: "Mobile Application",
    img: "/images/artsy.png",
    ProjectHeader: {
      title: "Artsy",
      publishDate: "Jul, 2022",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Artsy",
        img: "/images/artsy1.png",
      },
      {
        id: uuidv4(),
        title: "Artsy",
        img: "/images/artsy2.png",
      },
      {
        id: uuidv4(),
        title: "Artsy",
        img: "/images/artsy3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          webdetails: "https://tomiwakukoyi.github.io/artsy/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "I saw the design online so i just decided to replicate it.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React JS", "SASS", "IconScout"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "This project was really just basic and straight forward, there were no challenges here.",
        },
      ],
      // SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/realstoman',
      // 	},
      // ],
    },
  },
  // {
  //   id: 6,
  //   title: "Apple New Design System",
  //   url: "apple-new-design-system",
  //   category: "Web Application",
  //   img: "/images/web-project-1.jpg",
  //   ProjectHeader: {
  //     title: "Apple New Design System",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: uuidv4(),
  //       title: "Kabul Apple New Design System",
  //       img: "/images/ui-project-1.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Kabul Apple New Design System",
  //       img: "/images/web-project-2.jpg",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Kabul Apple New Design System",
  //       img: "/images/mobile-project-2.jpg",
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: uuidv4(),
  //         title: "Name",
  //         details: "Company Ltd",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Services",
  //         details: "UI Design & Frontend Development",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Website",
  //         webdetails: "https://company.com",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Phone",
  //         details: "555 8888 888",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Vue.js",
  //           "TailwindCSS",
  //           "AdobeXD",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
  //       },
  //     ],
  //     SocialSharingHeading: "Share This",
  //     // SocialSharing: [
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Twitter',
  //     // 		icon: <FiTwitter />,
  //     // 		url: 'https://twitter.com/realstoman',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Instagram',
  //     // 		icon: <FiInstagram />,
  //     // 		url: 'https://instagram.com/realstoman',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Facebook',
  //     // 		icon: <FiFacebook />,
  //     // 		url: 'https://facebook.com/',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'LinkedIn',
  //     // 		icon: <FiLinkedin />,
  //     // 		url: 'https://linkedin.com/',
  //     // 	},
  //     // 	{
  //     // 		id: uuidv4(),
  //     // 		name: 'Youtube',
  //     // 		icon: <FiYoutube />,
  //     // 		url: 'https://www.youtube.com/c/StomanStudio',
  //     // 	},
  //     // ],
  //   },
  // },
];
