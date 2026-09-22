import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaEnvelope,
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaUser,
    FaCommentDots,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

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

    const socialLinks = [
        {
            number: "01",
            label: "EMAIL",
            description: "Send an email",
            icon: FaEnvelope,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=rahulmahanta156@gmail.com",
        },
        {
            number: "02",
            label: "WHATSAPP",
            description: "Start a conversation",
            icon: FaWhatsapp,
            href: "https://wa.me/919679114891",
        },
        {
            number: "03",
            label: "INSTAGRAM",
            description: "View profile",
            icon: FaInstagram,
            href: "https://www.instagram.com/highnhoes",
        },
        {
            number: "04",
            label: "GITHUB",
            description: "Explore projects",
            icon: FaGithub,
            href: "https://github.com/talksick08",
        },
        {
            number: "05",
            label: "LINKEDIN",
            description: "Connect professionally",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/rahul-mahanta-57a16a325/",
        },
    ];

    return (
        <section
            className="
                relative
                overflow-hidden
                bg-black
                px-4
                py-24
                text-white
                sm:px-6
                sm:py-28
                md:px-12
                md:py-36
                lg:px-20
                lg:py-40
            "
        >
            {/* =========================================================
                BACKGROUND
            ========================================================= */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute
                        -left-40
                        -top-32
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-white/[0.025]
                        blur-[140px]
                        sm:h-[600px]
                        sm:w-[600px]
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-40
                        -right-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-white/[0.018]
                        blur-[150px]
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.025]
                    "
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        h-full
                        w-px
                        -translate-x-1/2
                        bg-white/[0.02]
                    "
                />
            </div>

            <div className="relative mx-auto max-w-7xl">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-4
                            border-b
                            border-white/[0.08]
                            pb-5
                            sm:gap-6
                            sm:pb-6
                        "
                    >
                        <span className="h-px w-8 bg-white/40 sm:w-14" />

                        <span
                            className="
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.5em]
                                text-white/40
                                sm:text-[9px]
                                sm:tracking-[0.6em]
                            "
                        >
                            07 / Contact
                        </span>

                        <div className="ml-auto flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span
                                    className="
                                        absolute
                                        inset-0
                                        animate-ping
                                        rounded-full
                                        bg-lime-400/50
                                    "
                                />

                                <span
                                    className="
                                        relative
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-lime-400
                                    "
                                />
                            </span>

                            <span
                                className="
                                    font-mono
                                    text-[7px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/30
                                    sm:text-[8px]
                                "
                            >
                                Available
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="
                        mt-12
                        grid
                        gap-8
                        sm:mt-16
                        lg:grid-cols-[1.15fr_0.85fr]
                        lg:items-end
                    "
                >
                    <div>
                        <p
                            className="
                                mb-5
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.4em]
                                text-white/20
                            "
                        >
                            Let&apos;s make something meaningful
                        </p>

                        <h2
                            className="
                                text-[clamp(48px,13vw,118px)]
                                font-semibold
                                leading-[0.82]
                                tracking-[-0.075em]
                            "
                        >
                            LET&apos;S
                            <br />

                            <span className="text-white/30">
                                BUILD
                            </span>

                            <br />

                            TOGETHER
                            <span className="text-white/20">.</span>
                        </h2>
                    </div>

                    <div className="max-w-md lg:justify-self-end lg:pb-2">
                        <div className="mb-5 h-px w-16 bg-white/20 sm:w-24" />

                        <p
                            className="
                                text-sm
                                leading-7
                                text-white/40
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            Have an idea, project, collaboration, or
                            opportunity? Start a conversation and let&apos;s
                            turn the idea into something real.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <span
                                className="
                                    font-mono
                                    text-[7px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-white/20
                                "
                            >
                                Ideas
                            </span>

                            <span className="h-px w-7 bg-white/10" />

                            <span
                                className="
                                    font-mono
                                    text-[7px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-white/20
                                "
                            >
                                Code
                            </span>

                            <span className="h-px w-7 bg-white/10" />

                            <span
                                className="
                                    font-mono
                                    text-[7px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-white/20
                                "
                            >
                                Security
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <div
                    className="
                        mt-16
                        grid
                        gap-12
                        sm:mt-20
                        sm:gap-16
                        lg:grid-cols-[0.85fr_1.15fr]
                        lg:gap-20
                    "
                >

                    {/* =================================================
                        CONTACT LINKS
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div
                            className="
                                mb-6
                                flex
                                items-center
                                justify-between
                                border-b
                                border-white/[0.08]
                                pb-4
                            "
                        >
                            <span
                                className="
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.35em]
                                    text-white/30
                                "
                            >
                                Connect
                            </span>

                            <span
                                className="
                                    font-mono
                                    text-[7px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/15
                                "
                            >
                                05 CHANNELS
                            </span>
                        </div>

                        <div className="border-t border-white/[0.08]">
                            {socialLinks.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.06,
                                        }}
                                        className="
                                            group
                                            relative
                                            flex
                                            min-h-[82px]
                                            items-center
                                            gap-4
                                            border-b
                                            border-white/[0.08]
                                            sm:min-h-[92px]
                                            sm:gap-5
                                        "
                                    >
                                        <span
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-y-0
                                                left-[-16px]
                                                right-[-16px]
                                                bg-white/[0.025]
                                                opacity-0
                                                transition-opacity
                                                duration-300
                                                group-hover:opacity-100
                                            "
                                        />

                                        <span
                                            className="
                                                relative
                                                w-6
                                                shrink-0
                                                font-mono
                                                text-[8px]
                                                text-white/20
                                                sm:w-8
                                                sm:text-[9px]
                                            "
                                        >
                                            {item.number}
                                        </span>

                                        <span
                                            className="
                                                relative
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/10
                                                bg-white/[0.02]
                                                transition-all
                                                duration-300
                                                group-hover:border-white/25
                                                group-hover:bg-white/[0.07]
                                                sm:h-10
                                                sm:w-10
                                            "
                                        >
                                            <Icon
                                                className="
                                                    text-[13px]
                                                    text-white/50
                                                    transition-all
                                                    duration-300
                                                    group-hover:scale-110
                                                    group-hover:text-white
                                                "
                                            />
                                        </span>

                                        <span className="relative min-w-0 flex-1">
                                            <span
                                                className="
                                                    block
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.3em]
                                                    text-white/65
                                                    sm:text-[10px]
                                                "
                                            >
                                                {item.label}
                                            </span>

                                            <span
                                                className="
                                                    mt-1.5
                                                    block
                                                    text-[10px]
                                                    text-white/25
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-white/50
                                                    sm:text-xs
                                                "
                                            >
                                                {item.description}
                                            </span>
                                        </span>

                                        <span
                                            className="
                                                relative
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <FaArrowUpRightFromSquare
                                                className="
                                                    text-[9px]
                                                    text-white/15
                                                    transition-all
                                                    duration-300
                                                    group-hover:-translate-y-0.5
                                                    group-hover:translate-x-0.5
                                                    group-hover:text-white/70
                                                "
                                            />
                                        </span>
                                    </motion.a>
                                );
                            })}
                        </div>

                        <div
                            className="
                                mt-7
                                border
                                border-white/[0.08]
                                bg-white/[0.015]
                                px-5
                                py-5
                            "
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p
                                        className="
                                            font-mono
                                            text-[7px]
                                            uppercase
                                            tracking-[0.3em]
                                            text-white/20
                                        "
                                    >
                                        Digital presence
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            font-medium
                                            tracking-[0.08em]
                                            text-white/60
                                        "
                                    >
                                        RAHUL · HIGHNHOES
                                    </p>
                                </div>

                                <span
                                    className="
                                        font-mono
                                        text-[7px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-white/15
                                    "
                                >
                                    ONLINE
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* =================================================
                        MESSAGE PANEL
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/[0.1]
                            bg-[#090909]
                            p-6
                            sm:rounded-[32px]
                            sm:p-8
                            md:p-10
                        "
                    >
                        {/* subtle glow */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-24
                                -top-24
                                h-64
                                w-64
                                rounded-full
                                bg-white/[0.025]
                                blur-[100px]
                            "
                        />

                        <div className="relative">

                            {/* heading */}

                            <div>
                                <p
                                    className="
                                        text-[8px]
                                        font-medium
                                        uppercase
                                        tracking-[0.35em]
                                        text-white/35
                                    "
                                >
                                    Let&apos;s talk
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        text-[clamp(28px,5vw,42px)]
                                        font-medium
                                        leading-tight
                                        tracking-[-0.055em]
                                    "
                                >
                                    Have something
                                    <br />

                                    <span className="text-white/45">
                                        in mind?
                                    </span>
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        max-w-md
                                        text-sm
                                        leading-7
                                        text-white/45
                                    "
                                >
                                    Tell me about it. I&apos;d love to hear
                                    what you&apos;re working on.
                                </p>
                            </div>

                            {/* =================================================
                                NAME
                            ================================================= */}

                            <div className="mt-9">
                                <label
                                    htmlFor="contact-name"
                                    className="
                                        mb-3
                                        flex
                                        items-center
                                        gap-2.5
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.25em]
                                        text-white/70
                                        sm:text-[11px]
                                    "
                                >
                                    <span
                                        className="
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-white/80
                                        "
                                    />

                                    Your name
                                </label>

                                <div
                                    className="
                                        group
                                        flex
                                        min-h-[58px]
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-white/[0.14]
                                        bg-white/[0.035]
                                        px-4
                                        transition-all
                                        duration-300
                                        focus-within:border-white/40
                                        focus-within:bg-white/[0.055]
                                    "
                                >
                                    <FaUser
                                        className="
                                            shrink-0
                                            text-sm
                                            text-white/45
                                            transition-colors
                                            duration-300
                                            group-focus-within:text-white/80
                                        "
                                    />

                                    <input
                                        id="contact-name"
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="What should I call you?"
                                        className="
                                            h-full
                                            w-full
                                            bg-transparent
                                            text-sm
                                            text-white
                                            outline-none
                                            placeholder:text-white/30
                                        "
                                    />
                                </div>
                            </div>

                            {/* =================================================
                                MESSAGE
                            ================================================= */}

                            <div className="mt-7">
                                <div className="mb-3 flex items-center justify-between">
                                    <label
                                        htmlFor="contact-message"
                                        className="
                                            flex
                                            items-center
                                            gap-2.5
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.25em]
                                            text-white/70
                                            sm:text-[11px]
                                        "
                                    >
                                        <span
                                            className="
                                                h-1.5
                                                w-1.5
                                                rounded-full
                                                bg-white/80
                                            "
                                        />

                                        Your message
                                    </label>

                                    <span
                                        className="
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/[0.04]
                                            px-2.5
                                            py-1
                                            font-mono
                                            text-[8px]
                                            text-white/50
                                        "
                                    >
                                        {message.length}/500
                                    </span>
                                </div>

                                <div
                                    className="
                                        group
                                        flex
                                        items-start
                                        gap-3
                                        rounded-xl
                                        border
                                        border-white/[0.14]
                                        bg-white/[0.035]
                                        px-4
                                        transition-all
                                        duration-300
                                        focus-within:border-white/40
                                        focus-within:bg-white/[0.055]
                                    "
                                >
                                    <FaCommentDots
                                        className="
                                            mt-4
                                            shrink-0
                                            text-sm
                                            text-white/45
                                            transition-colors
                                            duration-300
                                            group-focus-within:text-white/80
                                        "
                                    />

                                    <textarea
                                        id="contact-message"
                                        value={message}
                                        maxLength={500}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        placeholder="What would you like to build?"
                                        rows={5}
                                        className="
                                            w-full
                                            resize-none
                                            bg-transparent
                                            py-4
                                            text-sm
                                            leading-7
                                            text-white
                                            outline-none
                                            placeholder:text-white/30
                                        "
                                    />
                                </div>
                            </div>

                            {/* =================================================
                                SEND BUTTON
                            ================================================= */}

                            <button
                                type="button"
                                onClick={handleSend}
                                className="
                                    group
                                    mt-8
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    rounded-full
                                    bg-white
                                    px-5
                                    py-3.5
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:bg-white/90
                                    hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]
                                    sm:px-6
                                    sm:py-4
                                "
                            >
                                <span
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-sm
                                        font-semibold
                                    "
                                >
                                    <FaWhatsapp className="text-base" />

                                    Send message
                                </span>

                                <span
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-black/[0.07]
                                    "
                                >
                                    <FaArrowUpRightFromSquare
                                        className="
                                            text-[9px]
                                            transition-transform
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                        "
                                    />
                                </span>
                            </button>

                            {/* response note */}

                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-2.5
                                "
                            >
                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-lime-400
                                        shadow-[0_0_10px_rgba(163,230,53,0.6)]
                                    "
                                />

                                <span
                                    className="
                                        text-[8px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-white/25
                                    "
                                >
                                    I&apos;ll get back to you soon
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="
                        mt-20
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/[0.08]
                        pt-6
                        sm:mt-24
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <span
                        className="
                            font-mono
                            text-[7px]
                            uppercase
                            tracking-[0.4em]
                            text-white/20
                        "
                    >
                        RAHUL · HIGHNHOES
                    </span>

                    <span
                        className="
                            font-mono
                            text-[7px]
                            uppercase
                            tracking-[0.35em]
                            text-white/15
                        "
                    >
                        Ideas × Code × Security
                    </span>
                </motion.div>
            </div>
        </section>
    );
}