import React from "react";
import { Building2, Home, KeyRound } from "lucide-react"; // Lucide icons (or use any icon set)

type Service = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  redirected: string;
};

const services: Service[] = [
  {
    icon: <Building2 size={32} className="text-[#9C623E]" />,
    label: "Offplan Properties",
    title: "Offplan Properties",
    description:
      "Off-plan properties in Dubai are ideal for buyers and investors wanting lower entry prices and flexible payment options. These properties are purchased before completion, offering the potential for higher returns. With the right support, you can explore trusted developments and secure investment properties tailored to your goals.",
    redirected: "/offplan",
  },
  {
    icon: <Home size={32} className="text-[#9C623E]" />,
    label: "Ready Properties",
    title: "Ready Properties",
    description:
      "Ready properties allow for instant viewing, faster handover, and a hassle-free buying experience. If you're looking for a home in Dubai for sale, these options offer convenience and certainty. Our team ensures a smooth process so you can settle in quickly, without construction delays or wait times.",
    redirected: "/buy",
  },
  {
    icon: <KeyRound size={32} className="text-[#9C623E]" />,
    label: "Rental Properties",
    title: "Rental Properties",
    description:
      "Rental properties in Dubai UAE offer flexibility for short-term or long-term needs. Our listings include a wide range of rental properties in Dubai UAE, offering the flexibility to suit your lifestyle, budget, and future plans. Apartments, villas, and serviced units are all available with expert guidance to help you find the perfect fit.",
    redirected: "/rent",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway custom-gradient-lines relative">
      <section className="max-w-7xl px-6 py-16 mx-auto">
        <div className="mb-6">
          <p className="text-md mb-2 tracking-wider text-[#9C623E] font-semibold uppercase">
            Our Services
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-black dark:text-gray-100">
            Buy Your Ideal Property in Dubai with Trusted Experts
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <a
              href={service.redirected}
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
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
