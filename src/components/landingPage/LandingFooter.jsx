import React from "react";
import { companyDetails } from "../../data/constant";
import SocialLinks from "../SocialLinks";

const LandingFooter = () => {
  return (
    <div className="py-[3rem] overflow-hidden border-t border-secondary/50 relative">
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-8 w-[12rem] aspect-square bg-primary/50 blur-[100px]"></div>
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-8 w-[12rem] aspect-square bg-secondary/50 blur-[100px]"></div>
      <div className="wrapper flex justify-between gap-10">
        <p className="">
          Copyright &copy; {new Date().getFullYear()} {companyDetails.name}. All
          rights reserved.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default LandingFooter;
