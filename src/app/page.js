// app/page.js
const solutions = [
  {
    title: "Hire Purchase System",
    desc: "ระบบบริหารจัดการสินเชื่อเช่าซื้อครบวงจร รองรับตั้งแต่การรับคำขออนุมัติ ตรวจสอบข้อมูลลูกค้า จัดทำสัญญา ไปจนถึงการติดตามการชำระและออกใบแจ้งหนี้อัตโนมัติ.",
    tag: "HPPro / Leasing",
  },
  {
    title: "Lending Management System",
    desc: "ระบบจัดการสินเชื่อเงินกู้ รองรับทั้งแบบมีหลักประกันและสินเชื่อส่วนบุคคล สามารถกำหนดรูปแบบดอกเบี้ย ตารางผ่อน และการตัดชำระได้ยืดหยุ่นตามข้อกำหนดของหน่วยงานกำกับ.",
    tag: "Loan / Personal Loan",
  },
  {
    title: "Accounting System",
    desc: "ระบบบัญชีที่เชื่อมโยงกับระบบหลักโดยตรง ลดการบันทึกซ้ำซ้อน ช่วยออกงบการเงินและรายงานสำคัญได้อย่างรวดเร็ว ถูกต้อง และตรวจสอบย้อนกลับได้.",
    tag: "GL / Report",
  },
];

const services = [
  {
    title: "System Consultation",
    desc: "ให้คำปรึกษา ออกแบบโครงสร้างระบบงาน และวางแผนการพัฒนาระยะยาวให้เหมาะกับธุรกิจของคุณ.",
  },
  {
    title: "System Development",
    desc: "พัฒนาเว็บแอปพลิเคชันและระบบหลังบ้านตามความต้องการจริงของผู้ใช้ พร้อมออกแบบให้ขยายระบบต่อได้ในอนาคต.",
  },
  {
    title: "System Implementation & Support",
    desc: "ดูแลขั้นตอนการติดตั้งระบบ อบรมผู้ใช้งาน และให้การสนับสนุนหลังการใช้งานอย่างต่อเนื่อง.",
  },
];

const customers = [
  "Nakhonluang Capital",
  "Metropolis Leasing",
  "Advance Finance",
  "Wing Money",
  "TSR Leasing",
  "Mittae Esan",
  "Hua Heng Lee",
  "Other Financial Clients",
];

export default function HomePage() {
  return (
    <main className="space-y-0">
      {/* HOME / HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* ข้อความหลัก */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-amber-400 mb-3">
              We are SoftNetwork
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              <span className="block">Software Studio</span>
              <span className="mt-2 block text-lg md:text-2xl font-semibold text-blue-400">
                We build software for your business.
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-xl">
              ทีมพัฒนาซอฟต์แวร์ที่เชี่ยวชาญด้านระบบงานสายการเงินและสินเชื่อ
              ออกแบบและพัฒนาโซลูชันให้สอดคล้องกับกระบวนการทำงานจริงขององค์กร
              และรองรับการเติบโตในอนาคต.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 text-sm font-semibold hover:bg-amber-400 transition shadow-lg shadow-amber-500/20"
              >
                Contact Us
              </a>
              <a
                href="#solutions"
                className="px-5 py-2.5 rounded-full border border-slate-600 text-slate-100 text-sm hover:border-blue-400 hover:text-blue-300 transition"
              >
                View Solutions
              </a>
            </div>
          </div>

          {/* การ์ดตัวอย่าง */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl border border-slate-700 bg-slate-900/70 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[11px] text-slate-400">
                    SoftNetwork • HPPro
                  </p>
                  <h3 className="text-base font-semibold text-slate-50 mt-1">
                    Hire Purchase Dashboard
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] text-emerald-300 border border-emerald-500/40">
                  Live Data
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 flex-1">
                <div className="col-span-2 rounded-2xl bg-gradient-to-tr from-amber-500/35 to-blue-500/40 border border-amber-400/40 p-3 flex flex-col justify-between">
                  <div className="flex justify-between text-[11px] text-slate-50/80">
                    <span>Portfolio</span>
                    <span>+12.4%</span>
                  </div>
                  <div className="mt-2 h-16 rounded-xl bg-slate-900/40 border border-amber-200/30" />
                </div>
                <div className="space-y-2">
                  <div className="h-16 rounded-2xl bg-slate-800/80 border border-slate-600" />
                  <div className="h-16 rounded-2xl bg-slate-800/80 border border-slate-600" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                ตัวอย่าง layout ของระบบเช่าซื้อ: แสดงสถานะสัญญา ยอดคงเหลือ
                และสรุปพอร์ตสินเชื่อในมุมมองเดียว.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-16 md:py-24 bg-slate-950 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We are{" "}
              <span className="text-amber-400">SoftNetwork Co., Ltd.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
              เราเป็นผู้พัฒนาระบบงานทางด้านคอมพิวเตอร์
              ที่มุ่งเน้นกลุ่มธุรกิจการเงินและสินเชื่อ
              ออกแบบระบบให้รองรับการทำงานในทุกขั้นตอน ตั้งแต่ส่วนปฏิบัติการ
              จนถึงส่วนบริหารจัดการและการรายงานข้อมูลระดับผู้บริหาร.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
              แนวคิดของเราคือ “Service First & Long-term Partnership”
              ไม่ใช่แค่ส่งมอบโปรแกรม แต่คือการเดินไปกับลูกค้า
              ตั้งแต่เริ่มต้นวิเคราะห์ ออกแบบ ติดตั้ง
              ไปจนถึงการดูแลหลังการใช้งาน.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• ออกแบบระบบให้สอดคล้องกับกระบวนการทำงานจริง</li>
              <li>• ใช้เทคโนโลยีที่ทันสมัยและเสถียร</li>
              <li>• คำนึงถึงมาตรฐานด้านบัญชีและข้อกำกับของภาครัฐ</li>
              <li>• เน้นความต่อเนื่องของการให้บริการและการซัพพอร์ต</li>
            </ul>
          </div>

          {/* กล่องภาพ / atmosphere */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 md:h-40 rounded-2xl bg-[linear-gradient(135deg,#f59e0b33,#3b82f633)] border border-amber-400/50 shadow-lg shadow-amber-500/20" />
            <div className="h-32 md:h-40 rounded-2xl bg-slate-800 border border-slate-600" />
            <div className="col-span-2 h-28 md:h-32 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-between px-5">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-[0.22em]">
                  Experience
                </p>
                <p className="text-lg font-semibold text-slate-50">
                  20+ Years in Business
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-400">2004</p>
                <p className="text-[11px] text-slate-400">Since</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Our <span className="text-blue-400">Solutions</span>
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                โซลูชันซอฟต์แวร์หลักที่ถูกออกแบบมาสำหรับธุรกิจสินเชื่อ
                ตั้งแต่การปล่อยกู้ การติดตามการชำระ ไปจนถึงบัญชีและรายงาน.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-700 bg-slate-950/70 p-5 flex flex-col hover:border-amber-400/70 hover:shadow-xl hover:shadow-amber-500/10 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-amber-400">
                    {item.title}
                  </h3>
                  <span className="text-[11px] rounded-full border border-slate-600 px-2 py-0.5 text-slate-400 group-hover:border-amber-400 group-hover:text-amber-300 transition">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-300 flex-1">{item.desc}</p>
                <p className="mt-4 text-[11px] text-slate-500">
                  รองรับการปรับแต่งตามวิธีทำงานของแต่ละองค์กร.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 md:py-24 bg-slate-950 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our <span className="text-amber-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/10 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CUSTOMER */}
      <section
        id="our-customer"
        className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our <span className="text-blue-400">Customers</span>
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-xl">
            กลุ่มลูกค้าของเราประกอบด้วยบริษัทสินเชื่อเช่าซื้อ
            สินเชื่อเงินกู้ และองค์กรด้านการเงินหลายรูปแบบ
            ที่ต้องการระบบงานที่เชื่อถือได้และรองรับการเติบโต.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {customers.map((name) => (
              <div
                key={name}
                className="h-20 rounded-xl border border-slate-700 bg-slate-950/70 flex items-center justify-center text-xs text-slate-200 hover:border-amber-400/60 hover:bg-slate-900 transition"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-slate-950 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10">
          {/* ข้อมูลติดต่อ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Contact <span className="text-amber-400">SoftNetwork</span>
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับระบบ หรืออยากนัดพูดคุย
              เพื่อตรวจสอบความเหมาะสมของโซลูชันกับธุรกิจของคุณ
              สามารถติดต่อเราได้ตามช่องทางด้านล่าง.
            </p>

            <div className="space-y-3 text-sm text-slate-200">
              <div>
                <div className="font-semibold">SoftNetwork Co., Ltd.</div>
                <div className="text-slate-300">
                  398/1, 2nd Fl., Marché Ram53 Building B, Soi Ramkhamhaeng 53,
                  Phlapphla, Wang Thonglang, Bangkok 10310
                </div>
              </div>
              <div>
                <div>Mobile: 081-750-4393</div>
              </div>
              <div>
                Email:{" "}
                <a
                  href="mailto:info@softnetwork.co.th"
                  className="text-amber-400 hover:underline"
                >
                  info@softnetwork.co.th
                </a>
              </div>
              <div>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/Softnetwork2004"
                  className="text-blue-400 hover:underline"
                >
                  Softnetwork2004
                </a>
              </div>
            </div>
          </div>

          {/* แผนที่ / ฟอร์ม */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 overflow-hidden">
            <div className="h-64">
              <iframe
                title="SoftNetwork Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6036!2d100.61!3d13.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sSoftNetwork"
                loading="lazy"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-4 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} SoftNetwork Co., Ltd. All rights
          reserved.
        </div>
      </section>
    </main>
  );
}
