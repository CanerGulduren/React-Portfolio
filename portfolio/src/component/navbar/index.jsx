"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "/public/logo.png";
import style from "../../style/component/Navbar.module.scss";
import navLinks from "../../app/(data)/navLinks_data.js";
import { useRouter } from "next/navigation";
import {VscColorMode} from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { btnClick } from "../../redux/features/menuBtnSlice";
import { changePage } from "@/redux/features/mainDataSlice";

function NavBarLinks({ linkStyle }) {
  return (
    <div className={linkStyle}>
      <NavLinks navLinks={navLinks} />
    </div>
  );
}

function Navbar() {

  const router = useRouter();

  const showContent = useSelector((state) => state.menuBtn.value);
  const dispatch = useDispatch();
  const menuChange = () => dispatch(btnClick(!showContent));

  return (
    <nav className={style.nav}>
      <Image
        src={logo}
        alt="logo"
        className={style.logo}
        onClick={() => {
          router.push("/")
          dispatch(changePage(0))
        }}
      />

      <VscColorMode 
      className={style.menuIcon} 
      onClick={menuChange} 
      />
      
      {showContent && (
        <div className={style.fullSizeNav}>
          <NavBarLinks linkStyle={style.mobileLinks} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
