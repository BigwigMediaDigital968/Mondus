import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";

const Blog = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <Navbar />

      {/* Hero Image with Overlay Text */}
      <section className="relative h-screen w-full">
        <img
          src="https://www.axcapital.ae/_ipx/s_1920x960/img/blog/blog-bg.webp" // Replace with your actual image path
          alt="blog Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4 font-raleway font-thin">
          <h1 className="text-4xl md:text-6xl  text-white mb-4">INSIGHTS</h1>
          <p className="text-lg md:text-2xl text-white">
            With knowledge we build a solid foundation for a long term success
            for You
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-[90%] mx-auto my-16">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-raleway font-light dark:font-thin">
          LATEST ARTICLES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card */}
          {[
            {
              title: "Dubai Real Estate Market Trends in 2025",
              excerpt:
                "Explore the latest market insights and trends shaping the future of real estate investment in Dubai...",
              date: "May 10, 2025",
              image: "https://fnst.axflare.com/blog/thumb/WEBP/PxGfGmdmIi.webp",
            },
            {
              title: "Why Dubai Remains a Global Property Hotspot",
              excerpt:
                "Learn why investors continue to choose Dubai for its strategic advantages, tax benefits, and high ROI...",
              date: "April 28, 2025",
              image: "https://fnst.axflare.com/blog/thumb/WEBP/vnPkYGGZMq.webp",
            },
            {
              title: "Top Neighborhoods for Family Living in Dubai",
              excerpt:
                "From schools to safety and amenities, discover the best areas in Dubai perfect for families...",
              date: "April 15, 2025",
              image: "https://fnst.axflare.com/blog/thumb/WEBP/LPHCVJfTHI.webp",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-[250px]">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default Blog;
