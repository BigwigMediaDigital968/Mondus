import { FaBath, FaBed, FaHeart } from "react-icons/fa";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const properties = [
  {
    id: 1,
    title: "Bliss",
    location: "Arabian Ranches 3, Dubai",
    type: "Apartment",
    price: "AED 2,850,000",
    image:
      "https://mondusproperties.ae/storage/properties/bliss/b5-400x260.png",
    beds: 3,
    baths: 4,
  },
  {
    id: 2,
    title: "South Bay",
    location: "Dubai South, Dubai",
    type: "Villa",
    price: "AED 4,699,999",
    image:
      "https://mondusproperties.ae/storage/properties/south-bay/s1-400x260.png",
    beds: 5,
    baths: 7,
  },
  {
    id: 3,
    title: "Jebel Ali Village",
    location: "Jebel Ali, Dubai",
    type: "Villa",
    price: "AED 7,200,000",
    image:
      "https://mondusproperties.ae/storage/properties/jebel-ali/j1-400x260.png",
    beds: 4,
    baths: 5,
  },
  {
    id: 4,
    title: "Avonlea",
    location: "Mina Rashid, Dubai",
    type: "Apartment",
    price: "AED 1,950,000",
    image:
      "https://mondusproperties.ae/storage/properties/avonlea/a1-400x260.png",
    beds: 1,
    baths: 1,
  },
  {
    id: 5,
    title: "The Hamilton",
    location: "Town Square, Dubai",
    type: "Apartment",
    price: "AED 1,299,999",
    image:
      "https://mondusproperties.ae/storage/properties/hamilton/h1-400x260.png",
    beds: 2,
    baths: 2,
  },
  {
    id: 6,
    title: "Nadine Residences",
    location: "Al Furjan, Dubai",
    type: "Apartment",
    price: "AED 2,300,000",
    image:
      "https://mondusproperties.ae/storage/properties/nadine-residences/n1-400x260.png",
    beds: 3,
    baths: 3,
  },
];

const position: LatLngExpression = [25.276987, 55.296249];

const PropertyCard = ({ property }: { property: (typeof properties)[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow border hover:shadow-md transition duration-200 overflow-hidden">
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
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full text-gray-700">
          <FaHeart size={14} />
        </button>
        <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-0.5 rounded shadow">
          {property.type}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-base mb-1">{property.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{property.location}</p>
        <div className="flex items-center gap-4 text-sm text-gray-700 mb-2">
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
    <div>
      <Navbar />
      <section className="px-4 sm:px-6 lg:px-10 py-24">
        <div className="h-64 w-full mb-6 rounded-lg overflow-hidden shadow">
          <MapContainer
            center={position}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>

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
