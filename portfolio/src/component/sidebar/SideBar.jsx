import React from 'react';
import style from "../../style/component/Sidebar.module.scss";
import { CgDarkMode } from "react-icons/cg";
import {AiOutlineRight, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {MdEmail} from "react-icons/md"

function SideBar() {
  return (
    <div className= {style.container}>
      <CgDarkMode className= {style.icon} />
      <MdEmail className= {style.icon} />
      <AiFillGithub className= {style.icon} />
      <AiFillLinkedin className= {style.icon} />
      <AiOutlineRight className= {style.sideIcon} />
    </div>
  )
}

export default SideBar