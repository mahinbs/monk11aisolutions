import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/constant";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const articleBodies = {
  1: [
    {
      heading: "Why automation now matters more than headcount",
      body: "Growing teams often hit a ceiling when everyday tasks—data entry, follow-ups, status updates—consume hours that should go to strategy and customer relationships. AI automation closes that gap by handling repetitive processes with consistent accuracy.",
    },
    {
      heading: "Start with high-ROI workflows",
      body: "The strongest results usually come from automating lead qualification, appointment scheduling, reporting, and cross-system sync. These workflows touch revenue and operations directly, so improvements show up quickly in speed, cost, and quality.",
    },
    {
      heading: "Design for reliability, not just novelty",
      body: "Effective automation is measurable and maintainable. Monk11 AI builds workflows with clear ownership, monitoring, and fallbacks—so your systems keep performing as volume grows.",
    },
  ],
  2: [
    {
      heading: "Industry context changes everything",
      body: "A real estate lead nurture sequence looks very different from a healthcare appointment reminder or a manufacturing inventory alert. Industry-aware automation respects compliance, timing, and the language your customers expect.",
    },
    {
      heading: "Agents that fit the job",
      body: "We design AI agents and workflows for Real Estate, Healthcare, Manufacturing, Restaurant Management, Renewable Energy, and FinTech—connecting CRM, calendars, messaging, and reporting tools into one coherent system.",
    },
    {
      heading: "From pilot to production",
      body: "Successful programs start with a focused pilot, prove ROI, then expand. That approach reduces risk while building internal confidence in automation as a core operating capability.",
    },
  ],
  3: [
    {
      heading: "Products and automation belong together",
      body: "Web and mobile applications deliver the customer experience; automation keeps the backend humming. When both are designed as one ecosystem, businesses avoid brittle integrations and manual workarounds.",
    },
    {
      heading: "Build for scale from day one",
      body: "Whether you need a SaaS platform, customer portal, or mobile app, architecture choices early on determine how easily AI workflows can plug in later—without costly rewrites.",
    },
    {
      heading: "A partner across the stack",
      body: "Monk11 AI helps you ship digital products and the intelligent workflows around them, so technology investment compounds instead of fragmenting across tools and vendors.",
    },
  ],
};

const BlogDetails = () => {
  const { title } = useParams();
  const blogId = Number(title) || 1;
  const blog = blogs.find((b) => b.id === blogId) || blogs[0];
  const sections = articleBodies[blog.id] || articleBodies[1];

  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper">
        <img
          data-aos="fade-up"
          src={blog.image}
          className="rounded-xl w-full aspect-video md:aspect-[16/7] object-cover"
          alt={blog.title}
        />
        <p
          data-aos="fade-up"
          className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary"
        >
          {blog.category}
        </p>
        <h1 data-aos="fade-up" className="section-heading mt-2">
          {blog.title}
        </h1>
        <p data-aos="fade-up" className="mt-3 text-gray-600 max-w-3xl">
          {blog.excerpt}
        </p>
        <hr data-aos="fade-up" className="border-secondary my-7" />
        <div data-aos="fade-up" className="space-y-6 max-w-4xl">
          {sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold mb-3">
                {index + 1}. {section.heading}
              </h2>
              <p className="mb-2 text-gray-700 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BlogsSection />
    </div>
  );
};

export default BlogDetails;
