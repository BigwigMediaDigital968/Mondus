"use client";

import { useState } from "react";
import Image from "../assets/List_Your_Property.webp";
import PropertyForm from "./PropertyForm";

const ListProperty = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white py-10  ">
        <div className="max-w-7xl mx-auto container px-4 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={Image}
              alt="List Property"
              width={800}
              height={600}
              draggable={false}
              className="rounded-lg object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 font-raleway font-thin">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-black dark:text-gray-100">
              List Your Property
            </h2>
            <p className="text-gray-800 font-light dark:font-thin dark:text-gray-200 mb-8 text-lg leading-relaxed text-justify">
              Hunting for the best way to sell or rent your property in Dubai?
              Mondus Properties makes the process simple as possible. If you own
              an apartment for rent in Dubai or wish to sell it, our expert
              support and trusted platform ensure your listing reaches serious
              buyers and tenants quickly. Our team of experienced real estate
              agents in Dubai offers highest exposure, smart pricing, and
              qualified leads. List your property with Mondus Properties and
              experience real estate done right from start to finish.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className=" px-6 py-3 font-raleway font-light bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] text-black  hover:opacity-90 transition"
            >
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {showForm && <PropertyForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default ListProperty;
