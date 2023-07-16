"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "@/style/component/Contact.module.scss";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const submitMessageText = {
  success: "Your message has been sent successfully.",
  successColor: "green",
  fail: "Please try again.",
  failColor: "red"
}

function ContactSquare() {
  const [submitMessage, setSubmitMessage] = useState(null);
  const [submitMessageColor, setSubmitMessageColor] = useState("");
  const form = useRef();

  const schema = z.object({
    user_name: z.string().min(2).max(30),
    user_email: z.string().email(),
    user_message: z.string().min(2),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(schema) });

  const changeSubmitMessage = (message, color) => {
    setSubmitMessage(message)
    setSubmitMessageColor(color)
    setTimeout(() => {
      setSubmitMessage(null)
    }, 3500);
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          const allInputs = Array.from(form.current.querySelectorAll("input, textarea")) 
          const inputsButSubmit = allInputs.filter(input => input.type !== "submit")
          inputsButSubmit.forEach((input) => {
            input.value = ""
          })
          changeSubmitMessage(submitMessageText.success, submitMessageText.successColor)

        },
        (error) => {
          changeSubmitMessage(submitMessageText.fail, submitMessageText.failColor)
        }
      );
  };
  return (
    <motion.div
      className={style.container}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.2,
      }}
    >
      <form
        ref={form}
        onSubmit={handleSubmit(() => {
          sendEmail();
        })}
        className={style.formWrapper}
      >
        <label>Name</label>
        <input type="text" name="user_name" {...register("user_name")} />
        {errors.user_name && <span className= {style.errorMessage}> {errors.user_name.message} </span>}
        <label>Email</label>
        <input type="email" name="user_email" {...register("user_email")} />
        {errors.user_email && <span className= {style.errorMessage}> {errors.user_email.message} </span>}
        <label>Message</label>
        <textarea name="user_message" {...register("user_message")} className = {style.textBox} />
        {errors.user_message && <span className= {style.errorMessage}> {errors.user_message.message} </span>}
        <input type="submit" value="Send"  />
        {submitMessage && <span className={submitMessage} style={{color: submitMessageColor}} >{submitMessage}</span>}
      </form>
    </motion.div>
  );
}

export default ContactSquare;
