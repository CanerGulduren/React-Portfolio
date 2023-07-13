import React from 'react'
import navLinks from "../../app/(data)/navLinks_data.js";
import Link from "next/link"

function SocialLinks() {
  return (
        navLinks.map((link) => {
          return(
              <Link
              href={link.path}
              key={link.name}
              target='_blank'
              >
              {link.url}
              </Link>
          )
        })
  )
}

export default SocialLinks