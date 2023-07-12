"use client";
import Image from "next/image";
import logo from "/public/logo.png";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { changePage } from "@/redux/features/mainDataSlice";
import style from "../../style/component/Navbar.module.scss";
import SocialLinks from "./SocialLinks";

function Navbar() {

  const router = useRouter();
  const dispatch = useDispatch();

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

      <div className= {style.socialLinks}>
        <SocialLinks />
      </div>

    </nav>
  );
}

export default Navbar;
