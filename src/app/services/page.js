"use client";

import { PhoneCall, ClipboardList, Code2, Rocket } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins, Kanit } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-kanit",
  display: "swap",
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ✅ Content (Professional English) + longer descriptions
const serviceCards = [
  {
    title: "System Consultation",
    desc:
      "We provide structured consultation and planning tailored to the solutions we specialize in. " +
      "This includes requirements discovery, process analysis, architecture recommendations, and a clear delivery roadmap aligned with compliance and operational realities.",
    Icon: ClipboardList,
    image: "/images/solutions/finance-meeting-board.jpg",
    alt: "System consultation",
  },
  {
    title: "System Development",
    desc:
      "We design and develop systems based on your business requirements, with a focus on reliability, security, and maintainability. " +
      "Our team can also enhance or modernize existing platforms to support new workflows, improve performance, and reduce operational risk.",
    Icon: Code2,
    image: "/images/solutions/accounting-dashboard-team.jpg",
    alt: "System development",
  },
  {
    title: "System Implementation",
    desc:
      "We deploy the system into production, deliver user training, and establish operating procedures to ensure smooth adoption. " +
      "We also define usage policies, access controls, and rollout steps—so your team can operate with confidence from day one.",
    Icon: Rocket,
    image: "/images/solutions/hire-purchase-dealer.jpg",
    alt: "System implementation",
  },
];

export default function ServicesPage() {
  return (
    <div
      className={`${poppins.variable} ${kanit.variable}`}
      style={{
        fontFamily:
          "var(--font-poppins), var(--font-kanit), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      {/* ---------- HERO + CONTENT ---------- */}
      <section
        id="services"
        className="relative min-h-screen scroll-mt-[140px] pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 overflow-hidden bg-[radial-gradient(circle_at_top,_#fffbeb,_#ffffff_45%,_#e0f2fe)]"
      >
        {/* BG soft tone */}
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#F59E0B]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#2563EB]/24 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 bottom-4 h-32 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.10),_transparent_70%)] opacity-70" />

        <div className="container relative z-10">
          {/* HERO */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="w-full max-w-3xl"
          >
            <motion.div variants={fadeLeft}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                SoftNetwork Professional Services
                <span className="block mt-2 text-lg md:text-2xl font-semibold text-[#F97316]">
                  End-to-end delivery—from planning to rollout and long-term support.
                </span>
              </h1>

              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                We don’t simply “build and ship.” We partner with your team across the full lifecycle—requirements discovery,
                process mapping, solution design, development, testing, deployment, and post-go-live support. Our approach is
                structured, pragmatic, and designed for real operational environments.
              </p>

              <p className="mt-3 text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl">
                Whether you are launching a new system or improving an existing platform, we help you deliver a secure,
                scalable solution that is easier to operate, maintain, and grow over time.
              </p>
            </motion.div>
          </motion.div>

          {/* ✅ 3 Cards: alternating left/right + squared + tight (no gaps) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 md:mt-14"
          >
            <motion.div variants={fadeUp} className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                System Services
              </h2>
            </motion.div>

            {/* เหลี่ยม + ชิดติดกัน */}
            <div className="mt-7 overflow-hidden rounded-none border border-slate-900/10 bg-white/70 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="divide-y divide-slate-900/10">
                {serviceCards.map(({ title, desc, Icon, image, alt }, idx) => {
                  const reverse = idx % 2 === 1; // ✅ สลับซ้ายขวา (ใบที่ 2)
                  const gridCols = reverse
                    ? "md:grid-cols-[0.88fr_1.12fr]"
                    : "md:grid-cols-[1.12fr_0.88fr]";

                  const contentMdOrder = reverse ? "md:order-2" : "md:order-1";
                  const imageMdOrder = reverse ? "md:order-1" : "md:order-2";

                  const contentBorder = reverse ? "md:border-l md:border-slate-900/10" : "";
                  const imageBorder = reverse ? "" : "md:border-l md:border-slate-900/10";

                  const overlayGradient = reverse
                    ? "bg-gradient-to-r from-slate-900/12 via-transparent to-white/10"
                    : "bg-gradient-to-l from-slate-900/12 via-transparent to-white/10";

                  return (
                    <motion.article
                      key={title}
                      variants={reverse ? fadeLeft : fadeRight}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className="relative"
                    >
                      <div className={`grid ${gridCols}`}>
                        {/* Image (mobile: top always) */}
                        <div
                          className={`order-1 ${imageMdOrder} relative min-h-[220px] md:min-h-[260px] ${imageBorder}`}
                        >
                          <Image
                            src={image}
                            alt={alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                            priority={false}
                          />
                          <div className={`absolute inset-0 ${overlayGradient}`} />
                        </div>

                        {/* Content */}
                        <div
                          className={`order-2 ${contentMdOrder} px-7 py-8 md:px-10 md:py-10 ${contentBorder}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative flex h-11 w-11 items-center justify-center bg-slate-900/5 ring-1 ring-slate-900/10 text-slate-800">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="h-px flex-1 bg-slate-900/10" />
                            <div className="flex h-8 w-8 items-center justify-center bg-white ring-1 ring-slate-900/10 text-xs font-extrabold text-slate-700">
                              {String(idx + 1).padStart(2, "0")}
                            </div>
                          </div>

                          <h3 className="mt-6 text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                            {title}
                          </h3>

                          <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-600 max-w-[72ch]">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative bg-slate-950 py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(245,158,11,0.35),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950 to-slate-950" />

        <div className="container relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
          >
            <div className="max-w-xl text-center md:text-left">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-amber-300">
                Discuss Your Needs
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                Ready to plan your next system?
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                Share a brief overview of your goals, constraints, and timelines. Our team will help you evaluate the best
                approach, propose an implementation plan, and provide practical next steps for delivery.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base font-semibold text-slate-900 shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#fbbf24] transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span>Contact SoftNetwork</span>
              </button>
              <p className="text-xs md:text-sm text-slate-400 text-center md:text-right">
                Or visit the <span className="font-semibold">Contact</span> page for phone and email details.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
