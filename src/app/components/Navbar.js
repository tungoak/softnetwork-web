"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Clock3, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/customers", label: "Customers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 shadow-sm">
      {/* ========== TOP BAR ========== */}
      <div className="bg-[#1f2a4d] text-slate-100 text-[11px] md:text-xs">
        <div className="container flex items-center justify-end py-1.5 md:py-2">
          <div className="flex items-center gap-3">
            {/* We’re Open */}
            <div className="flex items-center gap-2">
              <Clock3 className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium tracking-wide">
                We&apos;re Open:{" "}
                <span className="font-semibold text-amber-200">
                  Mon – Fri 09:00 – 18:00
                </span>
              </span>
            </div>

            <span className="hidden sm:inline text-slate-600">|</span>

            {/* Follow us + Facebook */}
            <span className="hidden sm:inline text-slate-300">Follow us</span>
            <a
              href="https://www.facebook.com/softnetwork2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoftNetwork Facebook"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-800/80 px-2.5 py-1 text-[11px] md:text-xs font-medium text-slate-100 hover:bg-slate-700 hover:border-slate-500 transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 mr-1" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========== MIDDLE BAR (LOGO + CONTACT) ========== */}
      <div className="bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container">
          <div className="flex items-center justify-between gap-4 md:gap-6 py-3 md:py-4">
            {/* LOGO + BRAND */}
            <Link href="/" className="flex items-center gap-3 md:gap-4 group">
              <div className="relative h-10 w-10 md:h-11 md:w-11">
                <Image
                  src="/icon.svg"
                  alt="SoftNetwork logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="leading-tight text-left">
                <span className="sn-brand text-xl md:text-2xl">
                  <span className="s">S</span>
                  <span className="rest">oft</span>
                  <span className="n">N</span>
                  <span className="rest">etwork</span>
                </span>
                <p className="text-[11px] md:text-xs text-slate-500 mt-0.5">
                  Software Studio for Modern Business
                </p>
              </div>
            </Link>

            {/* RIGHT: CONTACT + CTA + MOBILE MENU */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Call / Email (Desktop) */}
              <div className="hidden lg:flex items-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/70 bg-amber-50 text-[#F59E0B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-semibold text-slate-700">Call Us</div>
                    <a
                      href="tel:0817504393"
                      className="text-slate-500 hover:text-slate-700"
                    >
                      081-750-4393
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/70 bg-blue-50 text-[#2563EB]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-semibold text-slate-700">Email</div>
                    <a
                      href="mailto:sn-info@softnetwork.co.th"
                      className="text-slate-500 hover:text-slate-700"
                    >
                      sn-info@softnetwork.co.th
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA CONTACT US */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition-colors"
              >
                CONTACT US
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex md:hidden items-center justify-center rounded-full border border-slate-300 px-3 py-1.5 text-[11px] font-medium text-slate-700 bg-white"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== BOTTOM BAR (DESKTOP MAIN MENU) ========== */}
      <div className="hidden md:block bg-[#F59E0B] text-white">
        <div className="container">
          <nav aria-label="Main navigation" className="nav-underline">
            <ul className="flex items-center justify-center gap-5 lg:gap-8 py-2.5 text-[13px] md:text-sm font-semibold tracking-wide">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-1.5 pb-1 hover:text-white ${
                      isActive(link.href) ? "text-white" : "text-white/85"
                    }`}
                    data-role="navlink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ========== MOBILE NAV ========== */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden bg-white/95 backdrop-blur border-b border-slate-200 shadow-lg"
        >
          <div className="container py-3 space-y-2 text-sm">
            <nav aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block w-full text-left rounded-md px-2.5 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <a href="tel:0817504393">081-750-4393</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a href="mailto:sn-info@softnetwork.co.th">
                  sn-info@softnetwork.co.th
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-slate-700" />
                <a
                  href="https://www.facebook.com/softnetwork2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Page
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full inline-flex items-center justify-center rounded-full bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/25"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
