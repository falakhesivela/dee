import type { ServiceIcon } from "@/lib/site";

type IconProps = { className?: string; size?: number; strokeWidth?: number };

function Svg({
  size = 17,
  strokeWidth = 1.8,
  className,
  children,
  ...rest
}: IconProps & { children: React.ReactNode } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M5 3h3.5l1.8 4.5-2.3 1.6a11 11 0 0 0 6 6l1.6-2.3 4.4 1.8V18a3 3 0 0 1-3 3A16 16 0 0 1 2 6a3 3 0 0 1 3-3z"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p} strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z" />
    <path d="M8.8 12l2.2 2.2 4.3-4.4" />
  </Svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Svg size={22} {...p} strokeLinejoin="round">
    <path d="M4 20l1.3-4A8.5 8.5 0 1 1 8.4 19z" />
    <path d="M9 9.5c.3 2.2 2.3 4.3 4.6 4.8l1.2-1.2 1.7.8" strokeLinecap="round" />
  </Svg>
);

export function CheckBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="#0F1B2D" />
      <path d="M7.5 12.3l3 3 6-6.3" stroke="#E2C17E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const servicePaths: Record<ServiceIcon, React.ReactNode> = {
  gavel: (
    <>
      <rect x="10.2" y="1.8" width="5.6" height="10" rx="1" transform="rotate(45 13 6.8)" />
      <path d="M10.6 10.4L3.5 17.5" />
      <path d="M12 21h9" />
      <path d="M14 18.5h5" />
    </>
  ),
  document: (
    <>
      <path d="M7 2.5h7l4.5 4.5v14.5H7z" />
      <path d="M14 2.5V7h4.5" />
      <path d="M10 11.5h5.5M10 15h5.5M10 18.5h3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V4.5h6V7" />
      <path d="M3 12.5h18" />
      <path d="M11 12.5v2h2v-2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19.5c.5-3.3 2.7-5.2 5.5-5.2s5 1.9 5.5 5.2" />
      <circle cx="16.8" cy="9" r="2.4" />
      <path d="M16 14.3c2.5-.1 4.3 1.5 4.7 4.4" />
    </>
  ),
  pillars: (
    <>
      <path d="M3 9l9-5 9 5z" />
      <path d="M5.5 9.5v8M9.8 9.5v8M14.2 9.5v8M18.5 9.5v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M11 21v-2.5h2V21" />
    </>
  ),
};

export function ServiceGlyph({ icon, size = 28, strokeWidth = 1.6, className }: IconProps & { icon: ServiceIcon }) {
  return (
    <Svg size={size} strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      {servicePaths[icon]}
    </Svg>
  );
}
