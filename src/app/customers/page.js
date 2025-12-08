"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const row1 = [
  { file: "gw.png", alt: "Green Wing เงินด่วน" },
  { file: "advance-fin.png", alt: "Advance Finance" },
  { file: "METROP.webp", alt: "Metropolis Leasing" },
  { file: "tsr-leasing.webp", alt: "TSR Leasing" },
];

const row2 = [
  { file: "hua-heng-lee.webp", alt: "Hua Heng Lee" },
  { file: "mittae-esan.jpg", alt: "Mittae Esan Co., Ltd." },
  { file: "nakhonluang-capital.webp", alt: "Nakhonluang Capital" },
];

export default function CustomersPage() {
  return (
    <section
      id="customers"
      className="relative min-h-screen scroll-mt-40 flex items-center py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="pointer-events-none absolute -left-32 top-10 w-72 h-72 rounded-full bg-[#F59E0B]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-[#2563EB]/16 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-10 bottom-4 h-32 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.22),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm border border-slate-200 px-3 py-1 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-slate-600">
              Our Customers
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            ลูกค้าที่ไว้วางใจ
            <span className="block text-sm md:text-base font-normal text-slate-500 mt-2">
              ตัวอย่างบางส่วนของลูกค้าที่ใช้โซลูชันจาก SoftNetwork
            </span>
          </h1>
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
            {row1.map((logo) => (
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
                  className="w-full h-auto max-h-20 md:max-h-24 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* แถว 2 */}
          <div className="mt-4 md:mt-6 lg:mt-8 flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 lg:gap-x-12">
            {row2.map((logo) => (
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
                  className="w-full h-auto max-h-20 md:max-h-24 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
