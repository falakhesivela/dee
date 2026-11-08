import Image from "next/image";
import { services, steps } from "@/lib/site";
import { ArrowRight, CheckBadge, ServiceGlyph, ShieldIcon } from "./icons";
import { DiamondRule, Eyebrow, ringCircle, sectionTitle } from "./ui";

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-20 gap-y-14 py-[clamp(72px,9vw,120px)]">
        <div className="relative max-w-[520px] flex-[1_1_420px] pr-[22px] pb-[22px]">
          <div aria-hidden="true" className="absolute right-0 bottom-0 h-[82%] w-[82%] rounded-[3px] border-2 border-gold" />
          <Image
            src="/trust-banner.jpg"
            alt="Law books and a gavel on a desk"
            width={843}
            height={612}
            sizes="(max-width: 980px) 100vw, 520px"
            className="relative block aspect-[4/3] w-full rounded-[3px] object-cover"
          />
          <div className="absolute bottom-11 -left-4 flex flex-col gap-0.5 rounded-[3px] border-b-[3px] border-gold bg-navy px-[22px] py-4 text-white">
            <span className="font-display-sc text-[13px] tracking-[0.14em] text-gold-light">Our Commitment</span>
            <span className="font-display text-lg">Upholding the law.</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-[22px]">
          <Eyebrow>About the Firm</Eyebrow>
          <h2 className={sectionTitle}>Legal help that puts you, the client, first</h2>
          <p className="m-0 text-[17px] leading-[1.75]">
            DB Tsamaesi Attorneys Incorporated is committed to providing expert legal solutions with integrity,
            professionalism and a client-centred approach.
          </p>
          <p className="m-0 text-[17px] leading-[1.75]">
            We take the time to understand your situation, explain the law in plain language and give you honest advice
            about your options. From the first consultation to the final outcome, you will know what is happening with
            your matter.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-3.5 pt-2.5">
            {["Experience", "Integrity", "Excellence"].map((v) => (
              <div key={v} className="flex items-center gap-2.5 font-bold text-navy">
                <CheckBadge />
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t border-line bg-cream">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-col gap-12 pt-[clamp(72px,9vw,112px)] pb-[clamp(110px,12vw,150px)]">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex w-full max-w-[640px] items-center">
            <span aria-hidden="true" className="h-px flex-1 bg-gold" />
            <h2 className="m-0 rounded-full bg-navy px-[34px] py-2.5 font-display-sc text-[clamp(22px,2.6vw,28px)] font-normal tracking-[0.08em] whitespace-nowrap text-gold-light">
              Our Services
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-gold" />
          </div>
          <p className="m-0 max-w-[600px] text-[17px] leading-[1.7]">
            We assist individuals, families and businesses across six areas of law. If you are not sure which one your
            matter falls under, call us and we will advise you.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col gap-4 rounded border border-card-line bg-white px-8 pt-[34px] pb-[30px] transition duration-250 hover:-translate-y-[3px] hover:border-gold hover:shadow-[0_18px_40px_-24px_rgba(15,27,45,0.45)]"
            >
              <span className={`${ringCircle} size-16`}>
                <ServiceGlyph icon={s.icon} />
              </span>
              <h3 className="m-0 font-display text-[23px] leading-[1.2] font-normal text-navy">{s.title}</h3>
              <p className="m-0 text-[15.5px] leading-[1.65]">{s.body}</p>
              <ul className="m-0 flex list-none flex-col gap-2 border-t border-line p-0 pt-3.5 text-[14.5px] text-navy">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="diamond size-1.5 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group mt-auto inline-flex items-center gap-2 pt-1.5 text-[14.5px] font-bold text-navy no-underline transition-[gap,color] duration-200 hover:gap-3 hover:text-gold-text"
              >
                Enquire about this
                <ArrowRight className="text-gold" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitmentItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-[1_1_340px] items-start gap-5">
      <span className="inline-flex size-[60px] flex-none items-center justify-center rounded-full text-gold-light shadow-[inset_0_0_0_2px_#C89B4A]">
        {icon}
      </span>
      <div className="flex flex-col gap-2">
        <h2 className="m-0 font-display-sc text-[26px] font-normal tracking-[0.04em] text-gold-light">{title}</h2>
        <p className="m-0 text-[17px] leading-[1.6] text-on-navy">{children}</p>
      </div>
    </div>
  );
}

export function Commitment() {
  return (
    <section className="relative z-[2] border-t-4 border-gold bg-navy text-white">
      <div className="absolute -top-[78px] left-1/2 flex size-[148px] -translate-x-1/2 items-center justify-center rounded-full bg-navy shadow-[0_0_0_4px_#C89B4A,inset_0_0_0_8px_#0F1B2D,inset_0_0_0_9px_rgba(226,193,126,0.6)]">
        <Image src="/logo.png" alt="DB Tsamaesi emblem" width={564} height={550} className="block h-auto w-20" />
      </div>
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-wrap justify-between gap-x-[200px] gap-y-12 pt-[116px] pb-[72px]">
        <CommitmentItem
          title="Our Commitment"
          icon={<ServiceGlyph icon="people" size={26} />}
        >
          Upholding the law.
          <br />
          Advancing your rights.
        </CommitmentItem>
        <CommitmentItem title="Your Trust. Our Priority." icon={<ShieldIcon size={26} strokeWidth={1.6} />}>
          Let us handle the legal complexities so you can focus on what matters most.
        </CommitmentItem>
      </div>
      <div className="bg-gold text-navy">
        <div className="px-gutter mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-7 gap-y-1.5 py-[15px] font-display-sc text-base tracking-[0.3em]">
          <span>Experience</span>
          <span aria-hidden="true">|</span>
          <span>Integrity</span>
          <span aria-hidden="true">|</span>
          <span>Excellence</span>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="px-gutter mx-auto flex max-w-[1240px] flex-col items-center gap-[52px] pt-[clamp(72px,9vw,112px)] pb-[clamp(56px,7vw,88px)]">
        <div className="flex flex-col items-center gap-[18px] text-center">
          <Eyebrow line={false}>How It Works</Eyebrow>
          <h2 className={sectionTitle}>Getting legal help is simple</h2>
          <DiamondRule />
        </div>
        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="absolute inset-x-[16.6%] top-9 border-t-2 border-dashed border-gold-dash max-[860px]:hidden"
          />
          <ol className="relative m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-x-8 gap-y-10 p-0">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center gap-3.5 px-3 text-center">
                <span
                  className={`${ringCircle} size-[72px] font-display text-[30px] shadow-[0_0_0_6px_#FFFFFF,inset_0_0_0_2px_#C89B4A]`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-1.5 mb-0 font-display text-[23px] font-normal text-navy">{s.title}</h3>
                <p className="m-0 max-w-[300px] text-[15.5px] leading-[1.65]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
