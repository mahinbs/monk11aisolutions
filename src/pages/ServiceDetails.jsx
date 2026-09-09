import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import AgencyButton from "../components/ui/AgencyButton";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";
import { getServiceLanding } from "../data/serviceLandings";
import { homeServices } from "../data/home";

const accentTitle = (title, accent) => {
  if (!accent || !title.includes(accent)) return title;
  const idx = title.lastIndexOf(accent);
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-primary">{accent}</span>
      {title.slice(idx + accent.length)}
    </>
  );
};

const ServiceDetails = () => {
  const { name } = useParams();
  const decoded = decodeURIComponent(name || "");
  const data = getServiceLanding(decoded);

  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.documentElement.style.backgroundColor = prev;
      document.body.style.backgroundColor = "";
    };
  }, []);

  const related = homeServices.filter((item) => item.href !== `/services/${decoded}`);

  if (!data) return <Navigate to="/services" replace />;

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <Seo
        title={data.seoTitle}
        description={data.seoDescription}
        path={data.seoPath}
      />
      <Hero data={data} />
      <Pain data={data} />
      <Capabilities data={data} />
      <Features data={data} />
      <Outcomes data={data} />
      <Process data={data} />
      <Compare data={data} />
      <MidCta data={data} />
      <Related related={related} />
      <Faq data={data} />
      <FinalCta data={data} />
    </div>
  );
};

const Hero = ({ data }) => (
  <section className="relative pt-[8.5rem] pb-16 overflow-hidden">
    <div className="pointer-events-none absolute right-[-8%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-primary/15 blur-[140px]" />
    <div className="pointer-events-none absolute left-[-10%] bottom-[-30%] w-[28rem] h-[28rem] rounded-full bg-purpleColor/10 blur-[120px]" />
    <div className="pointer-events-none absolute right-[-4%] top-[8%] w-[34rem] h-[34rem] rounded-full border border-primary/10" />
    <div className="pointer-events-none absolute right-[8%] top-[22%] w-[22rem] h-[22rem] rounded-full border border-primary/10" />

    <div className="wrapper relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-start lg:items-center min-h-[52vh]">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-secondary/60 px-3 py-1.5 text-xs text-ink/70">
          <span className="text-[#FFC200] tracking-tight">★★★★★</span>
          <span>{data.kicker}</span>
        </div>
        <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight max-w-3xl">
          {data.headlineBefore}{" "}
          <span className="text-primary">{data.headlineAccent}</span>
        </h1>
        <p className="text-ink/60 text-base md:text-lg leading-relaxed max-w-xl">
          {data.subhead}
        </p>
        <AgencyButton href="#contact" variant="fill">
          {data.primaryCta}
        </AgencyButton>
        <p className="text-sm text-ink/50 max-w-sm">{data.differentiator}</p>
        <a
          href="#process"
          className="inline-block text-sm text-ink/45 hover:text-primary transition-colors"
        >
          {data.secondaryCta}
        </a>
      </div>
      <div className="space-y-5 lg:pt-10 hidden lg:block">
        <div className="rounded-2xl border border-black/10 bg-secondary/40 p-7 space-y-4">
          <p className="text-xs tracking-[0.16em] uppercase text-brandRed">
            What you get on the call
          </p>
          <ul className="space-y-3 text-ink/60 text-sm leading-relaxed">
            <li>A written plan after one session</li>
            <li>What to automate first, and what should stay human</li>
            <li>Honest scope for a dashboard, app or platform if you need one</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Pain = ({ data }) => (
  <section className="py-[4rem] border-y border-black/10">
    <div className="wrapper grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-end">
      <div className="space-y-3">
        <p className="section-kicker">{data.painKicker}</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {data.painTitle}{" "}
          <span className="text-primary">{data.painAccent}</span>
        </h2>
      </div>
      <p className="text-ink/60 text-lg max-w-xl lg:justify-self-end leading-relaxed">
        {data.painBody}
      </p>
    </div>
  </section>
);

const Capabilities = ({ data }) => (
  <section className="py-[5rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12">
        <p className="section-kicker">{data.capabilitiesKicker}</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {data.capabilitiesTitle}{" "}
          <span className="text-primary">{data.capabilitiesAccent}</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {data.capabilities.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/10 bg-white p-7 space-y-3"
          >
            <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
              <Check className="w-3 h-3" strokeWidth={3} />
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = ({ data }) => (
  <section className="py-[4rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12">
        <p className="section-kicker">{data.featuresKicker}</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {data.featuresTitle}{" "}
          <span className="text-primary">{data.featuresAccent}</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/10 bg-white p-6 space-y-3"
          >
            <p className="text-xs tracking-[0.16em] uppercase text-brandRed">
              {item.kicker}
            </p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Outcomes = ({ data }) => (
  <section className="py-[4rem] border-y border-black/10">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12">
        <p className="section-kicker">{data.outcomesKicker}</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {data.outcomesTitle}{" "}
          <span className="text-primary">{data.outcomesAccent}</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.outcomes.map((item) => (
          <div key={item.vertical} className="space-y-3 p-1">
            <p className="text-xs tracking-[0.16em] uppercase text-brandRed">
              {item.vertical}
            </p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = ({ data }) => (
  <section id="process" className="py-[5rem] scroll-mt-24">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12">
        <p className="section-kicker">Process</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          How we <span className="text-primary">design, build, and launch</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {data.process.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-black/10 bg-white p-6 space-y-4"
          >
            <p className="text-3xl font-bold text-primary">{item.step}</p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Compare = ({ data }) => (
  <section className="py-[5rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-10">
        <p className="section-kicker">Compare</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Monk11 vs <span className="text-primary">typical vendors</span>
        </h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-black/10">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-black/10 bg-secondary/40">
              <th className="p-4 font-medium text-ink/45 text-sm"> </th>
              <th className="p-4 font-semibold text-primary">Monk11</th>
              <th className="p-4 font-medium text-ink/45">Typical vendors</th>
            </tr>
          </thead>
          <tbody>
            {data.compare.map((row) => (
              <tr key={row.label} className="border-b border-black/10 last:border-0">
                <td className="p-4 text-sm text-ink/45 align-top w-[18%]">
                  {row.label}
                </td>
                <td className="p-4 text-ink align-top">{row.monk11}</td>
                <td className="p-4 text-ink/45 align-top">{row.typical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const MidCta = ({ data }) => (
  <section className="wrapper py-[3rem]">
    <div className="mid-cta-band relative overflow-hidden rounded-3xl bg-gradient-to-r from-brandIndigo to-purpleColor px-8 py-12 md:px-14 md:py-16 text-white">
      <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] w-64 h-64 rounded-full bg-[#FFC200]/20 blur-3xl" />
      <div className="relative z-10 grid md:grid-cols-[1.4fr_auto] gap-8 items-center">
        <div className="space-y-3">
          <p className="section-kicker !text-white/80">Ready when you are</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl text-white">
            {data.midCtaTitle}{" "}
            <span className="text-secondary">{data.midCtaAccent}</span>
          </h2>
          <p className="text-white/85 max-w-xl text-lg">{data.midCtaBody}</p>
        </div>
        <AgencyButton href="#contact">
          {data.primaryCta}
        </AgencyButton>
      </div>
    </div>
  </section>
);

const Related = ({ related }) => (
  <section className="py-[5rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12">
        <p className="section-kicker">Also from Monk11</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          One team for the rest of{" "}
          <span className="text-primary">what you need to ship</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {related.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="group rounded-2xl border-2 border-brandIndigo bg-white p-6 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">
                {accentTitle(item.title, item.accent)}
              </h3>
              <span className="w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <p className="text-ink/60 mt-3 leading-relaxed text-sm">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Faq = ({ data }) => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-[5rem]">
      <div className="wrapper grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="space-y-5 lg:sticky lg:top-28">
          <p className="section-kicker">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Common questions about{" "}
            <span className="text-primary">{data.navTitle}</span>
          </h2>
          <p className="text-ink/60">
            Can't find what you're looking for? Book a scoping call and get
            straight answers.
          </p>
          <AgencyButton href="#contact" variant="fill">
            Book a scoping call
          </AgencyButton>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {data.faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium">
                    {accentTitle(item.q, item.accent)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 mt-1 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-ink/60 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCta = ({ data }) => {
  const accent = data.formAccent;
  const before = data.formHeadline.replace(accent, "").trimEnd();
  return (
    <section className="pb-[5rem]">
      <div className="wrapper">
        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-12 space-y-4 mb-8">
          <p className="section-kicker">Let's work together</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {data.midCtaTitle}{" "}
            <span className="text-primary">{data.midCtaAccent}</span>
          </h2>
          <p className="text-ink/60 text-lg max-w-2xl">{data.midCtaBody}</p>
        </div>
        <div className="home-contact">
          <ContactForm
            headline={
              <>
                {before}{" "}
                <span className="text-primary">{accent}</span>
              </>
            }
            id="contact"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
