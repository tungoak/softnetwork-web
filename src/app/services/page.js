"use client";

import { Sparkles, Users, Wrench, PhoneCall, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ---------- HERO + การ์ด 2 ใบ (ดัดจาก TechSoft Services) ---------- */}
  <section
  id="services"
  className="relative min-h-screen scroll-mt-[140px] pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 overflow-hidden bg-[radial-gradient(circle_at_top,_#fffbeb,_#ffffff_45%,_#e0f2fe)]"
>


        {/* BG soft tone ใช้สี SoftNetwork */}
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
            className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-center"
          >
            {/* ข้อความ HERO */}
            <motion.div variants={fadeLeft}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm border border-amber-100 px-3 py-1 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-slate-700">
                  Services
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                บริการจาก SoftNetwork
                <span className="block mt-2 text-lg md:text-2xl font-semibold text-[#F97316]">
                  ดูแลครบทั้งพัฒนา ติดตั้ง และดูแลระบบระยะยาว
                </span>
              </h1>

              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
                เราไม่ได้แค่ “เขียนโปรแกรมให้เสร็จ” แต่ดูแลครบทุกขั้นตอนของระบบงาน
                ตั้งแต่การเก็บความต้องการ วิเคราะห์กระบวนการทำงาน ออกแบบ พัฒนา
                ทดสอบ ไปจนถึงการนำระบบขึ้นใช้งานจริงและดูแลหลังบ้านในระยะยาว
              </p>

              <p className="mt-3 text-xs md:text-sm text-slate-500 max-w-xl">
                ทั้งสำหรับองค์กรที่เริ่มต้นระบบใหม่ และองค์กรที่ต้องการปรับปรุง / ย้าย
                ระบบเดิมให้ทันสมัยและปลอดภัยยิ่งขึ้น
              </p>
            </motion.div>

            {/* กล่อง hero ด้านขวา (ให้ฟีล “บริการครบวงจร”) */}
            <motion.div
              variants={fadeRight}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.24),transparent_55%)]" />

              <div className="relative rounded-[2.3rem] bg-white shadow-[0_26px_80px_rgba(15,23,42,0.20)] border border-slate-100 overflow-hidden">
                <div className="px-6 pt-6 pb-5 md:px-8 md:pt-7 md:pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F97316] via-[#F59E0B] to-[#3B82F6] text-white shadow-[0_14px_30px_rgba(15,23,42,0.65)]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-sky-600">
                        End-to-End Service
                      </p>
                      <p className="text-sm md:text-base font-semibold text-slate-900">
                        From Idea to Production
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                    แบ่งรูปแบบการให้บริการหลักของเราออกเป็น 2 กลุ่มใหญ่
                    เพื่อให้เลือกใช้งานได้ตามความเหมาะสมของแต่ละองค์กร –
                    ไม่ว่าจะต้องการทีมพัฒนาโปรเจ็กต์เฉพาะกิจ หรือทีมดูแลระบบระยะยาว
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2 text-xs md:text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>วิเคราะห์ &amp; ออกแบบโครงสร้างระบบตามกระบวนการทำงานจริง</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>ดูแลการติดตั้ง ย้ายข้อมูล และอบรมผู้ใช้งาน</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>ปรับปรุง/เพิ่มฟีเจอร์ตามการเติบโตของธุรกิจ</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-rose-500" />
                      <span>บริการดูแลระบบและ Support รายเดือน / รายปี</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* การ์ด 2 ใบแบบ TechSoft (Outsource / Permanent) แต่ปรับเนื้อหาเป็นของ SoftNetwork */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-14 md:mt-16 grid gap-6 lg:gap-8 lg:grid-cols-2"
          >
            {/* การ์ด 1: Project Implementation & Custom Development */}
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 shadow-[0_22px_60px_rgba(148,163,184,0.45)]"
            >
              <div className="pointer-events-none absolute -left-16 top-[-40px] h-40 w-40 rounded-full bg-[#3B82F6]/20 blur-3xl" />
              <div className="relative px-7 py-8 md:px-9 md:py-9">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-[0_16px_30px_rgba(37,99,235,0.55)]">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-sky-700">
                      Service Package A
                    </p>
                    <h2 className="text-base md:text-xl font-semibold text-slate-900">
                      System Implementation &amp; Custom Development
                    </h2>
                  </div>
                </div>

                <p className="text-sm md:text-[15px] leading-relaxed text-slate-600">
                  บริการพัฒนาและติดตั้งระบบงานแบบครบวงจร เหมาะสำหรับองค์กรที่ต้องการ
                  ระบบใหม่ หรือปรับปรุงระบบเดิมให้รองรับกระบวนการทำงานในปัจจุบัน
                  และสามารถขยายต่อได้ในอนาคต
                </p>

                <ul className="mt-4 space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                  <li>• เก็บความต้องการ วางโครงสร้างระบบ และออกแบบ UX/UI</li>
                  <li>• พัฒนาระบบ ทดสอบร่วมกับทีมงานของลูกค้า (UAT)</li>
                  <li>• วางแผนย้ายข้อมูล (Data Migration) และขึ้นระบบจริง (Go-live)</li>
                  <li>• Option เสริม: เชื่อมต่อกับระบบเดิม / ระบบบัญชี / รายงานผู้บริหาร</li>
                </ul>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-[11px] md:text-xs font-semibold text-sky-700 hover:bg-sky-50"
                >
                  <span>พูดคุยรายละเอียดโปรเจ็กต์</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>

            {/* การ์ด 2: Outsourcing & Long-term Support */}
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-rose-50 shadow-[0_22px_60px_rgba(248,181,121,0.45)]"
            >
              <div className="pointer-events-none absolute -right-20 top-[-40px] h-40 w-40 rounded-full bg-[#F59E0B]/26 blur-3xl" />
              <div className="relative px-7 py-8 md:px-9 md:py-9">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F59E0B] text-slate-900 shadow-[0_16px_30px_rgba(245,158,11,0.6)]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-amber-700">
                      Service Package B
                    </p>
                    <h2 className="text-base md:text-xl font-semibold text-slate-900">
                      Application Maintenance &amp; IT Outsourcing
                    </h2>
                  </div>
                </div>

                <p className="text-sm md:text-[15px] leading-relaxed text-slate-600">
                  เหมาะสำหรับองค์กรที่มีระบบอยู่แล้ว
                  แต่อยากได้ทีมผู้เชี่ยวชาญช่วยดูแลและพัฒนาต่อเนื่อง
                  โดยไม่ต้องสร้างทีมภายในเองทั้งหมด
                </p>

                <ul className="mt-4 space-y-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                  <li>• บริการดูแลระบบ Application Support / Bug Fix / Change Request</li>
                  <li>• ติดตามประสิทธิภาพระบบ และแนะนำการปรับปรุงเชิงเทคนิค</li>
                  <li>• ทีม Outsource ช่วยเสริมทีมพัฒนาภายในของลูกค้า</li>
                  <li>• เลือกรูปแบบสัญญาได้ทั้งรายเดือน / รายปี ตามขนาดงาน</li>
                </ul>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-[11px] md:text-xs font-semibold text-amber-800 hover:bg-amber-50"
                >
                  <span>ขอรายละเอียดแพ็กเกจบริการ</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA ท้ายหน้า (เทียบกับ Discuss Your Needs? ของ TechSoft) ---------- */}
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
                อยากปรึกษาระบบที่เหมาะกับธุรกิจของคุณ?
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
                ส่ง Requirement เบื้องต้น หรือเล่าโจทย์ที่คุณเจอให้ทีม SoftNetwork
                ฟังก่อน เราช่วยแนะนำแนวทางการออกแบบระบบ
                รูปแบบการเริ่มต้นโปรเจ็กต์ และงบประมาณโดยประมาณให้ได้
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base font-semibold text-slate-900 shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#fbbf24] transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span>ติดต่อทีมงาน SoftNetwork</span>
              </button>
              <p className="text-xs md:text-sm text-slate-400 text-center md:text-right">
                หรือไปที่เมนู <span className="font-semibold">Contact</span>{" "}
                เพื่อดูเบอร์โทรและอีเมลสำหรับติดต่อเรา
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
