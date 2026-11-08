"use client";

import { useState } from "react";
import { contact, faqs } from "@/lib/site";
import { Eyebrow, sectionTitle } from "./ui";

export function Faq() {
  // Index of the open question; -1 means all closed. The first starts open.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-y border-line bg-cream">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-wrap gap-x-20 gap-y-10 py-[clamp(72px,9vw,112px)]">
        <div className="flex max-w-[400px] flex-[1_1_300px] flex-col gap-5">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={sectionTitle}>Questions clients often ask</h2>
          <p className="m-0 text-[17px] leading-[1.7]">
            Don&apos;t see your question here? Call us on{" "}
            <a href={contact.phoneHref} className="font-bold">
              {contact.phone}
            </a>{" "}
            and we will gladly help.
          </p>
        </div>

        <div className="flex min-w-0 flex-[999_1_520px] flex-col border-t border-faq-line">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="border-b border-faq-line">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent py-[22px] text-left font-display text-[21px] leading-[1.3] text-navy transition-colors duration-200 hover:text-gold-text"
                >
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-[34px] flex-none items-center justify-center rounded-full bg-navy font-sans text-xl leading-none text-gold-light"
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <p id={`faq-${i}`} className="m-0 pr-[58px] pb-6 leading-[1.75]">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
