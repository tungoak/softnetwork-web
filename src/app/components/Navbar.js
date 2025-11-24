// app/components/Navbar.js
"use client";

import { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "solutions", label: "Solutions" },
  { id: "services", label: "Services" },
  { id: "our-customer", label: "Our Customer" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      {/* แถบด้านบน: ติดต่อ */}
      <div className="hidden md:flex justify-end gap-6 px-8 py-1 text-[11px] text-slate-300">
        <span>Tel: 0-0000-0000</span>
        <span>Mobile: 081-750-4393</span>
        <span>Email: info@softnetwork.co.th</span>
      </div>

      {/* แถบหลัก */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* โลโก้ชื่อบริษัท */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2 group"
        >
          <div className="flex items-baseline gap-1 text-xl font-bold tracking-wide">
            <span className="text-amber-500">S</span>
            <span className="group-hover:text-amber-400 transition">oft</span>
            <span className="text-blue-500 ml-1">N</span>
            <span className="group-hover:text-blue-400 transition">
              etwork
            </span>
          </div>
        </button>

        {/* เมนู desktop */}
        <ul className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-[0.15em]">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="text-slate-200 hover:text-amber-400 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ปุ่มเมนูมือถือ */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-100"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* เมนูมือถือ dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="block w-full py-2 text-left text-sm uppercase tracking-[0.2em] text-slate-100"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
