import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { socialLinks } from "../data/constant";

const XIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  x: XIcon,
};

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {socialLinks.map(({ label, href, icon }) => {
        const Icon = iconMap[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="link"
          >
            <Icon className="w-6 h-6 link" strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
