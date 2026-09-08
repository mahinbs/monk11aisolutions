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
import TrustLogos from "../components/TrustLogos";
import { pageSeo } from "../data/seo";
import {
  differentiators,
  guarantee,
  homeProcess,
  homeServices,
} from "../data/home";

const serviceIcons = [
  Workflow,
  PhoneCall,
  LayoutDashboard,
  Smartphone,
  Boxes,
];

const beliefs = [
  {
    kicker: "Human where it matters",
    title: "Remove busywork, not the person",
    accent: "not the person",
    desc: "Automation should take the copy-paste and the chase. Edge cases still escalate to a human, with an audit trail on every action.",
  },
  {
    kicker: "Judged by production",
    title: "Software is what it does for revenue",
    accent: "for revenue",
    desc: "A demo isn't a product. We ship workflows, dashboards, apps and SaaS your team can run. Not a Figma file or a staging URL.",
  },
  {
    kicker: "Vertical first",
    title: "Generic automation doesn't survive",
    accent: "doesn't survive",
    desc: "Real estate, healthcare, manufacturing, restaurants, renewable energy, and fintech each have different jobs. We build around those jobs.",
  },
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

const AboutUs = () => {
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
      <Seo {...pageSeo.about} />
      <section className="relative pt-[8.5rem] pb-16 overflow-hidden">
        <div className="pointer-events-none absolute right-[-8%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-primary/45 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[-30%] w-[28rem] h-[28rem] rounded-full bg-purpleColor/25 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-4%] top-[8%] w-[34rem] h-[34rem] rounded-full border border-white/10" />
        <div className="wrapper relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-start lg:items-center min-h-[52vh]">
          <div className="space-y-6">
            <p className="section-kicker">About Monk11</p>
            <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight max-w-3xl">
              An AI automation studio that{" "}
              <span className="text-lavender">ships to production.</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
              Monk11 is based in India. We design, build and deploy AI
              automation, dashboards, apps and SaaS for ops and sales teams in
              real estate, healthcare, manufacturing and fintech.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
              One team from the first workflow to cloud, App Store and Play
              Store. Built by people who'd rather automate than repeat themselves.
            </p>
            <AgencyButton href="#contact" variant="fill">
              Book a scoping call
            </AgencyButton>
            <p className="text-sm text-white/55 max-w-sm">
              {guarantee}
            </p>
          </div>
          <div className="space-y-6 lg:pt-6">
            <p className="section-kicker">The stack behind every build</p>
            <TrustLogos marquee={false} />
          </div>
        </div>
      </section>

      <section className="py-[4rem] border-y border-white/10">
        <div className="wrapper">
          <div className="max-w-3xl space-y-3 mb-12">
            <p className="section-kicker">What we believe</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              How we decide what{" "}
              <span className="text-lavender">to build</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {beliefs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3"
              >
                <p className="text-xs tracking-[0.16em] uppercase text-lavender">
                  {item.kicker}
                </p>
                <h3 className="text-xl font-semibold">
                  {accentTitle(item.title, item.accent)}
                </h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[5rem]">
        <div className="wrapper">
          <div className="max-w-3xl space-y-3 mb-12">
            <p className="section-kicker">The difference</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Why teams choose <span className="text-lavender">Monk11</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3"
              >
                <p className="text-xs tracking-[0.16em] uppercase text-lavender">
                  {item.kicker}
                </p>
                <h3 className="text-xl font-semibold">
                  {accentTitle(item.title, item.accent)}
                </h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[5rem] border-y border-white/10">
        <div className="wrapper">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-12 items-end">
            <div className="space-y-3">
              <p className="section-kicker">What we do</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Five services.{" "}
                <span className="text-lavender">Equal weight.</span>
              </h2>
            </div>
            <p className="text-white/65 text-lg max-w-xl lg:justify-self-end">
              Automation is one line, not the brand. We also ship dashboards,
              web apps, native apps and SaaS, all with the same production
              standard.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
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
                  <h3 className="text-2xl font-semibold mt-6">
                    {accentTitle(item.title, item.accent)}
                  </h3>
                  <p className="text-white/65 mt-3 leading-relaxed">{item.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[5rem]">
        <div className="wrapper">
          <div className="max-w-3xl space-y-3 mb-12">
            <p className="section-kicker">Process</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              How we design,{" "}
              <span className="text-lavender">build, and deploy</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 p-6 space-y-4"
              >
                <p className="text-3xl font-bold text-lavender">{item.step}</p>
                <h3 className="text-xl font-semibold">
                  {accentTitle(item.title, item.accent)}
                </h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper py-[3rem]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-purpleColor px-8 py-12 md:px-14 md:py-16">
          <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] w-64 h-64 rounded-full bg-[#FFC200]/20 blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="space-y-3">
              <p className="section-kicker text-white/80">Let's work together</p>
              <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
                If you'd rather ship than{" "}
                <span className="text-lavender">repeat the same week,</span>{" "}
                talk to us.
              </h2>
            </div>
            <AgencyButton href="#contact">
              Book a scoping call
            </AgencyButton>
          </div>
        </div>
      </section>

      <section className="pb-[5rem] pt-[3rem]">
        <div className="wrapper">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 space-y-4 mb-8">
            <p className="section-kicker">Let's work together</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              Let's map what to automate{" "}
              <span className="text-lavender">and what to build</span>
            </h2>
            <p className="text-white/65 text-lg max-w-2xl">
              Book a short scoping call. You'll leave with a written plan, not
              a pitch deck.
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

export default AboutUs;
