"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Poppins, Kanit } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const solutions = [
  {
    slug: "hire-purchase",
    title: "Hire Purchase System",
    eyebrow: "End-to-end hire purchase operations",
    image: "/images/solutions/hp-new.jpg",
    body: "A complete hire purchase platform built for verification, approval, contract execution, installment scheduling, asset tracking, and collections. Designed for operational reliability, audit readiness, and compliance—so teams can scale portfolios with confidence.",
  },
  {
    slug: "lending-management",
    title: "Lending Management System",
    eyebrow: "Flexible lending products, accurate calculations",
    image: "/images/solutions/lending-v2.jpg",
    body: "A modern lending management system supporting secured and unsecured products with configurable interest schemes and repayment structures. Delivers transparent calculations, consistent posting logic, and real-time portfolio visibility to strengthen risk control and service quality.",
  },
  {
    slug: "accounting-system",
    title: "Accounting System",
    eyebrow: "Connected finance, faster closing",
    image: "/images/solutions/acc-modern.jpg",
    body: "An accounting suite designed for finance organizations that need speed, accuracy, and clean integrations. Automates postings from lending workflows, reduces manual reconciliation, and produces management-ready financial reports—helping stakeholders align on a single source of truth.",
  },
];

function MediaBlock({ src, alt, className, rounded = "rounded-2xl" }) {
  return (
    <div className={`${className} ${rounded} relative overflow-hidden bg-slate-200 shadow-[0_18px_55px_rgba(2,6,23,0.10)] ring-1 ring-slate-200`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 92vw, 520px" className="object-cover object-center" priority={false} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/12" />
    </div>
  );
}

function TextBlock({ title, eyebrow, body, align = "left" }) {
  const alignCls = align === "right" ? "text-left lg:text-right" : "text-left";
  const maxCls = align === "right" ? "lg:ml-auto" : "";
  return (
    <div className={`${alignCls} ${maxCls} max-w-xl`}>
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">{eyebrow}</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight text-slate-900">{title}</h2>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">{body}</p>
      {/* ✅ เอาปุ่ม View details ออกแล้ว */}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main id="solutions" className="min-h-screen bg-[#FBF7F2]" style={{ fontFamily: `${poppins.style.fontFamily}, ${kanit.style.fontFamily}, ui-sans-serif, system-ui, sans-serif` }}>
      {/* HERO */}
      <section className="relative pt-24 md:pt-28 pb-10 md:pb-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-44 -top-44 h-[420px] w-[420px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
          <div className="absolute -right-56 -top-56 h-[520px] w-[520px] rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
            {/* ✅ เอาคำว่า Solutions ด้านบนสุดออกแล้ว */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Built for Lending Operations
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed">
              Three core platforms designed for financial institutions and modern lenders—optimized for reliability, compliance, and operational clarity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CANVAS LAYOUT */}
      <section className="relative pb-20 md:pb-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="pointer-events-none absolute -left-6 top-16 select-none">
            <span className="text-[72px] md:text-[110px] font-black tracking-tight text-slate-200/60">Solutions</span>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="relative">
            {/* DESKTOP */}
            <div className="hidden lg:block">
              <div className="relative min-h-[860px]">
                <motion.div variants={fadeUp} className="absolute left-0 top-0 w-[380px] h-[380px]">
                  <MediaBlock src={solutions[0].image} alt={solutions[0].title} className="w-full h-full" rounded="rounded-3xl" />
                </motion.div>
                <motion.div variants={fadeUp} className="absolute right-0 top-8">
                  <TextBlock title={solutions[0].title} eyebrow={solutions[0].eyebrow} body={solutions[0].body} align="right" />
                </motion.div>

                <motion.div variants={fadeUp} className="absolute right-0 top-[360px] w-[520px] h-[280px]">
                  <MediaBlock src={solutions[1].image} alt={solutions[1].title} className="w-full h-full" rounded="rounded-3xl" />
                </motion.div>
                <motion.div variants={fadeUp} className="absolute left-0 top-[430px]">
                  <TextBlock title={solutions[1].title} eyebrow={solutions[1].eyebrow} body={solutions[1].body} align="left" />
                </motion.div>

                <motion.div variants={fadeUp} className="absolute left-0 top-[650px] w-[520px] h-[290px]">
                  <MediaBlock src={solutions[2].image} alt={solutions[2].title} className="w-full h-full" rounded="rounded-3xl" />
                </motion.div>
                <motion.div variants={fadeUp} className="absolute right-0 top-[710px]">
                  <TextBlock title={solutions[2].title} eyebrow={solutions[2].eyebrow} body={solutions[2].body} align="right" />
                </motion.div>
              </div>
            </div>

            {/* MOBILE/TABLET */}
            <div className="lg:hidden space-y-12">
              <motion.div variants={fadeUp} className="space-y-6">
                <MediaBlock src={solutions[0].image} alt={solutions[0].title} className="w-full h-[260px] sm:h-[320px]" rounded="rounded-3xl" />
                <TextBlock title={solutions[0].title} eyebrow={solutions[0].eyebrow} body={solutions[0].body} align="left" />
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                <MediaBlock src={solutions[1].image} alt={solutions[1].title} className="w-full h-[240px] sm:h-[300px]" rounded="rounded-3xl" />
                <TextBlock title={solutions[1].title} eyebrow={solutions[1].eyebrow} body={solutions[1].body} align="left" />
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-6">
                <MediaBlock src={solutions[2].image} alt={solutions[2].title} className="w-full h-[240px] sm:h-[300px]" rounded="rounded-3xl" />
                <TextBlock title={solutions[2].title} eyebrow={solutions[2].eyebrow} body={solutions[2].body} align="left" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOT STRIP */}
      <section className="bg-slate-950 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400">Next step</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-black text-white">Request a demo or talk to our team</h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                Tell us your business model and portfolio needs—our team will recommend the best configuration across hire purchase, lending, and accounting.
              </p>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3 text-sm font-black text-white shadow-[0_18px_55px_rgba(245,158,11,0.28)] hover:brightness-95 transition">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
