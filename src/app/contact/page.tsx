"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function About() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const greetings = "Say Hello";
  const form = useRef<any>();

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {greetings.split("").map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {text}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form Container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Arnan Comia,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My email address is: </span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-center">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-center">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
