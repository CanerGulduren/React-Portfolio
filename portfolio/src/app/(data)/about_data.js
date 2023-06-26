import {FaReact, FaHtml5, FaCss3, FaSass, FaJs, FaBootstrap, FaGitAlt, FaMobile } from "react-icons/fa"
import {SiRedux, SiNextdotjs, SiJquery, SiAdobephotoshop, SiCanva} from "react-icons/si"
import {MdMovieEdit} from "react-icons/md";
import {TbSeo} from "react-icons/tb"

const frontEndSkills = [
  {
    key: 11,
    component: <FaReact />,  
    name: "React"
  },
  {
      key: 12,
      component: <FaJs />,
      name: "Javascript"
    },
    {
      key: 13,
      component: <FaCss3 />,  
      name: "Css"
    },
    {
      key: 14,
      component: <FaSass />,  
      name: "Sass"
    },
    {
      key: 15,
      component: <FaBootstrap />,  
      name: "Bootstrap"
    },
    {
      key: 16,
      component: <FaHtml5 />,  
      name: "Html"
    },
    {
      key: 17,
      component: <SiNextdotjs />,  
      name: "Next.js"
    },
    {
      key: 18,
      component: <SiRedux />,  
      name: "Redux"
    },
    {
      key: 19,
      component: <SiJquery />,
      name: "Jquery"
    }
]

const otherSkills = [
  {
      key: 3,
      component: <SiAdobephotoshop />,
      name: "Photoshop"
  },
  {
      key: 4,
      component: <TbSeo />,
      name: "On-Page SEO"
  },
  {
      key: 5,
      component: <FaGitAlt />,
      name: "Git"
  },
  {
      key: 6,
      component: <MdMovieEdit />,
      name: "Da Vinci Resolve"
  },
  {
      key: 7,
      component: <FaMobile />,
      name: "Responsive Design"
  },
   {
      key: 8,
      component: <SiCanva />,
      name: "Canva"
  }
]

const aboutData = [
    {
        title: "About Me",
        content: "Benim adım caner falan filan bu bir deneme",
        square: [...frontEndSkills]
    },
    {
        title: "lorem bla",
        content: "DENEMEEEEE",
        square: [...otherSkills]
    },
]

export let aboutPageCount = aboutData.length

export default aboutData