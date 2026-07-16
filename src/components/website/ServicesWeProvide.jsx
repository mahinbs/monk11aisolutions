import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { ArrowLinkButton } from "../ArrowButtons";

const ServicesWeProvide = () => {
  const featured = services.find((s) => s.featured) || services[0];
  const others = services.filter((s) => s.title !== featured.title);

  return (
    <div id="services" className="py-[4rem] wrapper">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <p
          data-aos="fade-up"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
        >
          <Sparkles className="w-4 h-4" /> Full-Service Digital Partner
        </p>
        <h2 data-aos="fade-up" className="section-heading">
          Services We Provide
        </h2>
        <p data-aos="fade-up" className="text-gray-600">
          From AI automation to web, mobile, and SaaS—everything you need to
          modernize operations and grow with confidence.
        </p>
      </div>

      {/* Featured AI Automation */}
      <Link
        data-aos="fade-up"
        to={`/services/${featured.title}`}
        className="mt-10 group block overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#4a146d] text-white p-6 md:p-8 shadow-lg"
      >
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFC200]/20 text-[#FFC200] text-xs font-semibold uppercase tracking-wide">
              Highlighted · AI Automation
            </span>
            <p className="text-2xl md:text-3xl font-bold">{featured.title}</p>
            <p className="text-white/85 text-lg leading-relaxed">
              {featured.shortDesc}
            </p>
            <div className="flex gap-2 flex-wrap">
              {featured.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/15 text-white text-sm py-1.5 px-3 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 mt-2 font-medium group-hover:gap-3 transition-all">
              Explore AI Automation <ArrowRight className="w-5 h-5" />
            </span>
          </div>
          <img
            src={featured.image}
            className="object-contain w-full max-h-56 md:max-h-72 rounded-xl"
            alt={featured.title}
          />
        </div>
      </Link>

      <div data-aos="fade-up" className="mt-6 grid md:grid-cols-2 gap-5">
        {others.map((item) => (
          <Link
            key={item.title}
            to={`/services/${item.title}`}
            className="group h-fit overflow-hidden space-y-6 odd:bg-secondary/70 even:bg-primary/70 odd:hover:bg-primary/70 even:hover:bg-secondary/70 p-5 rounded-xl transition-all duration-300 odd:text-black even:text-white even:hover:text-black odd:hover:text-white"
          >
            <div className="grid sm:grid-cols-[70%_auto] h-full items-center gap-4">
              <div className="h-full flex flex-col gap-3 justify-between">
                <div className="space-y-3">
                  <p className="text-xl font-medium">{item.title}</p>
                  <img
                    src={item.image}
                    className="object-contain w-1/2 block sm:hidden rounded-xl"
                    alt={item.title}
                  />
                  <p>{item.shortDesc}</p>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-black text-sm py-2 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={item.image}
                className="object-contain sm:block hidden rounded-xl"
                alt={item.title}
              />
            </div>
            <span className="btn rounded lg:translate-y-[5rem] group-hover:translate-y-0 bg-white/40 hover:bg-white hover:shadow-transparent gap-2 w-fit text-black inline-flex">
              Read More <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <ArrowLinkButton to="/contact">Request a quote</ArrowLinkButton>
      </div>
    </div>
  );
};

export default ServicesWeProvide;
