import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import {
  ArrowUpRight,
  Boxes,
  Check,
  ChevronDown,
  LayoutDashboard,
  PhoneCall,
  Smartphone,
  Workflow,
} from "lucide-react";
import AgencyButton from "../components/ui/AgencyButton";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";
import TrustLogos from "../components/TrustLogos";
import { blogs } from "../data/constant";
import { pageSeo } from "../data/seo";
import {
  comparisonRows,
  differentiators,
  guarantee,
  homeFaqs,
  homeHero,
  homeProcess,
  homeServices,
  midPageCta,
  servicesCta,
  outcomeStrip,
  processBadges,
  trustIntro,
  trustKicker,
  verticalCards,
} from "../data/home";
import workNeural from "../assets/images/hero/neural.webp";
import workVoice from "../assets/images/hero/voice.webp";
import workDash from "../assets/images/hero/dashboard.webp";
import workApp from "../assets/images/hero/app.webp";
import workEnergy from "../assets/images/hero/energy.webp";

const workImages = [workNeural, workVoice, workDash, workApp, workEnergy];
const heroTiles = [
  { src: workNeural, label: "Workflows", tint: "photo-to-indigo" },
  { src: workVoice, label: "Voice AI", tint: "photo-to-red" },
  { src: workDash, label: "Dashboards", tint: "photo-to-red" },
  { src: workApp, label: "Apps", tint: "photo-to-indigo" },
];

const serviceIcons = [
  Workflow,
  PhoneCall,
  LayoutDashboard,
  Smartphone,
  Boxes,
];

const accentTitle = (title, accent, colorClass = "text-primary") => {
  if (!accent || !title.includes(accent)) return title;
  const idx = title.lastIndexOf(accent);
  return (
    <>
      {title.slice(0, idx)}
      <span className={colorClass}>{accent}</span>
      {title.slice(idx + accent.length)}
    </>
  );
};

const Home = () => {
  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    const timer = window.setTimeout(() => AOS.refresh(), 50);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.style.backgroundColor = prev;
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <Seo {...pageSeo.home} />
      <Hero />
      <TrustBar />
      <Services />
      <MidCta {...servicesCta} />
      <WorkPreview />
      <WhyMonk11 />
      <MidCta {...midPageCta} />
      <Process />
      <Outcomes />
      <Compare />
      <Faq />
      <FinalCta />
      <Insights />
    </div>
  );
};

const Hero = () => (
  <section className="relative pt-[8.5rem] pb-10 overflow-hidden">
    <div className="pointer-events-none absolute left-[-8%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-primary/15 blur-[140px]" />
    <div className="pointer-events-none absolute right-[-10%] bottom-[-30%] w-[28rem] h-[28rem] rounded-full bg-purpleColor/10 blur-[120px]" />
    <div className="pointer-events-none absolute left-[-4%] top-[8%] w-[34rem] h-[34rem] rounded-full border border-primary/10" />
    <div className="pointer-events-none absolute left-[8%] top-[22%] w-[22rem] h-[22rem] rounded-full border border-primary/10" />

    <div className="wrapper relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-start lg:items-center min-h-[52vh]">
      <div className="space-y-6" data-aos="fade-up">
        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-secondary/60 px-3 py-1.5 text-xs text-ink/70">
          <span className="text-[#FFC200] tracking-tight">★★★★★</span>
          <span>{homeHero.kicker}</span>
        </div>
        <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight max-w-3xl">
          {homeHero.headlineBefore}{" "}
          <span className="text-primary">{homeHero.headlineAccent}</span>
        </h1>
        <p className="text-ink/60 text-base md:text-lg leading-relaxed max-w-xl">
          {homeHero.subhead}
        </p>
        <p className="text-ink/60 text-base md:text-lg leading-relaxed max-w-xl">
          {homeHero.subheadWhy}
        </p>
        <AgencyButton to="/contact" variant="fill">
          {homeHero.primaryCta}
        </AgencyButton>
        <p className="text-sm text-ink/50 max-w-sm">
          {homeHero.differentiator}
        </p>
        <a
          href="#process"
          className="inline-block text-sm text-ink/45 hover:text-primary transition-colors"
        >
          {homeHero.secondaryCta}
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {heroTiles.map((tile, i) => (
          <div
            key={tile.label}
            data-aos="fade-up"
            data-aos-delay={80 + i * 80}
            className="relative rounded-2xl overflow-hidden border border-black/10 min-h-[9rem] sm:min-h-[11rem]"
          >
            <img
              src={tile.src}
              alt=""
              className={`${tile.tint} absolute inset-0 w-full h-full object-cover`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[0.65rem] tracking-[0.16em] uppercase text-white">
              {tile.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WorkPreview = () => (
  <section id="work" className="wrapper py-[4rem] scroll-mt-28">
    <div className="max-w-3xl space-y-3 mb-10" data-aos="fade-up">
      <p className="section-kicker">Industries</p>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        Building Intelligence for the{" "}
        <span className="text-primary">Industries of Tomorrow</span>
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {verticalCards.map((card, i) => (
        <Link
          key={card.title}
          to={card.href}
          data-aos="fade-up"
          data-aos-delay={Math.min(i * 80, 240)}
          className="group relative min-h-[18rem] lg:min-h-[22rem] rounded-2xl overflow-hidden border border-black/10"
        >
            <img
            src={workImages[i]}
            alt={card.title}
            className="photo-to-indigo absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/10" />
          <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brandRed flex items-center justify-center text-white">
            <ArrowUpRight className="w-4 h-4" />
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2 text-white">
            <span className="inline-block text-[0.65rem] tracking-[0.14em] uppercase bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
              {card.tag}
            </span>
            <h3 className="text-xl font-semibold">
              {accentTitle(card.title, card.accent)}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const TrustBar = () => (
  <section className="section-band py-12 overflow-hidden">
    <div className="wrapper space-y-3 mb-8" data-aos="fade-up">
      <p className="section-kicker text-center">{trustKicker}</p>
      <p className="text-center text-ink/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {trustIntro}
      </p>
    </div>
    <div data-aos="fade-up" data-aos-delay="80">
      <TrustLogos />
    </div>
    <div className="wrapper space-y-8 mt-8">
      <div className="grid sm:grid-cols-3 gap-3">
        {processBadges.map((item, i) => (
          <div
            key={item}
            data-aos="fade-up"
            data-aos-delay={80 + i * 80}
            className="flex items-start gap-3 rounded-full border border-black/10 bg-white px-4 py-3"
          >
            <span className="mt-0.5 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
              <Check className="w-3 h-3" strokeWidth={3} />
            </span>
            <p className="text-sm text-ink/70 leading-snug">{item}</p>
          </div>
        ))}
      </div>
      <p
        data-aos="fade-up"
        className="text-center text-sm md:text-base text-ink/65 max-w-3xl mx-auto leading-relaxed"
      >
        {guarantee}
      </p>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="pt-[5rem] pb-[2rem] scroll-mt-24">
    <div className="wrapper">
      <div
        className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mb-12 items-end"
        data-aos="fade-up"
      >
        <div className="space-y-3">
          <p className="section-kicker">What we do</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Automation, products and platforms,{" "}
            <span className="text-primary">end to end</span>
          </h2>
        </div>
        <p className="text-ink/60 text-lg max-w-xl lg:justify-self-end">
          One partner for the full lifecycle. We design, build and deploy AI
          workflows, dashboards, web apps, mobile apps and SaaS so your team
          gets software that runs in production.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {homeServices.map((item, i) => {
          const Icon = serviceIcons[i];
          return (
            <Link
              key={item.title}
              to={item.href}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 80, 320)}
              className="group rounded-2xl border-2 border-brandIndigo bg-white p-7 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="w-9 h-9 rounded-full border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-semibold mt-6">
                {accentTitle(item.title, item.accent, "text-brandIndigo")}
              </h3>
              <p className="text-ink/60 mt-3 leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs text-primary border border-black/10 rounded-full px-3 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

const WhyMonk11 = () => (
  <section className="section-band py-[4rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12" data-aos="fade-up">
        <p className="section-kicker">The difference</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Why teams choose <span className="text-primary">Monk11</span>
        </h2>
        <p className="text-ink/60 text-lg">
          Generic tools do not survive a real operation. We build for the
          vertical, ship to production, and keep a human in the loop where it
          still matters.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold pt-2">
          Built for the way your business actually works
        </h3>
        <p className="text-ink/60 text-lg">
          Most businesses don't need another generic AI tool. They need
          technology that fits their workflows, teams and goals. That's what we
          build.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {differentiators.map((item, i) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={Math.min(i * 70, 280)}
            className="rounded-2xl border border-black/10 bg-white p-6 space-y-3"
          >
            <p className="text-xs tracking-[0.16em] uppercase text-brandRed">
              {item.kicker}
            </p>
            <h3 className="text-xl font-semibold">
              {accentTitle(item.title, item.accent, "text-brandIndigo")}
            </h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MidCta = ({ kicker, title, accent, body }) => (
  <section className="wrapper py-[3rem]">
    <div
      className="mid-cta-band relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-brandIndigo to-purpleColor px-8 py-12 md:px-14 md:py-16 text-white"
      data-aos="fade-up"
    >
      <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] w-64 h-64 rounded-full bg-[#FFC200]/20 blur-3xl" />
      <div className="relative z-10 grid md:grid-cols-[1.4fr_auto] gap-8 items-center">
        <div className="space-y-3">
          <p className="section-kicker !text-white/80">{kicker}</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl text-white">
            {title} <span className="text-secondary">{accent}</span>
          </h2>
          <p className="text-white/85 max-w-xl text-lg">{body}</p>
        </div>
        <AgencyButton to="/contact">Book a scoping call</AgencyButton>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-[5rem] scroll-mt-24">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12" data-aos="fade-up">
        <p className="section-kicker">Process</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          How we design,{" "}
          <span className="text-primary">build, and deploy</span>
        </h2>
        <p className="text-ink/60 text-lg">
          A clear process, honest timelines, and no surprises from kick-off to
          launch.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {homeProcess.map((item, i) => (
          <div
            key={item.step}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="rounded-2xl border border-black/10 bg-white p-6 space-y-4"
          >
            <p className="text-3xl font-bold text-brandIndigo">{item.step}</p>
            <h3 className="text-xl font-semibold">
              {accentTitle(item.title, item.accent)}
            </h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Outcomes = () => (
  <section className="section-band py-[4rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-12" data-aos="fade-up">
        <p className="section-kicker">How we create results</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Built around the jobs{" "}
          <span className="text-primary">that actually move revenue</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outcomeStrip.map((item, i) => (
          <div
            key={item.vertical}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="space-y-3 p-1"
          >
            <p className="text-xs tracking-[0.16em] uppercase text-brandRed">
              {item.vertical}
            </p>
            <h3 className="text-xl font-semibold">
              {accentTitle(item.title, item.accent, "text-brandIndigo")}
            </h3>
            <p className="text-ink/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Compare = () => (
  <section className="py-[5rem]">
    <div className="wrapper">
      <div className="max-w-3xl space-y-3 mb-10" data-aos="fade-up">
        <p className="section-kicker">Compare</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Monk11 vs <span className="text-primary">other offerings</span>
        </h2>
      </div>
      <div
        className="overflow-x-auto rounded-2xl border border-black/10"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-black/10 bg-secondary/40">
              <th className="p-4 font-medium text-ink/45 text-sm"> </th>
              <th className="p-4 font-semibold text-primary">Monk11</th>
              <th className="p-4 font-medium text-ink/45">Typical vendors</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
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

const Insights = () => (
  <section className="section-band py-[4rem]">
    <div className="wrapper">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10" data-aos="fade-up">
        <div className="space-y-3 max-w-2xl">
          <p className="section-kicker">From the blog</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Insights <span className="text-primary">worth reading</span>
          </h2>
        </div>
        <Link
          to="/blogs"
          className="text-sm text-ink/55 hover:text-primary transition-colors"
        >
          See all articles
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {blogs.map((item, i) => (
          <Link
            key={item.id}
            to={`/blogs/${item.id}`}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="group rounded-2xl border border-black/10 overflow-hidden hover:border-primary/40 transition-colors bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-[16/10] object-cover group-hover:brightness-110 transition"
            />
            <div className="p-5 space-y-2">
              <p className="text-xs tracking-[0.14em] uppercase text-brandRed">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold leading-snug">
                {accentTitle(item.title, item.accent)}
              </h3>
              <p className="text-sm text-ink/50 line-clamp-3">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-[5rem]">
      <div className="wrapper grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="space-y-5 lg:sticky lg:top-28" data-aos="fade-up">
          <p className="section-kicker">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Common questions about{" "}
            <span className="text-primary">working with us</span>
          </h2>
          <p className="text-ink/60">
            Can't find what you're looking for? Book a scoping call and get
            straight answers.
          </p>
          <AgencyButton to="/contact" variant="fill">
            Book a scoping call
          </AgencyButton>
        </div>
        <div
          className="divide-y divide-black/10 border-y border-black/10"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {homeFaqs.map((item, i) => {
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
                    {accentTitle(item.q, item.accent, "text-brandIndigo")}
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

const FinalCta = () => (
  <section className="pb-[5rem]">
    <div className="wrapper">
      <div
        className="rounded-3xl border border-black/10 bg-white p-8 md:p-12 space-y-4 mb-8"
        data-aos="fade-up"
      >
        <p className="section-kicker">Let's work together</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
          Let's map what to automate{" "}
          <span className="text-primary">and what to build</span>
        </h2>
        <p className="text-ink/60 text-lg max-w-2xl">
          Book a short scoping call. We'll show you which workflows should run
          on their own, and where a dashboard, web app, native app or SaaS
          platform is the better investment.
        </p>
      </div>
      <div className="home-contact" data-aos="fade-up" data-aos-delay="80">
        <ContactForm
          kicker="Let's build what's next"
          headline={
            <>
              Tell us what you want{" "}
              <span className="text-primary">to automate</span>
            </>
          }
          intro="Share what's slowing your team down or where you want to scale. We'll help you identify the right approach whether that's AI automation, a dashboard, a web or mobile app, or a complete SaaS platform."
          id="contact"
          variant="dark"
        />
      </div>
    </div>
  </section>
);

export default Home;
