import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";

const About = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Navbar />
      <section className="relative h-screen w-full">
        <img
          src="https://mondusproperties.ae/storage/yoyo.png"
          alt="About"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4">
          <h1 className="text-4xl md:text-5xl text-white mb-4">ABOUT MONDUS</h1>
          <p className="text-lg md:text-2xl text-white">
            Empowering your real estate journey with expertise, trust,
            reliability & ever lasting business relation.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin py-16">
        <div className="w-[90%] px-5 mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: About Content */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Mondus Properties is your trusted guide in the UAE real estate
              market. As an upcoming agency and investment advisor in Dubai,
              we’re committed to helping clients discover ideal options for
              buying, renting, or investing.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our extensive real estate collection features some of Dubai’s most
              desirable properties, giving clients access to abodes placed in
              the most sought-out locations across Dubai.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Whether you’re a first-time buyer, an experienced investor, or
              searching for your dream home, we are here to walk you through
              every step of the way — making the experience effortless.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              With a dedicated team of experts, we prioritize transparency,
              trust, and personalized service. Our knowledge of the Dubai market
              ensures that you’ll make informed, strategic decisions.
            </p>
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Let us help you turn your{" "}
              <span className="text-[var(--primary-color)]">DREAM HOME</span>{" "}
              INTO A REALITY.
            </h3>
          </div>

          {/* RIGHT SIDE: Visual/Highlights */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
              alt="Luxury Property"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-6 text-white text-center">
              <h4 className="text-2xl font-bold mb-3">Why Choose Us?</h4>
              <ul className="text-lg space-y-2">
                <li>✔ Trusted UAE Real Estate Experts</li>
                <li>✔ Transparent, Personalized Service</li>
                <li>✔ Access to Prime Dubai Properties</li>
                <li>✔ Guidance from Start to Finish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin py-16">
        <div className="w-[90%] px-5 mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-black dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Comprehensive support for buyers, investors, and property owners in
            Dubai
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {/* Service Card 1 */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl text-black dark:text-white mb-3">
              Consulting
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              We share our vast experience in Dubai’s real estate market and
              provide expert insights on buying, selling, and renting. Suitable
              for investors, businesses, and home seekers.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl text-black dark:text-white mb-3">
              Selecting & Viewing Property
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Tailored property searches based on your needs</li>
              <li>Virtual property tours via video communication</li>
              <li>Diverse options from top developers</li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl text-black dark:text-white mb-3">
              Deal Support
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Preparation & notarization of documents</li>
              <li>Joint deal negotiation</li>
              <li>Mortgage assistance</li>
              <li>Help with bank accounts, transfers, FX</li>
            </ul>
          </div>

          {/* Service Card 4 */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl text-black dark:text-white mb-3">
              After-Sales Service
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Property insurance support</li>
              <li>Utility service activation</li>
            </ul>
          </div>

          {/* Service Card 5 */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl text-black dark:text-white mb-3">
              Property & Business Management
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>In-house property management</li>
              <li>Short-term rentals</li>
              <li>Long-term rentals</li>
            </ul>
          </div>

          {/* Service Card 6 */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl text-black dark:text-white mb-3">
              Relocation Assistance
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Support with visa & residency processes</li>
              <li>School & community recommendations</li>
              <li>Help settling into your new property</li>
            </ul>
          </div>
        </div>
      </section>

      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default About;
