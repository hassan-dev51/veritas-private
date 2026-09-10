"use server";

import nodemailer from "nodemailer";

import { contactFormSchema, type ContactFormState } from "./contact-schema";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    service: String(formData.get("service") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot spam protection
  if (values.website) {
    return {
      values,
      errors: null,
      success: false,
      message: "Invalid submission.",
    };
  }

  const result = contactFormSchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      errors: result.error.flatten().fieldErrors,
      success: false,
      message: "Please correct the highlighted fields.",
    };
  }

  const { name, company, email, phone, service, message } = result.data;

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const labEmail = process.env.LAB_EMAIL;

  if (!gmailUser || !gmailAppPassword || !labEmail) {
    console.error("Missing Gmail environment variables.");

    return {
      values,
      errors: null,
      success: false,
      message:
        "The contact service is temporarily unavailable. Please try again later.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Veritas Testing Website" <${gmailUser}>`,
      to: labEmail,
      replyTo: email,

      subject: `New Testing Inquiry — ${service} — ${company}`,

      text: `
New contact form submission from Veritas Testing website

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Testing Service: ${service}

Message:
${message}
      `.trim(),

      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: 0 auto; color: #0f172a;">
          
          <div style="padding: 24px; background: #0f172a; color: white; border-radius: 12px 12px 0 0;">
            <h2 style="margin: 0; font-size: 22px;">
              New Testing Inquiry
            </h2>
            <p style="margin: 8px 0 0; color: #cbd5e1;">
              Veritas Testing Website
            </p>
          </div>

          <div style="padding: 28px; border: 1px solid #e2e8f0; border-top: 0; border-radius: 0 0 12px 12px;">
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: 600; width: 160px;">
                  Name
                </td>
                <td style="padding: 10px 0;">
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0; font-weight: 600;">
                  Company
                </td>
                <td style="padding: 10px 0;">
                  ${escapeHtml(company)}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0; font-weight: 600;">
                  Email
                </td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${escapeHtml(email)}">
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0; font-weight: 600;">
                  Phone
                </td>
                <td style="padding: 10px 0;">
                  ${escapeHtml(phone)}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0; font-weight: 600;">
                  Testing Service
                </td>
                <td style="padding: 10px 0;">
                  ${escapeHtml(service)}
                </td>
              </tr>
            </table>

            <div style="margin-top: 28px;">
              <h3 style="margin-bottom: 10px;">
                Message
              </h3>

              <div style="padding: 18px; background: #f8fafc; border-radius: 8px; white-space: pre-wrap; line-height: 1.7;">
                ${escapeHtml(message)}
              </div>
            </div>

            <div style="margin-top: 28px; padding-top: 18px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">
              This inquiry was submitted through the Veritas Testing website contact form.
            </div>

          </div>
        </div>
      `,
    });

    return {
      values: {
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        website: "",
      },
      errors: null,
      success: true,
      message:
        "Thank you. Your inquiry has been sent successfully. Our team will contact you soon.",
    };
  } catch (error) {
    console.error("Failed to send contact form email:", error);

    return {
      values,
      errors: null,
      success: false,
      message:
        "We could not send your message right now. Please try again later.",
    };
  }
}

/**
 * Prevent user-provided values from being interpreted as HTML.
 */
function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
