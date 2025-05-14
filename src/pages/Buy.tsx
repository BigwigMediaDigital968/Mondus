import React, { useState, useMemo } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Range } from "react-range";
import PromptConsultation from "../components/PromptConsultation";
import rentData from "../data/BuyData.json";
import {
  BedDouble,
  Bookmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Ruler,
} from "lucide-react";
import { Link } from "react-router-dom";

const Buy: React.FC = () => {
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [areaRange, setAreaRange] = useState([500, 5000]);
  const [priceRange, setPriceRange] = useState([500000, 50000000]);

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
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="mb-16 md:mb-28 pt-5">
        <Navbar />
      </div>

      <h1 className="text-2xl text-center">PROPERTIES FOR SALE IN DUBAI</h1>

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
          <div className=" font-sans border border-gray-400 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-black relative">
            <div className="flex justify-between text-xs mb-2">
              <span>{areaRange[0].toLocaleString()}</span>
              <span>{areaRange[1].toLocaleString()}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={100}
                min={500}
                max={5000}
                values={areaRange}
                onChange={setAreaRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-gray-300 dark:bg-gray-700 rounded"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #ccc ${
                        ((areaRange[0] - 500) / (5000 - 500)) * 100
                      }%, var(--primary-color) ${
                        ((areaRange[0] - 500) / (5000 - 500)) * 100
                      }%, var(--primary-color) ${
                        ((areaRange[1] - 500) / (5000 - 500)) * 100
                      }%, #ccc ${
                        ((areaRange[1] - 500) / (5000 - 500)) * 100
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
          <div className=" font-sans border border-gray-400 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-black relative">
            <div className="flex justify-between text-xs mb-2">
              <span>{priceRange[0].toLocaleString()}</span>
              <span>{priceRange[1].toLocaleString()}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={50000}
                min={500000}
                max={50000000}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-gray-300 dark:bg-gray-700 rounded"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #ccc ${
                        (priceRange[0] / 50000000) * 100
                      }%, var(--primary-color) ${
                        (priceRange[0] / 50000000) * 100
                      }%, var(--primary-color) ${
                        (priceRange[1] / 50000000) * 100
                      }%, #ccc ${(priceRange[1] / 50000000) * 100}%)`,
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
      <div className="relative w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {filteredProperties.length === 0 ? (
          <p className="text-center col-span-full text-gray-900">
            No properties found with the selected filters.
          </p>
        ) : (
          filteredProperties.map((property, id) => (
            <Link
              to={`/buy/${property.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9\-]/g, "")}`}
              key={id}
              className="h-full"
            >
              <div className="bg-gray-100 dark:bg-neutral-900 shadow rounded overflow-hidden border border-gray-300 dark:border-gray-800 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={property.images?.[0] || "/placeholder.jpg"}
                    alt={property.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="bg-white dark:bg-black p-1 rounded-full shadow text-black dark:text-white">
                      <span className="text-sm">
                        <Plus />
                      </span>
                    </button>
                    <button className="bg-white dark:bg-black p-1 rounded-full shadow text-black dark:text-white">
                      <span className="text-xs">
                        <Bookmark />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Property Info */}
                <div className="space-y-1 px-4 py-2 flex-grow">
                  <h3 className="text-lg">{property.title}</h3>
                  <p className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </p>
                  <p className="text-sm">{property.propertyType}</p>

                  {/* Icons Section */}
                  <div className="flex items-center text-sm gap-4 py-1">
                    <div className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <p className="text-lg font-bold text-[var(--primary-color)]">
                    {property.price}
                  </p>
                </div>

                {/* Contact Icons */}
                <div className="border-t border-gray-300 dark:border-white/20 mt-auto flex justify-around items-center text-[var(--primary-color)] py-2 text-sm divide-x dark:divide-white/20 divide-gray-300">
                  <a
                    href={`tel:+9750000000`}
                    className="flex-1 flex justify-center items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:info@example.com`}
                    className="flex-1 flex justify-center items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/9750000000`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default Buy;
