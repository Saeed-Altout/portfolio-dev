import user1 from "./people-01.png";
import user2 from "./people-02.png";
import user3 from "./people-03.png";
import leon from "./Leon-01.jpg";
import metaversus from "./Metaversus-01.jpg";
import kasper from "./kasper-01.jpg";
import kinHeart from "./Kind-Heart-01.jpg";
import dashboard from "./Dashboard-01.jpg";
import bondi from "./Boinde-01.jpg";
import zay from "./Zay-01.jpg";
import devBook from "./devBook-01.jpg";
import hooBank from "./hooBank-01.jpg";
import proInfo from "./Pro Info-01.jpg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInfoCircle,
  AiFillCustomerService,
  AiFillProject,
  AiFillRocket,
  AiFillWindows,
  AiFillHome,
  AiFillWechat,
} from "react-icons/ai";
import web1 from "../data/web1.png";
import web2 from "../data/web2.png";
import web3 from "../data/web3.png";
import web4 from "../data/web4.png";
import web5 from "../data/web5.png";
import web6 from "../data/web6.png";
import service1 from "../data/service-icon-01.png";
import service2 from "../data/service-icon-02.png";
import service3 from "../data/service-icon-03.png";
import { BsMicrosoft } from "react-icons/bs";
export const NavLinks = [
  {
    id: 1,
    icon: <AiFillHome />,
    title: "home",
  },
  {
    id: 2,
    icon: <AiFillInfoCircle />,
    title: "about",
  },
  {
    id: 3,
    icon: <AiFillWindows />,
    title: "services",
  },
  {
    id: 4,
    icon: <AiFillProject />,
    title: "portfolio",
  },
  {
    id: 5,
    icon: <AiFillWechat />,
    title: "testimonials",
  },
  {
    id: 6,
    icon: <AiFillRocket />,
    title: "get started",
  },
  {
    id: 7,
    icon: <AiFillCustomerService />,
    title: "contact us",
  },
];
export const SocialIcons = [
  {
    id: 1,
    icon: <AiFillTwitterCircle />,
    title: "Twitter",
  },
  {
    id: 2,
    icon: <AiFillLinkedin />,
    title: "Linkedin",
  },
  {
    id: 3,
    icon: <AiFillYoutube />,
    title: "Youtube",
  },
];

export const OurServices = [
  {
    id: 1,
    imgUrl: service1,
    title: "Beautiful Designs",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    services: ["Photoshop", "Illustrator", "Figma", "Indesign"],
  },
  {
    id: 2,
    imgUrl: service2,
    title: "Code your dream project",
    description:
      "Do you have an idea for your next great website? Let's make it areality.",
    services: [
      "ReactJs 18",
      "NextJs 13",
      "Vite",
      "Tailwind Css",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    imgUrl: service3,
    title: "Consulting",
    description: `Are you interested in feedback for your current project? I can give
      you tips and tricks to level it up.`,
    services: [
      "Online For 24H",
      "Responsive Fast And Good",
      "Very Fast",
      "Friendlily",
    ],
  },
];

export const Projects = [
  {
    id: 1,
    imgUrl: web1,
    title: "Nike Air Max 270",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 2,
    imgUrl: web2,
    title: "Look For Elegant ",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 3,
    imgUrl: web3,
    title: "Onboarding",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 4,
    imgUrl: web4,
    title: "Smart Bouquet",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 5,
    imgUrl: web5,
    title: "Work faster",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 6,
    imgUrl: web6,
    title: "Creative For Everyone",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },

  {
    id: 7,
    imgUrl: dashboard,
    title: "Dashboard",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
    linkUrl: "https://moderdashboard.netlify.app/",
  },
  {
    id: 8,
    imgUrl: metaversus,
    title: "Metaversus",
    linkUrl: "https://modernmetaversus.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 9,
    imgUrl: zay,
    title: "Zay",
    linkUrl: "https://modernzay.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 10,
    imgUrl: leon,
    title: "Leon",
    linkUrl: "https://modernleon.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 11,
    imgUrl: bondi,
    title: "Bondi",
    linkUrl: "https://modernbondi.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 12,
    imgUrl: kasper,
    title: "Kasper",
    linkUrl: "https://modernkasper.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 13,
    imgUrl: proInfo,
    title: "Pro Info",
    linkUrl: "https://modernelzero.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 14,
    imgUrl: kinHeart,
    title: "kind Heart",
    linkUrl: "https://modernkindheart.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 15,
    imgUrl: devBook,
    title: "devBook",
    linkUrl: "https://moderndevbook.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
  {
    id: 16,
    imgUrl: hooBank,
    title: "HooBank",
    linkUrl: "https://modernhoobank2.netlify.app/",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    categories: ["React js | ", "TailwindCss | ", "Redux | ", "Hooks"],
  },
];
export const dataThinkCommunity = [
  {
    id: "user1",
    imgUrl: user1,
    name: "Jon Doe",
    positionJob: "Developer",
    comment:
      "we have the latest update with new world for you to try never mind",
  },
  {
    id: "user2",
    imgUrl: user2,
    name: "Alexander Doe",
    positionJob: "Software Engineer",
    comment:
      "we have the latest update with new world for you to try never mind",
  },
  {
    id: "user3",
    imgUrl: user3,
    name: "Ali Mohammad",
    positionJob: "Engineer",
    comment:
      "we have the latest update with new world for you to try never mind",
  },
];
export const startSteps = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];
export const MyExperiences = [
  {
    id: 1,
    data: "2022-7-26 - 2022-10- 31",
    title: "Ghiras Development Association",
    description:
      "Electronic Maintenance Technician Dealing with electronic components in the modern world has increased, especially after the emergence of processors and transistors, and therefore it became my duty as a student of medical engineering to understand some things about this field, so I registered for a training course at the Ghiras Development Association in cooperation with the United Nations Development Organization to engage in a course of about three years Months with an average of 8 hours a day, a day, and I finally got a certificate with an excellent grade, so I am really happy.",
  },
  {
    id: 2,
    data: "2019-7-15",
    title: "Programming",
    description:
      "Developer Front-end The programming company is a leading company in the field of programming and design, and it is a small company under development. I think this is a good opportunity for me to prove my skills in web programming and user interface development",
  },
];
export const MyCourses = [
  {
    id: 1,
    icon: <BsMicrosoft />,
    title: "Microsoft Word",
  },
  {
    id: 2,
    icon: <BsMicrosoft />,
    title: "C++",
  },
  {
    id: 3,
    icon: <BsMicrosoft />,
    title: "Html5, Css3, Sass, Bootstrap5, JavaScript & Json",
  },
  {
    id: 4,
    icon: <BsMicrosoft />,
    title: "React js",
  },
  {
    id: 5,
    icon: <BsMicrosoft />,
    title: "Tailwind Css",
  },
];
export const MyInterests = [
  {
    id: 1,
    title: "Programming",
  },
  {
    id: 2,
    title: "Design & Graphic design",
  },
  {
    id: 3,
    title: "Technology",
  },
  {
    id: 4,
    title: "Swimming",
  },
  {
    id: 5,
    title: "Football",
  },
  {
    id: 6,
    title: "Running",
  },
  {
    id: 7,
    title: "Reading",
  },
];
export const MySkills = [
  {
    id: 1,
    title: "Html5",
  },
  {
    id: 2,
    title: "Css3",
  },
  {
    id: 3,
    title: "JavaScript & ES7",
  },
  {
    id: 4,
    title: "Sass & Scss",
  },
  {
    id: 5,
    title: "Json",
  },
  {
    id: 6,
    title: "Bootstrap5",
  },
  {
    id: 7,
    title: "Tailwind Css",
  },
  {
    id: 8,
    title: "jQuery3",
  },
  {
    id: 9,
    title: "ReactJs18",
  },
  {
    id: 10,
    title: "NextJs13",
  },
];
export const Educations = [
  {
    id: 1,
    title: "Damascus University",
    data: "2020-9-15 - 2025-9-15",
    description: "Biomedical Engineering",
  },
];
export const InfoPersonal = [
  {
    id: 1,
    title: "Name",
    content: "Saeed Al-tout",
  },
  {
    id: 2,
    title: "Birthday",
    content: "2000-2-3",
  },
  {
    id: 3,
    title: "Phone",
    content: "+963940043810",
  },
  {
    id: 4,
    title: "Country",
    content: "Douma-Rif-Damascus",
  },
  {
    id: 5,
    title: "E-mail",
    content: "saeedaltoutsy@gmail.com",
  },
  {
    id: 6,
    title: "Website",
    content: "https://portfolio-saeed-dev.netlify.app/",
  },
];
