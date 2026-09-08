import React from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X } from "lucide-react";
import { logo, logoDark } from "../../data/constant";
import AgencyButton from "../ui/AgencyButton";

const links = [
  { name: "Services", path: "/services" },
  { name: "Work", path: "/#work" },
  { name: "About", path: "/about-us" },
  { name: "Insights", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const isDark =
    pathname === "/" ||
    pathname.startsWith("/services") ||
    pathname === "/about-us" ||
    pathname.startsWith("/blogs") ||
    pathname === "/contact";

  return (
    <div
      className={`fixed top-0 left-0 py-3 z-50 w-full transition-colors duration-300 ${
        isDark
          ? "bg-ink/70 backdrop-blur-md border-b border-white/5"
          : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="flex wrapper items-center gap-8 justify-between">
        <Link to="/" className="cursor-pointer shrink-0">
          <img
            loading="lazy"
            src={isDark ? logoDark : logo}
            alt="Monk11 AI Solutions"
            width="180"
            height="56"
            className={`h-11 md:h-12 w-auto object-contain ${
              isDark ? "mix-blend-lighten" : ""
            }`}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const active =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[0.72rem] tracking-[0.16em] uppercase transition-colors ${
                  isDark
                    ? active
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white"
                    : active
                    ? "font-semibold text-purpleColor"
                    : "link"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <AgencyButton to="/contact">Book a Call</AgencyButton>
        </div>
        <div
          className="block lg:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color={isDark ? "#ffffff" : "#000000"}
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between px-[.7rem] py-[.4rem]">
          <img
            src={isDark ? logoDark : logo}
            width="auto"
            height="auto"
            alt="Monk11 AI Solutions"
            className="h-[2.5rem] object-contain"
          />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4 text-black">
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={link.name}
              to={link.path}
              className="text-2xl font-medium"
            >
              {link.name}
            </Link>
          ))}
          <AgencyButton to="/contact" className="mt-4 w-fit">
            Book a Call
          </AgencyButton>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
