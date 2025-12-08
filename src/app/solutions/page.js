"use client";

import { Car, Banknote, PieChart, ArrowUpRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// 3 โซลูชันหลักของ SoftNetwork
const solutionsData = [
  {
    slug: "hire-purchase",
    title: "Hire Purchase System",
    name: "ระบบบริหารจัดการสินเชื่อเช่าซื้อ",
    icon: Car,
    image: "/images/solutions/hp-new.jpg",
    desc: "โซลูชันสำหรับบริหารจัดการสินเชื่อเช่าซื้อแบบครบวงจร รองรับตั้งแต่การตรวจสอบข้อมูลลูกค้า การอนุมัติสินเชื่อ การทำสัญญา การจัดตารางค่างวด การติดตามสถานะ ไปจนถึงการออกเอกสารและรายงานต่าง ๆ ออกแบบให้สอดคล้องกับมาตรฐานด้านบัญชีและข้อกำหนดทางกฎหมายอย่างครบถ้วน",
  },
  {
    slug: "lending-management",
    title: "Lending Management System",
    name: "ระบบบริหารจัดการสินเชื่อเงินกู้",
    icon: Banknote,
    image: "/images/solutions/lending-v2.jpg",
    desc: "ระบบบริหารจัดการสินเชื่อเงินกู้ที่ยืดหยุ่นและแม่นยำ รองรับทั้งสินเชื่อแบบมีหลักประกันและไม่มีหลักประกัน สามารถกำหนดรูปแบบดอกเบี้ยได้หลากหลาย พร้อมระบบคำนวณและตัดชำระที่ถูกต้อง โปร่งใส เหมาะสำหรับองค์กรที่ให้ความสำคัญกับการบริหารความเสี่ยงและคุณภาพพอร์ตสินเชื่อ",
  },
  {
    slug: "accounting-system",
    title: "Accounting System",
    name: "ระบบบัญชีสำหรับองค์กร",
    icon: PieChart,
    image: "/images/solutions/acc-modern.jpg",
    desc: "ระบบบัญชีสำหรับองค์กรที่ต้องการความถูกต้อง รวดเร็ว และเชื่อมโยงข้อมูลอย่างเป็นระบบ รองรับการบันทึกบัญชีและจัดทำงบการเงินอัตโนมัติ ลดความซ้ำซ้อนด้วยการเชื่อมข้อมูลจากระบบสินเชื่อและระบบงานอื่น ๆ ช่วยให้ฝ่ายบัญชีและผู้บริหารเห็นตัวเลขเดียวกันและตัดสินใจได้อย่างมั่นใจ",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* HERO + CARD 3 ใบ */}
      <section
        id="solutions"
        className="relative min-h-screen scroll-mt-[140px] pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 overflow-hidden bg-[radial-gradient(circle_at_top,_#fffbeb,_#ffffff_45%,_#e0f2fe)]"
      >
        {/* พื้นหลังโทนสว่างอ่านง่าย */}
        <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-[#F59E0B]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#3B82F6]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 bottom-4 h-32 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.08),_transparent_70%)] opacity-70" />

        <div className="container relative z-10">
          {/* จำกัดความกว้างให้อยู่กลางหน้าชัดๆ */}
          <div className="max-w-6xl mx-auto">
            {/* HERO ซ้ายข้อความ / ขวารูป */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center"
            >
              {/* ด้านซ้าย: ข้อความ hero */}
              <motion.div variants={fadeUp}>
                <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-[#3B82F6]">
                  Solutions
                </p>
                <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  SoftNetwork Solutions
                  <span className="block mt-2 text-lg md:text-2xl font-semibold text-[#F97316]">
                    ระบบซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และบัญชี
                  </span>
                </h1>
                <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
                  รวมโซลูชันหลักของ SoftNetwork ที่ออกแบบสำหรับธุรกิจการเงินในประเทศไทย
                  เชื่อมโยงตั้งแต่ระบบเช่าซื้อ (Hire Purchase) ระบบสินเชื่อเงินกู้ (Lending)
                  จนถึงระบบบัญชี ให้ข้อมูลทุกส่วนทำงานร่วมกันในแพลตฟอร์มเดียวอย่างลงตัว
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-500 max-w-xl">
                  ใช้งานได้ทั้งแบบเลือกเฉพาะระบบที่ต้องการ
                  หรือเชื่อมต่อทั้งแพลตฟอร์มเพื่อสร้าง Workflow ที่ครบวงจร
                  รองรับการเติบโตขององค์กรในระยะยาว
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-500">
                  Powerful, integrated platforms designed for Thai financial
                  institutions and modern lending businesses.
                </p>
              </motion.div>

              {/* ด้านขวา: การ์ดภาพ hero */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="relative"
              >
                <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.24),transparent_55%)]" />

                <div className="relative rounded-[2.3rem] bg-white shadow-[0_26px_80px_rgba(15,23,42,0.22)] border border-slate-100 overflow-hidden">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src="/images/solutions/hp-new.jpg"
                      alt="SoftNetwork financial solutions"
                      fill
                      className="object-cover w-full h-full"
                      sizes="(min-width:1024px) 26rem, (min-width:768px) 50vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-amber-300">
                          Core Platforms
                        </p>
                        <p className="text-sm md:text-base font-semibold">
                          Hire Purchase • Lending • Accounting
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px]">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span>Production Ready</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-4 md:px-6 md:py-5 bg-white">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      รองรับโครงสร้างองค์กรหลายสาขา การกำหนดสิทธิ์ผู้ใช้งาน
                      และการเชื่อมข้อมูลกับระบบบัญชีและระบบเดิมขององค์กร
                      เพื่อให้การทำงานต่อเนื่องไม่สะดุด และบริหารข้อมูลได้จากศูนย์กลาง
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* GRID การ์ด Solutions 3 ใบ อยู่กลางหน้า */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 md:mt-16 grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {solutionsData.map((sol) => {
                const Icon = sol.icon;
                return (
                  <motion.article
                    key={sol.slug}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full"
                  >
                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_22px_60px_rgba(15,23,42,0.16)] bg-white">
                      {/* ภาพด้านบนการ์ด */}
                      <div className="relative h-48 sm:h-52">
                        {sol.image ? (
                          <Image
                            src={sol.image}
                            alt={sol.title}
                            fill
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            sizes="(min-width: 1024px) 20rem, (min-width: 768px) 40vw, 90vw"
                          />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-tr from-orange-50 via-white to-sky-50" />
                        )}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 via-black/15 to-transparent opacity-80" />
                      </div>

                      {/* กล่องรายละเอียดซ้อนด้านล่าง */}
                      <div className="relative -mt-8 mx-5 mb-6 rounded-2xl bg-white/95 border border-slate-100 px-5 py-5 md:px-6 md:py-6 shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
                        {/* ไอคอนวงกลม */}
                        <div className="absolute -top-6 left-5">
                          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#F59E0B] text-white shadow-lg">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="pt-2">
                          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                            {sol.title}
                          </h2>
                          <p className="mt-1 text-xs sm:text-sm font-medium text-[#F97316]">
                            {sol.name}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            {sol.desc}
                          </p>

                          <button className="mt-4 inline-flex items-center text-[11px] sm:text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
                            <span>ดูรายละเอียดฟังก์ชันภายในระบบ</span>
                            <ArrowUpRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA ท้ายหน้า */}
      <section className="relative bg-slate-950 py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(245,158,11,0.35),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950 to-slate-950" />

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
            >
              <div className="max-w-xl text-center md:text-left">
                <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-amber-300">
                  Need a Demo?
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                  อยากดูระบบจริง หรือปรึกษาโซลูชันที่เหมาะกับธุรกิจของคุณ?
                </h2>
                <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                  ทีมงาน SoftNetwork พร้อมช่วยวิเคราะห์ความต้องการของคุณ
                  แนะนำโครงสร้างระบบ และออกแบบโซลูชันให้เหมาะกับรูปแบบธุรกิจ
                  ทั้งสำหรับองค์กรที่เริ่มต้นใหม่ และองค์กรที่ต้องการปรับปรุงระบบเดิม
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base font-semibold text-slate-900 shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#fbbf24] transition-colors">
                  <PhoneCall className="w-4 h-4" />
                  <span>ติดต่อทีมงาน SoftNetwork</span>
                </button>
                <p className="text-xs md:text-sm text-slate-400 text-center md:text-right">
                  หรือดูข้อมูลติดต่อได้ที่เมนู{" "}
                  <span className="font-semibold">Contact</span> ด้านบนของเว็บไซต์
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
