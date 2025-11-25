"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Car,
  Banknote,
  PieChart,
} from "lucide-react";

/** โลโก้คำว่า SoftNetwork (S=ส้ม, N=น้ำเงิน, ที่เหลือสีตามพื้นหลัง) */
function Brand({ onDark = false, className = "" }) {
  return (
    <span className={["sn-brand", onDark ? "on-dark" : "", className].join(" ")}>
      <span className="s">S</span>
      <span className="rest">oft</span>
      <span className="n">N</span>
      <span className="rest">etwork</span>
    </span>
  );
}

const stats = [
  
];

const solutions = [
  {
    icon: Car,
    tag: "Hire Purchase System",
    title: "ระบบสินเชื่อเช่าซื้อ",
    color: "text-amber-500",
    desc: "จัดการสัญญาเช่าซื้อครบวงจร ตั้งแต่รับคำขอ อนุมัติ คิดดอกเบี้ย ไปจนถึงปิดบัญชีและรายงานบัญชี.",
  },
  {
    icon: Banknote,
    tag: "Lending System",
    title: "ระบบบริหารเงินกู้",
    color: "text-blue-500",
    desc: "รองรับสินเชื่อหลายประเภท ทั้งเงินกู้บุคคล นาโนไฟแนนซ์ สหกรณ์ และตัดชำระอัตโนมัติ.",
  },
  {
    icon: PieChart,
    tag: "Accounting & GL",
    title: "ระบบบัญชีครบวงจร",
    color: "text-violet-500",
    desc: "เชื่อมข้อมูลจากระบบหลักเข้าสู่บัญชี ออกรายงานตามมาตรฐานและข้อกำกับหน่วยงานรัฐ.",
  },
];

const services = [
  {
    title: "System Consultation",
    desc: "ให้คำปรึกษาเชิงลึก วิเคราะห์กระบวนการทำงาน และออกแบบโครงสร้างระบบให้ตรงเป้าธุรกิจ.",
  },
  {
    title: "System Development",
    desc: "ออกแบบและพัฒนาระบบตามความต้องการเฉพาะของลูกค้า พร้อมทีมงานที่เข้าใจธุรกิจการเงิน.",
  },
  {
    title: "System Implementation",
    desc: "บริการติดตั้ง อบรม กำหนดขั้นตอนและเงื่อนไขการใช้งานระบบ เพื่อให้เริ่มใช้งานได้อย่างราบรื่น.",
  },
];

const customers = [
  { src: "/images/customers/advance-fin.png",        alt: "Advance Finance" },
  { src: "/images/customers/gw.png",                 alt: "Green Wing เงินด่วน" },
  { src: "/images/customers/hua-heng-lee.webp",      alt: "Hua Heng Lee" },
  { src: "/images/customers/METROP.webp",            alt: "Metropolis" },
  { src: "/images/customers/mittae-esan.jpg",        alt: "Mittae Esan Co., Ltd." },
  { src: "/images/customers/nakhonluang-capital.webp", alt: "Nakhonluang Capital" },
  { src: "/images/customers/tsr-leasing.webp",       alt: "TSR Leasing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      >
        {/* พื้นหลัง gradient + แสงฟุ้ง ๆ */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #E0F2FE 15%, #FFF7ED 55%, #FFFBEB 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-10 w-72 h-72 rounded-full bg-[#3B82F6]/18 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-[-4rem] w-80 h-80 rounded-full bg-[#F59E0B]/22 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 lg:px-8 text-center"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#F59E0B] mb-3">
            Financial Software Studio • Since 2004
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            We are{" "}
            <span className="block mt-1">
              <span className="text-[#F59E0B]">S</span>oft
              <span className="text-[#3B82F6]">N</span>etwork
            </span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-[#F59E0B] mt-3">
            Software Studio
          </div>

          <p className="mt-4 text-sm md:text-base lg:text-lg text-slate-600 max-w-xl mx-auto">
            เราสร้างสรรค์ซอฟต์แวร์คุณภาพเพื่อยกระดับธุรกิจของคุณให้ก้าวไกลในโลกดิจิทัล
            เน้นความถูกต้องด้านบัญชี การเงิน และการปฏิบัติตามกฎเกณฑ์
            พร้อมปรับแต่งให้เข้ากับกระบวนการทำงานจริงขององค์กรคุณ.
          </p>

          {/* ปุ่มเรียกดูโซลูชัน / ติดต่อเรา */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition"
            >
              ดูโซลูชันของเรา
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#F59E0B] px-6 py-3 text-sm font-semibold text-[#F59E0B] bg-white/80 hover:bg-[#F59E0B] hover:text-white transition"
            >
              ขอคำปรึกษา
            </a>
          </div>

          {/* สถิติ 4 ช่อง */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white/85 px-3 py-3 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              เรื่องราวของเรา <br />
              <Brand />
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base">
              SoftNetwork ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะเป็นผู้นำด้านการออกแบบและพัฒนาระบบงานทางด้านคอมพิวเตอร์
              เราผสานเทคโนโลยีที่ทันสมัยเข้ากับความเข้าใจในธุรกิจ
              เพื่อสร้างสรรค์โซลูชันที่รองรับการทำงานในทุกภาคส่วนขององค์กร.
            </p>
            <blockquote className="mt-6 border-l-8 border-[#F59E0B] pl-5 text-[#F59E0B] font-semibold italic">
              “Service Marketing” ไม่ใช่แค่คำสัญญา แต่คือหัวใจของการทำงานที่เราส่งมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าทุกท่าน
            </blockquote>
            <ul className="mt-6 space-y-2 text-sm md:text-base text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500" />
                <span>โฟกัสกลุ่มลูกค้าในธุรกิจการเงินและสินเชื่อเป็นหลัก</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500" />
                <span>เข้าใจขั้นตอนการทำงานจริงทั้งฝั่ง Front office และ Back office</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500" />
                <span>พัฒนาและดูแลระบบแบบระยะยาว เคียงข้างการเติบโตขององค์กรคุณ</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#F59E0B]/10 via-[#3B82F6]/10 to-transparent blur-xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <img
                src="/images/About/front.webp"
                alt="SoftNetwork Team"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Established</p>
                  <p className="text-lg font-bold text-slate-900">2004</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">
                    พัฒนาระบบเพื่อองค์กรการเงินไทย
                  </p>
                  <p className="text-sm font-semibold text-[#3B82F6]">
                    มากกว่า 2 ทศวรรษ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SOLUTIONS ===================== */}
      <section id="solutions" className="section-gradient-blue min-h-screen flex items-center py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black">
              Solutions ที่ขับเคลื่อนธุรกิจของคุณ
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              เราพัฒนาโซลูชันซอฟต์แวร์ที่แข็งแกร่งและยืดหยุ่น
              เพื่อตอบสนองความต้องการเฉพาะของแต่ละธุรกิจในโลกการเงินยุคใหม่
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="card-base p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 ${s.color}`}
                  >
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[.2em] text-slate-500">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#F59E0B] hover:text-[#3B82F6]"
                >
                  สนใจโซลูชันนี้ <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="section-gradient-orange min-h-screen flex items-center py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black">
              บริการของเรา เพื่อความสำเร็จของคุณ
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              เราพร้อมเป็นทั้งที่ปรึกษาและทีมพัฒนาที่ลงรายละเอียดไปกับคุณในทุกขั้นตอน
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((srv) => (
              <div key={srv.title} className="card-base p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {srv.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CUSTOMERS ===================== */}
      <section id="customers" className="bg-gray-800 min-h-screen flex items-center py-20">
  <div className="container flex flex-col items-center">
    {/* ... หัวข้อ / description ... */}
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:p-4 w-11/12 lg:w-10/12">
      {customers.map((c) => (
        <div
          key={c.src}  // ✅ ใช้ src แทน alt (ไม่ซ้ำแน่นอน)
          className="bg-white flex h-28 w-28 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 m-auto justify-center rounded-lg overflow-hidden shadow-sm"
        >
          <Image
            src={c.src}
            alt={c.alt}
            width={400}
            height={400}
            className="object-contain w-full min-h-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>


            {/* ===================== CONTACT ===================== */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center w-full bg-white pt-20 pb-24 md:pt-24 md:gap-6"
      >
        {/* หัวข้อ + subtitle ด้านบน */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Contact
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            ทีมงาน{" "}
            <span className="font-semibold">SoftNetwork Co., Ltd.</span>{" "}
            พร้อมให้บริการและให้คำปรึกษาอย่างใกล้ชิด
          </p>
        </div>

        {/* ส่วนหลัก: ซ้าย = แผนที่, ขวา = ข้อมูลติดต่อ */}
        <div className="mt-8 flex flex-col justify-between md:flex-row px-4 md:px-6 w-full lg:w-10/12 gap-6">
          {/* ซ้าย: แผนที่ */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                className="w-full h-64 md:h-[340px]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.6038478300402!2d100.61936100000001!3d13.766345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6206d6d57fd7%3A0xf673ab955d9d6639!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4i-C4reC4n-C4l-C5jOC5gOC4meC5h-C4leC5gOC4p-C4tOC4o-C5jOC4hCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1763978870870!5m2!1sth!2sth"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SoftNetwork Location"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/tyLWXoPhVqjJAzAC8"
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-sm text-[#3B82F6] hover:text-[#2563EB] underline"
            >
              เปิดแผนที่ใน Google Maps
            </a>
          </div>

          {/* ขวา: ข้อมูลติดต่อ + ไอคอน */}
          <div className="flex-1 flex flex-col pt-2 md:p-2 lg:p-4 gap-3 text-sm md:text-base text-slate-700">
            <p className="text-lg md:text-xl font-semibold text-slate-900">
              SoftNetwork Co., Ltd.
            </p>
            <p className="text-slate-600">
              398/1, 2nd Fl., Marché Ram53 Building B, Soi Ramkhamhaeng 53,
              Phlapphla, Wang Thonglang, Bangkok 10310
            </p>

            <div className="flex flex-col pt-2 md:pt-4 gap-3 md:gap-4">
              <div className="flex gap-3 md:gap-4 items-center">
                <MapPin className="w-5 h-5 text-[#F59E0B]" />
                <p>กรุงเทพมหานคร 10310</p>
              </div>

              {/* โทรศัพท์ */}
              <div className="flex gap-3 md:gap-4 items-center">
                <Phone className="w-5 h-5 text-[#F59E0B]" />
                <p>081-750-4393</p>
              </div>

              {/* อีเมล */}
              <div className="flex gap-3 md:gap-4 items-center">
                <Mail className="w-5 h-5 text-[#3B82F6]" />
                <p>
                  <a
                    href="mailto:sn-info@softnetwork.co.th"
                    className="hover:underline"
                  >
                    sn-info@softnetwork.co.th
                  </a>
                </p>
              </div>

              {/* Facebook */}
              <div className="flex gap-3 md:gap-4 items-center">
                <Facebook className="w-5 h-5 text-[#3B82F6]" />
                <p>
                  <a
                    href="https://www.facebook.com/softnetwork2004"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Facebook: Softnetwork2004
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================== FOOTER ===================== */}
      <footer className="section-solid-blue py-16">
        <div className="container grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="sn-brand text-xl on-dark">
              <span className="s">S</span>
              <span className="rest">oft</span>
              <span className="n">N</span>
              <span className="rest">etwork</span>
            </h3>
            <p className="text-blue-100 mt-2">
              We build software for your business.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">ลิงก์ด่วน</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  เกี่ยวกับเรา
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white">
                  โซลูชัน
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  บริการ
                </a>
              </li>
              <li>
                <a href="#customers" className="hover:text-white">
                  ลูกค้าของเรา
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">โซลูชันของเรา</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#solutions" className="hover:text-white">
                  Hire Purchase System
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white">
                  Lending Management
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white">
                  Accounting System
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">ติดต่อ</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>081-750-4393</li>
              <li>sn-info@softnetwork.co.th</li>
            </ul>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-white/30 text-center text-sm text-blue-100">
          © {new Date().getFullYear()} SoftNetwork Co., Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
