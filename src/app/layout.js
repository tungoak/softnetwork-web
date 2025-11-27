import "./globals.css";
import { Sarabun, Prompt } from "next/font/google";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sarabun",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"], // บาง → หนา ครบทุกระดับ
  display: "swap",
  variable: "--font-prompt",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://softnetwork-web.vercel.app"),

  // ---------- TITLE / DESCRIPTION หลัก ----------
  title: {
    default:
      "SoftNetwork | ซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และระบบบัญชี",
    template: "%s | SoftNetwork",
  },
  description:
    "SoftNetwork บริษัทพัฒนาซอฟต์แวร์สำหรับธุรกิจสินเชื่อ เช่าซื้อ และระบบบัญชีในประเทศไทย ออกแบบและพัฒนาระบบงานองค์กร (Enterprise Software) เพื่อเพิ่มประสิทธิภาพ ความถูกต้อง และความปลอดภัยให้ธุรกิจของคุณ.",

  // ---------- Keywords ----------
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

  // ---------- ภาษา: ไทย main / อังกฤษ secondary ----------
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
      "en-US": "/en",
    },
  },

  // ---------- Robots ----------
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

  // ---------- Icons ----------
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },

  // ---------- Open Graph (ใช้ hero ปัจจุบัน) ----------
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

  // ---------- Twitter Card ----------
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
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
