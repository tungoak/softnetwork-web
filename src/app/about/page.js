"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutPage() {
  return (
    <section
  id="about"
  className="relative min-h-screen scroll-mt-[140px] pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 overflow-hidden bg-slate-950"
>

      {/* พื้นหลังโทนเข้ม + ไล่สีฟ้า/ส้ม แบบ SoftNetwork */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(245,158,11,0.4),_transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-52 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.9),_transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 -top-40 w-80 h-80 rounded-full bg-[#2563EB]/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-[-80px] w-[26rem] h-[26rem] rounded-full bg-[#F59E0B]/28 blur-3xl" />

      <div className="container relative z-10 space-y-16 lg:space-y-20">
        {/* ---------- บล็อกแนะนำ SoftNetwork ---------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-10 lg:gap-16 items-center"
        >
          {/* Text */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 shadow-sm mb-3">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-slate-100/90">
                About Us
              </span>
            </div>

            <h2 className="section-title mb-4 text-white">
              We Are{" "}
              <span className="text-[#F59E0B] font-extrabold">SoftNetwork</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-slate-200/95">
              SoftNetwork คือบริษัทผู้เชี่ยวชาญด้านการออกแบบและพัฒนาระบบคอมพิวเตอร์สำหรับองค์กร
              เรานำเสนอโซลูชันที่ช่วยให้ทุกภาคส่วนของธุรกิจสามารถทำงานได้อย่างมีประสิทธิภาพ
              ลดความซ้ำซ้อน และเพิ่มความแม่นยำในการจัดการข้อมูล
              ตั้งแต่ระดับปฏิบัติการไปจนถึงระดับบริหารจัดการ
            </p>

            <p className="text-sm md:text-base leading-relaxed mt-4 text-slate-300">
              เราดำเนินงานด้วยแนวคิด{" "}
              <span className="font-semibold text-slate-50">
                “Service Marketing”
              </span>{" "}
              ที่ให้ความสำคัญกับทั้งคุณภาพของซอฟต์แวร์
              และคุณภาพการให้บริการ ทีมงานของเราออกแบบระบบโดยคำนึงถึง
              ผู้ใช้งานจริง (User) กระบวนการทำงาน (Process)
              และมาตรฐานด้านเทคโนโลยีไปพร้อมกัน
            </p>

            <p className="text-xs md:text-sm leading-relaxed mt-3 text-slate-400">
              We design and build enterprise software that connects operations,
              credit workflows and accounting into one reliable platform.
            </p>

            <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-200">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-[3px] text-[#F59E0B]" />
                <span>
                  ออกแบบโซลูชันให้สอดคล้องกับกระบวนการทำงานจริงขององค์กรคุณ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-[3px] text-[#3B82F6]" />
                <span>
                  รองรับการขยายตัวของธุรกิจในระยะยาว ทั้งด้านเทคนิคและการใช้งาน
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-[3px] text-[#22C55E]" />
                <span>
                  ทีมงานพร้อมช่วยเหลือ ตั้งแต่เริ่มต้นจนถึงหลังการติดตั้งระบบ
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Images */}
          <motion.div
            variants={fadeRight}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative grid grid-cols-2 gap-4 lg:gap-5"
          >
            <div className="pointer-events-none absolute -right-8 -bottom-10 w-40 h-40 bg-[#F59E0B]/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -top-10 w-40 h-40 bg-[#3B82F6]/28 rounded-full blur-3xl" />

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative col-span-2 h-52 sm:h-64 lg:h-72 rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.85)] border border-white/5"
            >
              <Image
                src="/images/About/front.webp"
                alt="SoftNetwork office front"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30rem, 80vw"
                loading="eager"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative h-32 sm:h-40 lg:h-44 rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.8)] border border-white/5 bg-slate-900/50"
            >
              <Image
                src="/images/About/office.jpg"
                alt="SoftNetwork office environment"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 14rem, 40vw"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative h-32 sm:h-40 lg:h-44 rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.8)] border border-white/5 bg-slate-900/50"
            >
              <Image
                src="/images/About/meeting.jpg"
                alt="SoftNetwork meeting"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 14rem, 40vw"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------- Vision / Mission ---------- */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -left-32 -top-16 w-64 h-64 rounded-full bg-[#22c55e]/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 w-72 h-72 rounded-full bg-[#3b82f6]/25 blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center mb-10">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-amber-300">
              Vision &amp; Mission
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white">
              วิสัยทัศน์และพันธกิจของ SoftNetwork
            </h3>
            <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
              คอนเซ็ปต์เดียวกับหน้า About ของ TechSoftHolding
              แต่ปรับเนื้อหาและโทนสีให้เข้ากับแบรนด์ SoftNetwork
              เน้นความชัดเจน อ่านง่าย และบอก “เราเชื่อในอะไร”
            </p>
          </div>

          <div className="relative grid gap-6 lg:gap-8 lg:grid-cols-2">
            {/* Vision */}
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 px-6 py-7 md:px-8 md:py-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute inset-px rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_55%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/70 px-3 py-1 mb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-slate-100">
                    Our Vision
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  “เป็นทีมซอฟต์แวร์คู่คิดของธุรกิจการเงินไทย”
                </h4>
                <p className="mt-4 text-sm md:text-[15px] text-slate-200 leading-relaxed">
                  มุ่งเน้นเป็นพันธมิตรด้านเทคโนโลยีให้กับธุรกิจสินเชื่อ
                  เช่าซื้อ และองค์กรด้านการเงินในประเทศไทย
                  ด้วยซอฟต์แวร์ที่เชื่อถือได้ ใช้งานง่าย
                  และพร้อมเติบโตไปกับธุรกิจของลูกค้าในระยะยาว
                </p>
                <p className="mt-3 text-xs md:text-sm text-slate-400 leading-relaxed">
                  We want our platform to be the trusted backbone of financial
                  operations for our customers.
                </p>
              </div>
            </motion.article>

            {/* Mission */}
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 px-6 py-7 md:px-8 md:py-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            >
              <div className="pointer-events-none absolute inset-px rounded-[1.4rem] bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.32),transparent_55%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/70 px-3 py-1 mb-4">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-slate-100">
                    Our Mission
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  ส่งมอบโซลูชันที่ “ใช้งานได้จริงในองค์กร”
                </h4>
                <ul className="mt-4 space-y-2.5 text-sm md:text-[15px] text-slate-200 leading-relaxed">
                  <li>
                    • วิเคราะห์กระบวนการทำงานจริงก่อนออกแบบระบบ
                    เพื่อให้ซอฟต์แวร์สอดคล้องกับหน้างาน
                  </li>
                  <li>
                    • สร้างมาตรฐานด้านข้อมูล ความถูกต้อง
                    และความปลอดภัยที่องค์กรสามารถเชื่อใจได้
                  </li>
                  <li>
                    • ดูแลตั้งแต่เริ่มวางแผน อิมพลีเมนต์
                    ไปจนถึงการใช้งานจริงและการพัฒนาในอนาคต
                  </li>
                </ul>
              </div>
            </motion.article>
          </div>
        </motion.section>

        {/* ---------- Timeline ---------- */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative pt-4"
        >
          {/* เส้นไทม์ไลน์แนวตั้งด้านซ้าย */}
          <div className="absolute left-[11px] md:left-4 top-4 bottom-4 w-px bg-gradient-to-b from-slate-600 via-slate-500/70 to-slate-700/80" />

          <div className="max-w-3xl mx-auto">
            <div className="mb-8 md:mb-10 text-left md:text-center">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-amber-300">
                SoftNetwork Timeline
              </p>
              <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-white">
                เส้นทางการพัฒนาซอฟต์แวร์กว่า 10+ ปี
              </h3>
              <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
                แรงบันดาลใจจาก Section Timeline “Over 19 Years” ของ
                TechSoftHolding แต่เลย์เอาท์ปรับให้อ่านง่ายบนเว็บ SoftNetwork
                แบบเลื่อนลงทีละช่วง
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {[
                {
                  year: "2010",
                  title: "เริ่มต้นโครงการระบบงานตามสั่ง (Custom Enterprise)",
                  label: "Custom Software Projects",
                  points: [
                    "พัฒนาระบบงานสำหรับธุรกิจบริการและองค์กรภาคเอกชน",
                    "โฟกัสที่ความต้องการจริงของหน่วยงานและผู้ใช้งาน",
                    "วางพื้นฐานด้านมาตรฐานโค้ดและโครงสร้างฐานข้อมูล",
                  ],
                },
                {
                  year: "2014",
                  title: "โซลูชันด้านสินเชื่อและเช่าซื้อรุ่นแรก",
                  label: "Loan & Hire Purchase Core",
                  points: [
                    "เริ่มออกแบบโซลูชันสำหรับธุรกิจสินเชื่อและเช่าซื้อโดยเฉพาะ",
                    "รองรับการจัดเก็บข้อมูลลูกค้า สัญญา และตารางค่างวด",
                    "เน้นความถูกต้องของข้อมูลทางการเงินเป็นหลัก",
                  ],
                },
                {
                  year: "2018",
                  title: "พัฒนาระบบสู่ Web Application และ Multi-Branch",
                  label: "Web-based & Multi-Branch",
                  points: [
                    "ย้ายสถาปัตยกรรมเข้าสู่ระบบ Web Application",
                    "รองรับการใช้งานหลายสาขาในระบบเดียวกัน",
                    "บริหารสิทธิ์การใช้งาน (User Permission) อย่างเป็นระบบ",
                  ],
                },
                {
                  year: "2022",
                  title: "ยกระดับสู่แพลตฟอร์มที่รองรับ Cloud / Hybrid",
                  label: "Cloud-ready Platform",
                  points: [
                    "ออกแบบระบบให้รองรับการใช้งานบน Cloud หรือ On-premise",
                    "เพิ่มความยืดหยุ่นด้านสเกลและการเชื่อมต่อระบบอื่น",
                    "เสริมความปลอดภัยและระบบสำรองข้อมูลที่ชัดเจน",
                  ],
                },
                {
                  year: "2024",
                  title: "ก้าวสู่ยุค Automation & Analytics",
                  label: "Automation & Insights",
                  points: [
                    "นำแนวคิด Automation และรายงานเชิงวิเคราะห์มาใช้ในระบบ",
                    "ช่วยผู้บริหารเห็นภาพรวมพอร์ตสินเชื่อและความเสี่ยงได้ชัดขึ้น",
                    "เตรียมความพร้อมสู่การใช้ AI มาช่วยสนับสนุนการตัดสินใจ",
                  ],
                },
              ].map((step, index) => (
                <motion.article
                  key={step.year}
                  variants={fadeUp}
                  transition={{ duration: 0.45 + index * 0.05 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* จุดบนเส้นไทม์ไลน์ */}
                  <div className="absolute -left-[11px] md:-left-[15px] top-1.5 flex items-center justify-center">
                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border border-amber-300 bg-slate-950 shadow-[0_0_0_4px_rgba(15,23,42,0.9)] flex items-center justify-center">
                      <span className="text-[9px] md:text-[10px] font-semibold text-amber-200">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-4 md:px-6 md:py-5 shadow-[0_14px_36px_rgba(0,0,0,0.85)]">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                      <span className="text-xs md:text-sm font-semibold text-amber-300">
                        {step.year}
                      </span>
                      <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80">
                        {step.label}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-white">
                      {step.title}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-xs md:text-sm text-slate-200 leading-relaxed">
                      {step.points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
