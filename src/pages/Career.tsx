import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import SendResume from "../components/SendResume";

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

      <SendResume />
      <Footer />
    </div>
  );
};

export default Career;
