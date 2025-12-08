import "./globals.css";
import { Sarabun, Prompt } from "next/font/google";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sarabun",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-prompt",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://softnetwork-web.vercel.app"),
  title: {
    default:
      "SoftNetwork | ซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และระบบบัญชี",
    template: "%s | SoftNetwork",
  },
  description:
    "SoftNetwork บริษัทพัฒนาซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และระบบบัญชีในประเทศไทย ออกแบบและพัฒนาระบบงานองค์กร (Enterprise Software) เพื่อเพิ่มประสิทธิภาพ ความถูกต้อง และความปลอดภัยให้ธุรกิจของคุณ.",
  keywords: [
    "SoftNetwork",
    "ซอฟต์แวร์เช่าซื้อ",
    "ระบบเช่าซื้อ",
    "ระบบสินเชื่อ",
    "ระบบบริหารสินเชื่อ",
    "ระบบบัญชี",
    "ซอฟต์แวร์สำหรับธุรกิจการเงิน",
    "Hire Purchase System",
    "Lending System",
    "Accounting System",
    "Enterprise Software",
    "Leasing Software",
    "Loan Management System",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "SoftNetwork | Software Studio for Modern Business",
    description:
      "SoftNetwork ออกแบบและพัฒนาระบบงานสำหรับองค์กรด้านสินเชื่อ เช่าซื้อ และบัญชีในประเทศไทย เพิ่มประสิทธิภาพและความคล่องตัวให้ธุรกิจการเงินของคุณด้วยซอฟต์แวร์ระดับองค์กร.",
    type: "website",
    url: "/",
    siteName: "SoftNetwork",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/home-hero.jpg",
        width: 1600,
        height: 900,
        alt: "SoftNetwork enterprise software studio over Bangkok skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftNetwork | Software Studio for Modern Business",
    description:
      "Software studio in Thailand specializing in enterprise systems for hire purchase, lending and accounting.",
    images: ["/images/home-hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${sarabun.variable} ${prompt.variable} bg-white text-slate-900 antialiased selection:bg-amber-100 selection:text-slate-900`}
      >
        {/* NAVBAR ใช้ทุกหน้า */}
        <Navbar />

        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>

          {/* FOOTER ใหม่ ใช้ 3 สี --sn-dark / --sn-orange / --sn-blue */}
          <footer
            className="relative border-t border-slate-800/70 text-slate-50"
            style={{
              background:
                "linear-gradient(90deg, var(--sn-dark,#1f2a4d) 0%, #020617 40%, var(--sn-blue,#2563eb) 100%)",
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-12">
              <div className="grid gap-8 md:gap-10 lg:gap-14 md:grid-cols-2 lg:grid-cols-4 items-start">
                {/* โลโก้ + ข้อความบริษัท */}
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-[#020617] shadow-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/icon.svg"
                      alt="SoftNetwork logo"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-semibold tracking-[0.18em] uppercase">
                      SOFT
                      <span style={{ color: "var(--sn-blue,#2563eb)" }}>
                        NETWORK
                      </span>
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-slate-200/85 max-w-xs">
                      เรายืนหยัดพัฒนาซอฟต์แวร์ด้านการเงิน เพื่อให้ธุรกิจและองค์กรของคุณ
                      ทำงานได้อย่างมั่นใจในทุกวัน
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div className="space-y-3">
                  <h3
                    className="text-sm md:text-base font-semibold"
                    style={{ color: "var(--sn-orange,#f59e0b)" }}
                  >
                    Contact Us
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-100/85">
                    <li className="flex items-start gap-2">
                      <MapPin className="mt-[2px] h-4 w-4 flex-shrink-0" />
                      <span>Our Location, Bangkok, Thailand</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>081-750-4393</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span>sn-info@softnetwork.co.th</span>
                    </li>
                  </ul>
                </div>

                {/* Follow Us */}
                <div className="space-y-3">
                  <h3
                    className="text-sm md:text-base font-semibold"
                    style={{ color: "var(--sn-orange,#f59e0b)" }}
                  >
                    Follow Us
                  </h3>
                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="#"
                      aria-label="SoftNetwork on Facebook"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border bg-transparent transition-colors"
                      style={{
                        borderColor: "rgba(248,250,252,0.5)",
                      }}
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="space-y-3">
                  <h3
                    className="text-sm md:text-base font-semibold"
                    style={{ color: "var(--sn-orange,#f59e0b)" }}
                  >
                    Working Hours
                  </h3>
                  <div className="flex items-start gap-2 text-xs md:text-sm text-slate-100/85">
                    <Clock className="mt-[2px] h-4 w-4 flex-shrink-0" />
                    <div>
                      <p>9:30 AM – 6:30 PM</p>
                      <p>Monday – Friday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mt-8"
                style={{ borderTop: "1px solid rgba(148,163,184,0.4)" }}
              />
              <p className="mt-3 text-[11px] md:text-xs text-slate-300/80 text-center">
                Copyright © 2006–2024 SoftNetwork Company Limited. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
