import { Header, TopBar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Commitment, HowItWorks, Services } from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { Contact, Footer, WhatsAppButton } from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Commitment />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
