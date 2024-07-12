"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { HTMLInputTypeAttribute } from "react";
import * as yup from "yup";
import { errorToast, successToast } from "./Toaster";

const ContactUsFormValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required").min(20),
});
const ContactUsForm = () => {
  const handleFormSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const resp = await fetch("api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return resp.json();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={ContactUsFormValidationSchema}
      onSubmit={(values, { resetForm }) => {
        handleFormSubmit(values)
          .then((resp) => {
            successToast("Form Submitted Successfully.");
          })
          .catch((err) => {
            errorToast("Error Submitting Form.");
          })
          .finally(() => resetForm());
      }}
    >
      {() => {
        return (
          <Form className="border border-slate-400 rounded-md lg:max-w-lg px-4 py-2 lg:px-8 lg:py-4 mx-auto">
            <FormGroup name="name" placeholder="Enter name" />
            <FormGroup name="email" placeholder="Enter Email" />
            <FormGroup name="message" placeholder="Enter Message" />
            <button
              type="submit"
              className="px-4 mt-2 lg:mt-4 py-2 border border-slate-200 rounded-md bg-slate-700 hover:bg-slate-950 text-white transition-colors duration-200 ease-in-out active:bg-slate-500"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactUsForm;

export const FormGroup = ({
  type = "text",
  name,
  placeholder,
  className,
}: {
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  className?: HTMLInputTypeAttribute;
}) => {
  return (
    <>
      <label htmlFor={name} className="capitalize">
        {name}:
      </label>
      <Field
        name={name}
        placeholder={placeholder}
        id={name}
        type={type}
        className={`${className} block p-3 w-full my-1 lg:my-2 border border-slate-400 rounded-md`}
      />
      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500">{msg}</div>}
      </ErrorMessage>
    </>
  );
};
