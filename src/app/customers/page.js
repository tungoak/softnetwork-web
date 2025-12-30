"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const logos = [
  { file: "gw.png", alt: "Green Wing เงินด่วน" },
  { file: "advance-fin.jpg", alt: "Advance Finance" },
  { file: "aurora.jpg", alt: "Aurora" },
  { file: "blockfint.jpg", alt: "Blockfint" },
  { file: "ccap.jpg", alt: "CCAP" },
  { file: "chairitleasing.jpg", alt: "Chairit Leasing" },
  { file: "hua-heng-lee.jpg", alt: "Hua Heng Lee" },
  { file: "JSM.jpg", alt: "JSM Money" },
  { file: "MBK.jpg", alt: "MBK" },
  { file: "METROP.jpg", alt: "Metropolis Leasing" },
  { file: "nakhonluang-capital.jpg", alt: "Nakhonluang Capital" },
  { file: "next capita.jpg", alt: "Next Capital" }, // ชื่อตามไฟล์ของคุณ (มีเว้นวรรค)
  { file: "SERM.jpg", alt: "SERM" },
  { file: "SKL.jpg", alt: "SKL สยามคุณค่า ลีสซิ่ง" },
  { file: "somwang.jpg", alt: "Somwang เงินสั่งได้" },
  { file: "TSRL.jpg", alt: "TSRL" },
  { file: "mittae-esan.jpg", alt: "Mittae Esan Co., Ltd." },
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

      <div className="relative w-full max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Our Customers
            <span className="block text-sm md:text-base font-normal text-slate-500 mt-2">
              A selection of organizations that trust SoftNetwork solutions.
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:gap-x-10 md:gap-y-10 items-center"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.file}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="group flex items-center justify-center h-[112px] sm:h-[128px] md:h-[140px] rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_50px_rgba(15,23,42,0.10)] transition px-3 sm:px-4"
              title={logo.alt}
            >
              <div className="relative w-full h-[78px] sm:h-[90px] md:h-[98px] overflow-visible">
                <Image
                  src={`/images/customers/${logo.file}`}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 220px"
                  className="object-contain object-center opacity-100 transition-transform duration-200 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
