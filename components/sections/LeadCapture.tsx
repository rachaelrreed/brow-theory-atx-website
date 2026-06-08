"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { SITE } from "@/lib/constants";

interface LeadFormValues {
  email: string;
}

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>();

  const onSubmit = async (data: LeadFormValues) => {
    setSubmitError(false);
    try {
      const response = await fetch(SITE.formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <section id="lead-capture" className="bg-gold px-6 py-10 md:px-8">
      <div className="container-wide flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="md:max-w-md">
          <h2 className="font-display text-[1.75rem] text-ink mb-2">
            Be first to know.
          </h2>
          <p className="font-body text-base text-ink/85 md:text-ink/80">
            Join the list for Austin launch updates and early booking access.
          </p>
        </div>

        {submitted ? (
          <p className="font-display italic text-xl text-ink">
            You&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-3 w-full md:max-w-lg"
            noValidate
          >
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full border border-ink bg-white px-4 py-3 font-body text-ink placeholder:text-umber/60"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors.email && (
                <p className="font-body text-sm text-[#B00020] mt-1">
                  Please enter a valid email address.
                </p>
              )}
              {submitError && (
                <p className="font-body text-sm text-[#B00020] mt-1">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-ink text-bone font-body uppercase tracking-[0.06em] px-6 py-3 cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 shrink-0"
            >
              Join the List
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
