// Small shared building blocks used across sections.

export const sectionTitle =
  "m-0 font-display text-[clamp(32px,3.6vw,44px)] leading-[1.15] font-normal text-balance text-navy";

/** Navy circle with a thin gold ring, used behind icons. */
export const ringCircle =
  "inline-flex flex-none items-center justify-center rounded-full bg-navy text-gold-light shadow-[inset_0_0_0_2px_#C89B4A]";

export const btnNavy =
  "inline-flex items-center justify-center rounded-[3px] bg-navy font-bold text-white no-underline transition-colors duration-200 hover:bg-navy-hover hover:text-white";

export const btnGold =
  "inline-flex items-center rounded-[3px] bg-gold font-bold text-navy no-underline transition-colors duration-200 hover:bg-gold-hover hover:text-navy";

export function Eyebrow({ children, line = true }: { children: React.ReactNode; line?: boolean }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="font-display-sc text-base tracking-[0.14em] text-gold-text">{children}</span>
      {line && <span aria-hidden="true" className="h-px w-[60px] bg-gold" />}
    </div>
  );
}

export function DiamondRule({ width = 70 }: { width?: number }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-2.5">
      <span className="h-px bg-gold" style={{ width }} />
      <span className="diamond size-[7px] bg-gold" />
      <span className="h-px bg-gold" style={{ width }} />
    </div>
  );
}

export function BrandName({ size = "header" }: { size?: "header" | "footer" }) {
  const header = size === "header";
  return (
    <span className="flex flex-col gap-0.5">
      <span
        className={`font-display leading-none tracking-[0.08em] ${header ? "text-[25px] text-navy" : "text-[22px] text-white"}`}
      >
        DB TSAMAESI
      </span>
      <span
        className={`font-display-sc tracking-[0.16em] ${header ? "text-[12.5px] text-gold-text" : "text-xs text-gold-light"}`}
      >
        Attorneys Incorporated
      </span>
    </span>
  );
}
