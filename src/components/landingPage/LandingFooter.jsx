import React from "react";
import { companyDetails } from "../../data/constant";
import SocialLinks from "../SocialLinks";

const LandingFooter = () => {
  return (
    <div className="py-[3rem] overflow-hidden border-t border-black/10 bg-white text-ink">
      <div className="wrapper flex justify-between gap-10">
        <p className="text-ink/50">
          Copyright &copy; {new Date().getFullYear()} {companyDetails.name}. All
          rights reserved.
        </p>
        <SocialLinks className="text-ink" />
      </div>
    </div>
  );
};

export default LandingFooter;
