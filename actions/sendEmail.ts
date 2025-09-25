"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Initialize Resend with error handling
let resend: Resend;
try {
  resend = new Resend(process.env.RESEND_API_KEY);
} catch (error) {
  console.error("Failed to initialize Resend:", error);
}

export const sendEmail = async (formData: FormData) => {
  // Early validation to fail fast
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const name = formData.get("name") as string;
  const reason = formData.get("reason") as string;

  // Quick validation
  if (!validateString(senderEmail, 500) || !validateString(message, 5000) || 
      !validateString(name, 100) || !validateString(reason, 100)) {
    return { error: "Invalid form data" };
  }

  if (!resend) {
    return { error: "Email service not configured" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sidhnpatil08@gmail.com",
      subject: `Contact Form: ${reason}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
        name,
        reason,
      }),
    });

    return { data };
  } catch (error: unknown) {
    console.error("Email send error:", error);
    return { error: getErrorMessage(error) };
  }
};
