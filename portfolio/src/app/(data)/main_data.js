"use client"
import AboutTitle from "@/component/about/AboutTitle";
import AboutCircle from "@/component/about/AboutCircle";
import { aboutPageCount } from "./about_data";
import HeroTitle from "@/component/hero/HeroTitle";
import HeroCircle from "@/component/hero/HeroCircle";
import ProjectsTitle from "@/component/projects/ProjectsTitle";
import ProjectsCircle from "@/component/projects/ProjectsCircle";
import ContactTitle from "@/component/contact/ContactTitle";
import ContactCircle from "@/component/contact/ContactCircle";


const mainPage = [
    {
        title: HeroTitle,
        circle: HeroCircle,
        sliderVisible: false 
    },
    {
        title: AboutTitle,
        circle: AboutCircle,
        pageCount: aboutPageCount,
        sliderVisible: true 
    },
    {
        title: ProjectsTitle,
        circle: ProjectsCircle,
        pageCount: 1,
        sliderVisible: true 
    },
    {
        title: ContactTitle,
        circle: ContactCircle,
        sliderVisible: false,
    }

]

export default mainPage;