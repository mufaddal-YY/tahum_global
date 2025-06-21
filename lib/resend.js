"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const { fullName, companyName, email, phone, message } = formData;
  const htmlContent = `
    <h2>New Enquiry Received</h2>
    <p><strong>Fullname:</strong> ${fullName}</p>
    <p><strong>Company name</strong> ${companyName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  await resend.emails.send({
    to: "info@tahumglobal.com",
    from: "New Enquiry <onboarding@resend.dev>",
    subject: "New Enquiry",
    html: htmlContent,
  });
};