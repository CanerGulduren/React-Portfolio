import React from "react";
import style from "@/style/component/Contact.module.scss"
import { Prompt } from "next/font/google";
import {motion} from "framer-motion"

const prompt = Prompt({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

function ContactTitle() {
  return (
    <motion.div 
    className= {style.contactTitle}
    initial={{y: 60, opacity: 0}}
    animate={{y:0 ,opacity: 1 }}
    transition={{duration: .3, delay: .2}}
    >
      <h3 className= {prompt.className}>Contact Me</h3>
      <p>
        Got a project in mind? Interested in working together? Get in touch with
        me via the contact form or the provided email and phone number.
      </p>
      <div className= {style.contactInfo}>
      <p>canerguldurenn@gmail.com</p>
      <p>+90 534 072 87 57</p>
      </div>
    </motion.div>
  );
}

export default ContactTitle;
