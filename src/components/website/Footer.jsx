import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { companyDetails, logoDark } from "../../data/constant";
import SocialLinks from "../SocialLinks";
import AgencyButton from "../ui/AgencyButton";

const Footer = () => {
  return (
    <footer className="py-[3.5rem] overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="wrapper space-y-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 items-start">
          <div className="space-y-4">
            <Link to="/">
              <img
                src={logoDark}
                alt={companyDetails.name}
                className="h-12 w-auto object-contain mix-blend-lighten"
              />
            </Link>
            <p className="text-sm text-white/65 max-w-xs leading-relaxed">
              AI automation, multi-user dashboards, functional web apps, SaaS,
              and production-ready native apps for real estate, healthcare,
              manufacturing, restaurants, renewable energy, and fintech teams.
            </p>
            <AgencyButton to="/contact">Book a Call</AgencyButton>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs tracking-[0.18em] uppercase text-lavender/80">
              Services
            </h5>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={`/services/${service.title}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service.navTitle || service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs tracking-[0.18em] uppercase text-lavender/80">
              Company
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/70 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-white/70 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#work" className="text-white/70 hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white/70 hover:text-white">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 lg:text-right">
            <div className="space-y-1 text-sm">
              <p>
                <a
                  className="text-white/70 hover:text-white"
                  href={`mailto:${companyDetails.email}`}
                >
                  {companyDetails.email}
                </a>
              </p>
              <p>
                <a
                  className="text-white/70 hover:text-white"
                  href={`tel:+${companyDetails.phone}`}
                >
                  +{companyDetails.phone}
                </a>
              </p>
            </div>
            <SocialLinks className="lg:justify-end text-white" />
          </div>
        </div>
        <hr className="border-white/10" />
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-white/50">
          <p>
            Copyright &copy; {new Date().getFullYear()} {companyDetails.name}.
            All rights reserved.
          </p>
          <p className="text-white/40">monk11.ai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
