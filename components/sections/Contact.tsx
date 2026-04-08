"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/common/SocialLinks";
import SectionWrapper from "@/components/common/SectionWrapper";

interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const SUBJECT_OPTIONS = [
    { value: "", label: "Select a subject..." },
    { value: "job-opportunity", label: "Job Opportunity" },
    { value: "internship-offer", label: "Internship Offer" },
    { value: "freelance-project", label: "Freelance Project" },
    { value: "just-saying-hi", label: "Just Saying Hi 👋" },
    { value: "other", label: "Other" },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

export default function Contact() {
    const [sending, setSending] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({ mode: "onBlur" });

    const onSubmit = async (data: ContactFormValues) => {
        setSending(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );
            toast.success(
                "Message sent! I'll get back to you within 24 hours. 🎉"
            );
            reset();
        } catch {
            toast.error(
                "Something went wrong. Please email me directly at yadavprakhar1034@gmail.com"
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <SectionWrapper id="contact" alternate>
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    Get in Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Open to Opportunities — Let&apos;s Connect.
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* ── Left: Contact Info ── */}
                <motion.div
                    className="flex flex-col gap-6"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <motion.div variants={fadeUp}>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                            Open to Opportunities —{" "}
                            <span className="text-primary">Let&apos;s Connect.</span>
                        </h3>
                        <p className="text-muted-foreground mt-3 leading-relaxed">
                            Whether you have a job opportunity, an internship offer, or just
                            want to talk tech — my inbox is always open.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1.5">
                            <span>⏱</span>
                            I typically respond within 24 hours.
                        </p>
                    </motion.div>

                    {/* Preferred Channels */}
                    <motion.div variants={fadeUp} className="flex flex-col gap-3">
                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Preferred Contact
                        </p>

                        {/* Email card */}

                        href="mailto:yadavprakhar1034@gmail.com"
                        className="flex items-center gap-3 bg-muted/50 hover:bg-muted
                        rounded-lg p-3 transition-colors duration-200 group"
                        >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-foreground">
                                   Email
                                </span>
                                <span
                                    className="text-xs bg-primary/10 text-primary
                                    rounded-full px-2 py-0.5 font-medium"
                                >
                                   Preferred
                                </span>
                            </div>
                                <p className="text-xs text-muted-foreground truncate">
                                     yadavprakhar1034@gmail.com
                                </p>
                        </div>
                            <a

                                  {/* LinkedIn card */}

                                  href="https://www.linkedin.com/in/prakharyxdev"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 bg-muted/50 hover:bg-muted
                                  rounded-lg p-3 transition-colors duration-200"
                            >
                                 <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                     <Linkedin className="w-4 h-4 text-primary" />
                                 </div>
                                 <div className="flex-1 min-w-0">
                                     <div className="flex items-center gap-2">
                                         <span className="text-sm font-semibold text-foreground">
                                             LinkedIn
                                         </span>
                                         <span
                                             className="text-xs bg-primary/10 text-primary
                                             rounded-full px-2 py-0.5 font-medium"
                                         >
                                             Preferred
                                         </span>
                                     </div>
                                     <p className="text-xs text-muted-foreground">
                                         @prakharyxdev
                                     </p>
                                 </div>
                            </a>
                    </motion.div>

                    {/* All socials */}
                    <motion.div variants={fadeUp}>
                        <SocialLinks iconSize={20} showLabels={false} />
                    </motion.div>

                    {/* Resume download */}
                    <motion.div variants={fadeUp}>
                        <a href="/Prakhar_Yadav_Resume.pdf" download>
                           <Button size="default" className="font-medium">
                               Download Resume ↓
                           </Button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* ── Right: Contact Form ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="bg-card border border-border rounded-xl p-6 md:p-8"
                >
                     <form
                          onSubmit={handleSubmit(onSubmit)}
                          noValidate
                          className="flex flex-col gap-5"
                     >
                     {/* Name */}
                     <div className="flex flex-col gap-1.5">
                         <label
                             htmlFor="contact-name"
                             className="text-sm font-medium text-foreground"
                         >
                             Your Name <span className="text-red-500">*</span>
                         </label>
                         <Input
                             id="contact-name"
                             placeholder="John Doe"
                             disabled={sending}
                             aria-invalid={!!errors.name}
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters",
                                },
                             })}
                         />
                              <FieldError message={errors.name?.message} />
                     </div>

                     {/* Email */}
                      <div className="flex flex-col gap-1.5">
                          <label
                             htmlFor="contact-email"
                             className="text-sm font-medium text-foreground"
                          >
                              Your Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                             id="contact-email"
                             type="email"
                             placeholder="john@example.com"
                             disabled={sending}
                             aria-invalid={!!errors.email}
                             {...register("email", {
                                 required: "Email is required",
                                 pattern: {
                                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                     message: "Please enter a valid email address",
                                 },
                             })}
                          />
                              <FieldError message={errors.email?.message} />
                      </div>

                         {/* Subject */}
                         <div className="flex flex-col gap-1.5">
                             <label
                                 htmlFor="contact-subject"
                                 className="text-sm font-medium text-foreground"
                             >
                                 Subject <span className="text-red-500">*</span>
                             </label>
                             <select
                                id="contact-subject"
                                disabled={sending}
                                aria-invalid={!!errors.subject}
                                className="flex h-10 w-full rounded-md border border-input
                                     bg-background px-3 py-2 text-sm
                                     text-foreground ring-offset-background
                                     focus-visible:outline-none
                                     focus-visible:ring-2 focus-visible:ring-ring
                                     focus-visible:ring-offset-2
                                     disabled:cursor-not-allowed disabled:opacity-50
                                      transition-colors duration-150"
                                    {...register("subject", {
                                         required: "Please select a subject",
                                          validate: (v) => v !== "" || "Please select a subject",
                                    })}
                             >
                                  {SUBJECT_OPTIONS.map((opt) => (
                                      <option key={opt.value} value={opt.value}>
                                          {opt.label}
                                      </option>
                                  ))}
                             </select>
                             <FieldError message={errors.subject?.message} />
                      </div>

                     {/* Message */}
                      <div className="flex flex-col gap-1.5">
                          <label
                                htmlFor="contact-message"
                               className="text-sm font-medium text-foreground"
                          >
                               Message <span className="text-red-500">*</span>
                          </label>
                          <Textarea
                             id="contact-message"
                             placeholder="Tell me about the opportunity or just say hello..."
                             rows={5}
                             disabled={sending}
                             aria-invalid={!!errors.message}
                             className="resize-none"
                                 {...register("message", {
                                    required: "Message is required",
                                    minLength: {
                                         value: 20,
                                         message: "Message must be at least 20 characters",
                                    },
                                 })}
                          />
                         <FieldError message={errors.message?.message} />
                      </div>

                      {/* Submit */}
                       <Button
                          type="submit"
                          disabled={sending}
                          className="w-full font-medium mt-1"
                          size="default"
                       >
                       {sending ? (
                            <span className="flex items-center justify-center gap-2">
                                {/* Inline spinner */}
                                <svg
                                    className="w-4 h-4 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                     <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                     />
                                 </svg>
                               Sending...
                            </span>
                       ) : (
                           "Send Message →"
                       )}
                           </Button>
                       </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}