"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Radio, Layers, ArrowRight, Flag, Building2, ShieldCheck, Award, Rocket } from "lucide-react";

/* -------------------- Motion Variants -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* -------------------- Data -------------------- */
const aboutHighlights = [
  { color: "#2563EB", text: "ออกแบบโซลูชันให้สอดคล้องกับกระบวนการทำงานจริงขององค์กรคุณ" },
  { color: "#F59E0B", text: "รองรับการขยายตัวของธุรกิจในระยะยาว ทั้งด้านเทคนิคและการใช้งาน" },
  { color: "#10B981", text: "ทีมงานพร้อมช่วยเหลือ ตั้งแต่เริ่มต้นจนถึงหลังการติดตั้งระบบ" },
];

const timelineSteps = [
  {
    year: "2004",
    title: "Early foundation",
    desc: "Established in 2004 by a team of developers specializing in lending technology, SoftNetwork began with loan management and showroom software.",
  },
  {
    year: "2007–2012",
    title: "Lending focus",
    desc: "Focused fully on lending solutions, expanding to provincial markets and showrooms, and building core contract management functions.",
  },
  {
    year: "2013–2017",
    title: "Institutional trust",
    desc: "Earned trust from government and major financial institutions, introducing Debt Collection, Reporting, and Loan Origination aligned with BOT regulatory requirements.",
  },
  {
    year: "2018–2024",
    title: "20-year milestone",
    desc: "Celebrated 20 years as an industry leader, delivering LMS with GL Integration and LOS, serving top-tier clients in the financial industry.",
  },
  {
    year: "Next Decade",
    title: "Fintech ecosystem",
    desc: "Aiming to be a trusted advisor in credit data and digital lending, developing automatic lending solutions and expanding into a fintech ecosystem.",
  },
];

/* -------------------- Helpers -------------------- */
function Wrap({ children, className = "" }) {
  return <div className={["mx-auto max-w-6xl px-4 sm:px-6 lg:px-10", className].join(" ")}>{children}</div>;
}

function ModernCard({ children, className = "" }) {
  return (
    <div
      className={[
        "relative rounded-3xl bg-white border border-slate-100",
        "shadow-[0_10px_40px_rgba(2,6,23,0.08)]",
        "hover:shadow-[0_20px_60px_rgba(2,6,23,0.14)] hover:-translate-y-1 transition-all duration-300",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      {/* light sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      {children}
    </div>
  );
}

function GradientYear({ children, from, to, className = "", opacity = 0.26 }) {
  return (
    <span
      className={[
        "block font-poppins text-7xl lg:text-8xl font-black leading-none tracking-tighter select-none",
        className,
      ].join(" ")}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${to})`,
        WebkitBackgroundClip: "text",
        color: "transparent",
        opacity,
        filter: "drop-shadow(0 10px 22px rgba(2,6,23,0.12))",
      }}
    >
      {children}
    </span>
  );
}

function YearPill({ year, from, to }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
      style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
    >
      {year}
    </span>
  );
}

function timelineMeta(index) {
  const themes = [
    { Icon: Flag, from: "#2563EB", to: "#60A5FA" },
    { Icon: Building2, from: "#F59E0B", to: "#FB923C" },
    { Icon: ShieldCheck, from: "#8B5CF6", to: "#D946EF" },
    { Icon: Award, from: "#10B981", to: "#34D399" },
    { Icon: Rocket, from: "#EC4899", to: "#F43F5E" },
  ];
  return themes[index % themes.length];
}

function TimelineCard({ step, meta, align = "left" }) {
  const { Icon, from, to } = meta;

  const borderClass = align === "left" ? "border-l-[6px]" : "border-r-[6px]";
  const borderStyle = align === "left" ? { borderLeftColor: from } : { borderRightColor: from };

  return (
    <ModernCard className={["p-6 md:p-8", borderClass].join(" ")} style={borderStyle}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-sm flex items-center justify-center">
            <Icon size={24} style={{ color: from }} />
          </div>
          <div className="space-y-1">
            <YearPill year={step.year === "Next Decade" ? "NEXT" : step.year} from={from} to={to} />
            <div className="text-xs text-slate-500 font-poppins">SoftNetwork timeline</div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div
            className="h-10 w-10 rounded-2xl"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, ${to} 0%, ${from} 55%, rgba(255,255,255,0) 70%)`,
              opacity: 0.28,
            }}
          />
        </div>
      </div>

      <h4 className="mt-5 text-xl md:text-2xl font-bold text-slate-900 font-poppins">{step.title}</h4>
      <p className="mt-3 text-base text-slate-600 leading-relaxed">{step.desc}</p>

      <div className="mt-6 h-[2px] w-full rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, opacity: 0.35 }} />
    </ModernCard>
  );
}

/* -------------------- Page -------------------- */
export default function Page() {
  return (
    <section id="about" className="relative min-h-screen scroll-mt-[100px] bg-white overflow-hidden font-kanit text-slate-800">
      {/* ---------------- Background (Bold Circles) ---------------- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        {/* top-left: blue circle + ring */}
        <div className="absolute -top-[220px] -left-[220px] h-[520px] w-[520px] rounded-full bg-[#2563EB] opacity-[0.28] md:-top-[280px] md:-left-[280px] md:h-[660px] md:w-[660px]" />
        <div className="absolute -top-[300px] -left-[300px] h-[720px] w-[720px] rounded-full border-[54px] border-[#2563EB] opacity-[0.16] md:-top-[360px] md:-left-[360px] md:h-[860px] md:w-[860px] md:border-[62px]" />

        {/* bottom-right: amber circle + amber ring + blue ring */}
        <div className="absolute -bottom-[240px] -right-[240px] h-[560px] w-[560px] rounded-full bg-[#F59E0B] opacity-[0.20] md:-bottom-[300px] md:-right-[300px] md:h-[700px] md:w-[700px]" />
        <div className="absolute -bottom-[340px] -right-[340px] h-[820px] w-[820px] rounded-full border-[66px] border-[#F59E0B] opacity-[0.14] md:-bottom-[420px] md:-right-[420px] md:h-[980px] md:w-[980px] md:border-[74px]" />
        <div className="absolute -bottom-[380px] -right-[380px] h-[900px] w-[900px] rounded-full border-[42px] border-[#2563EB] opacity-[0.10] md:-bottom-[470px] md:-right-[470px] md:h-[1080px] md:w-[1080px] md:border-[50px]" />

        {/* subtle dots */}
        <div className="absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.20)_1px,transparent_0)] bg-[length:22px_22px]" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-24 space-y-24 md:space-y-32">
        {/* ---------------- 1) Hero ---------------- */}
        <Wrap>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeLeft} transition={{ duration: 0.7, ease: "easeOut" }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight font-poppins text-slate-900">
                We Are <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent">
                  SoftNetwork
                </span>
              </h2>

              <div className="mt-8 space-y-6 text-slate-600 text-sm md:text-base font-light leading-relaxed">
                <p>
                  SoftNetwork คือบริษัทผู้เชี่ยวชาญด้านการออกแบบและพัฒนาระบบคอมพิวเตอร์สำหรับองค์กร
                  เรานำเสนอโซลูชันที่ช่วยให้ทุกภาคส่วนของธุรกิจสามารถทำงานได้อย่างมีประสิทธิภาพ
                  <strong className="text-slate-900 font-medium"> ลดความซ้ำซ้อน </strong>
                  และเพิ่มความแม่นยำในการจัดการข้อมูล
                </p>

                <p>
                  เราดำเนินงานด้วยแนวคิด{" "}
                  <span className="text-blue-600 font-semibold font-poppins">“Service Marketing”</span>{" "}
                  ที่ให้ความสำคัญกับทั้งคุณภาพของซอฟต์แวร์และคุณภาพการให้บริการ เชื่อมต่อผู้ใช้งานจริง (User) เข้ากับกระบวนการ
                  (Process) ด้วยมาตรฐานเทคโนโลยีแห่งอนาคต
                </p>

                <div className="pl-4 border-l-4 border-amber-200 text-slate-500 italic text-xs md:text-sm font-poppins">
                  Smart, secure, and ready for enterprise.
                </div>
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {aboutHighlights.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                  >
                    <div className="mt-1 p-2 rounded-full bg-slate-50 border border-slate-100">
                      <Zap className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-snug">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeRight} transition={{ duration: 0.7, ease: "easeOut" }} className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-amber-200 rounded-full blur-2xl opacity-60" />

              <div className="relative grid grid-cols-2 gap-4 p-4 bg-white/70 backdrop-blur-md rounded-[2rem] border border-white/60 shadow-xl">
                <div className="col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm group">
                  <Image
                    src="/images/About/front.webp"
                    alt="SoftNetwork office front"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-sm group">
                  <Image
                    src="/images/About/office.jpg"
                    alt="Interior"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-sm group">
                  <Image
                    src="/images/About/meeting.jpg"
                    alt="Meeting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Wrap>

        {/* ---------------- 2) Values ---------------- */}
        <Wrap>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-poppins text-sm font-semibold tracking-wider uppercase">Core Values</span>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 font-poppins">วิสัยทัศน์และพันธกิจ</h3>
              <p className="mt-4 text-slate-600 text-lg">ขับเคลื่อนธุรกิจการเงินไทยด้วยนวัตกรรมที่จับต้องได้ และความเชื่อมั่นที่ยั่งยืน</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              <motion.div whileHover={{ y: -8 }} className="h-full">
                <ModernCard className="h-full p-8 md:p-10 bg-gradient-to-br from-white to-blue-50/60">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-200 blur-3xl opacity-50" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100">
                      <Radio className="w-4 h-4" />
                      Strategy
                    </div>
                    <h4 className="mt-6 text-2xl md:text-3xl font-bold text-slate-900">
                      “เป็นทีมซอฟต์แวร์คู่คิดของธุรกิจการเงินไทย”
                    </h4>
                    <p className="mt-6 text-slate-600 leading-relaxed text-base">
                      มุ่งเน้นเป็นพันธมิตรด้านเทคโนโลยีให้กับธุรกิจสินเชื่อ เช่าซื้อ และองค์กรด้านการเงิน ด้วย Platform ที่พร้อม
                      Scale-up ไปกับธุรกิจในยุค Digital Era
                    </p>
                  </div>
                </ModernCard>
              </motion.div>

              <motion.div whileHover={{ y: -8 }} className="h-full">
                <ModernCard className="h-full p-8 md:p-10 bg-gradient-to-br from-white to-amber-50/60">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-amber-200 blur-3xl opacity-50" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100">
                      <Layers className="w-4 h-4" />
                      Delivery
                    </div>
                    <h4 className="mt-6 text-2xl md:text-3xl font-bold text-slate-900">ส่งมอบโซลูชันที่ “ใช้งานได้จริงในองค์กร”</h4>
                    <ul className="mt-6 space-y-4 text-slate-600 text-base">
                      <li className="flex gap-3 items-start">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                        <span>วิเคราะห์หน้างานจริง เพื่อ System Design ที่แม่นยำ</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                        <span>สร้าง Standard Data Security ระดับ Enterprise</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <ArrowRight className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                        <span>End-to-end Support ตั้งแต่ Day 1 ถึงอนาคต</span>
                      </li>
                    </ul>
                  </div>
                </ModernCard>
              </motion.div>
            </div>
          </motion.div>
        </Wrap>

        {/* ---------------- 3) Timeline ---------------- */}
        <div className="relative">
          <Wrap>
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="text-amber-600 font-poppins text-sm font-semibold tracking-wider uppercase">History</span>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 font-poppins">Evolution of SoftNetwork</h3>
              <p className="mt-4 text-slate-600 text-lg font-poppins">From 2004 to the Next Era of Fintech</p>
            </div>
          </Wrap>

          <Wrap className="relative">
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-indigo-200 to-amber-200 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {timelineSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const meta = timelineMeta(index);
                const { from, to } = meta;

                const yearDisplay = step.year === "Next Decade" ? "NEXT" : step.year;

                return (
                  <motion.div
                    key={`${step.year}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.28 }}
                    className="relative grid grid-cols-[56px_1fr] md:grid-cols-2 gap-6 md:gap-16 items-start"
                  >
                    <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                      <div className="relative w-5 h-5 rounded-full bg-white shadow-md">
                        <div className="absolute inset-0 rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }} />
                        <div className="absolute -inset-3 rounded-full opacity-20 blur-[2px]" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }} />
                      </div>
                    </div>

                    <div className={`md:text-right ${isLeft ? "order-1" : "order-1 md:order-2"}`}>
                      {isLeft && (
                        <motion.div variants={fadeLeft} className="hidden md:flex justify-end pr-8">
                          <GradientYear from={from} to={to} opacity={0.30}>
                            {yearDisplay}
                          </GradientYear>
                        </motion.div>
                      )}

                      {!isLeft && (
                        <motion.div variants={fadeLeft} className="col-span-1 md:col-auto pl-2 md:pl-0">
                          <TimelineCard step={step} meta={meta} align="right" />
                          <div className="md:hidden mt-4 pl-1">
                            <GradientYear from={from} to={to} opacity={0.70} className="text-4xl">
                              {yearDisplay}
                            </GradientYear>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div className={`md:text-left ${!isLeft ? "order-2" : "order-2 md:order-1"}`}>
                      {!isLeft && (
                        <motion.div variants={fadeRight} className="hidden md:flex justify-start pl-8">
                          <GradientYear from={from} to={to} opacity={0.30}>
                            {yearDisplay}
                          </GradientYear>
                        </motion.div>
                      )}

                      {isLeft && (
                        <motion.div variants={fadeRight} className="col-span-1 md:col-auto pl-2 md:pl-0">
                          <TimelineCard step={step} meta={meta} align="left" />
                          <div className="md:hidden mt-4 pl-1">
                            <GradientYear from={from} to={to} opacity={0.70} className="text-4xl">
                              {yearDisplay}
                            </GradientYear>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Wrap>
        </div>
      </div>
    </section>
  );
}
