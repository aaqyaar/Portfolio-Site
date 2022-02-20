import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { PhoneIcon } from "@heroicons/react/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_rx35ob5",
        "template_rnebbns",
        form.current,
        "user_Derx2ROYDdcabDsRBqvB0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("You have successfully been sent message.");
    console.log(data);
    reset();
  };

  // contact social data
  const contactData = [
    {
      id: 1,
      href: "https://www.facebook.com/abdizamed143",
      icon: <FaFacebook className="w-8 h-8 mx-4" />,
    },
    {
      id: 2,
      href: "https://github.com/abdi-aaqyaar",
      icon: <FaGithub className="w-8 h-8 mx-4" />,
    },
    {
      id: 3,
      href: "https://www.instagram.com/abdizamed",
      icon: <FaInstagram className="w-8 h-8 mx-4" />,
    },
  ];

  return (
    <>
      <div id="contact-head" className="flex justify-center mt-48">
        <h1 className="text-4xl text-gray-700 font-montserrat font-bold tracking-wide">
          👋 Get in Touch
        </h1>
      </div>
      <section
        id="contact"
        className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
      >
        <div className-="relative bg-white shadow-xl shadow-indigo-100 lg:rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden py-10 px-6 text-white bg-gray-800 sm:px-10 xl:p-12">
              <div className="flex flex-col md:items-start md:justify-start items-center justify-center">
                <h1 className="text-2xl font-poppins">Get In Touch</h1>
                <p className="text-base font-poppins mt-5 text-center md:text-left">
                  If you have any question or simply want to contact with us
                </p>
                <div className="mt-7">
                  <div className="flex items-center">
                    <PhoneIcon className="w-8 h-8 mx-2" />
                    <span className="font-medium md:text-lg text-base font-poppins p-2">
                      +252 618 977249
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelopeOpen className="w-8 h-8 mx-2" />
                    <span className="font-medium md:text-lg text-base font-poppins p-2">
                      abdizamedmo@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex justify-center">
                  {contactData.map((contact) => (
                    <a key={contact.id} href={contact.href} target="_blank">
                      {contact.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 shadow-lg shadow-slate-200">
              <h3 className="text-2xl font-medium text-gray-900 font-poppins">
                Send me a message 👋
              </h3>
              <form
                ref={form}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 font-poppins"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label htmlFor="" className="labelStyle">
                    First name *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="firstName"
                      name="FirstName"
                      className="inputStyle"
                      {...register("FirstName", { required: true })}
                      placeholder="First Name..."
                    />
                    {errors.FirstName && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="labelStyle">
                    Last name *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="lastName"
                      name="LastName"
                      className="inputStyle"
                      {...register("LastName", { required: true })}
                      placeholder="Last Name..."
                    />
                    {errors.LastName && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="labelStyle">
                    Email Address *
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="EmailAddress"
                      className="inputStyle"
                      {...register("EmailAddress", { required: true })}
                      placeholder="Email Address..."
                    />
                    {errors.EmailAddress && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="labelStyle">
                    Phone number *
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="tel"
                      name="PhoneNumber"
                      className="inputStyle"
                      {...register("PhoneNumber", { required: true })}
                      placeholder="Phone number..."
                    />
                    {errors.PhoneNumber && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="labelStyle">
                      Message *
                    </label>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      rows="3"
                      name="Message"
                      className="textarea"
                      {...register("Message", { required: true })}
                      placeholder="Message......."
                    ></textarea>

                    {errors.Message && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <input
                    type="submit"
                    className="px-4 py-3 md:px-5 md:py-4 md:text-lg text-sm rounded-md bg-slate-800 text-white hover:bg-gray-800 hover:-translate-y-2 transition cursor-pointer"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}
export default Contact;
