"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// โลโก้ลูกค้า
const customersRow1 = [
  { file: "gw.png", alt: "Green Wing เงินด่วน" },
  { file: "advance-fin.png", alt: "Advance Finance" },
  { file: "METROP.webp", alt: "Metropolis Leasing" },
  { file: "tsr-leasing.webp", alt: "TSR Leasing" },
];

const customersRow2 = [
  { file: "hua-heng-lee.webp", alt: "Hua Heng Lee" },
  { file: "mittae-esan.jpg", alt: "Mittae Esan Co., Ltd." },
  { file: "nakhonluang-capital.webp", alt: "Nakhonluang Capital" },
];

export default function Page() {
  // ---------- ตัวเลขสำหรับ Numbers that matter ----------
  const numbersRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentNumbers, setCurrentNumbers] = useState([0, 0, 0]); // [EMPLOYEE, CUSTOMER, EXPERIENCE]
  const targets = [250, 68, 19];

  // ตรวจว่าผู้ใช้เลื่อนมาถึง section หรือยัง
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

  // ทำ animation ตัวเลขจาก 0 → target
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setCurrentNumbers(
        targets.map((target) => Math.round(target * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated]);

  return (
    // Navbar + Footer ใช้จาก layout.js แล้ว
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--sn-dark,#1f2a4d)" }}
    >
      {/* ========== 1) HERO: We Are SoftNetwork ========== */}
      <section
        id="home"
        className="relative min-h-screen scroll-mt-40 flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-40 lg:pt-44 pb-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/home-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,42,77,0.3), rgba(10,16,31,0.9))",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.7),_transparent_58%)]" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 w-full max-w-4xl mx-auto text-center"
          style={{ textShadow: "0 14px 40px rgba(0,0,0,0.9)" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.32em] mb-5"
            style={{ color: "rgba(245,158,11,0.9)" }} // sn-orange
          >
            Software Studio for Modern Business
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-black leading-tight md:leading-[1.1] text-white mb-5"
          >
            <span className="mr-1">We Are</span>
            <span className="bg-gradient-to-r from-[#f59e0b] via-[#f59e0b] to-[#2563eb] bg-clip-text text-transparent">
              SoftNetwork
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base lg:text-lg text-slate-50/95 leading-relaxed md:leading-relaxed max-w-3xl mx-auto mb-3"
          >
            เราคือทีมผู้พัฒนาซอฟต์แวร์ที่เชี่ยวชาญด้านระบบงานสำหรับองค์กร
            โดยเฉพาะธุรกิจสินเชื่อ เช่าซื้อ และระบบบัญชี
            มุ่งเน้นการสร้างโซลูชันที่ช่วยเพิ่มประสิทธิภาพ
            ความถูกต้อง และความคล่องตัวให้กับธุรกิจของคุณ
            ด้วยเทคโนโลยีที่ทันสมัยและมาตรฐานระดับสากล
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm font-medium text-slate-200/95"
          >
            We build software that moves your business forward.
          </motion.p>
        </motion.div>

        {/* ลูกศรเลื่อนลง */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div
            className="flex flex-col items-center -space-y-2"
            style={{
              color: "#f59e0b",
              textShadow: "0 0 14px rgba(0,0,0,0.8)",
            }}
          >
            <ChevronDown size={42} />
            <ChevronDown size={36} />
            <ChevronDown size={30} />
          </div>
        </motion.div>
      </section>

      {/* ========== 2) NUMBERS THAT MATTER ========== */}
      <section
        className="relative min-h-[80vh] overflow-hidden"
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
              "linear-gradient(to bottom, rgba(31,42,77,0.9), rgba(15,23,42,0.95))",
          }}
        />

        <div className="relative z-10 container flex min-h-[80vh] flex-col items-center justify-center py-16">
          {/* หัวข้อ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="max-w-xl mx-auto text-center mb-10"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] md:text-xs uppercase tracking-[0.28em]"
              style={{ color: "var(--sn-blue,#2563eb)" }}
            >
              Numbers that matter
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-2xl md:text-3xl font-extrabold text-white"
            >
              ตัวเลขที่สะท้อนความเชื่อมั่นจากลูกค้า
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm md:text-base text-slate-200/85 leading-relaxed"
            >
              EMPLOYEE, CUSTOMER และ EXPERIENCE
              คือพื้นฐานสำคัญที่ทำให้ SoftNetwork สามารถส่งมอบโซลูชันซอฟต์แวร์
              ที่องค์กรไว้วางใจได้จริง
            </motion.p>
          </motion.div>

          {/* การ์ด 3 ใบ */}
          <motion.div
            ref={numbersRef}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            {/* EMPLOYEE */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-[2.4rem] px-8 py-9 md:px-9 md:py-10 text-center text-slate-50 bg-gradient-to-br from-white/14 via-white/6 to-white/12 border border-white/16 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-[2.3rem] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.35),transparent_60%)] opacity-90" />
              <div className="relative">
                <p
                  className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "var(--sn-blue,#2563eb)" }}
                >
                  EMPLOYEE
                </p>
                <p className="mt-3 text-4xl md:text-5xl font-extrabold text-[#f59e0b]">
                  {currentNumbers[0]}+
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-100/90 leading-relaxed">
                  พนักงานและทีมงานด้านซอฟต์แวร์
                </p>
                <p className="mt-1 text-[11px] text-slate-300/80">
                  employees in the company
                </p>
              </div>
            </motion.div>

            {/* CUSTOMER */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-[2.4rem] px-8 py-9 md:px-9 md:py-10 text-center text-slate-50 bg-gradient-to-br from-white/14 via-white/6 to-white/12 border border-white/16 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-[2.3rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),transparent_60%)] opacity-90" />
              <div className="relative">
                <p
                  className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "var(--sn-blue,#2563eb)" }}
                >
                  CUSTOMER
                </p>
                <p className="mt-3 text-4xl md:text-5xl font-extrabold text-[#f59e0b]">
                  {currentNumbers[1]}+
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-100/90 leading-relaxed">
                  องค์กรและธุรกิจที่ร่วมงานกับเรา
                </p>
                <p className="mt-1 text-[11px] text-slate-300/80">
                  customers working with us
                </p>
              </div>
            </motion.div>

            {/* EXPERIENCE */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-[2.4rem] px-8 py-9 md:px-9 md:py-10 text-center text-slate-50 bg-gradient-to-br from-white/14 via-white/6 to-white/12 border border-white/16 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-[2.3rem] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.35),transparent_60%)] opacity-90" />
              <div className="relative">
                <p
                  className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "var(--sn-blue,#2563eb)" }}
                >
                  EXPERIENCE
                </p>
                <p className="mt-3 text-4xl md:text-5xl font-extrabold text-[#f59e0b]">
                  {currentNumbers[2]} Years
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-100/90 leading-relaxed">
                  ประสบการณ์การทำงานในอุตสาหกรรมนี้
                </p>
                <p className="mt-1 text-[11px] text-slate-300/80">
                  working experience in this field
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== 3) 5 Main Solutions & Services / Financial Software ========== */}
      <section
        className="relative py-20 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/solutions-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.85), rgba(15,23,42,0.9))",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#2563eb]/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[-60px] bottom-[-40px] h-80 w-80 rounded-full bg-[#f59e0b]/30 blur-3xl" />

        <div className="container relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] items-center">
          {/* ด้านซ้าย: ข้อความ + การ์ด */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="text-sm md:text-base text-slate-200">We offer</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug">
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#2563eb] bg-clip-text text-transparent">
                  5 Main Solutions &amp; Services:
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 rounded-[2.4rem] bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 px-8 py-7 md:px-10 md:py-8 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-white/10 max-w-xl relative overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-px rounded-[2.3rem] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_55%)]" />
              <div className="relative">
                <p
                  className="text-2xl md:text-[2.1rem] font-semibold tracking-wide"
                  style={{ color: "var(--sn-orange,#f59e0b)" }}
                >
                  Financial Software
                </p>
                <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed">
                  โซลูชันซอฟต์แวร์ทางการเงินแบบครบวงจรของ SoftNetwork
                  ครอบคลุมตั้งแต่ระบบเช่าซื้อ (Hire Purchase)
                  ระบบบริหารจัดการสินเชื่อ ไปจนถึงระบบบัญชีสำหรับองค์กร
                  ออกแบบให้ยืดหยุ่น และปรับใช้ได้ตามรูปแบบธุรกิจของคุณ
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-400 leading-relaxed">
                  Discover our core financial platform – designed for Thai
                  financial businesses that need reliability, compliance, and
                  smooth day-to-day operations.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base font-medium text-white shadow-sm"
                style={{
                  background:
                    "linear-gradient(90deg, var(--sn-orange,#f59e0b), var(--sn-blue,#2563eb))",
                }}
              >
                Read More
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ด้านขวา: รูปภาพ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] rounded-[2.6rem] overflow-hidden shadow-[0_35px_110px_rgba(0,0,0,0.9)] border border-slate-800/60"
          >
            <Image
              src="/images/home/financial-hero.jpg"
              alt="SoftNetwork financial software workflow"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ========== 4) ABOUT US HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[360px] md:min-h-[420px] lg:min-h-[480px]">
          <Image
            src="/images/home/about-hero.jpg"
            alt="SoftNetwork team working together"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.5), rgba(15,23,42,0.15))",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-slate-950" />

          <div className="relative z-10 container h-full flex items-center py-10 md:py-12">
            <div className="flex flex-col lg:flex-row items-end lg:items-center gap-8 lg:gap-10 w-full">
              <div className="flex-1">
                <p className="leading-none tracking-tight">
                  <span
                    className="block text-[3.8rem] sm:text-[4.6rem] md:text-[5.2rem] lg:text-[6rem] font-black"
                    style={{ color: "var(--sn-blue,#2563eb)" }}
                  >
                    ABOUT
                  </span>
                  <span className="block text-[3.8rem] sm:text-[4.6rem] md:text-[5.2rem] lg:text-[6rem] font-black text-white">
                    US
                  </span>
                </p>
              </div>

              <div className="flex-1 max-w-md lg:max-w-lg lg:ml-auto">
                <div className="rounded-[2rem] bg-black/55 border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl px-7 py-6 md:px-8 md:py-7">
                  <p className="text-sm md:text-base text-slate-50 leading-relaxed">
                    SoftNetwork ดำเนินธุรกิจด้านการออกแบบและพัฒนาระบบซอฟต์แวร์
                    สำหรับองค์กรและธุรกิจการเงินไทย
                    เราโฟกัสทั้งคุณภาพของระบบงานและประสบการณ์ใช้งานของผู้ใช้จริง
                    เพื่อให้โครงการที่ส่งมอบ “ใช้งานได้จริงในองค์กร”
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                    เราทำงานร่วมกับทีมของลูกค้าในทุกขั้นตอน ตั้งแต่การวิเคราะห์
                    ออกแบบ พัฒนา ไปจนถึงการดูแลระบบระยะยาว
                  </p>

                  <Link
                    href="/about"
                    className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-slate-50 transition-colors"
                    style={{
                      borderColor: "var(--sn-blue,#2563eb)",
                      borderWidth: 1,
                      background:
                        "linear-gradient(90deg, rgba(37,99,235,0.1), transparent)",
                    }}
                  >
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-12 md:h-16 bg-slate-950" />
      </section>

      {/* ========== 5) CUSTOMERS (โลโก้ 2 แถว) ========== */}
      <section
        id="customers"
        className="relative min-h-screen scroll-mt-40 flex items-center py-20 md:py-24 lg:py-28 overflow-hidden bg-slate-950"
      >
        <div className="pointer-events-none absolute -left-32 top-10 w-72 h-72 rounded-full bg-[#f59e0b]/22 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-[#2563eb]/18 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 bottom-4 h-32 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.85),_transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/95 shadow-sm border border-slate-200/80 px-3 py-1 mb-3">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--sn-orange,#f59e0b)" }}
              />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-slate-700">
                Our Customers
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-50 leading-tight">
              ลูกค้าที่ไว้วางใจ
              <span className="block text-sm md:text-base font-normal text-slate-300 mt-2">
                ตัวอย่างบางส่วนของลูกค้าที่ใช้โซลูชันจาก SoftNetwork
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-12 md:space-y-16 lg:space-y-20"
          >
            {/* แถว 1 */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 lg:gap-x-12">
              {customersRow1.map((logo) => (
                <motion.div
                  key={logo.file}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex items-center justify-center w-[160px] sm:w-[210px] md:w-[240px] lg:w-[260px]"
                >
                  <Image
                    src={`/images/customers/${logo.file}`}
                    alt={logo.alt}
                    width={260}
                    height={110}
                    className="w-full h-auto max-h-20 md:max-h-24 object-contain opacity-85 hover:opacity-100 transition-opacity duration-200"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* แถว 2 */}
            <div className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 lg:gap-x-12">
              {customersRow2.map((logo) => (
                <motion.div
                  key={logo.file}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex items-center justify-center w-[160px] sm:w-[210px] md:w-[240px] lg:w-[260px]"
                >
                  <Image
                    src={`/images/customers/${logo.file}`}
                    alt={logo.alt}
                    width={260}
                    height={110}
                    className="w-full h-auto max-h-20 md:max-h-24 object-contain opacity-85 hover:opacity-100 transition-opacity duration-200"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
