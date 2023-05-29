"use client"
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "../../public/logo_light.png";
import style from "../../style/component/Navbar.module.scss";
import navLinks from "../../app/(data)/navLinks.js";
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { btnClick } from "../../redux/features/menuBtnSlice";

function NavBarLinks({linkStyle, showContent}) {
  return(
    <div className = {linkStyle}>
      <NavLinks navLinks = {navLinks}/>
      {showContent && <span>Select Theme</span>}
    </div>
  )
}

function Navbar() {

  const router = useRouter()
  
  const showContent = useSelector( (state) => state.menuBtn.value)
  const dispatch = useDispatch()
  const menuChange = () => dispatch(btnClick(!showContent))

  return (
    <nav className = {style.nav}>
      <Image src = {logo} 
      alt = "logo" 
      className = {style.logo} 
      onClick = {() => router.push("/")}
      />
      
      <NavBarLinks linkStyle = {style.linkContainer} />
        
        <AiOutlineMenu className = {style.menuIcon}
        onClick = {menuChange}
        />
        
        {showContent && 
        <div className = {style.mobileLinkContainer}>
        <NavBarLinks  
         showContent = {showContent}
         linkStyle = {style.mobileLinks}
        />
        <AiOutlineClose 
        className = {style.quitMenuIcon}
        onClick = {menuChange}
        />
        </div>
        }
    </nav>
  );
}

export default Navbar;
