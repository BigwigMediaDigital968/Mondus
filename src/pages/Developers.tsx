import "leaflet/dist/leaflet.css";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";

const developerLogos = [
  "https://fnst.axflare.com/developer/logo/JPEG/DtEqnsLmOt.jpeg",
  "https://fnst.axflare.com/developer/logo/JPEG/sWynXhEREA.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/HboeEjxEzN.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/YfYzgxbwaz.jpeg",
  "https://fnst.axflare.com/developer/logo/JPEG/TySkvdlqZd.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/wqgqirrcwX.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/XcbsXzxxkH.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/ApYJreYHLi.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/gwEdRNLdmu.jpeg",
  "https://fnst.axflare.com/developer/logo/JPEG/WBpJivDVdD.jpeg",
  "https://fnst.axflare.com/developer/logo/JPEG/kJFDEiEEAo.jpg",
  "https://fnst.axflare.com/developer/logo/JPEG/uXfCnRmXrA.jpeg",
];

const Developers = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Navbar />

      {/* Hero Image with Overlay Text */}
      <section className="relative h-[50vh] md:h-[100vh] w-full">
        <img
          src="https://www.axcapital.ae/_ipx/s_1920x960/img/developers/developers-banner.webp"
          alt="Developers Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4 font-raleway font-thin">
          <h1 className="text-4xl md:text-6xl text-white mb-4">Developers</h1>
          <p className="text-lg md:text-2xl text-white">
            More about Dubai developers
          </p>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="w-full md:w-[90%] mx-auto my-16 px-5">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Trusted Real Estate Developers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {developerLogos.map((logo, index) => (
            <div
              key={index}
              className="border border-neutral-700 rounded-lg flex items-center justify-center shadow hover:shadow-md transition"
            >
              <img
                src={logo}
                alt={`Developer ${index + 1}`}
                className="w-full rounded-lg invert dark:invert-0"
              />
            </div>
          ))}
        </div>
      </section>

      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default Developers;
