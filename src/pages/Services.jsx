import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Workflow } from "lucide-react";
import { services } from "../data/services";
import { industries } from "../data/constant";
import ContactForm from "../components/ContactForm";

const Services = () => {
  const featured = services.find((s) => s.featured) || services[0];

  return (
    <div className="pt-[5rem]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0b24] via-[#2d1245] to-[#1a0b24] py-16 md:py-20 text-center text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#7821A6,transparent_40%),radial-gradient(circle_at_80%_70%,#FFC20033,transparent_35%)]" />
        <div className="wrapper relative z-10 space-y-4">
          <p
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm"
          >
            <Sparkles className="w-4 h-4 text-[#FFC200]" />
            Full-Service Digital Partner
          </p>
          <h1 data-aos="fade-up" className="heading !text-white mb-2">
            Our <span className="text-[#FFC200]">Expertise</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white/80 max-w-2xl mx-auto px-4 text-lg"
          >
            AI automation, intelligent calling, web applications, mobile apps,
            and SaaS platforms—engineered for Real Estate, Healthcare,
            Manufacturing, Restaurants, Renewable Energy, FinTech, and
            enterprise teams.
          </p>
        </div>
      </div>

      {/* AI Automation highlight */}
      <section className="wrapper -mt-8 relative z-10 mb-4">
        <div
          data-aos="fade-up"
          className="rounded-2xl bg-gradient-to-br from-primary to-[#4a146d] text-white p-6 md:p-8 shadow-xl grid md:grid-cols-[1.4fr_1fr] gap-6 items-center"
        >
          <div className="space-y-4 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC200]/20 text-[#FFC200] text-xs font-semibold uppercase tracking-wide">
              <Workflow className="w-3.5 h-3.5" /> Flagship · AI Automation
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">{featured.title}</h2>
            <p className="text-white/85 text-lg leading-relaxed">
              {featured.shortDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.slice(0, 6).map((item) => (
                <span
                  key={item.title}
                  className="text-xs md:text-sm bg-white/10 px-3 py-1.5 rounded-full"
                >
                  {item.title}
                </span>
              ))}
            </div>
            <Link
              to={`/services/${featured.title}`}
              className="inline-flex primary-btn !shadow-none mt-2 w-fit"
            >
              Explore AI Automation
            </Link>
          </div>
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full max-h-56 md:max-h-64 object-contain rounded-xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="wrapper flex flex-col gap-[5rem] py-[4rem]">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const isFeatured = Boolean(service.featured);
          return (
            <div
              key={service.title}
              className={`flex flex-col gap-16 md:gap-24 ${
                isFeatured
                  ? "rounded-3xl border-2 border-primary/30 bg-primary/[0.03] p-6 md:p-10"
                  : ""
              }`}
              id={service.title.replace(/\s+/g, "-").toLowerCase()}
            >
              <div
                data-aos="fade-up"
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap gap-2 items-center">
                    {isFeatured && (
                      <span className="inline-block px-4 py-1 rounded-full bg-[#FFC200]/20 text-[#B8860B] font-semibold text-sm">
                        Highlighted Service
                      </span>
                    )}
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {service.technologies[0]} & More
                    </div>
                  </div>
                  <h2 className="heading-2">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      isEven
                        ? "from-primary/20 to-blue-200"
                        : "from-secondary/20 to-purple-200"
                    } rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6`}
                  ></div>
                  <img
                    src={service.detailsPageImages.first}
                    alt={service.title}
                    className="relative z-10 w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div
                  data-aos="fade-up"
                  className="md:col-span-2 space-y-8 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: service.html.firstSection,
                  }}
                ></div>
                <div className="md:col-span-1 space-y-6">
                  <img
                    src={service.detailsPageImages.second}
                    alt={`${service.title} detail`}
                    className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <img
                    src={service.detailsPageImages.third}
                    alt={`${service.title} overview`}
                    className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: service.html.secondSection,
                  }}
                ></div>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: service.html.thirdSection,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </section>
      <ContactForm />
    </div>
  );
};

export default Services;
