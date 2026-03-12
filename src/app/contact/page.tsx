"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Cloud Solutions",
  "Cybersecurity",
  "DevOps & CI/CD",
  "Data & Analytics",
  "AI & Machine Learning",
  "Managed IT Support",
  "General Inquiry",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@techinifity.com", href: "mailto:hello@techinifity.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Address", value: "123 Tech Avenue, Suite 400\nSan Francisco, CA 94105", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-base sm:text-xl text-[var(--color-muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to explore how
            Techinifity can help, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  Contact Information
                </h2>
                <p className="text-[var(--color-muted-foreground)]">
                  Our team typically responds within 2 business hours.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-[var(--color-foreground)] group-hover:text-blue-600 transition-colors whitespace-pre-line text-sm font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] max-w-sm">
                    Thank you for reaching out. A member of our team will be in
                    touch within 2 business hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Full Name *" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        placeholder="Jane Smith"
                        className={inputClass(!!errors.name)}
                      />
                    </Field>
                    <Field
                      label="Email Address *"
                      error={errors.email?.message}
                    >
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="jane@company.com"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Company">
                      <input
                        {...register("company")}
                        placeholder="Company Inc."
                        className={inputClass(false)}
                      />
                    </Field>
                    <Field label="Service of Interest">
                      <select
                        {...register("service")}
                        className={inputClass(false)}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message *" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your project or challenge…"
                      className={inputClass(!!errors.message)}
                    />
                  </Field>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="gap-2 w-full sm:w-auto"
                  >
                    {loading ? (
                      "Sending…"
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-2.5 rounded-lg border text-sm bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 transition-all",
    hasError
      ? "border-red-400 focus:ring-red-200 dark:focus:ring-red-900"
      : "border-[var(--color-border)] focus:ring-blue-200 dark:focus:ring-blue-900 focus:border-blue-500"
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[var(--color-foreground)]">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
