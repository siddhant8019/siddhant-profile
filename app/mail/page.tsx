"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

const connectionReasons = [
  "General Inquiry",
  "Job Opportunity",
  "Project Collaboration",
  "Speaking/Consulting",
  "Technical Discussion",
  "Partnership",
  "Other",
];

export default function MailPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await sendEmail(formData);
      if (result.error) {
        toast.error("Failed to send message. Please try again.");
        console.error("Error sending email:", result.error);
      } else {
        toast.success("Message sent successfully!");
        setIsSubmitted(true);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Unexpected error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="px-4 py-8 max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-2xl border border-[#dae2e2] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-4">
              Message Sent!
            </h1>
            <p className="text-sm sm:text-base text-[#000000]/80 mb-6 leading-relaxed">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-[#000000] text-[#f6f9f1] px-6 py-3 rounded-full hover:bg-[#000000]/90 transition-colors border border-[#dae2e2] text-sm sm:text-base"
            >
              Back to Home
            </a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-8 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-2xl border border-[#dae2e2]"
      >
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-[#000000]/80 leading-relaxed">
            Let's discuss your project, collaboration, or just say hello!
          </p>
        </div>

        <form action={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#000000] mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#dae2e2] bg-white text-[#000000] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dae2e2] focus:border-transparent transition-colors"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="senderEmail"
              className="block text-sm font-medium text-[#000000] mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#dae2e2] bg-white text-[#000000] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dae2e2] focus:border-transparent transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Connection Reason Dropdown */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-[#000000] mb-2"
            >
              Reason for reaching out *
            </label>
            <select
              id="reason"
              name="reason"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#dae2e2] bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#dae2e2] focus:border-transparent transition-colors"
            >
              <option value="" disabled>
                Select a reason
              </option>
              {connectionReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#000000] mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-[#dae2e2] bg-white text-[#000000] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#dae2e2] focus:border-transparent transition-colors resize-vertical"
              placeholder="Tell me about your project, idea, or how I can help you..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <SubmitBtn />
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-[#dae2e2]">
          <p className="text-xs sm:text-sm text-[#000000]/70 text-center">
            You can also reach me directly at{" "}
            <a
              href="mailto:sidhnpatil08@gmail.com"
              className="text-[#000000] hover:underline"
            >
              sidhnpatil08@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
