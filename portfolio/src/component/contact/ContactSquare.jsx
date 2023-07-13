"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "@/style/component/Contact.module.scss"
import { motion } from "framer-motion";

function ContactSquare() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div 
    className= {style.container}
    initial= {{scale: 0, opacity: 0}}
    animate= {{scale: 1, opacity: 1}}
    transition= {{
      duration: .2,
    }}
    >
      <form ref={form} onSubmit={sendEmail} className= {style.formWrapper}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </motion.div>
  );
}

export default ContactSquare;
