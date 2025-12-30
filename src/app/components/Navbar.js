"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Phone, Mail, Facebook, Menu, X } from "lucide-react";

/** ✅ Reordered: HOME, ABOUT, SOLUTIONS, SERVICES, CUSTOMERS */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/customers", label: "Customers" },
];

const TOP_ITEMS = [
  { Icon: Phone, text: "081 750 4393", href: "tel:0817504393", key: "call" },
  { Icon: Mail, text: "sn-info@softnetwork.co.th", href: "mailto:sn-info@softnetwork.co.th", key: "email" },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // ปิดเมนูเมื่อเปลี่ยนหน้า
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ล็อกสกอลล์ตอนเมนูเปิด + ปิดด้วย ESC
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const contactBtnClass = useMemo(
    () =>
      cx(
        "inline-flex items-center justify-center rounded-full sn-blue-gradient",
        "px-4 py-2 text-xs font-semibold text-white",
        "shadow-md shadow-blue-500/25 hover:opacity-95 transition-opacity",
        "tracking-[0.12em] uppercase whitespace-nowrap",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 focus-visible:ring-offset-2"
      ),
    []
  );

  const mobileLinkClass = (active) =>
    cx(
      "flex items-center justify-between rounded-2xl px-4 py-3",
      "text-[12px] font-semibold uppercase tracking-[0.10em]",
      active ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800 hover:bg-slate-100",
      "ring-1 ring-slate-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-kanit">
      {/* ================= TOP BAR ================= */}
      <div className="relative z-50 bg-[color:var(--sn-orange)] text-white font-poppins">
        <div className="container">
          <div className="flex items-center justify-between gap-3 py-2 text-[12px] md:text-[13px] leading-none">
            {/* Left: Phone (always) + Email (sm+) */}
            <div className="flex items-center gap-4 min-w-0">
              {TOP_ITEMS.map(({ Icon, text, href, key }) => (
                <a
                  key={key}
                  href={href}
                  className={cx(
                    "inline-flex items-center gap-2 rounded-md px-1",
                    "text-white/95 hover:text-white transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                    key === "email" ? "hidden sm:inline-flex" : ""
                  )}
                >
                  <Icon className="h-4 w-4 text-white/90 shrink-0" />
                  <span className="font-medium tracking-[0.04em] truncate">{text}</span>
                </a>
              ))}
            </div>

            {/* Right: FOLLOW US (sm+) | Facebook */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
                FOLLOW US
              </span>
              <span className="hidden sm:block h-4 w-px bg-white/40" aria-hidden="true" />
              <a
                href="https://www.facebook.com/softnetwork2004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={cx(
                  "inline-flex h-7 w-7 items-center justify-center rounded-md",
                  "hover:bg-black/10 transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                )}
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="-mt-px relative z-50 bg-white border-b border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="container">
          <div className="flex items-center justify-between gap-4 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="SoftNetwork Home">
              <div className="relative h-10 w-[155px] sm:w-[190px]">
                <Image src="/snblacklogo.svg" alt="SoftNetwork logo" fill priority className="object-contain" sizes="190px" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Main navigation" className="hidden md:flex flex-1 items-center justify-end font-poppins">
              <ul className="flex items-center gap-6 lg:gap-8">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cx(
                          "relative py-1 rounded-sm",
                          "text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.10em]",
                          active ? "text-slate-900" : "text-slate-600",
                          "hover:text-slate-900 transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2",
                          "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-slate-900 after:transition-all",
                          active ? "after:w-full" : "after:w-0 hover:after:w-full"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/contact" className={cx("ml-6", contactBtnClass)}>
                CONTACT US
              </Link>
            </nav>

            {/* Mobile: Contact + Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <Link href="/contact" className={cx("hidden xs:inline-flex", contactBtnClass)}>
                CONTACT
              </Link>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={cx(
                  "inline-flex items-center justify-center rounded-2xl",
                  "h-10 w-10",
                  "bg-slate-900 text-white",
                  "shadow-[0_10px_30px_rgba(15,23,42,0.18)]",
                  "hover:opacity-95 transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
                )}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden">
            {/* Backdrop */}
            <button
              aria-label="Close menu backdrop"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30"
            />

            {/* Panel */}
            <div className="relative z-50 bg-white border-t border-slate-200 shadow-[0_20px_60px_rgba(2,6,23,0.16)]">
              <div className="container py-4 font-poppins">
                <div className="grid gap-3">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={mobileLinkClass(active)}
                      >
                        <span>{link.label}</span>
                        <span className={cx("text-xs", active ? "text-white/70" : "text-slate-400")}>›</span>
                      </Link>
                    );
                  })}

                  <div className="pt-2">
                    <Link href="/contact" onClick={() => setOpen(false)} className={cx("w-full", contactBtnClass)}>
                      CONTACT US
                    </Link>
                  </div>

                  {/* Optional: show email in drawer (เพราะ top bar ซ่อนบนจอเล็ก) */}
                  <div className="pt-4 border-t border-slate-200">
                    <a
                      href="mailto:sn-info@softnetwork.co.th"
                      className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="font-medium">sn-info@softnetwork.co.th</span>
                    </a>
                    <a
                      href="tel:0817504393"
                      className="mt-2 flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">081 750 4393</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
