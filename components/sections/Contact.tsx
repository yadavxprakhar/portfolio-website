"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/common/SectionWrapper";

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [sending, setSending] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>();

    const onSubmit = async (data: ContactFormValues) => {
        setSending(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );
            toast.success("Message received! I'll be in touch soon.");
            reset();
        } catch {
            toast.error("Failed to send. Please reach out via LinkedIn.");
        } finally {
            setSending(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="py-32 relative overflow-hidden border-t border-border bg-card">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                                Route: /contact
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                                Let&apos;s <span className="text-gradient">Connect.</span>
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                                Whether you have a specific opportunity in mind or just want to discuss backend architectures, distributed systems, or fitness journey, my gateway is open.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:yadavxprakhar@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded border border-border bg-background flex items-center justify-center group-hover:border-amber-500/30 group-hover:bg-amber-500/5 transition-all duration-300">
                                    <Mail className="w-4.5 h-4.5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">Email</p>
                                    <p className="text-foreground text-sm font-bold font-mono group-hover:text-amber-500 transition-colors">yadavxprakhar@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/prakharyxdev/" target="_blank" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded border border-border bg-background flex items-center justify-center group-hover:border-amber-500/30 group-hover:bg-amber-500/5 transition-all duration-300">
                                    <FaLinkedin className="w-4.5 h-4.5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest font-mono">LinkedIn</p>
                                    <p className="text-foreground text-sm font-bold font-mono group-hover:text-amber-500 transition-colors">linkedin.com/in/prakharyxdev</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-3">
                            {[
                                { icon: FaGithub, href: "https://github.com/yadavxprakhar" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/prakharyxdev/" },
                                { icon: Mail, href: "mailto:yadavxprakhar@gmail.com" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-amber-500 hover:border-amber-500/30 bg-background transition-all">
                                    <social.icon className="w-4.5 h-4.5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-xl border border-border bg-background backdrop-blur-sm shadow-lg"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 font-mono">Name</label>
                                <Input 
                                    {...register("name", { required: true })}
                                    placeholder="Enter your name"
                                    className="bg-card border-border focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 h-10 rounded font-mono text-base md:text-xs"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 font-mono">Email</label>
                                <Input 
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="your@email.com"
                                    className="bg-card border-border focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 h-10 rounded font-mono text-base md:text-xs"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 font-mono">Message</label>
                                <Textarea 
                                    {...register("message", { required: true })}
                                    placeholder="How can I help?"
                                    className="bg-card border-border focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:border-amber-500 min-h-[120px] rounded p-3 font-mono text-base md:text-xs"
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={sending}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-black h-11 rounded font-mono font-bold text-xs group"
                            >
                                {sending ? "Sending..." : "Send Message"}
                                <Send className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}