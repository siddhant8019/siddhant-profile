"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <SectionHeading>Let's Connect: Send a Message</SectionHeading>

      <div className="bg-white/80 dark:bg-gray-800/40 rounded-lg p-4 mt-6 shadow-sm border border-gray-200 dark:border-gray-700 backdrop-blur-sm max-w-[36rem] mx-auto">
        <div className="flex items-center mb-2 space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-code">
            contact.form
          </div>
        </div>

        {isSubmitted ? (
          <motion.div
            className="mt-10 py-8 flex items-center justify-center rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/30 bg-white dark:bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-left code-text">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">response</span>{" "}
              <span className="code-bracket">=</span>{" "}
              <span className="code-bracket">{`{`}</span>
              <br />
              &nbsp;&nbsp;<span className="code-string">status</span>
              <span className="code-bracket">:</span>{" "}
              <span className="code-string">"success"</span>
              <span className="code-bracket">,</span>
              <br />
              &nbsp;&nbsp;<span className="code-string">message</span>
              <span className="code-bracket">:</span>{" "}
              <span className="code-string">
                "Message received! I'll get back to you soon."
              </span>
              <br />
              <span className="code-bracket">{`}`}</span>
            </div>
          </motion.div>
        ) : (
          <form
            className="mt-4 flex flex-col dark:text-black"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
              setIsSubmitted(true);

              setTimeout(() => {
                setIsSubmitted(false);
              }, 5000);
            }}
          >
            <div className="mb-4 text-left code-text">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">contactForm</span>{" "}
              <span className="code-bracket">=</span>{" "}
              <span className="code-bracket">{`{`}</span>
            </div>

            <div className="mb-4">
              <div className="text-left code-text mb-2">
                &nbsp;&nbsp;<span className="code-string">email</span>
                <span className="code-bracket">:</span>{" "}
                <span className="code-string">"</span>
              </div>
              <input
                className="w-full h-12 px-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/30 bg-white focus:border-gray-300 outline-none dark:bg-gray-100 dark:focus:bg-gray-50 transition-all code-text"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="your.email@example.com"
              />
              <div className="text-left code-text mt-1">
                <span className="code-string">"</span>
                <span className="code-bracket">,</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-left code-text mb-2">
                &nbsp;&nbsp;<span className="code-string">message</span>
                <span className="code-bracket">:</span>{" "}
                <span className="code-string">"</span>
              </div>
              <textarea
                className="w-full h-32 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/30 p-4 bg-white focus:border-gray-300 outline-none dark:bg-gray-100 dark:focus:bg-gray-50 transition-all code-text"
                name="message"
                placeholder="Your message here..."
                required
                maxLength={5000}
              />
              <div className="text-left code-text mt-1">
                <span className="code-string">"</span>
                <span className="code-bracket">,</span>
              </div>
            </div>

            <div className="text-left code-text mb-4">
              <span className="code-bracket">{`}`}</span>
            </div>

            <div className="text-left code-text mb-4">
              <span className="code-keyword">await</span>{" "}
              <span className="code-function">sendMessage</span>
              <span className="code-bracket">(</span>
              <span className="code-variable">contactForm</span>
              <span className="code-bracket">)</span>
              <span className="code-bracket">;</span>
            </div>

            <SubmitBtn />
          </form>
        )}
      </div>
    </motion.section>
  );
}
