"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Unlock Opportunity: Reach out to me now!</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        I specialize in building full-stack products that ship fast and scale
        smart — from crafting clean APIs to integrating LLMs and AI-driven
        features that actually work in production. Whether you're launching an
        MVP, leveling up your backend, or embedding intelligence into your app,
        I’m all in on solving real problems with code that gets the job done.
        Let’s build something scrappy, smart, and meaningful. 🚀
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/30 bg-white focus:border-gray-300 outline-none dark:bg-gray-100 dark:focus:bg-gray-50 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/30 p-4 bg-white focus:border-gray-300 outline-none dark:bg-gray-100 dark:focus:bg-gray-50 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
