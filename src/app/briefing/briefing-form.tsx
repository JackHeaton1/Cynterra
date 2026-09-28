"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  organisation: z.string().min(1, "Please enter your organisation"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Please tell us briefly what you'd like covered"),
  consent: z.literal(true, {
    message: "Consent is required so we can respond to your enquiry",
  }),
  // Honeypot: must stay empty; bots that fill it are dropped server-side.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function BriefingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-status-assessed/40 bg-status-assessed-bg p-6"
      >
        <h2 className="font-display text-lg font-semibold text-foreground">Request received</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Thank you. We&apos;ll be in touch to arrange the briefing. If your enquiry is urgent,
          call +61 2 6160 1363.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-status-in-assessment">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="organisation"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Organisation
          </label>
          <input
            id="organisation"
            autoComplete="organization"
            aria-invalid={!!errors.organisation}
            aria-describedby={errors.organisation ? "organisation-error" : undefined}
            className={inputClass}
            {...register("organisation")}
          />
          {errors.organisation && (
            <p
              id="organisation-error"
              role="alert"
              className="mt-1.5 text-xs text-status-in-assessment"
            >
              {errors.organisation.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-status-in-assessment">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone <span className="font-normal text-faint">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          What would you like the briefing to cover?
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-status-in-assessment">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field: visually hidden, ignored by humans */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 size-4 accent-[var(--accent)]"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-muted">
          I consent to Cynterra storing the information in this form so they can respond to my
          enquiry.
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" role="alert" className="text-xs text-status-in-assessment">
          {errors.consent.message}
        </p>
      )}

      <div aria-live="polite">
        {status === "error" && (
          <p role="alert" className="mb-3 text-sm text-status-in-assessment">
            Something went wrong sending your request. Please try again, or email
            sales@cynterra.ai directly.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-cta px-6 py-3 text-sm font-medium text-cta-contrast transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Request a briefing"}
      </button>
    </form>
  );
}
