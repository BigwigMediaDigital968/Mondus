import { useParams } from "react-router-dom";
import { MapPin, BedDouble, Ruler, Plus, Bookmark } from "lucide-react";
import buyData from "../data/BuyData.json";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";

const BuyDetails = () => {
  const { title } = useParams<{ title: string }>();
  const decodedTitle = title?.replace(/-/g, " ").toLowerCase();
  //   const [selectedCurrency, setSelectedCurrency] = useState("AED");

  const property = buyData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, " ") === decodedTitle
  );

  if (!property) {
    return (
      <div className="text-center p-10 text-gray-500 dark:text-gray-400">
        Property not found.
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="mb-16 md:mb-28 pt-5">
        <Navbar />
      </div>

      <div className="w-full md:w-[90%] mx-auto p-4 space-y-8">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4 h-[400px]">
          <div className="w-full md:w-2/3 h-full">
            <img
              src={property.images[0]}
              alt="Main"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-1/3 hidden md:flex flex-col gap-2">
            <img
              src={property.images[1]}
              alt="Side 1"
              className="w-full h-1/2 object-cover rounded-md"
            />
            <img
              src={property.images[2]}
              alt="Side 2"
              className="w-full h-1/2 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Title & Price */}
        <div className="flex justify-between items-center gap-4">
          {/* Title */}
          <h1 className="text-2xl font-bold">{property.title}</h1>

          {/* Action Icons */}
          <div className="flex gap-2">
            <button className="bg-white dark:bg-neutral-800 p-2 rounded-full border dark:border-white/20 shadow text-black dark:text-white">
              <Plus className="w-4 h-4" />
            </button>
            <button className="bg-white dark:bg-neutral-800 p-2 rounded-full border dark:border-white/20 shadow text-black dark:text-white">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-xl font-bold text-[var(--primary-color)]">
          {property.price}
        </p>

        {/* Details Row */}
        <div className="flex flex-wrap gap-6 items-center text-sm text-gray-700 dark:text-gray-300">
          <p className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {property.location}
          </p>
          <p className="flex items-center gap-1">{property.propertyType}</p>
          <p className="flex items-center gap-1">
            <BedDouble className="w-4 h-4" />
            {property.bedrooms} Bedrooms
          </p>
          <p className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            {property.area}
          </p>
        </div>

        {/* Features & Amenities */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Features & Description */}
          <div className="md:w-2/3 space-y-6">
            {/* Features & Amenities */}
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Features & Amenities
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {property.featuresAndAmenities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {property.description}
              </p>
            </div>
          </div>

          {/* Right Column: Consultant Box */}
          <div className="md:w-1/3 w-full border border-gray-200 dark:border-white/20 p-4 rounded-md bg-white dark:bg-neutral-900 shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Consultant"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  John Doe
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Senior Property Consultant
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <button className="bg-[var(--primary-color)] text-white py-2 rounded hover:opacity-90 transition">
                  Call Now
                </button>
                <button className="border border-[var(--primary-color)] text-[var(--primary-color)] py-2 rounded hover:bg-[var(--primary-color)] hover:text-white transition">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromptConsultation />

      <Footer />
    </div>
  );
};

export default BuyDetails;
