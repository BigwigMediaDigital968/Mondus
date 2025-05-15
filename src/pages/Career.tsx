import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import SendResume from "../components/SendResume";

const jobs = [
  {
    title: "Social Media Handler cum Content Creator",
    date: "Jan 09, 2025",
    location: "Dubai",
    salary: "Competitive salary",
    description:
      "Mondus Properties is a leading real estate company committed to delivering innovative and sustainable properties that transform lifestyles. We’re looking for a creative and tech-savvy Social Media Handler cum Content Creator to enhance our online presence and effectively communicate our brand story.",
  },
  {
    title: "Marketing Head",
    date: "Jan 09, 2025",
    location: "Dubai",
    salary: "Competitive salary",
    description:
      "Mondus Properties is a leading name in the real estate industry, known for delivering innovative, sustainable, and high-quality properties that enhance lifestyles. As we continue to expand, we are seeking a dynamic and experienced Marketing Head to lead our marketing strategies and drive brand growth.",
  },
  {
    title: "Sales Manager",
    date: "Nov 07, 2024",
    location: "Dubai",
    salary: "Competitive salary",
    description:
      "Mondus Properties is seeking an experienced and driven Sales Manager to lead our real estate sales team. In this role, you will be responsible for managing and guiding a team of property consultants, developing sales strategies, and achieving company sales targets. You will leverage your market knowledge and leadership skills to drive sales growth, enhance client satisfaction, and build a high-performing team.",
  },
  {
    title: "Property Consultant",
    date: "Nov 07, 2024",
    location: "Dubai",
    salary: "Competitive Commission",
    description:
      "Mondus Properties is seeking a motivated Property Consultant to join our team. In this role, you will assist clients with buying, selling, and renting properties, providing expert advice and personalized service. You’ll leverage market insights to guide clients through every step of the property transaction.",
  },
];

const Career = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Navbar />

      <section className="relative h-screen w-full">
        <img
          src="https://www.axcapital.ae/_ipx/s_1920x960/img/careers/careers-banner.webp"
          alt="Career"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white mb-4">CAREERS</h1>
          <p className="text-lg md:text-2xl text-white">
            What clients say about us
          </p>
        </div>
      </section>

      <section className="w-full md:w-[90%] mx-auto px-4 py-12">
        <div>
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <h2 className="text-3xl md:text-4xl">
              Build a career in an innovative real estate agency
            </h2>
            <p className="text-sm md:text-base  leading-relaxed">
              Our sole focus is to ensure that the client's apartment or villa
              is designed and furnished with their ideas and personalities. We
              provide an interior decor consultation, turnkey solutions, project
              management, home decorating and furniture selection to help you
              realize your dream.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-full w-full">
              <img
                src="https://www.axcapital.ae/img/careers/build-career01.webp"
                alt="Mondus Properties Career"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://www.axcapital.ae/img/careers/build-career02.webp"
                alt="Career at Mondus"
                className="w-full h-full object-cover"
              />
              <img
                src="https://www.axcapital.ae/img/careers/build-career03.webp"
                alt="Mondus Properties Team"
                className="w-full h-full object-cover"
              />
              <img
                src="https://www.axcapital.ae/img/careers/build-career03.webp"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
              <img
                src="https://www.axcapital.ae/img/careers/build-career02.webp"
                alt="Work at Mondus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-[90%] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">WORK WITH US</h2>
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">Mondus Properties</span> strives
              to build a team of talented professionals and is passionate about
              helping them do what they love throughout their career here. We
              are always on the lookout for enthusiastic and driven people,
              offering countless prospects and professional growth.
            </p>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-semibold">Mondus Properties</span> is always
              interested in motivated people on its team. Send your CV and we
              will contact you if we find a suitable position.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full md:w-[90%] mx-auto px-4 py-10 font-raleway">
        <h1 className="text-4xl mb-4">OPPORTUNITIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {job.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {job.date}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {job.description}
              </p>
              <div className="flex flex-wrap text-sm text-gray-600 dark:text-gray-400 gap-4">
                <span>📍 {job.location}</span>
                <span>💰 {job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SendResume />
      <Footer />
    </div>
  );
};

export default Career;
