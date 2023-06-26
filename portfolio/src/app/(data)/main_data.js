"use client"
import AboutTitle from "@/component/about/AboutTitle";
import AboutSquare from "@/component/about/AboutSquare";
import { aboutPageCount } from "./about_data";
import { projectsPageCount } from "./projects_data";
import HeroTitle from "@/component/hero/HeroTitle";
import HeroSquare from "@/component/hero/HeroSquare";
import ProjectsTitle from "@/component/projects/ProjectsTitle";
import ProjectsSquare from "@/component/projects/ProjectsSquare";
import ContactTitle from "@/component/contact/ContactTitle";
import ContactSquare from "@/component/contact/ContactSquare";


const mainPage = [
    {
        title: HeroTitle,
        square: HeroSquare,
        sliderVisible: false 
    },
    {
        title: AboutTitle,
        square: AboutSquare,
        pageCount: aboutPageCount,
        sliderVisible: true 
    },
    {
        title: ProjectsTitle,
        square: ProjectsSquare,
        pageCount: projectsPageCount,
        sliderVisible: true 
    },
    {
        title: ContactTitle,
        square: ContactSquare,
        sliderVisible: false,
    }

]

export default mainPage;