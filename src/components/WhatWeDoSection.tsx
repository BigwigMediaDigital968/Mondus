import React from "react";
import { Building2, Home, KeyRound } from "lucide-react"; // Lucide icons (or use any icon set)

type Service = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <Building2 size={32} className="text-[#9C623E]" />,
    label: "Offplan Properties",
    title: "Get Offplan Properties",
    description:
      "Off-plan properties in Dubai are sold before completion, often with flexible plans and good investment returns.",
  },
  {
    icon: <Home size={32} className="text-[#9C623E]" />,
    label: "Ready Properties",
    title: "Get Ready Properties",
    description:
      "Ready-to-move-in properties available for viewing and instant handover — no wait, no hassle.",
  },
  {
    icon: <KeyRound size={32} className="text-[#9C623E]" />,
    label: "Rental Properties",
    title: "Get Rental Properties",
    description:
      "From short-term apartments to long-term villas, rentals offer maximum flexibility for every lifestyle.",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway custom-gradient-lines relative">
      <section className="max-w-7xl px-6 py-16 mx-auto">
        <div className="mb-6">
          <p className="text-sm tracking-wider text-[#9C623E] font-semibold uppercase">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-black dark:text-gray-100">
            We Help You Find and Buy Your Exact Match
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gray-100 dark:bg-zinc-900 hover:shadow-xl rounded-xl p-6 transition duration-300 flex flex-col space-y-4 md:space-y-6 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
