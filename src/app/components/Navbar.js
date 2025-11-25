"use client";

import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "solutions", label: "Solutions" },
  { id: "services", label: "Services" },
  { id: "customers", label: "Customers" },
  { id: "contact", label: "Contact" },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior:"smooth", block:"start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      {/* top strip */}
      <div className="hidden md:flex items-center justify-end gap-6 container py-2 text-[11px] text-slate-500">
        <span>Mobile: 081-750-4393</span>
        <span>Email: sn-info@softnetwork.co.th</span>
      </div>

      <nav className="container flex items-center justify-between py-3">
        {/* brand */}
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3 group"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#3B82F6] flex items-center justify-center shadow-md shadow-amber-500/40">
            <span className="text-xs font-extrabold text-white">SN</span>
          </div>
          <div className="leading-tight text-left">
            <span className="sn-brand text-sm md:text-base">
              <span className="s">S</span><span className="rest">oft</span>
              <span className="n">N</span><span className="rest">etwork</span>
            </span>
            <div className="text-[11px] text-slate-500">Software Studio</div>
          </div>
        </button>

        {/* desktop menu */}
        <ul className="nav-underline hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <button
                data-role="navlink"
                onClick={() => go(l.id)}
                className="text-slate-600 hover:text-amber-600 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center rounded-full bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/30 hover:bg-blue-600 transition"
          >
            ติดต่อเรา
          </button>
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white/80"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <ul className="flex flex-col container py-2">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="block w-full text-left py-2 text-sm text-slate-700 hover:text-amber-600"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
