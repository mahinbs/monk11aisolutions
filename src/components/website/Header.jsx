import React from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X } from "lucide-react";
import { logoOnLight } from "../../data/constant";
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

  const CtaButton = () => (
    <AgencyButton to="/contact" variant="glass">
      Book a scoping call
    </AgencyButton>
  );

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full pointer-events-none pt-3 sm:pt-4">
        <div className="wrapper flex items-center justify-center">
          <div className="header-liquid pointer-events-auto">
            <div className="liquid-glass liquid-glass-nav flex items-center gap-3 sm:gap-5 pl-2.5 pr-2 sm:pl-3 sm:pr-6 py-1.5">
              <Link
                to="/"
                className="cursor-pointer shrink-0 flex items-center gap-2"
                aria-label="Homepage"
              >
                <img
                  loading="lazy"
                  src={logoOnLight}
                  alt="Monk11 AI Solutions"
                  width="200"
                  height="56"
                  className="site-logo-island"
                />
                <span className="lg:hidden text-[0.72rem] tracking-[0.12em] uppercase text-black font-semibold leading-none pr-0.5 translate-y-[2px]">
                  Homepage
                </span>
              </Link>
              <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
                {links.map((link) => {
                  const active =
                    pathname === link.path ||
                    (link.path !== "/" && pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-[0.7rem] tracking-[0.14em] uppercase transition-colors ${
                        active
                          ? "text-primary font-semibold"
                          : "text-black/65 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="block lg:hidden">
                <Hamburger
                  color="#111111"
                  size="22"
                  toggled={isOpen}
                  rounded
                  toggle={setIsOpen}
                  label="Open menu"
                />
              </div>
            </div>

            <div className="hidden lg:block shrink-0">
              <CtaButton />
            </div>
          </div>
        </div>

        <div className="pointer-events-auto">
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            direction="right"
            className="z-10 p-2"
          >
            <div className="mb-6 flex items-center justify-between px-[.7rem] py-[.4rem]">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img
                  src={logoOnLight}
                  width="auto"
                  height="auto"
                  alt="Monk11 AI Solutions"
                  className="site-logo-island h-12"
                />
              </Link>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close menu">
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
              <AgencyButton to="/contact" className="mt-4 w-fit" variant="fill">
                Book a scoping call
              </AgencyButton>
            </div>
          </Drawer>
        </div>
      </div>

      {!isOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 pointer-events-none px-4 pb-[max(0.85rem,env(safe-area-inset-bottom))]">
          <div className="flex justify-center pointer-events-auto">
            <CtaButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
