"use client";

import * as React from "react";
import Form from "next/form";

import { submitContactForm } from "./contact-action";
import { initialContactFormState } from "./contact-schema";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";

const testingServices = [
  {
    value: "Material Testing",
    label: "Material Testing",
  },
  {
    value: "Cytotoxicity Testing",
    label: "Cytotoxicity Testing",
  },
  {
    value: "Sterilization Testing",
    label: "Sterilization Testing",
  },
  {
    value: "Reusability Testing",
    label: "Reusability Testing",
  },
  {
    value: "Bioburden Testing",
    label: "Bioburden Testing",
  },
  {
    value: "Biocompatibility Testing",
    label: "Biocompatibility Testing",
  },
  {
    value: "Microbiological Testing",
    label: "Microbiological Testing",
  },
] as const;

export default function ContactForm() {
  const [formState, formAction, pending] = React.useActionState(
    submitContactForm,
    initialContactFormState,
  );

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          Contact Veritas Lab Testing
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Tell Us About Your Testing Requirements
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Share your medical device details and testing requirements with our
          team. We will review your inquiry and get back to you.
        </p>
      </div>

      <Form action={formAction}>
        <FieldGroup className="gap-6">
          {/* Name + Company */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field data-invalid={Boolean(formState.errors?.name?.length)}>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                defaultValue={formState.values.name}
                disabled={pending}
                aria-invalid={Boolean(formState.errors?.name?.length)}
                autoComplete="name"
              />

              {formState.errors?.name && (
                <FieldError>{formState.errors.name[0]}</FieldError>
              )}
            </Field>

            <Field data-invalid={Boolean(formState.errors?.company?.length)}>
              <FieldLabel htmlFor="company">Company Name</FieldLabel>

              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                defaultValue={formState.values.company}
                disabled={pending}
                aria-invalid={Boolean(formState.errors?.company?.length)}
                autoComplete="organization"
              />

              {formState.errors?.company && (
                <FieldError>{formState.errors.company[0]}</FieldError>
              )}
            </Field>
          </div>

          {/* Email + Phone */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field data-invalid={Boolean(formState.errors?.email?.length)}>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                defaultValue={formState.values.email}
                disabled={pending}
                aria-invalid={Boolean(formState.errors?.email?.length)}
                autoComplete="email"
              />

              {formState.errors?.email && (
                <FieldError>{formState.errors.email[0]}</FieldError>
              )}
            </Field>

            <Field data-invalid={Boolean(formState.errors?.phone?.length)}>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>

              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+92 300 1234567"
                defaultValue={formState.values.phone}
                disabled={pending}
                aria-invalid={Boolean(formState.errors?.phone?.length)}
                autoComplete="tel"
              />

              {formState.errors?.phone && (
                <FieldError>{formState.errors.phone[0]}</FieldError>
              )}
            </Field>
          </div>

          {/* Testing Service */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field data-invalid={Boolean(formState.errors?.service?.length)}>
              <FieldLabel htmlFor="service">Testing Service</FieldLabel>

              <select
                id="service"
                name="service"
                defaultValue={formState.values.service}
                disabled={pending}
                aria-invalid={Boolean(formState.errors?.service?.length)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a testing service</option>

                {testingServices.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>

              {formState.errors?.service && (
                <FieldError>{formState.errors.service[0]}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="ntn">NTN Number</FieldLabel>

              <Input
                id="ntn"
                name="ntn"
                type="text"
                placeholder="Your NTN number"
                defaultValue={formState.values.ntn}
                disabled={pending}
                aria-invalid={Boolean(formState.errors?.ntn?.length)}
                autoComplete="Off"
              />
            </Field>
          </div>
          {/* Message */}
          <Field data-invalid={Boolean(formState.errors?.message?.length)}>
            <FieldLabel htmlFor="message">Your Testing Requirements</FieldLabel>

            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your medical device, intended use, materials, required testing, standards, or any other relevant information."
              defaultValue={formState.values.message}
              disabled={pending}
              aria-invalid={Boolean(formState.errors?.message?.length)}
              className="min-h-[112.5px] resize-y"
            />

            {formState.errors?.message && (
              <FieldError>{formState.errors.message[0]}</FieldError>
            )}
          </Field>

          {/* Honeypot */}
          <div
            aria-hidden="true"
            className="absolute left-[-9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="website">Website</label>

            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              defaultValue={formState.values.website}
            />
          </div>

          {/* Status */}
          {formState.message && (
            <div
              role="status"
              aria-live="polite"
              className={
                formState.success
                  ? "rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                  : "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              }
            >
              {formState.message}
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-start">
            <Button
              type="submit"
              disabled={pending}
              size="lg"
              className="min-w-47.5"
            >
              {pending && <Spinner />}
              {pending ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>
        </FieldGroup>
      </Form>
    </div>
  );
}
