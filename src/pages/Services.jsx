import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Boxes,
  LayoutDashboard,
  PhoneCall,
  Smartphone,
  Workflow,
} from "lucide-react";
import AgencyButton from "../components/ui/AgencyButton";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";
import { pageSeo } from "../data/seo";
import { homeServices } from "../data/home";

const serviceIcons = [
  Workflow,
  PhoneCall,
  LayoutDashboard,
  Smartphone,
  Boxes,
];

const accentTitle = (title, accent) => {
  if (!accent || !title.includes(accent)) return title;
  const idx = title.lastIndexOf(accent);
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-lavender">{accent}</span>
      {title.slice(idx + accent.length)}
    </>
  );
};

const Services = () => {
  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#0A0612";
    document.body.style.backgroundColor = "#0A0612";
    return () => {
      document.documentElement.style.backgroundColor = prev;
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-ink text-white overflow-x-hidden">
      <Seo {...pageSeo.services} />
      <section className="relative pt-[8.5rem] pb-16 overflow-hidden">
        <div className="pointer-events-none absolute right-[-8%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-primary/45 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] w-[28rem] h-[28rem] rounded-full bg-purpleColor/25 blur-[120px]" />
        <div className="wrapper relative z-10 max-w-3xl min-h-[42vh] space-y-6">
          <p className="section-kicker">Services</p>
          <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight">
            Five services.{" "}
            <span className="text-lavender">One team that ships.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
            AI automation, AI calling, dashboards, native apps and SaaS for
            real estate, healthcare, manufacturing and fintech teams.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
            Designed, built and deployed by one team so nothing stalls between
            a demo and production.
          </p>
          <AgencyButton href="#contact" variant="fill">
            Book a scoping call
          </AgencyButton>
        </div>
      </section>

      <section className="pb-[5rem]">
        <div className="wrapper grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {homeServices.map((item, i) => {
            const Icon = serviceIcons[i];
            return (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="w-11 h-11 rounded-xl bg-primary/20 text-lavender flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mt-6">
                  {accentTitle(item.title, item.accent)}
                </h2>
                <p className="text-white/65 mt-3 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs text-lavender/90 border border-white/10 rounded-full px-3 py-1"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="wrapper pb-[5rem]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 space-y-4 mb-8">
          <p className="section-kicker">Let's work together</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Pick the line.{" "}
            <span className="text-lavender">We'll map the build</span>
          </h2>
          <p className="text-white/65 text-lg max-w-2xl">
            Book a short scoping call. We'll tell you which of these five is
            the right first investment, and what should wait.
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
      </section>
    </div>
  );
};

export default Services;
