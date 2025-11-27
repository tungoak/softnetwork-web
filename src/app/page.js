"use client";

import {
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Shield,
  Zap,
  ArrowUpRight,
  Facebook,
  Car,
  Banknote,
  PieChart,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";

// Motion variants
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
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const solutionsData = [
    {
      title: "Hire Purchase System",
      name: "ระบบบริหารจัดการสินเชื่อเช่าซื้อ",
      icon: (
        <Car className="w-16 h-16 text-orange-400 group-hover:text-orange-300 transition-colors" />
      ),
      desc: "ระบบบริหารจัดการสินเชื่อเช่าซื้อแบบครบวงจร รองรับตั้งแต่การตรวจสอบข้อมูลลูกค้า การทำสัญญา การติดตามสถานะ ไปจนถึงการออกเอกสารและรายงานต่าง ๆ พร้อมรองรับมาตรฐานด้านบัญชีและข้อกำหนดทางกฎหมายที่เกี่ยวข้องอย่างครบถ้วน",
    },
    {
      title: "Lending Management System",
      name: "ระบบบริหารจัดการสินเชื่อเงินกู้",
      icon: (
        <Banknote className="w-16 h-16 text-blue-500 group-hover:text-blue-400 transition-colors" />
      ),
      desc: "ระบบบริหารจัดการสินเชื่อเงินกู้ที่ยืดหยุ่นและแม่นยำ รองรับทั้งสินเชื่อแบบมีและไม่มีหลักประกัน สามารถกำหนดรูปแบบดอกเบี้ยได้หลากหลาย พร้อมระบบตัดชำระที่ถูกต้องตามข้อกำหนดของธนาคารแห่งประเทศไทย เหมาะสำหรับธุรกิจสินเชื่อที่ต้องการความเสถียรและปลอดภัยสูง",
    },
    {
      title: "Accounting System",
      name: "ระบบบัญชีสำหรับองค์กร",
      icon: (
        <PieChart className="w-16 h-16 text-purple-500 group-hover:text-purple-400 transition-colors" />
      ),
      desc: "ระบบบัญชีสำหรับองค์กรที่ต้องการความถูกต้อง รวดเร็ว และเชื่อมโยงข้อมูลได้จริง รองรับการบันทึกบัญชีและจัดทำงบการเงินโดยอัตโนมัติ ลดความซ้ำซ้อนของงานบัญชีด้วยการเชื่อมโยงข้อมูลจากระบบอื่นอย่างแม่นยำและสอดคล้องกัน",
    },
  ];

  const servicesData = [
    {
      title: "System Consultation",
      icon: Sparkles,
      desc: "บริการให้คำปรึกษาและวิเคราะห์กระบวนการทำงาน เพื่อออกแบบโซลูชันระบบงานที่สอดคล้องกับรูปแบบธุรกิจของคุณ เลือกเทคโนโลยีและสถาปัตยกรรมระบบให้รองรับการขยายตัวในระยะยาวได้อย่างมั่นคง",
    },
    {
      title: "System Development",
      icon: Zap,
      desc: "ออกแบบและพัฒนาระบบตามความต้องการเฉพาะของลูกค้า ไม่ว่าจะเป็นการพัฒนาระบบใหม่หรือปรับปรุงระบบเดิม เน้นโครงสร้างที่ยืดหยุ่น ใช้งานง่าย และช่วยเพิ่มประสิทธิภาพการทำงานในทุกขั้นตอน",
    },
    {
      title: "System Implementation",
      icon: Shield,
      desc: "ดูแลกระบวนการติดตั้งระบบ อบรมผู้ใช้งาน และกำหนดขั้นตอนการใช้งานอย่างเป็นระบบ เพื่อให้การนำซอฟต์แวร์ไปใช้จริงเป็นไปอย่างราบรื่น พร้อมทีมงานสนับสนุนคอยดูแลหลังการติดตั้ง",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        {/* ========== HOME / HERO ========== */}
        <section
          id="home"
          className="relative min-h-screen scroll-mt-40 flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-40 lg:pt-44 pb-24 overflow-hidden"
          style={{
            backgroundImage: "url('/images/home-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay ปรับใหม่: ทำให้พื้นหลังไม่มืดเกิน แต่ช่วยดันตัวหนังสือให้เด่น */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/55 to-slate-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.8),_transparent_58%)]" />

          {/* เนื้อหากลางจอ (ไม่มี card แล้ว) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative z-10 w-full max-w-4xl mx-auto text-center"
            style={{
              textShadow: "0 14px 40px rgba(0,0,0,0.9)", // ช่วยให้ตัวอักษรลอยจากพื้นหลัง
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] sm:text-xs md:text-sm lg:text-sm uppercase tracking-[0.32em] text-amber-200/90 mb-5"
            >
              Software Studio for Modern Business
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-black leading-tight md:leading-[1.1] text-white mb-5"
            >
              <span className="mr-1">We Are</span>
              <span className="bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#2563EB] bg-clip-text text-transparent">
                SoftNetwork
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base lg:text-lg text-slate-50/95 leading-relaxed md:leading-relaxed max-w-3xl mx-auto mb-3"
            >
              เราคือทีมผู้พัฒนาซอฟต์แวร์ที่เชี่ยวชาญด้านระบบงานสำหรับองค์กร
              มุ่งเน้นการสร้างโซลูชันที่ช่วยเพิ่มประสิทธิภาพ ความถูกต้อง
              และความคล่องตัวให้กับธุรกิจของคุณ ด้วยเทคโนโลยีที่ทันสมัยและมาตรฐานระดับสากล
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
                color: "#F59E0B", // สีส้มหลักของแบรนด์
                textShadow: "0 0 14px rgba(0,0,0,0.8)", // ช่วยให้เห็นชัดบนพื้นหลังมืด
              }}
            >
              <ChevronDown size={42} />
              <ChevronDown size={36} />
              <ChevronDown size={30} />
            </div>
          </motion.div>
        </section>  

                        {/* ========== ABOUT ========== */}
        <section
          id="about"
          className="relative min-h-screen scroll-mt-40 flex items-center section-gradient-orange py-24 lg:py-28 overflow-hidden"
        >
          {/* แสงพื้นหลังให้ mood ใกล้กับ Hero (น้ำเงิน/ส้ม) */}
          <div className="pointer-events-none absolute -left-40 -top-40 w-80 h-80 rounded-full bg-[#3B82F6]/16 blur-3xl" />
          <div className="pointer-events-none absolute right-[-80px] bottom-[-80px] w-[26rem] h-[26rem] rounded-full bg-[#F59E0B]/18 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-40 bg-gradient-to-r from-white/40 via-transparent to-white/40" />

          <div className="container relative z-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-10 lg:gap-16 items-center"
            >
              {/* ฝั่งข้อความ */}
              <motion.div
                variants={fadeLeft}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Badge ด้านบน */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 shadow-sm mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-slate-700">
                    About Us
                  </span>
                </div>

                <h2 className="section-title mb-4">
                  We Are <span className="text-[#F59E0B]">SoftNetwork</span>
                </h2>

                <p className="subtext text-sm md:text-base leading-relaxed">
                  SoftNetwork คือบริษัทผู้เชี่ยวชาญด้านการออกแบบและพัฒนาระบบคอมพิวเตอร์สำหรับองค์กร
                  เรานำเสนอโซลูชันที่ช่วยให้ทุกภาคส่วนของธุรกิจสามารถทำงานได้อย่างมีประสิทธิภาพ
                  ลดความซ้ำซ้อน และเพิ่มความแม่นยำในการจัดการข้อมูล
                  ตั้งแต่ระดับปฏิบัติการไปจนถึงระดับบริหารจัดการ
                </p>

                <p className="subtext text-sm md:text-base leading-relaxed mt-4">
                  เราดำเนินงานด้วยแนวคิด{" "}
                  <span className="font-semibold">“Service Marketing”</span>
                  เพื่อยืนยันถึงการให้บริการที่ใส่ใจ โปร่งใส
                  และตอบโจทย์ความต้องการของลูกค้าอย่างแท้จริง
                  ทั้งในด้านคุณภาพของซอฟต์แวร์และคุณภาพการให้บริการ
                </p>

                {/* bullet เน้น key value แบบอ่านง่าย */}
                <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-[3px] text-[#F59E0B]" />
                    <span>ออกแบบโซลูชันให้สอดคล้องกับกระบวนการทำงานจริงขององค์กรคุณ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-[3px] text-[#3B82F6]" />
                    <span>รองรับการขยายตัวของธุรกิจในระยะยาว ทั้งด้านเทคนิคและการใช้งาน</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 mt-[3px] text-[#22C55E]" />
                    <span>ทีมงานพร้อมช่วยเหลือ ตั้งแต่เริ่มต้นจนถึงหลังการติดตั้งระบบ</span>
                  </li>
                </ul>
              </motion.div>

              {/* ฝั่งรูป 3 รูป + animation */}
              <motion.div
                variants={fadeRight}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative grid grid-cols-2 gap-4 lg:gap-5"
              >
                {/* glow ด้านหลังให้ดูล้ำยุค */}
                <div className="pointer-events-none absolute -right-8 -bottom-10 w-40 h-40 bg-[#F59E0B]/35 rounded-full blur-3xl" />
                <div className="pointer-events-none absolute -left-10 -top-10 w-40 h-40 bg-[#3B82F6]/25 rounded-full blur-3xl" />

                {/* รูปหลัก (ด้านบน กิน 2 คอลัมน์) */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="relative col-span-2 h-52 sm:h-64 lg:h-72 rounded-3xl overflow-hidden shadow-xl"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                </motion.div>

                {/* รูปที่ 2 */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="relative h-32 sm:h-40 lg:h-44 rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src="/images/About/office.jpg"
                    alt="SoftNetwork office environment"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 14rem, 40vw"
                  />
                </motion.div>

                {/* รูปที่ 3 */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="relative h-32 sm:h-40 lg:h-44 rounded-2xl overflow-hidden shadow-md"
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
          </div>
        </section>


        {/* ========== SOLUTIONS ========== */}
        <section
          id="solutions"
          className="min-h-screen scroll-mt-40 flex items-center py-24 lg:py-28 bg-white"
        >
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#3B82F6] mb-2">
                Solutions
              </p>
              <h2 className="section-title">Solutions</h2>
              <p className="subtext mt-4">
                โซลูชันซอฟต์แวร์ที่ออกแบบมาโดยเฉพาะสำหรับธุรกิจสินเชื่อ เช่าซื้อ และบัญชี
                เพื่อช่วยให้การจัดการข้อมูลและกระบวนการทำงานในองค์กรของคุณเป็นไปอย่างมีประสิทธิภาพ
                ตรวจสอบได้ และขยายต่อได้ในอนาคต
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              {solutionsData.map((sol) => (
                <motion.article
                  key={sol.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="card-base p-6 flex flex-col h-full group hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
                >
                  <div className="mb-4 flex justify-center md:justify-start">
                    {sol.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-700 mt-1 mb-2">
                    {sol.name}
                  </p>
                  <p className="subtext text-sm mb-4">{sol.desc}</p>
                  <div className="mt-auto flex justify-center md:justify-start">
                    <a
                      href="#contact"
                      className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm"
                    >
                      สนใจโซลูชันนี้
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section
          id="services"
          className="min-h-screen scroll-mt-40 flex items-center section-gradient-blue py-24 lg:py-28"
        >
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#1D4ED8] mb-2">
                Services
              </p>
              <h2 className="section-title">Services</h2>
              <p className="subtext mt-4">
                บริการแบบครบวงจรตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา
                ไปจนถึงการติดตั้งและดูแลระบบ เพื่อให้ซอฟต์แวร์ที่คุณเลือก
                สามารถนำไปใช้งานได้จริงและสร้างมูลค่าให้กับธุรกิจอย่างต่อเนื่อง
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              {servicesData.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="card-base p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
                  >
                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-blue-50 p-3 text-[#3B82F6]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      {service.title}
                    </h3>
                    <p className="subtext text-sm mt-3">{service.desc}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========== CUSTOMERS ========== */}
        <section
          id="customers"
          className="min-h-screen scroll-mt-40 flex items-center py-24 lg:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
                Our Customers
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                ความไว้วางใจจากลูกค้าธุรกิจหลากหลายกลุ่ม
              </h2>
              <p className="text-slate-500 mb-12 text-sm md:text-base max-w-2xl mx-auto">
                เรามีโอกาสให้บริการลูกค้าในหลายประเภทธุรกิจ ทั้งองค์กรขนาดเล็ก กลาง และขนาดใหญ่
                ซึ่งสะท้อนถึงความเชื่อมั่นในคุณภาพของโซลูชัน และประสบการณ์ด้านระบบงานองค์กรของเรา
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center"
            >
              {[
                { file: "gw.png", alt: "Green Wing เงินด่วน" },
                { file: "advance-fin.png", alt: "Advance Finance" },
                { file: "METROP.webp", alt: "Metropolis Leasing" },
                { file: "tsr-leasing.webp", alt: "TSR Leasing" },
                { file: "hua-heng-lee.webp", alt: "Hua Heng Lee" },
                { file: "mittae-esan.jpg", alt: "Mittae Esan Co., Ltd." },
                { file: "nakhonluang-capital.webp", alt: "Nakhonluang Capital" },
              ].map((logo) => (
                <motion.div
                  key={logo.file}
                  variants={fadeUp}
                  className="flex justify-center p-4"
                >
                  <Image
                    src={`/images/customers/${logo.file}`}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section
          id="contact"
          className="min-h-screen scroll-mt-40 flex items-center py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-slate-100"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className="grid lg:grid-cols-2">
                {/* ข้อมูลติดต่อ */}
                <div className="p-10 lg:p-16 bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-16 -mt-16" />

                  <div className="relative z-10">
                    <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-blue-200 mb-3">
                      Contact Us
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-black mb-4">
                      SoftNetwork Co., Ltd.
                    </h2>
                    <p className="text-slate-300 mb-8 text-sm md:text-base">
                      หากคุณต้องการข้อมูลเพิ่มเติมหรือนัดหมายสาธิตระบบ
                      สามารถติดต่อเราได้ผ่านช่องทางดังต่อไปนี้
                    </p>

                    <div className="space-y-6 text-sm md:text-base text-slate-200">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                        <p className="leading-relaxed">
                          398/1, 2nd Fl., Marché Ram53 Building B
                          <br />
                          Soi Ramkhamhaeng 53, Phlapphla,
                          <br />
                          Wang Thonglang, Bangkok 10310
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <p className="font-semibold text-lg">081-750-4393</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <a
                          href="mailto:sn-info@softnetwork.co.th"
                          className="hover:underline"
                        >
                          sn-info@softnetwork.co.th
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                      <a
                        href="https://www.facebook.com/softnetwork2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition shadow-lg"
                      >
                        <Facebook className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* แผนที่ Google Maps */}
                <div className="h-[400px] lg:h-auto bg-slate-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.6038478300402!2d100.61936100000001!3d13.766345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6206d6d57fd7%3A0xf673ab955d9d6639!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4i-C4reC4n-C4l-C5jOC5gOC4meC5h-C4leC5gOC4p-C4tOC4o-C5jOC4hCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1764059119103!5m2!1sth!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="SoftNetwork Office Map"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a
            href="#home"
            className="inline-block text-2xl font-black text-white mb-4"
          >
            Soft<span className="text-orange-500">Network</span>
          </a>
          <p className="text-sm mb-6">
            เรามุ่งมั่นพัฒนาซอฟต์แวร์เพื่อขับเคลื่อนธุรกิจการเงินไทยสู่ยุคดิจิทัล
          </p>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SoftNetwork Co., Ltd. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
