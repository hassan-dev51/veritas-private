import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(150, "Company name is too long."),

  email: z
    .email("Please enter a valid email address.")
    .trim()
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),

  service: z.string().min(1, "Please select a testing service."),

  message: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters.")
    .max(3000, "Message is too long."),

  // Honeypot field for basic spam protection.
  website: z.string().max(0, "Invalid submission.").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  values: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string[]>> | null;
  success: boolean;
  message?: string;
};

export const initialContactFormState: ContactFormState = {
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
  success: false,
  message: "",
};
