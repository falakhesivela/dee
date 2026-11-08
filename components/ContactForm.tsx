"use client";

import { contact, services } from "@/lib/site";
import { btnNavy } from "./ui";

const field =
  "h-12 rounded-[3px] border border-field-line bg-white px-3.5 text-base text-navy transition-[border-color,box-shadow] duration-200 focus:border-gold focus:shadow-[0_0_0_3px_rgba(200,155,74,0.2)] focus:outline-none";
const label = "text-[14.5px] font-bold text-navy";

// There is no backend yet, so the form opens the visitor's email app with the
// details filled in. Swap this for a server action or form service when ready.
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const area = String(data.get("area") || "");
  const body = [
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email")}`,
    `Area: ${area || "Not specified"}`,
    "",
    String(data.get("message") || ""),
  ].join("\n");
  const subject = `Consultation request${area ? `: ${area}` : ""}`;
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  return (
    <form
      aria-label="Consultation request"
      onSubmit={handleSubmit}
      className="flex min-w-0 flex-[1_1_460px] flex-col gap-5 rounded border border-t-4 border-card-line border-t-navy bg-cream p-[clamp(26px,4vw,44px)]"
    >
      <h3 className="mt-0 mb-1 font-display text-[27px] font-normal text-navy">Send us a message</h3>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-name" className={label}>
            Full name
          </label>
          <input id="f-name" name="name" className={field} type="text" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-phone" className={label}>
            Phone number
          </label>
          <input id="f-phone" name="phone" className={field} type="tel" autoComplete="tel" required />
        </div>
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-email" className={label}>
          Email address
        </label>
        <input id="f-email" name="email" className={field} type="email" autoComplete="email" />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-area" className={label}>
          What do you need help with?
        </label>
        <select id="f-area" name="area" className={`${field} px-3`} defaultValue="">
          <option value="">Please select</option>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Other / not sure</option>
        </select>
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-msg" className={label}>
          Tell us briefly about your matter
        </label>
        <textarea id="f-msg" name="message" rows={5} className={`${field} h-auto resize-y py-3 leading-normal`} />
      </div>

      <div className="flex items-start gap-3">
        <input id="f-consent" type="checkbox" required className="mt-0.5 size-5 flex-none accent-navy" />
        <label htmlFor="f-consent" className="text-sm leading-[1.55] text-body">
          I consent to DB Tsamaesi Attorneys Inc. using my details to respond to this enquiry, in line with the
          Protection of Personal Information Act (POPIA).
        </label>
      </div>

      <button type="submit" className={`${btnNavy} min-h-[54px] cursor-pointer border-0 text-base`}>
        Send Message
      </button>
    </form>
  );
}
