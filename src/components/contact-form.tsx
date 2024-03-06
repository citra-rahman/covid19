"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "@/config/base-url";
import { User } from "@/lib/types";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    try {
      api.post('/api/email', data)
        .then(() => {
          setSuccess(true);
          window.location.href = "/"
        });
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row flex-no-wrap w-[30vw] px-[2vw] rounded-full bg-white justify-between">
        <input
          type="email"
          placeholder="your-email@mail.com"
          {...register("email", { required: true })}
          className="text-center text-[1vw] w-[17vw] h-[5vh] my-[2vh]" />
        <button
          type="submit"
          className="text-[1vw] text-white bg-red-400  w-[8vw] px-[0.5vw] my-[1.5vh] rounded-full">
          Send
        </button>
      </form>
      {
        success &&
        <span className="text-red-400 text-center px-[6vw] py-[2vh]">We will contact you soon!</span>
      }
    </>
  )
}