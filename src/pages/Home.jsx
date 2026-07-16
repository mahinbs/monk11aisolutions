import React, { lazy } from "react";
import BannerVideo from "../components/BannerVideo";
import { ArrowRight, Bot, Sparkles, Workflow } from "lucide-react";
import { ReactComponent as icon1 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as icon2 } from "../assets/svg/services/App Development.svg";
import { Link } from "react-router-dom";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import { ArrowLinkButton } from "../components/ArrowButtons";
import { industries } from "../data/constant";

const ContactForm = lazy(() => import("../components/ContactForm"));
const BlogsSection = lazy(() => import("../components/website/BlogsSection"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const bannerServices = [
  {
    id: 1,
    title: "AI Automation",
    icon: Workflow,
    isLucide: true,
    desc: "Automate sales, operations, and customer journeys across Real Estate, Healthcare, Manufacturing, Restaurants, Ecommerce, CRM & Sales, and FinTech.",
    landingPageLink: "/services/AI Automation",
    featured: true,
  },
  {
    id: 2,
    title: "Web Development",
    icon: icon1,
    desc: "Scalable, conversion-focused websites and web applications engineered for performance and growth.",
    landingPageLink: "/web-development",
  },
  {
    id: 3,
    title: "App Development",
    icon: icon2,
    desc: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
    landingPageLink: "/app-development",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black/50">
        <div className="pt-[12rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm"
            >
              <Sparkles className="inline mr-2 w-4 h-4" />{" "}
              <span>AI Automation · Web · Mobile</span>
            </div>
            <h1 data-aos="fade-up" className="heading !text-white max-w-5xl">
              <span className="gradient-text">Monk11 AI</span>
              <br />
              <span className="text-white">
                Intelligent Automation for Modern Enterprises
              </span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-white/85 text-lg max-w-2xl leading-relaxed"
            >
              We help businesses eliminate repetitive work, scale operations,
              and deliver better customer experiences with AI automation, custom
              software, and mobile products.
            </p>
            <div data-aos="fade-up" className="flex flex-wrap gap-3">
              <ArrowLinkButton to="/services/AI Automation">
                Explore AI Automation
              </ArrowLinkButton>
              <Link
                to="/contact"
                className="secondary-btn !bg-white/10 !text-white !border-white/30 hover:!bg-white/20"
              >
                Talk to an Expert
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-5"
            >
              {bannerServices.map((item) => (
                <div
                  key={item.id}
                  className={`p-5 rounded-xl backdrop-blur-md text-white space-y-4 transition-all duration-300 ${
                    item.featured
                      ? "bg-primary/80 lg:hover:bg-primary ring-2 ring-[#FFC200]/60 sm:col-span-2 lg:col-span-1"
                      : "bg-primary/60 lg:hover:bg-primary"
                  }`}
                >
                  {item.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#FFC200]">
                      <Bot className="w-3.5 h-3.5" /> Featured Service
                    </span>
                  )}
                  <p className="text-xl font-medium">{item.title}</p>
                  <p className="min-h-[5rem] text-white/90">{item.desc}</p>
                  <div className="flex justify-between items-center gap-5">
                    {item.isLucide ? (
                      <item.icon className="w-12 h-12 text-white" />
                    ) : (
                      <item.icon className="w-14 h-14 fill-white" />
                    )}
                    <Link
                      to={item.landingPageLink}
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BannerVideo />
      </section>

      {/* AI Automation highlight */}
      <section className="py-[4rem] bg-gradient-to-br from-[#1a0b24] via-[#2d1245] to-[#1a0b24] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#7821A6,transparent_40%),radial-gradient(circle_at_80%_70%,#FFC20033,transparent_35%)]" />
        <div className="wrapper relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="space-y-5" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm">
              <Workflow className="w-4 h-4 text-[#FFC200]" />
              Flagship Capability
            </div>
            <h2 className="section-heading !text-white">
              AI Automation Services That Drive Real ROI
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              From lead qualification to operations reporting, we design
              intelligent workflows that reduce manual effort, accelerate
              response times, and scale with your business—across industries and
              enterprise teams.
            </p>
            <ul className="space-y-3 text-white/85">
              {[
                "End-to-end workflow automation across CRM, ERP, and communication tools",
                "Industry-specific agents for sales, support, and internal ops",
                "Measurable gains in speed, accuracy, and cost efficiency",
              ].map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#FFC200] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <ArrowLinkButton to="/services/AI Automation">
                View AI Automation
              </ArrowLinkButton>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 space-y-2 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#FFC200]" />
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesWeProvide />

      <section className="py-[4rem] bg-[#F7F7F9]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="text-center max-w-3xl mx-auto text-gray-600">
            Purpose-built AI automation and software solutions for Real Estate,
            Healthcare, Manufacturing, Restaurant Management, Renewable Energy,
            FinTech, Ecommerce, CRM & Sales, and other enterprise sectors.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-primary" />
                  <p className="font-medium text-[.9rem]">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-[4rem]">
        <h2 data-aos="fade-up" className="wrapper section-heading text-center">
          How Monk11 AI helps you deliver better results
        </h2>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Collaborative Partnerships",
              desc: "We work closely with your team to align on vision, priorities, and outcomes that matter.",
              styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Agility and Adaptability",
              desc: "Flexible delivery that keeps pace with changing requirements and market opportunities.",
              styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Commitment to Quality",
              desc: "From strategy to launch, we engineer solutions built for reliability and longevity.",
              styles: "bg-[#B94391]",
            },
            {
              title: "Customer Satisfaction",
              desc: "Clear communication and measurable results—so every engagement creates lasting value.",
              styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Transparency and Accountability",
              desc: "Regular updates, honest timelines, and ownership from kickoff through ongoing support.",
              styles:
                "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="How Monk11 AI builds solutions"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">How we build</h3>
            <p className="max-w-sm">
              We prioritize your success, understand your unique workflows, and
              deliver tailored AI and software solutions that drive growth.
            </p>
            <div className="pt-7">
              <ArrowLinkButton to="/contact">Let's Chat</ArrowLinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Work With Us?
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Our team combines strategic thinking, technical depth, and a
                  client-first approach to turn operational challenges into
                  automated, scalable systems that deliver lasting results.
                </p>
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt=""
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  At Monk11 AI, we deliver excellence across AI automation, AI
                  calling, web applications, mobile apps, and SaaS platforms—
                  with solutions tailored to your industry and growth stage.
                </p>
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Transform how your business operates with robust digital
                  products and intelligent automation—from high-performing
                  websites and apps to workflows that run around the clock.
                </p>
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  We partner with organizations across Real Estate, Healthcare,
                  Manufacturing, Hospitality, Renewable Energy, FinTech, and
                  broader enterprise sectors—delivering precision where it
                  matters most.
                </p>
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>
      <BlogsSection />
      <ContactForm />
    </>
  );
};

export default Home;
