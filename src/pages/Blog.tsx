import { Link } from "react-router-dom";
import blogData from "../data/blogData.json";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";
import blog from "../assets/blog.jpg";

const Blog = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Navbar />

      <section className="relative h-screen w-full">
        <img
          src={blog}
          alt="Blog Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white mb-4 uppercase">
            Our Latest Blog's
          </h1>
          <p className="text-lg md:text-2xl text-white">
            With knowledge we build a solid foundation for a long term success
            for You
          </p>
        </div>
      </section>

      <section className="w-[90%] mx-auto my-16">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          LATEST ARTICLES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 h-[250px] flex flex-col justify-between">
                <h3 className="text-xl  mb-2">{blog.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                  <Link
                    to={`/insights/${blog.slug}`}
                    className="text-[var(--primary-color)] hover:underline"
                  >
                    Explore →
                  </Link>
                </div>
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
