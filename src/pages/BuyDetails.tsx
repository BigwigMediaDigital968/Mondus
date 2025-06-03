import { useParams } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { MapPin, BedDouble, Ruler, Bath } from "lucide-react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import NotifyMe from "../components/NotifyMe";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Property {
  geopoints: any;
  detail_text: string;
  id: string;
  name: string;
  price: string;
  properties: {
    link_city: ReactNode;
    link_district: ReactNode;
    geopoints: any;
    link_to_employee: any;
    property_type: string;
    bedrooms_number: number;
    bathrooms_number: number;
    bua_area_size: string;
    link_subarea: string;
    more_photo: {
      key_0: { src: string };
      key_1?: { src: string };
      key_2?: { src: string };
    };
    description: string;
    featuresAndAmenities: string[];
  };
}

const BuyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("saleProperties");

    if (cached) {
      const parsed = JSON.parse(cached);
      const found = parsed.find((p: any) => p.id.toString() === id);

      if (found) {
        setProperty(found);
        setLoading(false);
        return;
      }
    }

    // fallback: fetch specific property if not found in cache
    const fetchProperty = async () => {
      try {
        const res = await fetch(
          `https://mondus-backend.onrender.com/api/properties/sale/${id}`
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
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
        <div className="w-12 h-12 border-4 border-[var(--primary-color)] border-t-transparent dark:border-white dark:border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!property) return <div className="p-6">Property not found.</div>;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center p-10 text-gray-500 dark:text-gray-400">
        Property not found.
      </div>
    );
  }

  const images = Object.values(property.properties.more_photo || {})
    .map((img) => img?.src)
    .filter(Boolean);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 2000,
    pauseonhover: false, // Scroll every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [lng, lat] =
    property.properties.geopoints?.split(",").map(Number) || [];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="mb-16 md:mb-28 pt-5">
        <Navbar />
      </div>

      <div className="w-full px-4 md:w-[90%] mx-auto p-4 space-y-8 overflow-visible relative">
        {/* Images */}
        <div className="w-full">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="px-2">
                <img
                  src={src}
                  alt={`Property image ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Title and Actions */}
        <div className="flex justify-between items-center gap-7">
          <h2 className="md:text-2xl font-bold text-sm">
            {property.properties.link_subarea}
          </h2>

          <h1 className="md:text-2xl font-bold text-sm">{property.name}</h1>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-[var(--primary-color)]">
          {property.price}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-6 items-center text-sm text-gray-700 dark:text-gray-300">
          <p className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {property.properties.link_district}
          </p>
          <p>{property.properties.link_city}</p>
          <p>{property.properties.property_type}</p>
          <p className="flex items-center gap-1">
            <BedDouble className="w-4 h-4" />
            {property.properties.bedrooms_number} Bedrooms
          </p>
          <p className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {property.properties.bathrooms_number} Bathrooms
          </p>
          <p className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            {property.properties.bua_area_size} sqft
          </p>
        </div>

        {/* Features & Description */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 space-y-6">
            {/* <div>
              <h2 className="text-lg font-semibold mb-2">
                Features & Amenities
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {property.properties.featuresAndAmenities?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                )) || <li>Not listed</li>}
              </ul>
            </div> */}

            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <div
                className="text-gray-700 dark:text-gray-300 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: property.detail_text || "No description available.",
                }}
              />
            </div>
          </div>

          {/* Consultant Sidebar */}
          <div className="md:w-1/3 w-full">
            <div className=" border border-gray-200 dark:border-white/20 p-4 rounded-md bg-white dark:bg-neutral-900 shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {property.properties.link_to_employee.full_name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Senior Property Consultant
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <a
                    className="bg-[var(--primary-color)] text-white py-2 rounded hover:opacity-90 transition"
                    href={`tel:${property.properties.link_to_employee.phone}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Call Now
                  </a>
                  <a
                    className="bg-[var(--primary-color)] text-white py-2 rounded hover:opacity-90 transition"
                    href={`mailto:${property.properties.link_to_employee.email}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${property.properties.link_to_employee.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    target="blank"
                    className="border border-[var(--primary-color)] text-[var(--primary-color)] py-2 rounded hover:bg-[var(--primary-color)] hover:text-white transition"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      {lat && lng && (
        <div className="pt-4 px-16">
          <h2 className="text-lg font-semibold mb-2">Property Location</h2>
          <div className="w-full h-[300px] rounded-md overflow-hidden border dark:border-white/20">
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
      <NotifyMe />
      <Footer />
    </div>
  );
};

export default BuyDetails;
