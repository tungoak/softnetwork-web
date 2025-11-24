// app/layout.js
import "./globals.css";
import { Sarabun } from "next/font/google";
import Navbar from "./components/Navbar";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SoftNetwork | Software Studio",
  description: "We build software for your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        className={
          sarabun.className +
          " bg-slate-950 text-slate-50 scroll-smooth antialiased"
        }
      >
        <Navbar />
        {/* เว้นที่ให้ navbar สูงประมาณ 90px */}
        <div className="pt-24 md:pt-28">{children}</div>
      </body>
    </html>
  );
}
