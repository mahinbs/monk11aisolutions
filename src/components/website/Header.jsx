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
    <AgencyButton to="/contact" variant="fill">
      Book a scoping call
    </AgencyButton>
  );

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full bg-white border-b border-black/10">
        <div className="flex wrapper items-center gap-8 justify-between">
          <Link
            to="/"
            className="cursor-pointer shrink-0 flex items-center"
            aria-label="Monk11 AI Solutions home"
          >
            <img
              loading="lazy"
              src={logoOnLight}
              alt="Monk11 AI Solutions"
              width="200"
              height="88"
              className="site-logo-on-light"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
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
            <CtaButton />
          </nav>
          <div className="lg:hidden shrink-0">
            <Hamburger
              color="#111111"
              size={22}
              toggled={isOpen}
              rounded
              hideOutline
              toggle={setIsOpen}
              label="Open menu"
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
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src={logoOnLight}
                width="auto"
                height="auto"
                alt="Monk11 AI Solutions"
                className="site-logo-on-light h-12"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
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
