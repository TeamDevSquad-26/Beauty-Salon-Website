"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl">
              Book Your Appointment
            </h2>
            <p className="text-lg leading-relaxed text-charcoal/60">
              Ready to treat yourself? Fill out the form and our team will
              confirm your appointment within 24 hours.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-light text-rose">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Location</p>
                  <p className="mt-1 text-sm text-charcoal/60">
                    123 Beauty Lane, Downtown
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-light text-rose">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Phone</p>
                  <p className="mt-1 text-sm text-charcoal/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-light text-rose">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Hours</p>
                  <p className="mt-1 text-sm text-charcoal/60">
                    Mon – Fri: 9:00 AM – 8:00 PM
                    <br />
                    Sat – Sun: 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-rose-light bg-cream/50 p-8 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-light">
                  <svg className="h-8 w-8 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-charcoal">
                  Thank You!
                </h3>
                <p className="mt-2 text-sm text-charcoal/60">
                  We&apos;ll get back to you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-rose-light bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-rose-light bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-rose-light bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-xl border border-rose-light bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose"
                  >
                    <option value="">Select a service</option>
                    <option value="hair">Hair Styling</option>
                    <option value="skincare">Skincare & Facials</option>
                    <option value="makeup">Makeup Artistry</option>
                    <option value="nails">Nail Care</option>
                    <option value="spa">Spa & Wellness</option>
                    <option value="bridal">Bridal Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your preferred date and time..."
                    className="w-full resize-none rounded-xl border border-rose-light bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-rose"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-rose py-3.5 text-sm font-semibold text-white transition-all hover:bg-rose-dark hover:shadow-lg"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
