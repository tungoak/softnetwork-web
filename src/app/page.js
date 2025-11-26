"use client";

import {
  Phone,
  Mail,
  ArrowRight,
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



// --------------------------------------------------
// หน้า Home หลัก
// --------------------------------------------------
export default function Home() {
  const solutionsData = [
    {
      title: "Hire Purchase System",
      name: "ระบบบริหารจัดการสินเชื่อเช่าซื้อ",
      icon: (
        <Car className="w-16 h-16 text-orange-500 group-hover:text-orange-600 transition-colors" />
      ),
      desc: "ระบบบริหารจัดการสินเชื่อเช่าซื้อแบบครบวงจร รองรับตั้งแต่การตรวจสอบข้อมูลลูกค้า การทำสัญญา การติดตามสถานะ ไปจนถึงการออกเอกสารและรายงานต่าง ๆ พร้อมรองรับมาตรฐานด้านบัญชีและข้อกำหนดทางกฎหมายที่เกี่ยวข้องอย่างครบถ้วน",
    },
    {
      title: "Lending Management System",
      name: "ระบบบริหารจัดการสินเชื่อเงินกู้",
      icon: (
        <Banknote className="w-16 h-16 text-blue-500 group-hover:text-blue-600 transition-colors" />
      ),
      desc: "ระบบบริหารจัดการสินเชื่อเงินกู้ที่ยืดหยุ่นและแม่นยำ รองรับทั้งสินเชื่อแบบมีและไม่มีหลักประกัน สามารถกำหนดรูปแบบดอกเบี้ยได้หลากหลาย พร้อมระบบตัดชำระที่ถูกต้องตามข้อกำหนดของธนาคารแห่งประเทศไทย เหมาะสำหรับธุรกิจสินเชื่อที่ต้องการความเสถียรและปลอดภัยสูง",
    },
    {
      title: "Accounting System",
      name: "ระบบบัญชีสำหรับองค์กร",
      icon: (
        <PieChart className="w-16 h-16 text-purple-500 group-hover:text-purple-600 transition-colors" />
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
      {/* พื้นหลัง dynamic */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navbar หลัก */}
      <Navbar />

      <main>
        {/* ========== HOME / HERO (เต็มหน้าจอ) ========== */}
        <section
          id="home"
          className="min-h-screen scroll-mt-24 flex items-center justify-center relative px-6 pt-32 pb-20"
        >
          <div className="max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-10 items-center">
            {/* ข้อความหลัก */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#F59E0B]">
                Software Studio for Modern Business
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
                We Are{" "}
                <span className="bg-gradient-to-r from-[#F59E0B] via-[#F59E0B] to-[#3B82F6] bg-clip-text text-transparent">
                  SoftNetwork
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-600 max-w-xl lg:max-w-2xl leading-relaxed mb-6">
                เราคือทีมผู้พัฒนาซอฟต์แวร์ที่เชี่ยวชาญด้านระบบงานสำหรับองค์กร
                มุ่งเน้นการสร้างโซลูชันที่ช่วยเพิ่มประสิทธิภาพ ความถูกต้อง
                และความคล่องตัวให้กับธุรกิจของคุณ ด้วยเทคโนโลยีที่ทันสมัยและมาตรฐานระดับสากล
              </p>

              <p className="text-slate-700 text-sm md:text-base font-medium mb-8">
                We build software that moves your business forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                <a
                  href="#solutions"
                  className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-bold shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                >
                  Explore Solutions
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3 rounded-full text-sm md:text-base font-bold border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* กล่องภาพ Banner ด้านขวา */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white/80 shadow-2xl border border-slate-100 overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#F59E0B]/15" />
                <div className="relative p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
                        Enterprise Solutions
                      </p>
                      <p className="text-sm font-semibold text-slate-900 mt-1">
                        Hire Purchase • Lending • Accounting
                      </p>
                    </div>
                    <div className="flex -space-x-2">
                      <span className="w-8 h-8 rounded-full border-2 border-white bg-[#3B82F6]/90" />
                      <span className="w-8 h-8 rounded-full border-2 border-white bg-[#F59E0B]/90" />
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-slate-200/70 bg-slate-50 h-48">
                    <Image
                      src="/images/About/front.webp"
                      alt="SoftNetwork office"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      priority
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-xl bg-blue-50 text-blue-700 p-3">
                      <p className="font-semibold">องค์กร</p>
                      <p className="mt-1">Enterprise-ready</p>
                    </div>
                    <div className="rounded-xl bg-amber-50 text-amber-700 p-3">
                      <p className="font-semibold">แม่นยำ</p>
                      <p className="mt-1">Accounting-grade</p>
                    </div>
                    <div className="rounded-xl bg-slate-900 text-slate-50 p-3">
                      <p className="font-semibold">ปลอดภัย</p>
                      <p className="mt-1">Secure by design</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <ChevronDown size={32} className="mx-auto text-slate-400 opacity-70" />
          </motion.div>
        </section>

        {/* ========== ABOUT (เต็มหน้าจอ) ========== */}
        <section
          id="about"
          className="min-h-screen scroll-mt-24 flex items-center section-gradient-orange py-20"
        >
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
                About Us
              </p>
              <h2 className="section-title">We Are SoftNetwork</h2>
              <p className="subtext mt-4">
                SoftNetwork คือบริษัทผู้เชี่ยวชาญด้านการออกแบบและพัฒนาระบบคอมพิวเตอร์สำหรับองค์กร
                เรานำเสนอโซลูชันที่ช่วยให้ทุกภาคส่วนของธุรกิจสามารถทำงานได้อย่างมีประสิทธิภาพ
                ลดความซ้ำซ้อน และเพิ่มความแม่นยำในการจัดการข้อมูล ตั้งแต่ระดับปฏิบัติการไปจนถึงระดับบริหารจัดการ
              </p>
              <p className="subtext mt-4">
                เราดำเนินงานด้วยแนวคิด “Service Marketing”
                เพื่อยืนยันถึงการให้บริการที่ใส่ใจ โปร่งใส และตอบโจทย์ความต้องการของลูกค้าอย่างแท้จริง
                ทั้งในด้านคุณภาพของซอฟต์แวร์และคุณภาพการให้บริการ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-40 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/About/meeting.jpg"
                  alt="SoftNetwork meeting"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22rem, 50vw"
                />
              </div>
              <div className="relative h-40 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src="/images/About/office.jpg"
                  alt="SoftNetwork office"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22rem, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== SOLUTIONS (เต็มหน้าจอ) ========== */}
        <section
          id="solutions"
          className="min-h-screen scroll-mt-24 flex items-center py-20 bg-white"
        >
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#3B82F6] mb-2">
                Solutions
              </p>
              <h2 className="section-title">Solutions</h2>
              <p className="subtext mt-4">
                โซลูชันซอฟต์แวร์ที่ออกแบบมาโดยเฉพาะสำหรับธุรกิจสินเชื่อ เช่าซื้อ และบัญชี
                เพื่อช่วยให้การจัดการข้อมูลและกระบวนการทำงานในองค์กรของคุณเป็นไปอย่างมีประสิทธิภาพ
                ตรวจสอบได้ และขยายต่อได้ในอนาคต
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {solutionsData.map((sol) => (
                <motion.article
                  key={sol.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card-base p-6 flex flex-col h-full group"
                >
                  <div className="mb-4 flex justify-center md:justify-start">
                    {sol.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-700 mt-1 mb-2">{sol.name}</p>
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
            </div>
          </div>
        </section>

        {/* ========== SERVICES (เต็มหน้าจอ) ========== */}
        <section
          id="services"
          className="min-h-screen scroll-mt-24 flex items-center section-gradient-blue py-24"
        >
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#1D4ED8] mb-2">
                Services
              </p>
              <h2 className="section-title">Services</h2>
              <p className="subtext mt-4">
                บริการแบบครบวงจรตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา
                ไปจนถึงการติดตั้งและดูแลระบบ เพื่อให้ซอฟต์แวร์ที่คุณเลือก
                สามารถนำไปใช้งานได้จริงและสร้างมูลค่าให้กับธุรกิจอย่างต่อเนื่อง
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {servicesData.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="card-base p-6 h-full flex flex-col"
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
            </div>
          </div>
        </section>

        {/* ========== CUSTOMERS (เต็มหน้าจอ / ไม่มี grayscale animation) ========== */}
        <section
          id="customers"
          className="min-h-screen scroll-mt-24 flex items-center py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
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

            {/* ลบ grayscale / hover ขาวดำ ออกแล้ว และใช้ next/image */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
              {[
                { file: "gw.png", alt: "Green Wing เงินด่วน" },
                { file: "advance-fin.png", alt: "Advance Finance" },
                { file: "METROP.webp", alt: "Metropolis Leasing" },
                { file: "tsr-leasing.webp", alt: "TSR Leasing" },
                { file: "hua-heng-lee.webp", alt: "Hua Heng Lee" },
                { file: "mittae-esan.jpg", alt: "Mittae Esan Co., Ltd." },
                { file: "nakhonluang-capital.webp", alt: "Nakhonluang Capital" },
              ].map((logo) => (
                <div
                  key={logo.file}
                  className="flex justify-center p-4 hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={`/images/customers/${logo.file}`}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CONTACT (เต็มหน้าจอ, ไม่มี LINE, ไม่มี grayscale animation) ========== */}
        <section
          id="contact"
          className="min-h-screen scroll-mt-24 flex items-center py-24 bg-gradient-to-b from-slate-50 to-slate-100"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
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

                {/* แผนที่ – ใช้ลิงก์ Google Maps ที่ให้มา */}
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
            © {new Date().getFullYear()} SoftNetwork Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
