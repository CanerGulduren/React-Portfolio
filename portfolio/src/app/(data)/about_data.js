import {
  FaReact,
  FaCss3,
  FaSass,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaMobile,
  FaUser,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiJquery,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";
import { MdMovieEdit } from "react-icons/md";
import { TbSeo } from "react-icons/tb";

const frontEndSkills = [
  {
    key: 17,
    component: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    key: 15,
    component: <FaBootstrap />,
    name: "Bootstrap",
  },

  {
    key: 11,
    component: <FaReact />,
    name: "React",
  },
  {
    key: 19,
    component: <SiJquery />,
    name: "Jquery",
  },
  {
    key: 14,
    component: <FaSass />,
    name: "Sass",
  },

  
];

const otherSkills = [
  {
    key: 5,
    component: <FaGitAlt />,
    name: "Git",
  },
  {
    key: 4,
    component: <TbSeo />,
    name: "On-Page SEO",
  },
  {
    key: 3,
    component: <SiAdobephotoshop />,
    name: "Photoshop",
  },
  {
    key: 6,
    component: <MdMovieEdit />,
    name: "Da Vinci Resolve",
  },
  {
    key: 7,
    component: <FaMobile />,
    name: "Responsive Design",
  },
];

const side1 = [
  {
    key: 12,
    component: <FaJs />,
    name: "Javascript",
  },
  {
    key: 13,
    component: <FaCss3 />,
    name: "Css",
  },
];

const side2 = [
  {
    key: 9,
    component: <FaUser />,
    name: "UX Design",
  },
  {
    key: 8,
    component: <SiCanva />,
    name: "Canva",
  },
];

const aboutData = [
  {
    title: "About Me",
    content: "Benim adım caner falan filan bu bir deneme",
    square: [...frontEndSkills],
    sideSquare1: side1[0],
    sideSquare2: side1[1],
  },
  {
    title: "lorem bla",
    content: "DENEMEEEEE",
    square: [...otherSkills],
    sideSquare1: side2[0],
    sideSquare2: side2[1],
  },
];

export let aboutPageCount = aboutData.length;

export default aboutData;
