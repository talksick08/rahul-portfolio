import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaEnvelope,
    FaInstagram,
    FaGithub,
    FaUser,
    FaCommentDots,
    FaArrowRight,
} from "react-icons/fa";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        const finalMessage = `Hi Rahul,

My name is ${name || "there"}.

${message || "I would like to connect with you."}`;

        const whatsappUrl = `https://wa.me/919679114891?text=${encodeURIComponent(
            finalMessage
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32">
            {/* Background atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[160px]" />

                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Contact label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center justify-center gap-6"
                >
                    <span className="h-px w-20 bg-white/40" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.55em] text-white/60">
                        Contact
                    </span>

                    <span className="h-px w-20 bg-white/40" />
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="overflow-x-auto text-center scrollbar-none"
                >
                    <h2 className="whitespace-nowrap text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[7rem]">
                        Let&apos;s Build Together
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-[10px] uppercase tracking-[0.42em] text-white/45 sm:text-xs">
                        Ideas × Projects × Collaborations × Opportunities
                    </p>
                </motion.div>

                {/* Main content */}
                <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-6 flex items-center gap-5">
                            <span className="h-px w-12 bg-white/60" />

                            <span className="text-[10px] uppercase tracking-[0.45em] text-white/50">
                                Get In Touch
                            </span>
                        </div>

                        <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
                            Have an idea, project, or collaboration in mind?
                        </h3>

                        <p className="mt-7 max-w-lg text-sm leading-7 text-white/45 md:text-base">
                            Send me a message and let&apos;s create something clean,
                            modern, and impactful together.
                        </p>

                        {/* Contact cards */}
                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                            {/* Email */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulmahanta156@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                                    <FaEnvelope className="text-2xl text-white/85 transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                <p className="mt-3 text-center text-sm font-medium">
                                    Email
                                </p>

                                <p className="mt-1 text-center text-[10px] text-white/35">
                                    Drop a mail
                                </p>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919679114891"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                                    <FaWhatsapp className="text-2xl text-white/85 transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                <p className="mt-3 text-center text-sm font-medium">
                                    WhatsApp
                                </p>

                                <p className="mt-1 text-center text-[10px] text-white/35">
                                    Let&apos;s chat
                                </p>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/highnhoes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                                    <FaInstagram className="text-2xl text-white/85 transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                <p className="mt-3 text-center text-sm font-medium">
                                    Instagram
                                </p>

                                <p className="mt-1 text-center text-[10px] text-white/35">
                                    @highnhoes
                                </p>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/talksick08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.035] transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                                    <FaGithub className="text-2xl text-white/85 transition-transform duration-300 group-hover:scale-110" />
                                </div>

                                <p className="mt-3 text-center text-sm font-medium">
                                    GitHub
                                </p>

                                <p className="mt-1 text-center text-[10px] text-white/35">
                                    talksick08
                                </p>
                            </a>
                        </div>

                        <p className="mt-12 max-w-md text-[10px] uppercase leading-5 tracking-[0.3em] text-white/25">
                            &quot;Good ideas turn into great things
                            <br />
                            when the right people connect.&quot;
                        </p>
                    </motion.div>

                    {/* Right side - message form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="rounded-[28px] border border-white/15 bg-white/[0.035] p-6 shadow-[0_0_60px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-8 md:p-10"
                    >
                        {/* Form header */}
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                                    Send a Message
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                                    Your message opens directly in WhatsApp — no spam, just
                                    real connection.
                                </p>
                            </div>

                            <div className="hidden items-center gap-2 sm:flex">
                                <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

                                <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                                    Direct
                                </span>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="mt-8">
                            <label className="sr-only" htmlFor="contact-name">
                                Your Name
                            </label>

                            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/30 px-5 transition-colors focus-within:border-white/35">
                                <FaUser className="shrink-0 text-sm text-white/35" />

                                <input
                                    id="contact-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="h-16 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="contact-message">
                                Write your message
                            </label>

                            <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-black/30 px-5 py-4 transition-colors focus-within:border-white/35">
                                <FaCommentDots className="mt-1 shrink-0 text-sm text-white/35" />

                                <textarea
                                    id="contact-message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write your message..."
                                    rows={5}
                                    className="w-full resize-none bg-transparent text-sm leading-6 text-white outline-none placeholder:text-white/30"
                                />
                            </div>
                        </div>

                        {/* Send button */}
                        <button
                            type="button"
                            onClick={handleSend}
                            className="group mt-5 flex w-full items-center justify-between rounded-2xl bg-white px-6 py-5 text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                        >
                            <span className="flex items-center gap-3 text-sm font-semibold">
                                <FaWhatsapp className="text-lg" />
                                Send Message
                            </span>

                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        {/* Response status */}
                        <div className="mt-7 flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.7)]" />

                            <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                                Usually replies within a few hours
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}