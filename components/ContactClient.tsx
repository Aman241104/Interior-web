"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company } from "@/lib/data";

gsap.registerPlugin();

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  area: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  area: "",
  message: "",
};

export default function ContactClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.fromTo(
      ".contact-hero-text",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: heroRef });

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Your email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please describe your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("loading");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, projectType: formData.projectType, area: formData.area, message: formData.message }),
      })
      if (!res.ok) throw new Error('Failed')
      setFormState("success")
    } catch {
      setFormState("error")
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setFormState("idle");
  };

  const inputClass = (field: keyof FormData) =>
    `w-full font-sans text-sm text-dark bg-transparent border-b-2 py-3 px-0 placeholder:text-stone-400 focus:outline-none transition-colors duration-300 ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-stone-200 focus:border-gold"
    }`;

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="pt-32 pb-20 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="contact-hero-text">
            <SectionLabel text="Get in Touch" />
          </div>
          <h1 className="contact-hero-text font-serif text-[clamp(3rem,6vw,7rem)] font-300 leading-[0.92] tracking-tight text-dark mt-6 mb-8 max-w-4xl">
            Let's build something{" "}
            <span className="italic font-600 text-gold">extraordinary.</span>
          </h1>
          <p className="contact-hero-text font-sans text-lg text-stone-500 leading-relaxed max-w-2xl">
            Tell us about your project. We'll get back to you within 24 hours to schedule
            a complimentary consultation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="pb-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

            {/* Left: Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <div className="space-y-8">
                  {/* Address */}
                  <div>
                    <h3 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-3">
                      Visit Our Studio
                    </h3>
                    <address className="not-italic font-sans text-sm text-stone-600 leading-relaxed">
                      {company.address.line1},<br />
                      {company.address.line2},<br />
                      {company.address.city},<br />
                      {company.address.state} – {company.address.pincode}
                    </address>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-3">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="font-sans text-sm text-dark hover:text-gold transition-colors duration-200 hover-underline"
                    >
                      {company.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-3">
                      Studio Hours
                    </h3>
                    <div className="font-sans text-sm text-stone-600 space-y-1">
                      <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="bg-gold/10 border border-gold/20 rounded-xl px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                      <p className="font-sans text-sm text-dark font-600">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Google Maps Embed */}
              <AnimatedSection delay={0.2}>
                <div className="w-full h-48 md:h-64 rounded-sm overflow-hidden border border-stone-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5681!3d23.0087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPaldi%2C%20Ahmedabad%2C%20Gujarat%20380007!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Styluxe Interior Decor Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form (3 cols) */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15}>
                <div className="bg-cream border border-stone-200 rounded-2xl p-6 lg:p-10">

                  {formState === "success" ? (
                    /* Success State */
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-3xl font-600 text-dark mb-4">Message Received!</h3>
                      <p className="font-sans text-base text-stone-500 leading-relaxed max-w-sm mx-auto mb-8">
                        Thank you, {formData.name.split(" ")[0]}. Akash will personally review your
                        inquiry and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 border border-stone-200 text-dark font-sans text-sm font-600 px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    /* Form */
                    <>
                      <h2 className="font-serif text-2xl font-600 text-dark mb-8">
                        Tell us about your project
                      </h2>

                      {formState === "error" && (
                        <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-4">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <div>
                            <p className="font-sans text-sm font-600 text-red-700">Message failed to send.</p>
                            <p className="font-sans text-xs text-red-500 mt-0.5">Please check your connection and try again, or email us directly at <a href={`mailto:${company.email}`} className="underline">{company.email}</a>.</p>
                          </div>
                          <button onClick={() => setFormState("idle")} className="ml-auto text-red-400 hover:text-red-600 flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider block mb-2">
                              Full Name *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Akash Modi"
                              className={inputClass("name")}
                              disabled={formState === "loading"}
                            />
                            {errors.name && (
                              <p className="font-sans text-xs text-red-500 mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="email" className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider block mb-2">
                              Email Address *
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              className={inputClass("email")}
                              disabled={formState === "loading"}
                            />
                            {errors.email && (
                              <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Phone + Project Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider block mb-2">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className={inputClass("phone")}
                              disabled={formState === "loading"}
                            />
                          </div>
                          <div>
                            <label htmlFor="projectType" className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider block mb-2">
                              Project Type
                            </label>
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className={`${inputClass("projectType")} cursor-pointer bg-transparent`}
                              disabled={formState === "loading"}
                            >
                              <option value="">Select type...</option>
                              <optgroup label="Residential">
                                <option>Apartment</option>
                                <option>Bungalow</option>
                                <option>Farmhouse</option>
                                <option>Villa</option>
                              </optgroup>
                              <optgroup label="Commercial">
                                <option>Office</option>
                                <option>Hospital / Clinic</option>
                                <option>Industrial Facility</option>
                                <option>Retail / Showroom</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>

                        {/* Area */}
                        <div>
                          <label htmlFor="area" className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider block mb-2">
                            Approximate Area (sqft)
                          </label>
                          <input
                            id="area"
                            name="area"
                            type="text"
                            value={formData.area}
                            onChange={handleChange}
                            placeholder="e.g. 2000 sqft"
                            className={inputClass("area")}
                            disabled={formState === "loading"}
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="font-sans text-xs font-600 text-stone-500 uppercase tracking-wider block mb-2">
                            Tell Us About Your Project *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your vision, current state of the space, timeline requirements, and any specific needs..."
                            className={`${inputClass("message")} resize-none`}
                            disabled={formState === "loading"}
                          />
                          {errors.message && (
                            <p className="font-sans text-xs text-red-500 mt-1">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={formState === "loading"}
                          className={`w-full flex items-center justify-center gap-3 font-sans text-sm font-700 tracking-wide px-8 py-4 rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group ${formState === "error" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-dark hover:bg-gold text-cream"}`}
                        >
                          {formState === "loading" ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </>
                          ) : formState === "error" ? (
                            <>
                              Try Again
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </>
                          ) : (
                            <>
                              Send Inquiry
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </>
                          )}
                        </button>

                        <p className="font-sans text-xs text-stone-400 text-center">
                          By submitting, you agree to be contacted by Styluxe Interior Decor.
                          We never share your information with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
