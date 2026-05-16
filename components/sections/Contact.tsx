"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send, ArrowRight } from "lucide-react";
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
        <SectionWrapper id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                                Let&apos;s <span className="text-gradient">Connect.</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-md">
                                Whether you have a specific opportunity in mind or just want to discuss the latest tech trends, I&apos;m always open to connecting.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:yadavprakhar1034@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                                    <p className="text-white font-bold">yadavprakhar1034@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/prakharyxdev" target="_blank" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                                    <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LinkedIn</p>
                                    <p className="text-white font-bold">@prakharyxdev</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: FaGithub, href: "https://github.com/yadavxprakhar" },
                                { icon: Mail, href: "mailto:yadavprakhar1034@gmail.com" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                <Input 
                                    {...register("name", { required: true })}
                                    placeholder="Enter your name"
                                    className="bg-white/5 border-white/10 focus:border-indigo-500 h-12 rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                <Input 
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="your@email.com"
                                    className="bg-white/5 border-white/10 focus:border-indigo-500 h-12 rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <Textarea 
                                    {...register("message", { required: true })}
                                    placeholder="How can I help?"
                                    className="bg-white/5 border-white/10 focus:border-indigo-500 min-h-[150px] rounded-2xl p-4"
                                />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={sending}
                                className="w-full bg-white text-black hover:bg-slate-200 h-14 rounded-2xl font-bold group"
                            >
                                {sending ? "Sending..." : "Send Message"}
                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}