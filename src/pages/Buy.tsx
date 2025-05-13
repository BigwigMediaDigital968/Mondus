import React, { useState, useMemo } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Range } from "react-range";
import PromptConsultation from "../components/PromptConsultation";
import rentData from "../data/BuyData.json";

const Buy: React.FC = () => {
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [areaRange, setAreaRange] = useState([900, 3200]);
  const [priceRange, setPriceRange] = useState([500000, 4800000]);

  const filteredProperties = useMemo(() => {
    return rentData.filter((property) => {
      // Clean and convert price and area
      const priceAED = Number(property.price.replace(/[^\d]/g, ""));
      const areaSqft = Number(property.area.replace(/[^\d]/g, ""));
      const propertyBedrooms = Number(property.bedrooms || 0);

      const matchesType = propertyType
        ? property.propertyType === propertyType
        : true;

      const matchesBedrooms = bedrooms
        ? propertyBedrooms === Number(bedrooms)
        : true;

      const matchesPrice =
        priceAED >= priceRange[0] && priceAED <= priceRange[1];

      const matchesArea = areaSqft >= areaRange[0] && areaSqft <= areaRange[1];

      return matchesType && matchesBedrooms && matchesPrice && matchesArea;
    });
  }, [propertyType, bedrooms, priceRange, areaRange]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div className="mb-16 md:mb-32 pt-5">
        <Navbar />
      </div>

      {/* Filters */}
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-6">
        {/* Property Type */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 px-4 py-2 rounded text-black dark:text-white"
          >
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 px-4 py-2 rounded text-black dark:text-white"
          >
            <option value="">Any</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Area Range */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Area (sqft)</label>
          <div className="border border-gray-400 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-black relative">
            <div className="flex justify-between text-xs mb-2">
              <span>{areaRange[0].toLocaleString()}</span>
              <span>{areaRange[1].toLocaleString()}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={100}
                min={900}
                max={3200}
                values={areaRange}
                onChange={setAreaRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-gray-300 dark:bg-gray-700 rounded"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #ccc ${
                        ((areaRange[0] - 900) / (3200 - 900)) * 100
                      }%, var(--primary-color) ${
                        ((areaRange[0] - 900) / (3200 - 900)) * 100
                      }%, var(--primary-color) ${
                        ((areaRange[1] - 900) / (3200 - 900)) * 100
                      }%, #ccc ${
                        ((areaRange[1] - 900) / (3200 - 900)) * 100
                      }%)`,
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 bg-[var(--primary-color)] rounded-full shadow"
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Price (AED)</label>
          <div className="border border-gray-400 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-black relative">
            <div className="flex justify-between text-xs mb-2">
              <span>{priceRange[0].toLocaleString()}</span>
              <span>{priceRange[1].toLocaleString()}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={100000}
                min={500000}
                max={4800000}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-gray-300 dark:bg-gray-700 rounded"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #ccc ${
                        (priceRange[0] / 4800000) * 100
                      }%, var(--primary-color) ${
                        (priceRange[0] / 4800000) * 100
                      }%, var(--primary-color) ${
                        (priceRange[1] / 4800000) * 100
                      }%, #ccc ${(priceRange[1] / 4800000) * 100}%)`,
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 bg-[var(--primary-color)] rounded-full shadow"
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Properties Listing */}
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {filteredProperties.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No properties found with the selected filters.
          </p>
        ) : (
          filteredProperties.map((property, id) => (
            <div
              key={id}
              className="bg-white dark:bg-zinc-900 shadow rounded overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={property.images?.[0] || "/placeholder.jpg"}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="bg-white dark:bg-black px-2 py-1 rounded-full shadow text-black dark:text-white">
                    <span className="text-lg font-bold">+</span>
                  </button>
                  <button className="bg-white dark:bg-black px-2 py-1 rounded-full shadow text-black dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M6 4c-1.1 0-2 .9-2 2v16l8-3.2L20 22V6c0-1.1-.9-2-2-2H6z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-500">{property.location}</p>
                <p className="text-sm">{property.propertyType}</p>

                {/* Icons Section */}
                <div className="flex items-center text-sm gap-4 py-1">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M6 6h12v12H6z" fill="none" />
                      <path d="M7 7h10v10H7z" />
                    </svg>
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M6 6h12v12H6z" fill="none" />
                      <path d="M7 7h10v10H7z" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>

                <p className="text-lg font-bold text-[var(--primary-color)]">
                  {property.price}
                </p>

                {/* Call + WhatsApp Icons */}
                <div className="flex justify-between items-center pt-3 text-sm text-[var(--primary-color)]">
                  <a
                    href={`tel:+97100000000`}
                    className="hover:underline flex items-center gap-1"
                  >
                    📞
                  </a>
                  <a
                    href={`mailto:info@example.com`}
                    className="hover:underline flex items-center gap-1"
                  >
                    ✉️
                  </a>
                  <a
                    href={`https://wa.me/97100000000`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    💬
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default Buy;
