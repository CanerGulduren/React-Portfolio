import React from 'react'
import Image from "next/image"
import NavLinks from "./NavLinks"
import logo from "../../public/logo_light.png"
import style from "../../style/component/Navbar.module.scss"
import navLinks from "../../app/(data)/navLinks.js"
import {CgDarkMode} from 'react-icons/cg';

function Navbar() {
  return (
    <nav className = {style.nav}>
      <Image
      src={logo}
      alt='logo'
      className= {style.logo}
      />
      
      <div className = {style.linkContainer}>
        <NavLinks navLinks = {navLinks} />
        <CgDarkMode />
      </div>
    </nav>
  )
}

export default Navbar