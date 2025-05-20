// components/WhatWeDoSection.tsx

import React from "react";

type Service = {
  icon: string;
  label: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "https://mondusproperties.ae/storage/avatars/offplan-1.png",
    label: "Offplan Properties",
    title: "Get Offplan Properties",
    description:
      "Off-plan properties in Dubai are developments that are sold before their completion, often at a lower price than ready properties. Investors and buyers purchase these properties directly from developers, benefiting from flexible payment plans and potential capital gains.",
  },
  {
    icon: "https://mondusproperties.ae/storage/avatars/ready.png",
    label: "Ready Properties",
    title: "Get Ready Properties",
    description:
      "Ready properties in Dubai are completed units available for immediate handover and occupancy. Buyers can view the property before purchasing, and there is no waiting period for construction or delivery.",
  },
  {
    icon: "https://mondusproperties.ae/storage/avatars/rental.png",
    label: "Rental Properties",
    title: "Get Rental Properties",
    description:
      "Rental properties in Dubai offer tenants a wide range of options, from apartments to villas, available for short or long-term leases. These properties provide flexibility for residents without the commitment of property ownership.",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <section className="max-w-7xl px-4  py-16 mx-auto ">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm tracking-wider text-[#9C623E] font-semibold uppercase">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-1">
              What We Do?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <img
                src={service.icon}
                alt={service.label}
                className="w-12 h-12 mx-auto md:mx-0"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
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
