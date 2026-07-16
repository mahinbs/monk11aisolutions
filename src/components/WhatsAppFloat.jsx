import React from "react";
import { companyDetails, getWhatsAppLink } from "../data/constant";

const WhatsAppFloat = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${companyDetails.shortName} on WhatsApp`}
      className="fixed bottom-5 right-5 z-[60] group flex items-center gap-3"
    >
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-lg border border-gray-100">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform duration-300">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <i className="fa fa-whatsapp text-3xl relative z-10" aria-hidden="true" />
      </span>
    </a>
  );
};

export default WhatsAppFloat;
