"use client";

import { Phone, Mail, Facebook, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
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
                <h1 className="text-3xl lg:text-4xl font-black mb-4">
                  SoftNetwork Co., Ltd.
                </h1>
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

            {/* Google Maps */}
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
  );
}
