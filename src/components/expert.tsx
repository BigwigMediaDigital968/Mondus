import React from "react";
import {
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaHome,
} from "react-icons/fa";

const RealEstateExperts: React.FC = () => {
  return (
    <div className="bg-white py-12 text-black dark:bg-black dark:text-white transition-colors font-raleway">
      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-4 md:gap-8 items-center p-4 md:p-16">
        {/* Image section */}
        <div className="relative w-full md:col-span-1 flex justify-center">
          <img
            src="https://www.axcapital.ae/_ipx/_/img/real-estate-experts.webp"
            alt="Real Estate Experts"
            className="w-full"
            draggable="false"
          />

          {/* Mobile stats overlay
          <div className="absolute bottom-0 w-full md:hidden bg-white/90 dark:bg-black/80 flex justify-around py-4 text-center">
            <div>
              <h3 className="text-lg font-semibold">5000+</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Listed Properties
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">7+</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Languages Spoken
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">120+</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Consultants
              </p>
            </div>
          </div> */}
        </div>

        {/* Text and stats */}
        <div className="mt-8 md:mt-0 md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            REAL ESTATE EXPERTS
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
            Mondus Properties is your trusted guide in the UAE real estate
            market. As an emerging real estate agency and investment advisor in
            Dubai, we are committed to helping clients explore ideal
            opportunities—whether they are buying, renting, or investing.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
            Our extensive real estate collection includes some of Dubai’s most
            desirable properties, located in the most sought-after
            neighborhoods. Whether you're a first-time buyer, a seasoned
            investor, or searching for your dream home, we provide access to
            exclusive listings and a seamless experience tailored to your needs.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
            With a dedicated team of industry experts, we prioritize
            transparency, trust, and personalized service. Our deep
            understanding of the Dubai market ensures you make informed and
            strategic decisions. Let Mondus Properties help you turn your dream
            home into a reality.
          </p>

          <a href="/contact">
            <button className="border px-6 py-3 transition mb-8 border-[var(--primary-color)] text-black hover:opacity-70 bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579]">
              Enquire Now
            </button>
          </a>
        </div>
      </div>
      {/* Desktop stats */}
      <div className="grid grid-cols-3 md:grid-cols-6 text-center gap-6 w-11/12 mx-auto">
        <div>
          <FaBuilding className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">5000+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Listed Properties
          </p>
        </div>
        <div>
          <FaGlobe className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">7+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Languages Spoken
          </p>
        </div>
        <div>
          <FaUsers className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">120+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Property Consultants
          </p>
        </div>
        <div>
          <FaHandshake className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">500+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Properties Sold
          </p>
        </div>
        <div>
          <FaHome className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">2000+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Rental Options
          </p>
        </div>
        <div>
          <FaChartLine className="text-2xl mb-2 mx-auto text-[var(--primary-color)]" />
          <h3 className="text-2xl font-sans">5B+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Turn Over
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateExperts;
