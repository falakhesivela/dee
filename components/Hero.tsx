import Image from "next/image";
import { contact } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import { btnGold, btnNavy, DiamondRule } from "./ui";

// Layered arrow panels, back to front. Hidden below 1100px, where the hero
// switches to a plain navy background.
const layers = [
  "w-[calc(58%+46px)] bg-gold-light opacity-55 animate-sweep [animation-delay:0.15s]",
  "w-[calc(58%+40px)] bg-cream",
  "w-[calc(58%+26px)] bg-gold",
  "w-[calc(58%+12px)] bg-navy-deep",
  "w-[calc(58%+8px)] bg-gold",
  "w-[58%] bg-navy bg-[radial-gradient(ellipse_70%_60%_at_22%_30%,rgba(46,72,110,0.55),rgba(15,27,45,0)_70%)]",
];

function CardRow({ children, last = false }: { children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex items-center gap-4 border-t border-line py-3.5 text-navy ${last ? "border-b" : ""}`}>
      {children}
    </div>
  );
}

function GoldDot({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-11 flex-none items-center justify-center rounded-full bg-gold text-white">
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream max-[1100px]:border-b-4 max-[1100px]:border-gold max-[1100px]:bg-navy"
    >
      {layers.map((cls, i) => (
        <div key={i} aria-hidden="true" className={`chevron absolute inset-y-0 left-0 max-[1100px]:hidden ${cls}`} />
      ))}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-[60px] w-[520px] -translate-y-1/2 opacity-[0.06] max-[1100px]:hidden"
      >
        <Image src="/logo.png" alt="" width={564} height={550} className="block w-full brightness-[0.3] grayscale" />
      </div>

      <div className="px-gutter relative mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-12 py-[clamp(64px,8vw,104px)]">
        <div className="flex max-w-[590px] flex-[1_1_480px] flex-col gap-[26px] text-white">
          <span className="animate-rise font-display-sc text-[17px] tracking-[0.14em] text-gold-light [animation-delay:0.1s]">
            Professional. Dedicated. Results Driven.
          </span>
          <h1 className="m-0 animate-rise font-display text-[clamp(40px,5vw,62px)] leading-[1.1] font-normal text-balance text-white [animation-delay:0.22s]">
            Upholding the law. Advancing your rights.
          </h1>
          <div className="animate-rise [animation-delay:0.34s]">
            <DiamondRule width={110} />
          </div>
          <p className="m-0 max-w-[520px] animate-rise text-[17.5px] leading-[1.7] text-on-navy [animation-delay:0.44s]">
            We provide expert legal solutions with integrity, professionalism and a client-centred approach. Whether you
            are in a dispute, claiming for an injury or settling a loved one&apos;s estate, we will guide you through it.
          </p>
          <div className="flex animate-rise flex-wrap gap-3.5 pt-1.5 [animation-delay:0.54s]">
            <a href="#services" className={`${btnGold} min-h-[52px] px-7`}>
              Our Services
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-[3px] border border-white/55 px-6 font-bold text-white no-underline transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              <PhoneIcon />
              {contact.phone}
            </a>
          </div>
        </div>

        <aside
          aria-label="Contact details"
          className="flex flex-[0_1_390px] animate-rise flex-col gap-[22px] rounded bg-white px-8 py-[34px] shadow-[0_24px_60px_-28px_rgba(15,27,45,0.5)] [animation-delay:0.6s]"
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="m-0 font-display text-[26px] font-normal text-navy">Need legal advice?</h2>
            <p className="m-0 text-[15px] leading-[1.55]">
              Speak to us about your matter. We will tell you where you stand and what your options are.
            </p>
          </div>
          <div className="flex flex-col">
            <a href={contact.phoneHref} className="no-underline">
              <CardRow>
                <GoldDot>
                  <PhoneIcon size={19} strokeWidth={1.9} />
                </GoldDot>
                <span className="text-[21px] font-bold">{contact.phone}</span>
              </CardRow>
            </a>
            <a href={`mailto:${contact.email}`} className="no-underline">
              <CardRow>
                <GoldDot>
                  <MailIcon size={19} strokeWidth={1.9} />
                </GoldDot>
                <span className="font-semibold">{contact.email}</span>
              </CardRow>
            </a>
            <CardRow last>
              <GoldDot>
                <PinIcon size={19} strokeWidth={1.9} />
              </GoldDot>
              <span className="leading-[1.4] font-semibold">
                {contact.addressLine1},
                <br />
                {contact.addressLine2}
              </span>
            </CardRow>
          </div>
          <a href="#contact" className={`${btnNavy} min-h-[50px]`}>
            Book a Consultation
          </a>
        </aside>
      </div>
    </section>
  );
}
