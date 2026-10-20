"use client";

import { useId, useState } from "react";
import { Send, CheckCircle2, ChevronDown, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modalities = [
  "Contrast Media (CT / MRI / Angiography)",
  "Dry Imaging Films (X-Ray / MRI / CT)",
  "MIPS / Printing Solutions",
  "Manual X-Ray Films",
  "Other Radiology Products",
  "General Enquiry",
];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  organisation: "",
  modality: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "opened" | "blocked">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const errorId = useId();

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required";
    else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid phone number";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    if (form.company.trim()) {
      setStatus("blocked");
      return;
    }

    setErrors({});
    setSubmitting(true);

    const text = [
      "Hello Vandan Distributors,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.organisation ? `Organisation: ${form.organisation}` : "",
      form.modality ? `Product Interest: ${form.modality}` : "",
      "",
      form.message || "I would like to know more about your products and services.",
    ]
      .filter(Boolean)
      .join("\n");

    const popup = window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setStatus(popup ? "opened" : "blocked");
  };

  if (status === "opened") {
    return (
      <Card className="contact-form-card glossy-card border-0 ring-0">
        <CardContent className="contact-form-success">
          <div className="contact-form-success__icon">
            <CheckCircle2 className="size-10" />
          </div>
          <h3>WhatsApp is ready</h3>
          <p>
            Thank you, {form.name.split(" ")[0]}. WhatsApp opened with your enquiry. Send the message there to reach our team.
            If it did not send, you can still call or email us.
          </p>
          <div className="contact-form-success__fallbacks">
            <a href={site.brand.phoneHref}>Call {site.brand.phone}</a>
            <a href={site.brand.emailHref}>Email {site.brand.email}</a>
          </div>
          <button
            type="button"
            className="contact-form-success__reset"
            onClick={() => {
              setStatus("idle");
              setForm(emptyForm);
            }}
          >
            Prepare another enquiry
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="contact-form-card glossy-card border-0 ring-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Send an Inquiry</CardTitle>
        <p className="contact-form-subtitle">Required fields are marked. We typically reply during business hours.</p>
      </CardHeader>
      <CardContent>
        {status === "blocked" && (
          <p className="contact-form__banner" role="alert">
            <AlertCircle className="size-4" aria-hidden="true" />
            WhatsApp could not be opened. Call {site.brand.phone} or email {site.brand.email}.
          </p>
        )}
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label className="contact-form__honeypot" htmlFor={`${errorId}-company`}>
            Company
            <input
              id={`${errorId}-company`}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(event) => setForm({ ...form, company: event.target.value })}
            />
          </label>
          <label className={errors.name ? "contact-form__label--error" : ""}>
            <span>Full Name *</span>
            <input
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              aria-invalid={Boolean(errors.name)}
              placeholder="Your name"
            />
            {errors.name && <span className="contact-form__error">{errors.name}</span>}
          </label>
          <label className={errors.phone ? "contact-form__label--error" : ""}>
            <span>Phone / WhatsApp *</span>
            <input
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              aria-invalid={Boolean(errors.phone)}
              placeholder="+91 94284 60003"
            />
            {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
          </label>
          <label className={errors.email ? "contact-form__label--error" : ""}>
            <span>Email</span>
            <input
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              aria-invalid={Boolean(errors.email)}
              placeholder="you@hospital.com"
            />
            {errors.email && <span className="contact-form__error">{errors.email}</span>}
          </label>
          <label>
            <span>Hospital / Diagnostic Centre</span>
            <input
              type="text"
              autoComplete="organization"
              value={form.organisation}
              onChange={(event) => setForm({ ...form, organisation: event.target.value })}
              placeholder="Organisation name"
            />
          </label>
          <label className="contact-form__full contact-form__select-wrap">
            <span>Product / Modality Interest</span>
            <div className="contact-form__select-inner">
              <select
                value={form.modality}
                onChange={(event) => setForm({ ...form, modality: event.target.value })}
              >
                <option value="">Select product category (optional)</option>
                {modalities.map((modality) => (
                  <option key={modality} value={modality}>
                    {modality}
                  </option>
                ))}
              </select>
              <ChevronDown className="contact-form__select-icon size-4" aria-hidden="true" />
            </div>
          </label>
          <label className="contact-form__full">
            <span>Message / Requirements</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Monthly print volume, film size, contrast type, or other requirements"
            />
          </label>
          <Button type="submit" size="lg" className="contact-form__submit cursor-pointer" disabled={submitting}>
            <Send className="size-4" data-icon="inline-start" />
            {submitting ? "Opening WhatsApp…" : "Continue on WhatsApp"}
          </Button>
          <p className="contact-form__hint">
            Prefer email or phone? <a href={site.brand.emailHref}>{site.brand.email}</a> or{" "}
            <a href={site.brand.phoneHref}>{site.brand.phone}</a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
