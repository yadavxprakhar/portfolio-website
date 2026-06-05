"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";

export default function Blogs() {
    return (
        <SectionWrapper id="blogs" className="py-32 border-t border-border bg-card/30 dark:bg-card/10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Writing & Insights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 tracking-tighter">
                        Featured <span className="text-gradient">Blogs</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                        Articles, guides, and engineering thoughts on software development, artificial intelligence, and building tools for the future.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="w-full md:w-[calc(50%-16px)] flex flex-col group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-amber-500/30 transition-all duration-300 shadow-lg"
                        >
                            {/* Visual Card Header with Premium Tech Gradients and Grid Pattern */}
                            <div className="relative aspect-[21/9] overflow-hidden bg-slate-950 flex items-center justify-center border-b border-border">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-slate-950 opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                
                                {/* Tech Grid Overlay */}
                                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                                
                                {/* Decorative Blurred Circles */}
                                <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />
                                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />

                                {/* Interactive code illustration */}
                                <div className="relative z-10 font-mono text-[10px] md:text-xs text-amber-500/40 select-none p-4 w-full h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-center opacity-60">
                                        <span>// publication_node_01</span>
                                        <span>active_node.sh</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-start pl-4">
                                        <span className="text-amber-500/70 font-semibold">{`const engineeringInsights = {`}</span>
                                        <span className="pl-4 text-slate-400/60">{`topic: "${blog.title.split(' ')[0]}...",`}</span>
                                        <span className="pl-4 text-slate-400/60">{`viable_in_2026: true`}</span>
                                        <span>{`};`}</span>
                                    </div>
                                    <div className="text-right opacity-60 text-[9px]">
                                        <span>Medium Network Protocol</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                {/* Metadata Row */}
                                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-amber-500/60" />
                                        {blog.publishDate}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-amber-500/60" />
                                        {blog.readTime}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-amber-500 transition-colors tracking-tight line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-amber-500/80 font-mono uppercase tracking-wider">
                                        {blog.subtitle}
                                    </p>
                                    {blog.description && (
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 pt-2">
                                            {blog.description}
                                        </p>
                                    )}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground rounded-full border border-border bg-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Button */}
                                <div className="mt-auto">
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl border border-border bg-card hover:bg-secondary hover:border-amber-500/30 hover:text-amber-500 text-foreground font-mono h-12 text-xs group"
                                        asChild
                                    >
                                        <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                            <BookOpen className="w-4 h-4 mr-2" />
                                            Read Article on Medium
                                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
