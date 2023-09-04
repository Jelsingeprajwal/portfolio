import React, { useRef, useState } from "react";
import { Send } from "../assets/index";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
export default function Form() {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0n7y4h",
        "template_bdzs28a",
        form.current,
        "t14ThS4Guuo81CK_A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 3000);
          // window.location = "/";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form onSubmit={sendEmail} ref={form}>
      <label className="text-2xl font-medium ">Name</label> <br />
      <input
        className="h-[42px] mb-10 w-full border border-primaryBlue  bg-[#281E29]
         rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4"
        type="text"
        placeholder="Name"
        name="user_name"
        required={true}
      />
      {/* {errors.Name?.type === "required" && alert("Name is Required")} */}
      <br />
      <label className="text-2xl font-medium ">Email</label> <br />
      <input
        type="email"
        placeholder="Email"
        className="h-[42px] mb-10 w-full border border-primaryBlue bg-[#281E29] rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4"
        name="user_email"
        required={true}
      />
      <br />
      <label className="text-2xl font-medium ">Message</label> <br />
      <textarea
        name="message"
        placeholder="Write a message"
        required={true}
        className="h-[172px] mb-10 w-full border border-primaryBlue bg-[#281E29] rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4"
      />
      <button
        type="submit"
        className={`${styles.flexBetweenCenter} gap-3 bg-primaryBlue rounded-lg px-6 py-3 absolute right-0`}
      >
        Send <img src={Send} alt="" />
      </button>
      {/* <input
        type="submit"
        className={`${styles.flexBetweenCenter} gap-3 bg-primaryBlue rounded-lg px-6 py-3 absolute right-0`}
      /> */}
      {sent && (
        <span
          className={` fixed bottom-10 left-1/2 -translate-x-1/2 w-fit h-fit py-2 px-4 rounded-lg font-semibold font-GeneralSans bg-[#5aff2c] text-black `}
        >
          Email Sent
        </span>
      )}
    </form>
  );
}
