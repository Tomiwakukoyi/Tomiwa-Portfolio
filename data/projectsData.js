import { v4 as uuidv4 } from "uuid";

export const projectsData = [
  {
    id: 1,
    title: "Spotify Clone ",
    url: "spotify-clone",
    category: "Web Application",
    img: "/images/spotify.png",
    ProjectHeader: {
      title: "Spotify Clone",
      publishDate: "Feb, 2023",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Spotify Clone",
        img: "/images/spotify1.png",
      },
      {
        id: uuidv4(),
        title: "Spotify Clone",
        img: "/images/spotify2.png",
      },
      {
        id: uuidv4(),
        title: "Spotify Clone",
        img: "/images/spotify3.png",
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
        {
          id: uuidv4(),
          title: "Website",
          webdetails: "https://spotify-clone-tomiwakukoyi.vercel.app/",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The objective was to make a web app like spotify and also get some live data from the spotify API",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React JS",
            "Spotify API / Spotify Web API",
            "JavaScript",
            "Context API",
            "CSS",
            "Materal UI",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The major challeneg I faced while  working on this project was working with the spotify API. Thanks to 'Spotify Web API Js that made getting around the spotify API a bit easy, it was still difficult.",
        },
        {
          id: uuidv4(),
          details:
            "The javascript was a bit to complex, also adding Context API to it just made it even more difficult and quite confusing honestly.",
        },
        {
          id: uuidv4(),
          details:
            "I at the end with the help of friends and online resources scaled through all problems and eventually got the APP to work. Apart from that, there wasn't really anything too challenging.",
        },
      ],
    },
  },
  {
    id: 2,
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
        {
          id: uuidv4(),
          title: "Website",
          webdetails: "https://github.com/Tomiwakukoyi/disneyclone.git",
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
    },
  },
  {
    id: 3,
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
    },
  },
  {
    id: 4,
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
    },
  },
  {
    id: 7,
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
