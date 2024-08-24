"use client";
import { useState } from "react";
import api from "@/config/base-url";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const emailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={emailSchema}
        onSubmit={data => {
          try {
            api.post('/api/email', data)
              .then(() => {
                setSuccess(true);
              });
          } catch (error: any) {
            console.error(error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-row flex-no-wrap w-[30vw] px-[2vw] rounded-full bg-white justify-between">
            <Field
              name="email"
              type="email"
              placeholder="your-email@mail.com"
              className="text-center text-[1vw] w-[17vw] h-[5vh] my-[2vh]" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button
              type="submit"
              className="text-[1vw] text-white bg-red-400  w-[8vw] px-[0.5vw] my-[1.5vh] rounded-full">
              Send
            </button>
          </Form>
        )}
      </Formik>
      {
        success &&
        <span className="text-red-400 text-center px-[6vw] py-[2vh]">We will contact you soon!</span>
      }
    </>
  )
}