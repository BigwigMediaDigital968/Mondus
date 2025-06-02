import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  BedDouble,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
} from "lucide-react";
import { Bath } from "lucide-react";
import { Link } from "react-router-dom";

// Lazy load components
const Navbar = lazy(() => import("../components/Nav"));
const Footer = lazy(() => import("../components/Footer"));
const NotifyMe = lazy(() => import("../components/NotifyMe"));

const Buy: React.FC = () => {
  const [saleData, setSentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mondus-backend.onrender.com/api/properties/sale"
        );
        const data = await response.json();
        setSentData(data);
      } catch (error) {
        console.error("Error fetching sale properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const properties = saleData;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="mb-16 md:mb-28 pt-5">
        <Suspense
          fallback={<div className="text-center py-4">Loading navbar...</div>}
        >
          <Navbar />
        </Suspense>
      </div>

      <h1 className="text-2xl text-center">PROPERTIES FOR SALE IN DUBAI</h1>

      {/* Property Grid Section */}
      <div className="relative w-full md:w-[90%] mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        ) : properties.length === 0 ? (
          <p className="text-center text-gray-900">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, id) => (
              <Link to={`/buy/${property.id}`} key={id} className="h-full">
                <div className="bg-gray-100 dark:bg-neutral-900 shadow rounded overflow-hidden border border-gray-300 dark:border-gray-800 flex flex-col h-full">
                  {/* Lazy image */}
                  <div className="relative">
                    <img
                      loading="lazy"
                      src={
                        property.properties?.more_photo?.key_0?.src ||
                        "/placeholder.jpg"
                      }
                      alt={property.title}
                      className="w-full h-56 object-cover"
                    />
                  </div>

                  <div className="space-y-1 px-4 py-2 flex-grow">
                    <h3 className="text-lg">
                      {property.properties.link_subarea}
                    </h3>
                    <p className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {property.properties.link_district}
                    </p>
                    <p className="text-sm">
                      {property.properties.property_type}
                    </p>

                    <div className="flex items-center text-sm gap-4 py-1">
                      <div className="flex items-center gap-1">
                        <BedDouble className="w-4 h-4" />
                        <span>{property.properties.bedrooms_number}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.properties.bathrooms_number}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        <span>{property.properties.bua_area_size} sqft</span>
                      </div>
                    </div>

                    <p className="text-lg font-bold text-[var(--primary-color)]">
                      {property.price}
                    </p>
                  </div>

                  {/* Contact Icons */}
                  <div className="border-t border-gray-300 dark:border-white/20 mt-auto flex justify-around items-center text-[var(--primary-color)] py-2 text-sm divide-x dark:divide-white/20 divide-gray-300">
                    <a
                      href={`tel:${property.properties.link_to_employee.phone}`}
                      className="flex-1 flex justify-center items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${property.properties.link_to_employee.email}`}
                      className="flex-1 flex justify-center items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${property.properties.link_to_employee.phone}`}
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
            ))}
          </div>
        )}
      </div>

      <Suspense
        fallback={
          <div className="text-center py-4">Loading notify section...</div>
        }
      >
        <NotifyMe />
      </Suspense>

      <Suspense
        fallback={<div className="text-center py-4">Loading footer...</div>}
      >
        <Footer />
      </Suspense>
    </div>
  );
};

export default Buy;
