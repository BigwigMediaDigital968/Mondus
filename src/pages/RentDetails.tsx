import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MapPin,
  BedDouble,
  Ruler,
  Bath,
  Building,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import NotifyMe from "../components/NotifyMe";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("rentProperties");
    if (cached) {
      const parsed = JSON.parse(cached);
      const found = parsed.find((p: any) => p.id.toString() === id);
      if (found) {
        setProperty(found);
        setLoading(false);
        return;
      }
    }

    const fetchProperty = async () => {
      try {
        const res = await fetch(
          `https://mondus-backend.onrender.com/api/properties/rent/${id}`
        );
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center text-gray-500 p-10">Property not found.</div>
    );
  }

  const images = Object.values(property.properties.more_photo || {})
    .map((img: any) => img?.src)
    .filter(Boolean);

  const [lng, lat] =
    property.properties.geopoints?.split(",").map(Number) || [];

  const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute hidden md:block top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white dark:bg-black text-[var(--primary-color)] p-2 rounded-full shadow cursor-pointer hover:scale-105 transition"
    >
      <ChevronRight size={48} />
    </div>
  );

  const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute hidden md:block top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white dark:bg-black text-[var(--primary-color)] p-2 rounded-full shadow cursor-pointer hover:scale-105 transition"
    >
      <ChevronLeft size={48} />
    </div>
  );

  const settings = {
    centerMode: true,
    centerPadding: "20%", // desktop: peek sides
    slidesToShow: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // below 640px (mobile)
        settings: {
          centerMode: false, // turn off center mode
          centerPadding: "0px", // no side preview
          slidesToShow: 1, // full‐width slide
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <Navbar />

      {/* Hero Image Slider */}
      <div className="w-full py-8">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <img
                src={src}
                alt={`Image ${index}`}
                className="rounded-lg object-cover md:h-[90vh]  w-full shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Info */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {property.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-5 text-md">
              {property.properties.link_city},{" "}
              {property.properties.link_district}
            </p>
          </div>
          <div className="text-2xl text-[var(--primary-color)] font-bold">
            ₹ {property.price}
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-700 dark:text-gray-300 text-md">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            {property.properties.link_subarea}
          </div>
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            {property.properties.bedrooms_number} Bedrooms
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} />
            {property.properties.bathrooms_number} Bathrooms
          </div>
          <div className="flex items-center gap-2">
            <Ruler size={18} />
            {property.properties.bua_area_size} sqft
          </div>
          <div className="flex items-center gap-2">
            <Building size={18} />
            {property.properties.property_type}
          </div>
        </div>

        {/* Description and Consultant */}
        {/* Description and Consultant */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Left Section (scrolls normally) */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Property Description</h2>
            <div
              className="text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: property.detail_text || "No description available.",
              }}
            />
          </div>

          {/* Right Sticky Consultant Section */}
          <div className="sticky top-36 self-start">
            <div className="border border-gray-200 dark:border-white/10 p-6 rounded-md shadow bg-white dark:bg-neutral-900">
              <h3 className="text-lg font-semibold mb-1">
                {property.properties.link_to_employee.full_name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Senior Property Consultant
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${property.properties.link_to_employee.phone}`}
                  className="bg-[var(--primary-color)] text-white py-2 rounded text-center"
                >
                  📞 Call
                </a>
                <a
                  href={`mailto:${property.properties.link_to_employee.email}`}
                  className="bg-[var(--primary-color)] text-white py-2 rounded text-center"
                >
                  📧 Email
                </a>
                <a
                  href={`https://wa.me/${property.properties.link_to_employee.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--primary-color)] text-[var(--primary-color)] py-2 rounded text-center hover:bg-[var(--primary-color)] hover:text-white transition"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        {lat && lng && (
          <div className="pt-8">
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <div className="h-[300px] w-full rounded-md overflow-hidden">
              <iframe
                src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}
      </div>

      <NotifyMe />
      <Footer />
    </div>
  );
};

export default RentDetails;
