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
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata = {
  // ใช้กับ Open Graph ให้ลิงก์รูปถูกโดเมน และให้ Next.js เลิกเตือน
  metadataBase: new URL("https://softnetwork-web.vercel.app"),
  title: {
    default: "SoftNetwork",
    template: "%s | SoftNetwork",
  },
  description:
    "We build software that moves your business forward. SoftNetwork is a software studio specializing in enterprise systems for hire purchase, lending, and accounting.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "SoftNetwork | Software Studio for Modern Business",
    description:
      "SoftNetwork ออกแบบและพัฒนาระบบงานสำหรับองค์กรด้านสินเชื่อ เช่าซื้อ และบัญชี เพื่อเพิ่มประสิทธิภาพและความคล่องตัวให้ธุรกิจของคุณ",
    type: "website",
    locale: "th_TH",
    siteName: "SoftNetwork",
    images: [
      {
        url: "/images/About/front.webp",
        width: 1200,
        height: 630,
        alt: "SoftNetwork Software Studio for Modern Business",
      },
    ],
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
