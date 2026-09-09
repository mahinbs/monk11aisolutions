import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { companyDetails, logoDark } from "../../data/constant";
import SocialLinks from "../SocialLinks";
import AgencyButton from "../ui/AgencyButton";

const Footer = () => {
  return (
    <footer className="py-[3.5rem] overflow-hidden border-t border-black/10 bg-white text-ink">
      <div className="wrapper space-y-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 items-start">
          <div className="space-y-4">
            <Link to="/">
              <img
                src={logoDark}
                alt={companyDetails.name}
                className="site-logo-footer"
              />
            </Link>
            <p className="text-sm text-ink/60 max-w-xs leading-relaxed">
              AI automation, multi-user dashboards, functional web apps, SaaS,
              and production-ready native apps for real estate, healthcare,
              manufacturing, restaurants, renewable energy, and fintech teams.
            </p>
            <AgencyButton to="/contact" variant="fill">
              Book a scoping call
            </AgencyButton>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs tracking-[0.18em] uppercase text-ink/45">
              Services
            </h5>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={`/services/${service.title}`}
                    className="text-sm text-ink/70 hover:text-primary transition-colors"
                  >
                    {service.navTitle || service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs tracking-[0.18em] uppercase text-ink/45">
              Company
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-ink/70 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-ink/70 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#work" className="text-ink/70 hover:text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-ink/70 hover:text-primary">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink/70 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 lg:text-right">
            <div className="space-y-1 text-sm">
              <p>
                <a
                  className="text-ink/70 hover:text-primary"
                  href={`mailto:${companyDetails.email}`}
                >
                  {companyDetails.email}
                </a>
              </p>
              <p>
                <a
                  className="text-ink/70 hover:text-primary"
                  href={`tel:+${companyDetails.phone}`}
                >
                  +{companyDetails.phone}
                </a>
              </p>
            </div>
            <SocialLinks className="lg:justify-end text-ink" />
          </div>
        </div>
        <hr className="border-black/10" />
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-ink/45">
          <p>
            Copyright &copy; {new Date().getFullYear()} {companyDetails.name}.
            All rights reserved.
          </p>
          <p className="text-ink/40">monk11.ai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
