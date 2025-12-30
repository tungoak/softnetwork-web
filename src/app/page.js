"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBuildingBank, IconChartPie, IconScale } from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const statsTarget = [250, 68, 19];

const customers = [
  { src: "/images/customers/gw.jpg", alt: "Green Wing เงินด่วน" },
  { src: "/images/customers/advance-fin.jpg", alt: "Advance Finance" },
  { src: "/images/customers/aurora.jpg", alt: "Aurora" },
  { src: "/images/customers/blockfint.jpg", alt: "Blockfint" },
  { src: "/images/customers/ccap.jpg", alt: "CCAP" },
  { src: "/images/customers/chairitleasing.jpg", alt: "ชัยฤทธิ์ ลีสซิ่ง" },
  { src: "/images/customers/hua-heng-lee.jpg", alt: "Hua Heng Lee" },
  { src: "/images/customers/jsm.jpg", alt: "JSM Money" },
  { src: "/images/customers/mbk.jpg", alt: "MBK" },
  { src: "/images/customers/metropolis.jpg", alt: "Metropolis Leasing" },
  { src: "/images/customers/nakhonluang-capital.jpg", alt: "Nakhonluang Capital" },
  { src: "/images/customers/next-capital.jpg", alt: "Next Capital" },
  { src: "/images/customers/serm.jpg", alt: "SERM" },
  { src: "/images/customers/skl.jpg", alt: "SKL สยามคุณค่า ลีสซิ่ง" },
  { src: "/images/customers/somwang.jpg", alt: "สมหวัง เงินสั่งได้" },
  { src: "/images/customers/tsrl.jpg", alt: "TSRL" },
  { src: "/images/customers/mittae-esan.jpg", alt: "Mittae Esan Co. Ltd." },
];

const serviceCards = [
  {
    title: "Consultation",
    accent: "#F59E0B",
    image: "/images/solutions/finance-meeting-board.jpg",
    alt: "Consultation service background",
    description: "Expert guidance on loan processes, compliance, and digital strategies.",
  },
  {
    title: "Development",
    accent: "#2A8BEA",
    image: "/images/solutions/accounting-dashboard-team.jpg",
    alt: "Development service background",
    description: "Customized software solutions tailored to optimize lending.",
  },
  {
    title: "Implementation",
    accent: "#F59E0B",
    image: "/images/home/network-bg.jpg",
    alt: "Implementation service background",
    description: "Seamless system integration, user training, and technical support.",
  },
];

const solutionShowcase = [
  {
    title: "Hire Purchase System",
    description:
      "End-to-end hire purchase loan management—built for verification, monitoring, and tracking, with support for accounting standards and legal compliance.",
    image: "/images/solutions/hire-purchase-dealer.jpg",
    tag: "Hire Purchase",
  },
  {
    title: "Lending Management System",
    description:
      "Comprehensive loan management for secured and personal lending—supports multiple interest calculation methods and repayment allocation aligned with Bank of Thailand (BOT) requirements.",
    image: "/images/solutions/finance-meeting-board.jpg",
    tag: "Lending",
  },
  {
    title: "Accounting System",
    description:
      "Fast accounting and financial statement generation—reduces duplicate work through accurate integration with data across connected systems.",
    image: "/images/solutions/accounting-dashboard-team.jpg",
    tag: "Accounting",
  },
];

function initialsFromTag(tag) {
  if (!tag) return "SN";
  const parts = tag.trim().split(/\s+/);
  return parts
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ServiceIcon({ index = 0, className = "" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  // Consultation — chat / guidance
  if (index === 0) {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path
          d="M14 14h20a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H24l-8 6v-6h-2a8 8 0 0 1-8-8v-8a8 8 0 0 1 8-8z"
          {...common}
        />
        <path d="M16 24h10" {...common} />
        <path d="M16 29h16" {...common} />
        <path d="M30 24h2" {...common} />
      </svg>
    );
  }

  // Development — code / build
  if (index === 1) {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M19 16l-7 8 7 8" {...common} />
        <path d="M29 16l7 8-7 8" {...common} />
        <path d="M26 14l-4 20" {...common} />
        <path
          d="M12 10h24a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z"
          {...common}
        />
      </svg>
    );
  }

  // Implementation — deploy / rollout
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 9l10 10-10 22-10-22 10-10z" {...common} />
      <path d="M24 9v8" {...common} />
      <path d="M19 25h10" {...common} />
      <path d="M20 33l-3 6" {...common} />
      <path d="M28 33l3 6" {...common} />
    </svg>
  );
}

export default function Page() {
  const numbersRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentNumbers, setCurrentNumbers] = useState([0, 0, 0]);

  // SOLUTIONS: click to switch
  const [activeSolution, setActiveSolution] = useState(0);

  // ✅ Solutions navigation (prev/next)
  const solutionCount = solutionShowcase.length;
  const prevSolution = () => setActiveSolution((v) => (v - 1 + solutionCount) % solutionCount);
  const nextSolution = () => setActiveSolution((v) => (v + 1) % solutionCount);

  // numbers: start counting when visible
  useEffect(() => {
    if (!numbersRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(numbersRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setCurrentNumbers(statsTarget.map((target) => Math.round(target * progress)));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasAnimated]);

  return (
    <main className="w-full bg-white text-slate-900">
      {/* 1) HERO (Home) */}
      <section id="home" className="relative min-h-screen scroll-mt-40 overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-white" />
        </div>

        {/* Centered layout */}
        <div className="relative z-10 container flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-24 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="mx-auto w-full max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="text-xs sm:text-sm font-semibold tracking-[0.02em] text-[#f59e0b]"
            >
              Software Studio for Modern Business
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="block text-slate-900">We Are</span>
              <span className="block">
                <span className="text-[#f59e0b]">S</span>
                <span className="text-slate-900">oft</span>
                <span className="text-[#2563eb]">N</span>
                <span className="text-slate-900">etwork</span>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              We build software for your business. Reliable systems for lending, hire purchase, and finance operations—designed to
              scale with your organization.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-7 text-xs text-[#2563eb]">
              Smart, secure, and ready for enterprise.
            </motion.p>
          </motion.div>

          {/* Animated scroll arrow */}
          <motion.a
            href="#numbers"
            aria-label="Scroll down"
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-12 w-12 text-[#f59e0b]"
              fill="none"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <polyline points="6 4 12 10 18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="6 14 12 20 18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.a>
        </div>
      </section>

      {/* 2) NUMBERS THAT MATTER */}
      <section
        id="numbers"
        className="relative overflow-hidden w-full"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(74,147,234,1) 0%, rgba(30,107,184,1) 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.10),transparent_62%)]" />
          <div className="absolute -left-[320px] top-[-320px] h-[640px] w-[640px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative z-10 container py-12 md:py-14 lg:py-16 min-h-[260px] md:min-h-[300px] flex items-center justify-center">
          <motion.div
            ref={numbersRef}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full flex flex-wrap items-stretch justify-center gap-6 md:gap-7"
          >
            {[
              { value: `${currentNumbers[0]}+`, label: "Projects Delivered", Icon: IconChartPie },
              { value: `${currentNumbers[1]}+`, label: "Active Clients", Icon: IconBuildingBank },
              { value: `${currentNumbers[2]}+`, label: "Years of Experience", Icon: IconScale },
            ].map(({ value, label, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 * i }}
                className="w-[240px] sm:w-[260px] md:w-[285px] min-h-[170px] rounded-[28px] border border-white/15 px-8 py-7"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.11) 55%, rgba(255,255,255,0.14) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), 0 22px 70px rgba(0,0,0,0.26)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <div className="h-full flex flex-col">
                  {/* icon centered */}
                  <div className="relative flex w-full items-center justify-center">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/18" />
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/14 ring-1 ring-white/18 text-white">
                      <Icon className="h-6 w-6" stroke={2} />
                    </div>
                  </div>

                  {/* centered content */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <p className="text-[56px] md:text-[64px] leading-none font-extrabold tracking-tight text-[var(--sn-orange)] drop-shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
                      {value}
                    </p>

                    <p className="mt-3 text-[12px] md:text-[13px] font-semibold text-white/85">
                      {label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3) ABOUT (ปรับให้เต็มจอเหมือน Home) */}
      <section id="about" className="relative min-h-screen scroll-mt-40 overflow-hidden bg-white">
        <div className="container relative z-10 flex min-h-screen items-center px-4 pt-24 pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            {/* Left */}
            <motion.div variants={fadeUp} className="relative w-full">
              <div className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]">
                <div className="absolute inset-y-0 left-0 w-[72%] sm:w-[70%] bg-[#2563eb]" />

                <div className="absolute left-[44px] sm:left-[64px] top-[44px] sm:top-[56px] right-0 bottom-[44px] sm:bottom-[56px]">
                  <div className="relative h-full w-full overflow-hidden bg-slate-200 shadow-[0_26px_70px_rgba(2,6,23,0.16)]">
                    <Image
                      src="/images/home/about-hero.jpg"
                      alt="SoftNetwork team working together"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-white/45" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div variants={fadeUp} className="max-w-xl lg:max-w-none lg:pl-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-slate-900">About us</h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 max-w-[58ch]">
                SoftNetwork develops enterprise software solutions for lending and finance operations. We focus on reliability,
                security, and long-term maintainability for real-world business processes.
              </p>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-[58ch]">
                We partner with your teams from planning to go-live—ensuring a smooth implementation and measurable outcomes.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(37,99,235,0.28)] hover:brightness-95 transition"
                >
                  Read More
                </Link>

                <span className="text-xs text-slate-500">Smart Lending, Trusted Advice</span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">APITAK SITTIRAK</p>
                <p className="text-xs text-slate-500">CEO &amp; Founder</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4) SOLUTIONS (ปรับให้เต็มจอเหมือน Home) */}
      <section id="solutions" className="relative min-h-screen scroll-mt-40 overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-white" />
        </div>

        <div className="relative z-10 container flex min-h-screen items-center px-4 pt-24 pb-24">
          <div className="w-full">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              {/* Left: Details */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-xl lg:max-w-none"
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">Solutions</p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
                  {solutionShowcase[activeSolution].title}
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  {solutionShowcase[activeSolution].description}
                </p>

                <div className="mt-6 h-1.5 w-16 rounded-full bg-[#2563eb]" />

                <div className="mt-7">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(245,158,11,0.25)] hover:brightness-95 transition"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>

              {/* Right: Selectable Cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.04 }}
                className="relative"
              >
                {/* orange circle background */}
                <div className="pointer-events-none absolute -right-24 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full bg-[#f59e0b]/18" />

                <div className="relative flex w-full max-w-[560px] flex-col gap-4 lg:ml-auto">
                  {solutionShowcase.map((item, idx) => {
                    const active = idx === activeSolution;
                    const Icon = idx === 0 ? IconChartPie : idx === 1 ? IconBuildingBank : IconScale;

                    return (
                      <motion.button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveSolution(idx)}
                        aria-current={active ? "true" : undefined}
                        layout
                        initial={false}
                        animate={active ? { scale: 1.045, y: -2 } : { scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 24 }}
                        className={
                          active
                            ? "group flex h-[92px] w-full items-center gap-6 rounded-lg bg-white px-7 py-5 text-left ring-1 ring-[#f59e0b]/35 shadow-[0_22px_70px_rgba(15,23,42,0.14)]"
                            : "group flex h-[92px] w-full items-center gap-6 rounded-lg bg-slate-200/60 px-7 py-5 text-left ring-1 ring-slate-200 hover:bg-slate-200 transition"
                        }
                      >
                        {/* icon box */}
                        <div
                          className={
                            active
                              ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#f59e0b]/15 ring-1 ring-[#f59e0b]/25 text-[#2563eb]"
                              : "flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-slate-300/70 text-[#2563eb]"
                          }
                        >
                          <Icon className="h-6 w-6" stroke={2} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-base sm:text-[17px] font-bold tracking-tight text-slate-900">{item.title}</p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) SERVICES (ปรับให้เต็มจอเหมือน Home) */}
      <section id="services" className="relative min-h-screen scroll-mt-40 overflow-hidden bg-[#f3f4f6]">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-20 -top-20 h-[320px] w-[320px] opacity-65"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.35) 1.7px, transparent 1.8px)",
              backgroundSize: "18px 18px",
              WebkitMaskImage: "radial-gradient(circle, #000 52%, transparent 72%)",
              maskImage: "radial-gradient(circle, #000 52%, transparent 72%)",
            }}
          />
          <div
            className="absolute -right-28 -bottom-28 h-[420px] w-[420px] opacity-55"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.28) 1.7px, transparent 1.8px)",
              backgroundSize: "18px 18px",
              WebkitMaskImage: "radial-gradient(circle, #000 52%, transparent 74%)",
              maskImage: "radial-gradient(circle, #000 52%, transparent 74%)",
            }}
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 container flex min-h-screen flex-col justify-center px-4 pt-24 pb-24"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900">Services</h2>
              <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                Professional services which are reliable, secure, and trusted.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.25)] hover:brightness-95 transition"
            >
              Read More
            </Link>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {serviceCards.map((card, i) => (
              <motion.article key={card.title} variants={fadeUp} className="relative">
                <div className="overflow-hidden bg-white ring-1 ring-slate-200/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                  <div className="grid min-h-[420px] grid-cols-[1.12fr_0.88fr]">
                    <div className="px-9 py-9 flex flex-col">
                      <div className="text-[#2563eb]">
                        <ServiceIcon index={i} className="h-14 w-14" />
                      </div>

                      <div className="mt-auto pt-10">
                        <h3 className="text-xl font-extrabold uppercase leading-snug tracking-tight text-slate-900">{card.title}</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{card.description}</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden bg-white">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6) CONTACT */}
      <section className="relative overflow-hidden">
        <div id="contact" className="scroll-mt-40" />

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-white" />
            <div className="absolute -left-[360px] -top-[360px] h-[720px] w-[720px] rounded-full bg-[#1E6BB8]/32" />
            <div className="absolute -right-[620px] -bottom-[620px] h-[1280px] w-[1280px] rounded-full bg-[#B45309]/22" />
          </div>

          <div className="relative z-10 container py-14 md:py-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="w-full max-w-3xl mx-auto text-center"
            >
              <div className="mx-auto w-full max-w-2xl rounded-3xl border border-[#1E6BB8]/20 bg-white/90 px-7 py-10 sm:px-10 sm:py-12 shadow-[0_18px_55px_rgba(2,6,23,0.10)] backdrop-blur-sm">
                <motion.p variants={fadeUp} className="text-sm md:text-base text-slate-800">
                  Interested in transforming your business?
                </motion.p>

                <motion.h3 variants={fadeUp} className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Let’s talk with our team
                </motion.h3>

                <motion.p variants={fadeUp} className="mt-3 text-sm md:text-base text-slate-600">
                  Share your goals and we’ll propose a practical, compliant implementation plan.
                </motion.p>

                <motion.div variants={fadeUp} className="mt-7 flex items-center justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    style={{
                      backgroundImage: "linear-gradient(90deg, var(--sn-blue-light,#2a8bea), var(--sn-blue,#1e6bb8))",
                    }}
                  >
                    CONTACT US NOW
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7) CUSTOMERS */}
      <section className="relative bg-white">
        <div id="customers" className="scroll-mt-40" />

        <div className="container pt-6 pb-6 md:pt-8 md:pb-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-sm font-semibold text-slate-500">Our Partners</h3>
          </div>

          <div className="mt-5 md:mt-6">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex items-center gap-8 sm:gap-10 md:gap-12"
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: Math.max(26, customers.length * 2.4),
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...customers, ...customers].map((c, i) => (
                  <div
                    key={`${c.src}-${i}`}
                    className="shrink-0 w-[170px] sm:w-[190px] md:w-[210px] lg:w-[220px] xl:w-[230px] flex items-center justify-center"
                  >
                    <Image
                      src={c.src}
                      alt={c.alt}
                      width={420}
                      height={220}
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 230px"
                      className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain contrast-125 saturate-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
