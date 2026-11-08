"use client";

import Image from "next/image";
import { useState } from "react";
import { contact, navLinks } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import { BrandName, btnNavy } from "./ui";

export function TopBar() {
  const link = "inline-flex items-center gap-2 text-on-navy no-underline hover:text-gold-light";
  return (
    <div className="bg-navy-deep text-[13.5px] text-on-navy">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-7 gap-y-1.5 py-[9px]">
        <div className="flex flex-wrap gap-x-7 gap-y-1.5">
          <a className={link} href={contact.phoneHref}>
            <PhoneIcon size={14} className="text-gold" />
            {contact.phone}
          </a>
          <a className={link} href={`mailto:${contact.email}`}>
            <MailIcon size={14} className="text-gold" />
            {contact.email}
          </a>
        </div>
        <span className="hidden items-center gap-2 sm:inline-flex">
          <PinIcon size={14} className="text-gold" />
          {contact.address}
        </span>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line-strong bg-white shadow-[0_6px_20px_-16px_rgba(15,27,45,0.4)]">
      <nav aria-label="Main" className="px-gutter mx-auto flex max-w-[1240px] items-center justify-between gap-6 py-3.5">
        <a href="#top" className="flex items-center gap-3.5 no-underline" onClick={close}>
          <span className="inline-flex size-[58px] flex-none items-center justify-center rounded-full bg-navy shadow-[inset_0_0_0_2px_#C89B4A]">
            <Image src="/logo.png" alt="" width={564} height={550} priority className="block h-auto w-9" />
          </span>
          <BrandName />
        </a>

        <div className="hidden items-center gap-[34px] text-[15px] font-semibold min-[981px]:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b-2 border-transparent py-1.5 text-navy no-underline transition-colors duration-200 hover:border-gold hover:text-gold-text"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={`${btnNavy} min-h-[46px] px-[22px] text-[14.5px]`}>
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex size-[46px] cursor-pointer items-center justify-center rounded-[3px] border-0 bg-navy text-white min-[981px]:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d={open ? "M5 5l10 10M15 5L5 15" : "M3 5.5h14M3 10h14M3 14.5h14"}
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="px-gutter flex flex-col border-t border-line-strong bg-white pt-1 pb-[22px] min-[981px]:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="border-b border-line py-[15px] font-bold text-navy no-underline hover:text-gold-text"
            >
              {l.label}
            </a>
          ))}
          <a href={contact.phoneHref} className={`${btnNavy} mt-[18px] min-h-[50px]`}>
            Call {contact.phone}
          </a>
        </div>
      )}
    </header>
  );
}
