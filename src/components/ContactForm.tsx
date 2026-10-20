"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import { site } from "@/content/site";
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

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    organisation: "",
    modality: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) newErrors.phone = "Enter a valid phone number";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

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

    window.open(
      `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="contact-form-card glossy-card border-0 ring-0">
        <CardContent className="contact-form-success">
          <div className="contact-form-success__icon">
            <CheckCircle2 className="size-10" />
          </div>
          <h3>Enquiry Sent!</h3>
          <p>Thank you, {form.name.split(" ")[0]}. Your WhatsApp message has been prepared. Our team typically responds within a few hours during business hours.</p>
          <button
            type="button"
            className="contact-form-success__reset"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", phone: "", email: "", organisation: "", modality: "", message: "" });
            }}
          >
            Send another enquiry
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="contact-form-card glossy-card border-0 ring-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Send an Inquiry</CardTitle>
        <p className="contact-form-subtitle">We typically respond within 2–4 hours on WhatsApp.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label className={errors.name ? "contact-form__label--error" : ""}>
            <span>Full Name *</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onBlur={() => form.name.trim() && setErrors((prev) => ({ ...prev, name: "" }))}
              placeholder="Dr. / Mr. / Ms. Your Name"
            />
            {errors.name && <span className="contact-form__error">{errors.name}</span>}
          </label>
          <label className={errors.phone ? "contact-form__label--error" : ""}>
            <span>Phone / WhatsApp *</span>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              onBlur={() => form.phone.trim() && setErrors((prev) => ({ ...prev, phone: "" }))}
              placeholder="+91 94284 60003"
            />
            {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@hospital.com"
            />
          </label>
          <label>
            <span>Hospital / Diagnostic Centre</span>
            <input
              type="text"
              value={form.organisation}
              onChange={(e) => setForm({ ...form, organisation: e.target.value })}
              placeholder="Organisation name"
            />
          </label>
          <label className="contact-form__full contact-form__select-wrap">
            <span>Product / Modality Interest</span>
            <div className="contact-form__select-inner">
              <select
                value={form.modality}
                onChange={(e) => setForm({ ...form, modality: e.target.value })}
              >
                <option value="">Select product category (optional)</option>
                {modalities.map((m) => (
                  <option key={m} value={m}>{m}</option>
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
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us your monthly print volume, film size, contrast type, or any specific requirements..."
            />
          </label>
          <Button type="submit" size="lg" className="contact-form__submit cursor-pointer">
            <Send className="size-4" data-icon="inline-start" />
            Send via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
