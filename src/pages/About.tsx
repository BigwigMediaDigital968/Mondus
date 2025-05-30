import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

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
        <div className="w-[90%] px-5 mx-auto space-y-16">
          {/* Chairman Section */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={image1} // Replace with actual image URL
                alt="Chairman Sandeep Chachra"
                className="w-full h-[400px]  object-contain"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">
                Chairman & Founder
              </h3>
              <h4 className="text-xl font-medium mb-4 text-[var(--primary-color)]">
                Sandeep Chachra
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sandeep Chachra, a leader who founded Mondus Properties, is a
                well-respected figure in the real estate and hospitality
                industries. He began his career in hospitality, learning client
                needs and service excellence, before launching a brokerage
                office and building a strong portfolio in India. His transition
                to Dubai marked a turning point where he brought innovation and
                experience. Today, Mondus Properties thrives in the Dubai
                market, a testament to his vision and leadership.
              </p>
            </div>
          </div>

          {/* Managing Director Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={image2} // Replace with actual image URL
                alt="Managing Director Diksha Khatri"
                className="w-full h-[400px]  object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">Managing Director</h3>
              <h4 className="text-xl font-medium mb-4 text-[var(--primary-color)]">
                Diksha Khatri
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ms. Diksha Khatri, Co-Founder and Managing Director of Mondus
                Properties, combines experience from hospitality and real estate
                to lead the company with strategy and service excellence. Her
                strengths in market analysis and client relations have been key
                in growing the firm and building trust among clients. Diksha’s
                leadership ensures Mondus Properties continues to be a rising
                name in Dubai’s real estate sector.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={image3} // Replace with actual image URL
                alt="Chairman Sandeep Chachra"
                className="w-full h-[400px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">CEO</h3>
              <h4 className="text-xl font-medium mb-4 text-[var(--primary-color)]">
                Hindustani Bhau
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hindustani Bhau, as the CEO of Mondus Properties and a renowned
                YouTuber and influencer, brings a unique blend of bold
                leadership and authenticity to the company. Known for his
                fearless approach and larger-than-life personality, he has a
                history of standing his ground, even in the face of resistance
                and hostility. This unwavering resilience is a powerful asset in
                his entrepreneurial journey, equipping him to lead Mondus
                Properties with strength, decisiveness, and integrity. His
                commitment to overcoming challenges ensures that the company
                remains adaptable, competitive, and firmly rooted in
                professionalism, driving Mondus Properties to new heights in the
                industry.
              </p>
            </div>
          </div>
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
              <h4 className="text-2xl font-bold mb-6">Why Choose Us?</h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Trusted UAE Real Estate Experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Transparent, Personalized Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Access to Prime Dubai Properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Guidance from Start to Finish</span>
                </li>
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
