import React, { lazy, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { blogs } from "../data/constant";
import AgencyButton from "../components/ui/AgencyButton";
import Seo from "../components/Seo";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const articleBodies = {
  1: [
    {
      heading: "Why automation now matters more than headcount",
      accent: "than headcount",
      body: "Growing teams hit a ceiling when data entry, follow-ups and status updates eat the hours that should go to closing and customer work. Automation closes that gap when it is wired to the tools you already run: CRM, calendar and inbox, with a human fallback when the flow hits an edge.",
    },
    {
      heading: "Start with the jobs that move revenue",
      accent: "move revenue",
      body: "The strongest first builds are lead routing, appointment setting, reporting, and cross-system sync. Those workflows touch revenue and operations directly. A generic chatbot with a new skin does not.",
    },
    {
      heading: "Design for production, not a demo",
      accent: "not a demo",
      body: "Effective automation is logged, measurable and maintainable. Monk11 builds workflows with ownership, monitoring and a fallback to a person, so the system still holds when volume grows.",
    },
  ],
  2: [
    {
      heading: "Industry context changes the workflow",
      accent: "the workflow",
      body: "A real estate nurture sequence is not a healthcare reminder, and neither is a manufacturing inventory alert. Vertical-aware automation respects timing, language, and the compliance the buyer actually cares about.",
    },
    {
      heading: "Agents that fit the job",
      accent: "fit the job",
      body: "We design workflows for real estate, healthcare, manufacturing, restaurants, renewable energy and fintech. CRM, calendars, messaging and reporting become one system your team can run.",
    },
    {
      heading: "From a focused first release to production",
      accent: "to production",
      body: "Start with one workflow or dashboard, prove it in production, then expand. That reduces risk and builds internal confidence without a twelve-month black box.",
    },
  ],
  3: [
    {
      heading: "Products and automation belong together",
      accent: "belong together",
      body: "Web and mobile apps are the surface people use. Automation keeps the work behind them moving. Designed as one ecosystem, you avoid brittle integrations and a spreadsheet sitting between two tools.",
    },
    {
      heading: "Build for the team that logs in every day",
      accent: "logs in every day",
      body: "Whether you need a multi-user dashboard, a functional web app or a SaaS platform, admin, roles and analytics have to be in the product. Not a brochure site anyone can generate in an afternoon.",
    },
    {
      heading: "One partner across the stack",
      accent: "across the stack",
      body: "Monk11 ships the product and the workflows around it: cloud, stores and handover, so the investment compounds instead of fragmenting across vendors.",
    },
  ],
};

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

const BlogDetails = () => {
  const { title } = useParams();
  const blogId = Number(title);
  const blog = blogs.find((b) => b.id === blogId);
  const sections = blog ? articleBodies[blog.id] || articleBodies[1] : [];

  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#0A0612";
    document.body.style.backgroundColor = "#0A0612";
    return () => {
      document.documentElement.style.backgroundColor = prev;
      document.body.style.backgroundColor = "";
    };
  }, [blog]);

  if (!blog) return <Navigate to="/blogs" replace />;

  return (
    <div className="bg-ink text-white overflow-x-hidden">
      <Seo
        title={`${blog.title} | Monk11`}
        description={blog.seoDescription || blog.excerpt}
        path={`/blogs/${blog.id}`}
      />
      <article className="relative pt-[8.5rem] pb-[4rem]">
        <div className="pointer-events-none absolute right-[-8%] top-[-10%] w-[36rem] h-[36rem] rounded-full bg-primary/35 blur-[140px]" />
        <div className="wrapper relative z-10 max-w-4xl">
          <p className="section-kicker">{blog.category}</p>
          <h1 className="text-[2.1rem] sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mt-4">
            {accentTitle(blog.title, blog.accent)}
          </h1>
          <p className="mt-5 text-white/65 text-lg max-w-2xl leading-relaxed">
            {blog.excerpt}
          </p>
          <img
            src={blog.image}
            className="rounded-2xl w-full aspect-video md:aspect-[16/7] object-cover mt-10 border border-white/10"
            alt={blog.title}
          />
          <div className="space-y-10 mt-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold mb-3">
                  {accentTitle(section.heading, section.accent)}
                </h2>
                <p className="text-white/65 leading-relaxed text-lg">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="space-y-2 max-w-xl">
              <p className="section-kicker">Next step</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Map what to automate{" "}
                <span className="text-lavender">and what to build</span>
              </h2>
            </div>
            <AgencyButton to="/contact" variant="fill">
              Book a scoping call
            </AgencyButton>
          </div>
        </div>
      </article>
      <BlogsSection />
    </div>
  );
};

export default BlogDetails;
