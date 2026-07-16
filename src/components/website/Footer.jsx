import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const Footer = () => {
  return (
    <div className="py-[3rem] overflow-hidden border-t border-secondary/50 relative">
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-8 w-[12rem] aspect-square bg-primary/50 blur-[100px]"></div>
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-8 w-[12rem] aspect-square bg-secondary/50 blur-[100px]"></div>
      <div className="wrapper space-y-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 items-start gap-10">
          <div className="space-y-3 grid justify-start">
            <Link to="/">
              <img
                src={logo}
                alt={companyDetails.name}
                className="h-12 object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              AI automation and digital products for modern enterprises at{" "}
              {companyDetails.domain}.
            </p>
            <h5 className="text-lg font-semibold pt-2">Our Services</h5>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={`/services/${service.title}`} className="link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 grid sm:justify-center">
            <h5 className="text-lg font-semibold">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:justify-end sm:text-right">
            <div className="space-y-1 text-sm">
              <p>
                <a className="link" href={`mailto:${companyDetails.email}`}>
                  {companyDetails.email}
                </a>
              </p>
              <p>
                <a className="link" href={`tel:+${companyDetails.phone}`}>
                  +{companyDetails.phone}
                </a>
              </p>
            </div>
            <div className="flex gap-4 items-center sm:justify-end">
              <Link to="/" className="link" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 link" strokeWidth={1.5} />
              </Link>
              <Link to="/" className="link" aria-label="Instagram">
                <Instagram className="w-6 h-6 link" strokeWidth={1.5} />
              </Link>
              <Link to="/" className="link" aria-label="Facebook">
                <Facebook className="w-6 h-6 link" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-secondary/50" />
        <div className="text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} {companyDetails.name}.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
