"use client";

import React, { useState } from "react";
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
        <div className="glass-card card-ambient p-9 rounded-3xl text-center">
          <div>
            <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#7B7B7B]/20">
              <svg
                className="w-8 h-8 text-[#222222]"
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-4 section-title">
              Message Sent!
            </h1>
            <p className="text-sm sm:text-base text-[#222222]/80 mb-6 leading-relaxed">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full text-sm sm:text-base"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-8 max-w-2xl mx-auto">
      <div className="glass-card card-ambient p-9 rounded-3xl">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#222222] mb-4 section-title">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-[#222222]/80 leading-relaxed">
            Let's discuss your project, collaboration, or just say hello!
          </p>
        </div>

        <form action={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#222222] mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 form-input placeholder-[#7B7B7B]"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="senderEmail"
              className="block text-sm font-medium text-[#222222] mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              required
              className="w-full px-4 py-3 form-input placeholder-[#7B7B7B]"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Connection Reason Dropdown */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-[#222222] mb-2"
            >
              Reason for reaching out *
            </label>
            <select
              id="reason"
              name="reason"
              required
              className="w-full px-4 py-3 form-input"
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
              className="block text-sm font-medium text-[#222222] mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 form-input placeholder-[#7B7B7B] resize-vertical"
              placeholder="Tell me about your project, idea, or how I can help you..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <SubmitBtn pending={isLoading} />
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-[#7B7B7B]/30">
          <p className="text-xs sm:text-sm text-[#222222]/70 text-center">
            You can also reach me directly at{" "}
            <a
              href="mailto:sidhnpatil08@gmail.com"
              className="text-[#222222] hover:underline"
            >
              sidhnpatil08@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
