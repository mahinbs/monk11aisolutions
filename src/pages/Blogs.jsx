import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/constant";
import AgencyButton from "../components/ui/AgencyButton";
import Seo from "../components/Seo";
import { pageSeo } from "../data/seo";

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

const Blogs = () => {
  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.documentElement.style.backgroundColor = prev;
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <Seo {...pageSeo.blogs} />
      <section className="relative pt-[8.5rem] pb-12 overflow-hidden">
        <div className="pointer-events-none absolute right-[-8%] top-[-10%] w-[42rem] h-[42rem] rounded-full bg-primary/15 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[-30%] w-[28rem] h-[28rem] rounded-full bg-purpleColor/10 blur-[120px]" />
        <div className="wrapper relative z-10 max-w-3xl min-h-[42vh] space-y-6">
          <p className="section-kicker">From the blog</p>
          <h1 className="text-[2.35rem] sm:text-5xl lg:text-[4.35rem] font-bold leading-[1.05] tracking-tight">
            AI automation insights{" "}
            <span className="text-primary">worth reading</span>
          </h1>
          <p className="text-ink/60 text-base md:text-lg leading-relaxed max-w-xl">
            Practical notes on automation, dashboards, apps and SaaS. Written
            for teams that need software that actually ships, not another trend
            roundup.
          </p>
          <AgencyButton to="/contact" variant="fill">
            Book a scoping call
          </AgencyButton>
        </div>
      </section>

      <section className="pb-[5rem]">
        <div className="wrapper grid md:grid-cols-3 gap-4">
          {blogs.map((item) => (
            <Link
              key={item.id}
              to={`/blogs/${item.id}`}
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
                <h2 className="text-lg font-semibold leading-snug">
                  {accentTitle(item.title, item.accent)}
                </h2>
                <p className="text-sm text-ink/50 line-clamp-3">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
