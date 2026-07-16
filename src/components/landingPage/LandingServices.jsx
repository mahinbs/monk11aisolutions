import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { ArrowScrollButton } from "../ArrowButtons";
import { ArrowRight, Sparkles } from "lucide-react";

const LandingServices = ({ isWeb }) => {
  // Always include AI Automation; pair with page-relevant services
  const focusTitles = isWeb
    ? ["AI Automation", "Web Applications", "SAAS Solutions", "AI Calling Agency"]
    : [
        "AI Automation",
        "Mobile Applications",
        "AI Calling Agency",
        "Web Applications",
      ];

  const relevantServices = focusTitles
    .map((title) => services.find((s) => s.title === title))
    .filter(Boolean);

  return (
    <div id="services" className="wrapper relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p
          data-aos="fade-up"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3"
        >
          <Sparkles className="w-4 h-4" /> Powered by AI Automation
        </p>
        <h2 data-aos="fade-up" className="heading-2 mb-4">
          {isWeb ? "Web, SaaS & AI Solutions" : "Mobile, Voice & AI Solutions"}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600">
          We build intelligent systems—not just screens. Explore capabilities
          designed for modern enterprises across Real Estate, Healthcare,
          Manufacturing, Restaurants, Energy, and FinTech.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {relevantServices.map((item, i) => {
          const isFeatured = Boolean(item.featured);
          return (
            <Link
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={item.title}
              to={`/services/${item.title}`}
              className={`group relative p-1 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                isFeatured
                  ? "md:col-span-2 bg-gradient-to-r from-primary to-[#4a146d]"
                  : "bg-gradient-to-b from-white/40 to-white/10 hover:to-primary/20"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-2xl z-0 shadow-sm border transition-all duration-500 ${
                  isFeatured
                    ? "bg-transparent border-transparent"
                    : "bg-white/60 backdrop-blur-xl border-white/50 group-hover:shadow-neon"
                }`}
              ></div>

              <div
                className={`relative z-10 p-8 h-full flex flex-col ${
                  isFeatured ? "text-white md:flex-row md:items-center md:gap-8" : ""
                }`}
              >
                <div className={isFeatured ? "md:flex-1" : ""}>
                  {isFeatured && (
                    <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#FFC200]/20 text-[#FFC200] text-xs font-semibold uppercase tracking-wide">
                      Highlighted · AI Automation
                    </span>
                  )}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      isFeatured
                        ? "bg-white/15"
                        : "bg-gradient-to-br from-primary/10 to-secondary/10"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 transition-colors ${
                      isFeatured
                        ? "text-white"
                        : "text-gray-800 group-hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mb-6 flex-grow leading-relaxed ${
                      isFeatured ? "text-white/85" : "text-gray-600"
                    }`}
                  >
                    {item.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium px-2 py-1 rounded-md ${
                          isFeatured
                            ? "bg-white/15 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center font-semibold text-sm ${
                      isFeatured ? "text-[#FFC200]" : "text-primary"
                    }`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                {isFeatured && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="hidden md:block w-48 h-48 object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <ArrowScrollButton to="contact" className="secondary-btn mx-auto">
          Get a Custom Proposal
        </ArrowScrollButton>
      </div>
    </div>
  );
};

export default LandingServices;
