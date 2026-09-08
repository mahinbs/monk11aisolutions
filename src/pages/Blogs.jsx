import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/constant";
import AgencyButton from "../components/ui/AgencyButton";

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

const Blogs = () => {
  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#0A0612";
    document.body.style.backgroundColor = "#0A0612";
    document.title = "Insights | Monk11 AI";
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
        <div className="wrapper relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-start lg:items-center min-h-[42vh]">
          <div className="space-y-6">
            <p className="section-kicker">From the blog</p>
            <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight max-w-3xl">
              Insights <span className="text-lavender">worth reading</span>
            </h1>
          </div>
          <div className="space-y-5 lg:pt-10">
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
              Practical notes on automation, dashboards, apps, and SaaS — written
              for teams that need software that actually ships, not another
              trend roundup.
            </p>
            <AgencyButton to="/contact">Start a Project</AgencyButton>
          </div>
        </div>
      </section>

      <section className="pb-[5rem]">
        <div className="wrapper grid md:grid-cols-3 gap-4">
          {blogs.map((item) => (
            <Link
              key={item.id}
              to={`/blogs/${item.id}`}
              className="group rounded-2xl border border-white/10 overflow-hidden hover:border-primary/40 transition-colors bg-white/[0.03]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[16/10] object-cover group-hover:brightness-110 transition"
              />
              <div className="p-5 space-y-2">
                <p className="text-xs tracking-[0.14em] uppercase text-lavender">
                  {item.category}
                </p>
                <h2 className="text-lg font-semibold leading-snug">
                  {accentTitle(item.title, item.accent)}
                </h2>
                <p className="text-sm text-white/55 line-clamp-3">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
