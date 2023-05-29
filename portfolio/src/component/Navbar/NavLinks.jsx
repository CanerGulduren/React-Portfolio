"use client"
import style from "../../style/component/Navbar.module.scss";
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { btnClick } from "../../redux/features/menuBtnSlice";
 
function NavLinks({navLinks}) {
 
  const isBtnClick = useSelector( (state) => state.menuBtn.value)
  const dispatch = useDispatch()
  const menuChange = () => {
    if(!isBtnClick){return}
    dispatch(btnClick(!isBtnClick)
    )
  }

  return (
    <>
      {
      navLinks.map((link) => {
 
        return (
          <Link
            className = {style.links}
            href = {link.url}
            key = {link.name}
            
            onClick = {menuChange}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks