import "./globals.css";
import { Sarabun, Prompt } from "next/font/google";
import Navbar from "./components/Navbar";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["400","500","600","700"],
  display: "swap",
  variable: "--font-sarabun",
});
const prompt = Prompt({
  subsets: ["latin","thai"],
  weight: ["500","600","700","800"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata = {
  title: "SoftNetwork - Software Studio",
  description: "We build software for your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={[
          sarabun.variable,
          prompt.variable,
          sarabun.className,
          "bg-white text-slate-900 antialiased selection:bg-amber-100 selection:text-slate-900"
        ].join(" ")}
      >
        <Navbar />
        <div className="pt-24 md:pt-28">{children}</div>
      </body>
    </html>
  );
}
