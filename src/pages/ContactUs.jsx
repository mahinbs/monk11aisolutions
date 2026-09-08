import React, { useEffect } from "react";
import { Mail, PhoneCall } from "lucide-react";
import { companyDetails, getWhatsAppLink } from "../data/constant";
import AgencyButton from "../components/ui/AgencyButton";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#0A0612";
    document.body.style.backgroundColor = "#0A0612";
    document.title = "Contact | Monk11 AI";
    return () => {
      document.documentElement.style.backgroundColor = prev;
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-ink text-white overflow-x-hidden">
      <section className="relative pt-[7.25rem] pb-12 overflow-hidden">
        <div className="pointer-events-none absolute right-[-8%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-primary/45 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[-30%] w-[28rem] h-[28rem] rounded-full bg-purpleColor/25 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-4%] top-[8%] w-[34rem] h-[34rem] rounded-full border border-white/10" />
        <div className="wrapper relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-start lg:items-center min-h-[42vh]">
          <div className="space-y-6">
            <p className="section-kicker">Contact</p>
            <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight max-w-3xl">
              Let's map what to automate —{" "}
              <span className="text-lavender">and what to build</span>
            </h1>
          </div>
          <div className="space-y-5 lg:pt-10">
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
              Book a short scoping call. We'll show you which workflows should
              run on their own, and where a dashboard, web app, native app, or
              SaaS platform is the better investment.
            </p>
            <AgencyButton href="#contact">Book a Call</AgencyButton>
            <p className="text-sm text-white/55 max-w-sm">
              Written plan after one working session. No hourly surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="wrapper grid sm:grid-cols-3 gap-4">
          <a
            href={`mailto:${companyDetails.email}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3 hover:border-primary/40 transition-colors"
          >
            <span className="w-11 h-11 rounded-xl bg-primary/20 text-lavender flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </span>
            <p className="text-xs tracking-[0.16em] uppercase text-lavender">
              Email
            </p>
            <p className="text-lg font-semibold break-all">
              {companyDetails.email}
            </p>
          </a>
          <a
            href={`tel:+${companyDetails.phone}`}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3 hover:border-primary/40 transition-colors"
          >
            <span className="w-11 h-11 rounded-xl bg-primary/20 text-lavender flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </span>
            <p className="text-xs tracking-[0.16em] uppercase text-lavender">
              Phone
            </p>
            <p className="text-lg font-semibold">+{companyDetails.phone}</p>
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3 hover:border-primary/40 transition-colors"
          >
            <span className="w-11 h-11 rounded-xl bg-primary/20 text-lavender flex items-center justify-center text-sm font-semibold">
              WA
            </span>
            <p className="text-xs tracking-[0.16em] uppercase text-lavender">
              WhatsApp
            </p>
            <p className="text-lg font-semibold">Chat with the team</p>
          </a>
        </div>
      </section>

      <section className="pb-[5rem]">
        <div className="wrapper">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 space-y-4 mb-8">
            <p className="section-kicker">The form</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              Tell us the job.{" "}
              <span className="text-lavender">We'll map the build.</span>
            </h2>
            <p className="text-white/65 text-lg max-w-2xl">
              Name, company, and what you need to ship — automation, a
              dashboard, an app, or a platform. We'll come back with a scoping
              call, not a generic brochure.
            </p>
          </div>
          <ContactForm
            headline={
              <>
                Tell us what you need{" "}
                <span className="text-lavender">to ship.</span>
              </>
            }
            id="contact"
            variant="dark"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
