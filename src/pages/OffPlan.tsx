import { FaBath, FaBed, FaHeart } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import properties from "../data/OffPlanData.json";

const PropertyCard = ({ property }: { property: (typeof properties)[0] }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-black dark:text-white  shadow border dark:border-white/10 hover:shadow-md transition duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-1 text-xs">
          <span className="bg-green-600 text-white px-2 py-0.5 rounded">
            Featured
          </span>
          <span className="bg-orange-600 text-white px-2 py-0.5 rounded">
            Selling
          </span>
        </div>
        <button className="absolute top-2 right-2 bg-white dark:bg-neutral-800 p-1 rounded-full text-gray-700 dark:text-white">
          <FaHeart size={14} />
        </button>
        <div className="absolute bottom-2 left-2 bg-white dark:bg-neutral-800 text-xs px-2 py-0.5 rounded shadow">
          {property.type}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-base mb-1">{property.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {property.location}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300 mb-2">
          <span className="flex items-center gap-1">
            <FaBed /> {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {property.baths}
          </span>
        </div>
        <div className="font-semibold text-[var(--primary-color)] text-lg">
          {property.price}
        </div>
      </div>
    </div>
  );
};

const OffPlan = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <Navbar />

      {/* Hero Image with Overlay Text */}
      <section className="relative h-screen w-full">
        <img
          src="https://www.axcapital.ae/_ipx/s_1920x960/img/intro/offplan.webp" // Replace with your actual image path
          alt="Off Plan Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4 font-raleway font-thin">
          <h1 className="text-4xl md:text-6xl  text-white mb-4">
            Off Plan in Dubai
          </h1>
          <p className="text-lg md:text-2xl text-white">
            New top-launched projects
          </p>
        </div>
      </section>

      {/* Property Cards Section */}
      <section className="px-4 sm:px-6 py-24 md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OffPlan;
