"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages
    setEmailSubmitted(false); // Reset the submission state

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        setEmailSubmitted(true); // Show success message
      } else {
        throw new Error(resData.error || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-12 grid md:grid-cols-2 py-16 gap-4 relative scroll-mt-16"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-[#343660]">
          Let&apos;s Connect
        </h5>
        <p className="text-[#343660] mb-4 max-w-md pt-4">
          On the hunt for new opportunities! My inbox is always open, whether
          you have a question or just want to say hi, I'll do my best to
          respond!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/giselle-ming">
            <Image
              src={GithubIcon}
              className="contact-icon"
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/giselleminguerios/">
            <Image
              src={LinkedinIcon}
              className="contact-icon"
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-[#343660] mb-4 max-w-md pt-4">
            Email sent successfully! Thank you for reaching out.
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-[#0c1740] block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#e6e7fa] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-[#0c1740] block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#e6e7fa] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-[#0c1740] block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#e6e7fa] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about your projects..."
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-bl from-[#343660] to-[#BA68C8] hover:scale-102 text-white"
            >
              Send Message
            </button>
          </form>
        )}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
