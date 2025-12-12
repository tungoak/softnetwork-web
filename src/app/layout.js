import "./globals.css";
import { Sarabun, Prompt, Poppins, Kanit } from "next/font/google";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-kanit",
});

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sarabun",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-prompt",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
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
    "SoftNetwork บริษัทพัฒนาซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และระบบบัญชี ออกแบบระบบให้ยืดหยุ่น ปรับใช้ได้ตามธุรกิจของคุณ เพื่อเพิ่มประสิทธิภาพ ความถูกต้อง และความปลอดภัยให้ธุรกิจของคุณ.",
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
  ],
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
      "SoftNetwork ออกแบบและพัฒนาซอฟต์แวร์ด้านสินเชื่อ เช่าซื้อ และบัญชี เพื่อเพิ่มประสิทธิภาพและความคล่องตัวให้ธุรกิจการเงินของคุณ.",
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
      "ซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และบัญชี พัฒนาโดยทีมงาน SoftNetwork.",
    images: ["/images/home-hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${kanit.variable} ${poppins.variable} ${prompt.variable} ${sarabun.variable} bg-white text-slate-900 antialiased selection:bg-amber-100 selection:text-slate-900`}
      >
        <Navbar />

        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>

          {/* FOOTER พื้นหลังสีขาว ตัวหนังสือเข้ม อ่านง่าย */}
          <footer className="relative border-t border-slate-200 bg-white text-slate-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-12">
              <div className="grid gap-8 md:gap-10 lg:gap-14 md:grid-cols-2 lg:grid-cols-4 items-start">
                {/* โลโก้ + ข้อความบริษัท */}
                <div className="space-y-3">
                  <div className="relative h-10 w-40 md:h-12 md:w-52">
                    <Image
                      src="/snblacklogo.svg"
                      alt="SoftNetwork logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 max-w-xs">
                    เรายืนหยัดพัฒนาซอฟต์แวร์ด้านการเงิน เพื่อให้ธุรกิจและองค์กรของคุณ
                    ทำงานได้อย่างมั่นใจในทุกวัน
                  </p>
                </div>

                {/* Contact Us */}
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    Contact Us
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <MapPin className="mt-[2px] h-4 w-4 flex-shrink-0 text-slate-500" />
                      <Link
                        href="/#contact"
                        className="hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        Our Location, Bangkok, Thailand
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="mt-[2px] h-4 w-4 flex-shrink-0 text-slate-500" />
                      <a href="tel:0817504393" className="hover:text-slate-900">
                        081-750-4393
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="mt-[2px] h-4 w-4 flex-shrink-0 text-slate-500" />
                      <a
                        href="mailto:sn-info@softnetwork.co.th"
                        className="hover:text-slate-900 break-all"
                      >
                        sn-info@softnetwork.co.th
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-700">
                    <li>
                      <Link
                        href="/#solutions"
                        className="hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#customers"
                        className="hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        Our Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#contact"
                        className="hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Working Hours */}
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    Working Hours
                  </h3>
                  <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <Clock className="mt-[2px] h-4 w-4 flex-shrink-0 text-slate-500" />
                    <div>
                      <p>9:30 AM – 6:30 PM</p>
                      <p>Monday – Friday</p>
                    </div>
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-600 hover:text-slate-900"
                    >
                      <Facebook className="h-4 w-4" />
                      <span>SoftNetwork on Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200" />
              <p className="mt-3 text-[11px] md:text-xs text-slate-500 text-center">
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
