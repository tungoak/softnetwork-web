"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const statsTarget = [250, 68, 19];

const customers = [
  { file: "gw.png", alt: "Green Wing เงินด่วน" },
  { file: "advance-fin.png", alt: "Advance Finance" },
  { file: "METROP.webp", alt: "Metropolis Leasing" },
  { file: "tsr-leasing.webp", alt: "TSR Leasing" },
  { file: "hua-heng-lee.webp", alt: "Hua Heng Lee" },
  { file: "mittae-esan.jpg", alt: "Mittae Esan Co., Ltd." },
  { file: "nakhonluang-capital.webp", alt: "Nakhonluang Capital" },
];

const serviceCards = [
  {
    title: "Consultation",
    accent: "#F59E0B",
    image: "/images/solutions/finance-meeting-board.jpg",
    alt: "Consultation service background",
    description:
      "Expert guidance on loan processes,\ncompliance, and digital strategies.",
  },
  {
    title: "Development",
    accent: "#2A8BEA",
    image: "/images/solutions/accounting-dashboard-team.jpg",
    alt: "Development service background",
    description: "Customized software solutions tailored\nto optimize lending.",
  },
  {
    title: "Implementation",
    accent: "#34D399",
    image: "/images/home/network-bg.jpg",
    alt: "Implementation service background",
    description:
      "Seamless system integration, user\ntraining, and technical support.",
  },
];

export default function Page() {
  const numbersRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentNumbers, setCurrentNumbers] = useState([0, 0, 0]);

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

      setCurrentNumbers(
        statsTarget.map((target) => Math.round(target * progress))
      );

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasAnimated]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* 1) HERO */}
      <section
        id="home"
        className="relative min-h-screen scroll-mt-40 flex items-center px-4 sm:px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero.jpg"
            alt="SoftNetwork enterprise software hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.92), rgba(15,23,42,0.72), rgba(15,23,42,0.92))",
          }}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-10 w-full max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.32em] mb-4 text-amber-300"
          >
            Software Studio for Modern Business
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-black leading-tight md:leading-[1.1] text-white mb-5"
          >
            <span className="mr-1">We Are</span>
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#1E6BB8] bg-clip-text text-transparent">
              SoftNetwork
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base lg:text-lg text-slate-50/95 leading-relaxed max-w-3xl mx-auto mb-3"
          >
            We build software for your business. Reliable systems for lending,
            hire purchase, and finance operations—designed to scale with your
            organization.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm font-medium text-slate-200/95"
          >
            Smart, secure, and ready for enterprise.
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center -space-y-2 text-amber-300"
        >
          <ChevronDown size={38} />
          <ChevronDown size={30} />
        </motion.div>
      </section>

      {/* 2) NUMBERS THAT MATTER */}
      <section
        className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/network-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.96), rgba(15,23,42,0.9))",
          }}
        />
        <div className="relative z-10 container flex flex-col items-center justify-center gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="max-w-xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] md:text-xs uppercase tracking-[0.28em]"
              style={{ color: "var(--sn-blue,#1E6BB8)" }}
            >
              Numbers that matter
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-2xl md:text-3xl font-extrabold text-white"
            >
              Metrics that reflect trust
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm md:text-base text-slate-200/85 leading-relaxed"
            >
              Employees, customers, and experience that support long-term
              partnerships.
            </motion.p>
          </motion.div>

          <motion.div
            ref={numbersRef}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                label: "EMPLOYEE",
                value: `${currentNumbers[0]}+`,
                sub1: "employees in the company",
              },
              {
                label: "CUSTOMER",
                value: `${currentNumbers[1]}+`,
                sub1: "customers working with us",
              },
              {
                label: "EXPERIENCE",
                value: `${currentNumbers[2]} Years`,
                sub1: "working experience in this field",
              },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="relative rounded-[2.4rem] px-8 py-9 md:px-9 md:py-10 text-center text-slate-50 bg-gradient-to-br from-white/14 via-white/6 to-white/12 border border-white/16 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <p
                    className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase"
                    style={{ color: "var(--sn-blue,#1E6BB8)" }}
                  >
                    {s.label}
                  </p>
                  <p className="mt-3 text-4xl md:text-5xl font-extrabold text-[#f59e0b]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] text-slate-300/80">{s.sub1}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3) ABOUT  */}
      <section
        id="about"
        className="relative bg-white flex items-center py-16 md:py-20 lg:py-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-[2.75rem] overflow-hidden shadow-[0_30px_90px_rgba(15,23,42,0.18)] border border-slate-100 bg-slate-900/5"
          >
            <div className="relative h-full min-h-[320px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[540px]">
              <Image
                src="/images/home/about-hero.jpg"
                alt="SoftNetwork team working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b]/35 via-transparent to-[#1E6BB8]/40" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center space-y-6 md:space-y-7"
          >
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                <span className="inline-flex items-center gap-3">
                  <span className="inline-block h-9 w-1.5 rounded-full bg-gradient-to-b from-[#2A8BEA] to-[#1E6BB8]" />
                  <span className="bg-gradient-to-r from-[#2A8BEA] to-[#1E6BB8] bg-clip-text text-transparent">
                    About us
                  </span>
                </span>
              </h2>

              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed max-w-xl">
                <p>
                  SoftNetwork develops enterprise software solutions for lending
                  and finance operations. We focus on reliability, security, and
                  long-term maintainability for real-world business processes.
                </p>
                <p>
                  We partner with your teams from planning to go-live—ensuring a
                  smooth implementation and measurable outcomes.
                </p>
              </div>
            </div>

            <p className="pt-2 text-lg md:text-2xl font-semibold italic text-[#1E6BB8] text-center">
              “Smart Lending, Trusted Advice”
            </p>

            <div className="pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2A8BEA] to-[#1E6BB8] px-6 py-2.5 text-xs md:text-sm font-medium text-white shadow-[0_18px_55px_rgba(15,23,42,0.25)] hover:shadow-[0_22px_70px_rgba(15,23,42,0.35)] transition-shadow"
                >
                  Learn more about SoftNetwork
                </Link>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm md:text-base font-semibold text-slate-900">
                  APITAK SITTIRAK
                </p>
                <p className="text-xs md:text-sm text-slate-500">
                  CEO &amp; Founder
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4) SOLUTIONS */}
      <section
        id="solutions"
        className="relative bg-white py-16 md:py-20 lg:py-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="container space-y-8 md:space-y-10"
        >
          <motion.div
            variants={fadeUp}
            className="max-w-3xl space-y-3 md:space-y-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
              <span className="inline-flex items-center gap-3">
                <span className="inline-block h-9 w-1.5 rounded-full bg-[#F59E0B]" />
                <span className="text-[#F59E0B]">Solutions</span>
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl">
              Core solutions designed for lending, hire purchase, and finance
              operations—built for performance and compliance.
            </p>
          </motion.div>

          <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 auto-rows-fr">
            {[
              {
                title: "Hire Purchase System",
                sub: "Complete lifecycle management for hire purchase financing.",
                img: "/images/solutions/hire-purchase-dealer.jpg",
              },
              {
                title: "Lending Management System",
                sub: "Flexible products, interest schemes and repayment schedules.",
                img: "/images/solutions/finance-meeting-board.jpg",
              },
              {
                title: "Accounting System",
                sub: "Audit-ready financial statements for lending businesses.",
                img: "/images/solutions/accounting-dashboard-team.jpg",
                wide: true,
              },
            ].map((c) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className={[
                  "relative group overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(59,130,246,0.35)]",
                  "min-h-[260px] sm:min-h-[300px] md:min-h-[340px]",
                  c.wide ? "md:col-span-2" : "",
                ].join(" ")}
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/92 via-[#1e3a8a]/80 to-transparent group-hover:from-[#0b1f3a]/86 group-hover:via-[#1e3a8a]/72 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 z-10">
                  <div className="px-5 md:px-6 lg:px-7 pt-8 pb-6 bg-gradient-to-t from-[#0b1f3a]/88 via-[#1e3a8a]/60 to-transparent">
                    {/* ✅ removed orange label line */}
                    <p className="mt-0 text-lg md:text-xl font-semibold text-white drop-shadow-[0_2px_6px_rgba(37,99,235,0.75)]">
                      {c.title}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-slate-50/95 drop-shadow-[0_1px_4px_rgba(37,99,235,0.6)]">
                      {c.sub}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5) SERVICES  */}
      <section
        id="services"
        className="relative py-16 md:py-20 lg:py-24 bg-slate-950 text-slate-50 overflow-hidden"
      >
        {/* soft glow background */}
        <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#2563eb]/22 blur-3xl" />
        <div className="pointer-events-none absolute right-[-60px] bottom-[-60px] h-80 w-80 rounded-full bg-[#f59e0b]/18 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/85" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative container"
        >
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-start">
            {/* LEFT: Heading */}
            <motion.div
              variants={fadeUp}
              className="max-w-xl space-y-3 md:space-y-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                <span className="inline-flex items-center gap-3">
                  <span className="inline-block h-9 w-1.5 rounded-full bg-white/90" />
                  <span className="text-white">Services</span>
                </span>
              </h2>

              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                Professional services which are reliable, secure, and trusted.
              </p>
            </motion.div>

            {/* RIGHT: Cards */}
            <motion.div variants={fadeUp} className="w-full max-w-5xl ml-auto">
              <div className="grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-2 auto-rows-fr">
                {serviceCards.map((card, idx) => (
                  <article
                    key={card.title}
                    className={[
                      "relative group overflow-hidden rounded-3xl border border-white/12",
                      "shadow-[0_26px_90px_rgba(0,0,0,0.55)]",
                      "min-h-[320px] md:min-h-[360px] lg:min-h-[420px]",
                      "transition-transform duration-300 hover:-translate-y-2",
                      idx === 0 ? "md:col-span-2" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 group-hover:ring-white/20 transition" />

                    <div className="absolute inset-x-0 bottom-0 z-10">
                      <div className="px-6 md:px-7 py-7 md:py-8 bg-gradient-to-t from-[#1E6BB8]/92 via-[#1E6BB8]/80 to-[#1E6BB8]/28 backdrop-blur-[2px] min-h-[160px] md:min-h-[180px]">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: card.accent }}
                          />
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                            {card.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-[14px] md:text-[16px] leading-relaxed text-white/92 whitespace-pre-line drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6) CUSTOMERS */}
      <section
        id="customers"
        className="relative bg-white py-14 md:py-16 lg:py-20"
      >
        <div className="relative container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-slate-700">
                Our Customers
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              ลูกค้าที่ไว้วางใจ
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              ตัวอย่างบางส่วนของลูกค้าที่ใช้โซลูชันจาก SoftNetwork
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-x-12 md:gap-x-16 lg:gap-x-20"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...customers, ...customers].map((logo, index) => (
                <div
                  key={`${logo.file}-${index}`}
                  className="flex items-center justify-center w-[140px] sm:w-[170px] md:w-[190px] flex-shrink-0"
                >
                  <Image
                    src={`/images/customers/${logo.file}`}
                    alt={logo.alt}
                    width={190}
                    height={80}
                    className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7) CONTACT  */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center py-16 md:py-20 lg:py-24 bg-slate-950 text-slate-50 overflow-hidden"
      >
        <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-[#2563eb]/25 blur-3xl" />
        <div className="pointer-events-none absolute right-[-60px] bottom-[-60px] h-80 w-80 rounded-full bg-[#f59e0b]/22 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,107,184,0.25),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/80" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative container"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-white/85">
                Contact
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
              Let’s discuss your{" "}
              <span className="text-[#f59e0b] drop-shadow-[0_2px_16px_rgba(245,158,11,0.25)]">
                project
              </span>
            </h2>

            <p className="mt-4 text-sm md:text-base lg:text-lg text-white/85 leading-relaxed">
              Contact SoftNetwork for consultation, system design, and end-to-end
              implementation. We’ll help you plan the right solution and deliver
              it with enterprise-grade reliability.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] px-8 py-3.5 text-sm md:text-base font-semibold text-slate-950 shadow-[0_18px_65px_rgba(0,0,0,0.75)] hover:shadow-[0_22px_80px_rgba(0,0,0,0.9)] transition-shadow"
              >
                CONTACT US NOW
              </Link>
            </div>

            <p className="mt-5 text-xs md:text-sm text-white/60">
              We typically respond within 1 business day.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
