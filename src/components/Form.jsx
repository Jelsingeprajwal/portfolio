import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { Send } from "../assets/index";
import { styles } from "../styles";
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (event, data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="text-2xl font-medium ">Name</label> <br />
      <input
        className="h-[42px] mb-10 w-full border border-primaryBlue  bg-[#281E29]
         rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4"
        type="text"
        placeholder="Name"
        {...register("Name", { required: true })}
        aria-invalid={errors.Name ? "true" : "false"}
      />
      {/* {errors.Name?.type === "required" && alert("Name is Required")} */}
      <br />
      <label className="text-2xl font-medium ">Email</label> <br />
      <input
        className="h-[42px] mb-10 w-full border border-primaryBlue bg-[#281E29] rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4"
        type="email"
        placeholder="Email"
        {...register("Email", {
          required: true,
        })}
      />
      <br />
      <label className="text-2xl font-medium ">Message</label> <br />
      <textarea
        placeholder="Write a message"
        className="h-[172px] mb-10 w-full border border-primaryBlue bg-[#281E29] rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4"
        {...register("Message")}
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
    </form>
  );
}
