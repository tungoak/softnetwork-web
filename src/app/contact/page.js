"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Poppins, Kanit } from "next/font/google";
import { Phone, Mail, MapPin, Facebook, ArrowRight, ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold tracking-wide text-slate-700">{label}</p>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });

  return (
    <main
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#FFF7F0] via-white to-[#FFF7F0]"
      style={{ fontFamily: `${poppins.style.fontFamily}, ${kanit.style.fontFamily}, ui-sans-serif, system-ui, sans-serif` }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-10 md:pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-44 -top-44 h-[420px] w-[420px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
          <div className="absolute -right-56 -top-52 h-[560px] w-[560px] rounded-full bg-[#2563EB]/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0.06),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Contact
            </motion.h1>
            {/* ✅ เอา Home › Contact ออกแล้ว */}
            <motion.p variants={fadeUp} className="mt-3 text-sm md:text-base text-slate-500">
              ติดต่อเราเพื่อขอข้อมูลเพิ่มเติม หรือนัดหมายสาธิตระบบ
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAP STRIP (ปรับให้ “เต็มและสวย” + ช่องไฟพอดี) */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative h-[320px] md:h-[400px] lg:h-[460px] overflow-hidden rounded-3xl bg-slate-200 ring-1 ring-slate-200 shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.6038478300402!2d100.61936100000001!3d13.766345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6206d6d57fd7%3A0xf673ab955d9d6639!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4i-C4reC4n-C4l-C5jOC5gOC4meC5h-C4leC5gOC4p-C4tOC4o-C5jOC4hCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1764059119103!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SoftNetwork Office Map"
              className="absolute inset-0 h-full w-full grayscale contrast-105 saturate-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* CONTENT (ปรับ spacing ให้บาลานซ์เหมือนตัวอย่าง) */}
      <section className="relative py-14 md:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-56 bottom-[-280px] h-[680px] w-[680px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
          <div className="absolute -right-72 bottom-[-340px] h-[800px] w-[800px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-14 items-start">
            {/* LEFT */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
              <motion.p variants={fadeUp} className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                <span className="h-px w-10 bg-slate-300" />
                Contact
              </motion.p>

              <motion.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                Get In Touch
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-4 max-w-md text-sm md:text-base text-slate-600 leading-relaxed">
                หากคุณต้องการข้อมูลเพิ่มเติมหรือนัดหมายสาธิตระบบ สามารถติดต่อเราได้ผ่านช่องทางดังต่อไปนี้
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 space-y-5">
                <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-[0_18px_55px_rgba(2,6,23,0.06)] p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#F59E0B]/15 text-[#B45309] flex items-center justify-center ring-1 ring-[#F59E0B]/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-wide text-slate-500">Phone Number</p>
                    <p className="mt-1 text-lg font-black text-slate-900">081-750-4393</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-[0_18px_55px_rgba(2,6,23,0.06)] p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#2563EB]/12 text-[#1E40AF] flex items-center justify-center ring-1 ring-[#2563EB]/20 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-wide text-slate-500">Address</p>
                    <p className="mt-1 font-semibold text-slate-900 leading-relaxed">
                      398/1, 2nd Fl., Marché Ram53 Building B, Soi Ramkhamhaeng 53, Phlapphla, Wang Thonglang, Bangkok 10310
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-[0_18px_55px_rgba(2,6,23,0.06)] p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900/8 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-wide text-slate-500">Email</p>
                    <a href="mailto:sn-info@softnetwork.co.th" className="mt-1 inline-block text-base font-black text-slate-900 hover:underline">
                      sn-info@softnetwork.co.th
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/softnetwork2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-[0_18px_55px_rgba(2,6,23,0.18)] hover:opacity-95 transition"
                  >
                    <Facebook className="h-4 w-4" />
                    Follow on Facebook
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-[0_22px_70px_rgba(2,6,23,0.10)] overflow-hidden">
                <div className="p-7 sm:p-9 md:p-10">
                  <p className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">Sent A Message</p>

                  <form onSubmit={(e) => e.preventDefault()} className="mt-7 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Your Name">
                        <input
                          value={form.name}
                          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                          placeholder="Enter your name"
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#F59E0B]/35"
                        />
                      </Field>

                      <Field label="Phone">
                        <input
                          value={form.phone}
                          onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                          placeholder="Phone"
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#F59E0B]/35"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Email">
                        <input
                          value={form.email}
                          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                          placeholder="Enter your email"
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#F59E0B]/35"
                        />
                      </Field>

                      <Field label="Property type">
                        <div className="relative">
                          <select
                            value={form.type}
                            onChange={(e) => setForm((s) => ({ ...s, type: e.target.value }))}
                            className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#F59E0B]/35"
                          >
                            <option value="">Choose type</option>
                            <option value="hire-purchase">Hire Purchase</option>
                            <option value="lending">Lending</option>
                            <option value="accounting">Accounting</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        </div>
                      </Field>
                    </div>

                    <Field label="Message">
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                        placeholder="your message"
                        rows={6}
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#F59E0B]/35"
                      />
                    </Field>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-8 py-3.5 text-sm font-black text-white shadow-[0_18px_55px_rgba(245,158,11,0.28)] hover:brightness-95 transition"
                      >
                        View More
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                * แบบฟอร์มนี้เป็น UI ตัวอย่าง หากต้องการให้ส่งเข้าอีเมล/Google Sheet บอกได้ เดี๋ยวผมต่อให้
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
