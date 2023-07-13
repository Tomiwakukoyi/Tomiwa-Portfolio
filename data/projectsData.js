import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "Netflix Full Stack App  ",
    url: "netflix",
    category: "Web Application",
    img: "/images/netflix7.png",
    ProjectHeader: {
      title: "Netflix Full Stack App ",
      publishDate: "July, 2023",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Netflix ",
        img: "/images/netflix7.png",
      },
      {
        id: uuidv4(),
        title: "Spotify ",
        img: "/images/netflix4.png",
      },
      {
        id: uuidv4(),
        title: "Spotify ",
        img: "/images/netflix6.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "",
      CompanyInfo: [
        // {
        //   id: uuidv4(),
        //   title: "Type",
        //   details: "Personal Project",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "Web Development",
        // },
        {
          id: uuidv4(),
          title: "Live link",
          webdetails: "https://netflix-929c1.web.app/",
        },
        {
          id: uuidv4(),
          title: "GitHub",
          webdetails: "https://github.com/Tomiwakukoyi/netflix.git",
        },
      ],
      // ObjectivesHeading: "Objective",
      // ObjectivesDetails:
      //   " ",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React JS",
            "Firebase",
            "JavaScript",
            "Redux",
            "CSS",
            "React-router-dom",
            "Authentication",
            "REST APIs",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "I needed a tasking project to test my knowledge on some key React concepts and tools like Redux, REST APIs, React-router-dom, Firebase etc.",
        },
        {
          id: uuidv4(),
          details:
            "This is by far the most  difficult project I've worked on, it was very complex becaue I had to implement Firebase authenticationa and Firebase db for storing signed up users",
        },
        {
          id: uuidv4(),
          details:
            "I implemented the Netflix homepage, which gave the option for SignUp and SignIn as the case may be. Once signed in, Redux and Firebase works together to then authenticate and update the global state and renders the home page. The home page contains live movie data gotten from The Movie Database API which is then displayed",
        },
        {
          id: uuidv4(),
          details:
            "For new users, when after inputing your email and password, click the signup button/link below the signin one. If not, an error will be thrown. After Signing up once, you can use that same details to always enter this app.",
        },
        {
          id: uuidv4(),
          details:
            "It was deployed using Firebase hosting. It is also mobile responsive and can be used on all devices.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "ShopIt Full-Stack Ecommerce App",
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
      CompanyInfo: [
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "Frontend Development",
        // },
        {
          id: uuidv4(),
          title: "Live Link",
          webdetails: "https://shopit-iota.vercel.app/",
        },
        {
          id: uuidv4(),
          title: "GitHub",
          webdetails: "https://github.com/Tomiwakukoyi/shopit.git",
        },
      ],
      // ObjectivesHeading: "Objective",
      // ObjectivesDetails:
      //   "The main objective of this project was to create an Ecommerce WebApp with Next Js and Integrate stripe payment with it",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next JS", "Context API", "Sanity", "CSS"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "This project is a full stack fully functional Ecommerce website built with Next JS as the main framework, Context API for managing states, Sanity for content management and vanilla css for the styling.",
        },
        {
          id: uuidv4(),
          details:
            "This was the first project I used Sanity on and it proved quite difficult navigating through Sanity and connecting it to my frontend. Through collaborations with friends and with the help of the docs I was able to navigate through the problems I had to get my desired solution.",
        },
        {
          id: uuidv4(),
          details:
            "This was also the first time I would be using Context API on a project like this and it was quite challenging but I also had help from a partner who helped me through things I didnt understand. Though, the syntax was similar to that of Redux",
        },
        {
          id: uuidv4(),
          details:
            "This Ecommerce website is also fully functional including the adding to and removal from cart, increasing items, Item description and other functionalities. It is also fully mobile responsive.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Spotify  ",
    url: "spotify-clone",
    category: "Web Application",
    img: "/images/spotify.png",
    ProjectHeader: {
      title: "Spotify ",
      publishDate: "Feb, 2023",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Spotify ",
        img: "/images/spotify1.png",
      },
      {
        id: uuidv4(),
        title: "Spotify ",
        img: "/images/spotify2.png",
      },
      {
        id: uuidv4(),
        title: "Spotify ",
        img: "/images/spotify3.png",
      },
    ],
    ProjectInfo: {
      CompanyInfo: [
        // {
        //   id: uuidv4(),
        //   title: "Name",
        //   details: "Personal Project",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "Web Development",
        // },
        {
          id: uuidv4(),
          title: "Live Link",
          webdetails: "https://spotify-clone-tomiwakukoyi.vercel.app/",
        },
        {
          id: uuidv4(),
          title: "GitHub",
          webdetails: "https://github.com/Tomiwakukoyi/spotify-clone.git",
        },
      ],
      // ObjectivesHeading: "Objective",
      // ObjectivesDetails:
      //   "The objective was to make a web app like spotify and also get some live data from the spotify API",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React JS",
            "Spotify API",
            "JavaScript",
            "Context API",
            "CSS",
            "Materal UI",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "This is a Full Stack spotify clone web app, fully functional with all the Authentication and real music data gotten from the Spotify API. I made use of React for the framework and Context API for the state management. Material UI/ CSS was used for styling this project.",
        },
        {
          id: uuidv4(),
          details:
            "The most significant challenge I overcame working on this project is consuming data from the Spotify API. Thanks to 'Spotify Web API Js that made getting around the spotify API a bit easy, it was still difficult. I also consulted some senior devs for assistance while trying to consume the data from the API.",
        },
        {
          id: uuidv4(),
          details:
            "The main UI wasnt that difficult to put together, a bit straight forward. Context API also wasn't difficult to use too and this build was fun.",
        },
      ],
    },
  },

  // {
  //   id: 2,
  //   title: "Disney X  ",
  //   url: "disney-x-clone",
  //   category: "Web Application",
  //   img: "/images/disney.png",
  //   ProjectHeader: {
  //     title: "Disney X  App",
  //     publishDate: "Oct, 2022",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: uuidv4(),
  //       title: "Disney X  ",
  //       img: "/images/disney1.png",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Disney X  ",
  //       img: "/images/disney2.png",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Disney X  ",
  //       img: "/images/disney3.png",
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: uuidv4(),
  //         title: "Name",
  //         details: "Personal Project",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Services",
  //         details: "Web Development",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Website",
  //         webdetails: "https://github.com/Tomiwakukoyi/disneyclone.git",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "The main objective was to make a next to perfect Disney X website using React JS",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: [
  //           "React JS",
  //           "Firebase",
  //           "JavaScript",
  //           "Redux Toolkit",
  //           "Styled Component",
  //         ],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: uuidv4(),
  //         details:
  //           "A major challenge I faced was integrating the login feature with Firebase. That was because there was a recent upgrade with Firebase so some of the old syntax wasn't working anymore.",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "I scaled through by reading through the Firebase docs and using StackOverflow to navigate through the issues and fix them.",
  //       },
  //       {
  //         id: uuidv4(),
  //         details:
  //           "A lesser challenge I faced was building the UI. It was pretty straight forward to build and debug because I used styled-components for it.",
  //       },
  //     ],
  //   },
  // },

  // {
  //   id: 4,
  //   title: "Youtube ",
  //   url: "youtube-clone",
  //   category: "Web Devleopment",
  //   img: "/images/youtube.png",
  //   ProjectHeader: {
  //     title: "Youtube  App",
  //     publishDate: "Jul 26, 2021",
  //     tags: "UI / Frontend",
  //   },
  //   ProjectImages: [
  //     {
  //       id: uuidv4(),
  //       title: "Youtube ",
  //       img: "/images/youtube1.png",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Youtube ",
  //       img: "/images/youtube2.png",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Youtube ",
  //       img: "/images/youtube3.png",
  //     },
  //   ],
  //   ProjectInfo: {
  //     ClientHeading: "About Client",
  //     CompanyInfo: [
  //       {
  //         id: uuidv4(),
  //         title: "Name",
  //         details: "Personal Project",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Services",
  //         details: " Frontend Development",
  //       },
  //       {
  //         id: uuidv4(),
  //         title: "Website",
  //         webdetails: "https://tomiwakukoyi.github.io/youtube-clone",
  //       },
  //     ],
  //     ObjectivesHeading: "Objective",
  //     ObjectivesDetails:
  //       "The plan was to build a web app that was similar to youtube. Not exactly like the youtube website but worked a bit similar to youtube.",
  //     Technologies: [
  //       {
  //         title: "Tools & Technologies",
  //         techs: ["Javacript", "React JS", "Material UI", "API", "AXIOS"],
  //       },
  //     ],
  //     ProjectDetailsHeading: "Challenge",
  //     ProjectDetails: [
  //       {
  //         id: uuidv4(),
  //         details:
  //           "On this project, I collaborated with a collegue to work on it and we didnt face issues as it was quite straight forward.",
  //       },
  //     ],
  //   },
  // },
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
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Personal Project Solution",
        },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "Web App Development",
        // },
        {
          id: uuidv4(),
          title: "Live Link",
          webdetails: "https://tomiwakukoyi.github.io/infocrypto/",
        },
        {
          id: uuidv4(),
          title: "GitHub",
          webdetails: "https://github.com/Tomiwakukoyi/infocrypto.git",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The plan for this project was to make a Web App that displays realtime cryptocurrency information which is gotten form an API and also display news about Crypto Currencies as I was into Crypto at the time.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React JS", "Axios", "API", "Ant Design", "Millify"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "This build was an interesting one for me, using techs like Axios and Ant Design I had just learnt. The main framework used was React Js. All the data displayed on this project are realtime data gotten from an API including the crypto prices and even the crypto news.",
        },
        {
          id: uuidv4(),
          details:
            "This build wasnt really difficult, the API was pretty straight forward to destructure and so I was able to get out the data and interpret them on the UI quite straightforwardly.",
        },
        {
          id: uuidv4(),
          details:
            "The serious challenge I faced was implementing the search feature as that was the first time I'll be doing that. I made use of API docs and stackoverflow to navigate this challenge. ",
        },
      ],
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
        // {
        //   id: uuidv4(),
        //   title: "Name",
        //   details: "Personal Project",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: uuidv4(),
          title: "Live Link",
          webdetails: "https://tomiwakukoyi.github.io/artsy/",
        },
        {
          id: uuidv4(),
          title: "GitHub",
          webdetails: "https://github.com/Tomiwakukoyi/artsy.git",
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
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "I made use of React Js, SASS for the styling and IconScout for the icons. ",
        },
        {
          id: uuidv4(),
          details:
            "This project was really just basic and straight forward, there were no challenges here. I didn't make it mobile reponsive and left as desktop view only.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Google Clone",
    url: "Google-clone",
    category: "Web Application",
    img: "/images/google.png",
    ProjectHeader: {
      title: "Google Clone App",
      publishDate: "Mar, 2023",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Google",
        img: "/images/google.png",
      },
      {
        id: uuidv4(),
        title: "Google",
        img: "/images/google1.png",
      },
      {
        id: uuidv4(),
        title: "Google",
        img: "/images/google2.png",
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
          webdetails: "https://googleclone-jade.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The plan was to make a web app that looked almost exactly and performed like Google using React JS.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React JS",
            "CSS",
            "Context API",
            "React-Router",
            "Google Custom Search API",
            "Material UI",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Building the UI of this web app wasn't that difficult as I am familiar with the Google UI already. I basically just replicated the Homepage quite easily.",
        },
        {
          id: uuidv4(),
          details:
            "A challenging part on this project was when I was working with the context Api. It was really tricky but I think I'm getting a hang of it already. Calling the API from google was pretty straightforward.",
        },
        {
          id: uuidv4(),
          details:
            "Another intersting aspect of this project was when I had to create my own custom hook for calling the API data. Custom hooks are really great!",
        },
      ],
    },
  },
];
