"use client";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
    phone: yup.string().required().label("phone"),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contact, setContact] = useState(INITIAL_STATE);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setPending(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`;
      const { name, email, phone, message } = contact;
      const payload = { full_name: name, email, phone, message };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      const notify = () =>
        toast("Comment sent successfully", { position: "top-center" });
      notify();
      reset();
      setPending(false);
      setMessage("Email Sent successfully.");
    } catch (error) {
      setMessage("Failed unable to send the email, Please try again!");
      setPending(false);
      console.log(error);
    }
  };

  return (
    <form className="contact-form-wrap" onSubmit={onSubmit} id="contact-form">
      <div className="consulting-contact-form mx-4">
        <h3 className="mb-3">Free consulting </h3>
        <p>{message}</p>
        <div className="single-input-inner style-bg">
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Full Name"
          />
          <p className="form_error">{errors.name?.message}</p>
        </div>
        <div className="single-input-inner style-bg">
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="Email Address"
          />
          <p className="form_error">{errors.email?.message}</p>
        </div>
        <div className="single-input-inner style-bg">
          <input
            type="text"
            onChange={handleChange}
            name="phone"
            placeholder="Phone Number"
          />
          <p className="form_error">{errors.phone?.message}</p>
        </div>
        <div className="single-input-inner style-bg">
          <textarea
            onChange={handleChange}
            name="message"
            placeholder="Message"
          ></textarea>
          <p className="form_error">{errors.message?.message}</p>
        </div>
        <div className="btn-wrap pb-3">
          <button type="submit" className="it-btn btn-base">
            {pending ? "Submitting..." : "Submit Now"}
          </button>
        </div>
        <p className="form-messege mb-0 mt-20 text-center"></p>
      </div>
    </form>
  );
};

export default ContactForm;
