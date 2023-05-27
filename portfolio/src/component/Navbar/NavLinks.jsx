import style from "../../style/component/Navbar.module.scss";
import Link from 'next/link';
 
function NavLinks({navLinks}) {
 
  return (
    <>
      {
      navLinks.map((link) => {
 
        return (
          <Link
            className = {style.links}
            href = {link.url}
            key = {link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks