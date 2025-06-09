import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";
import blogHeroImage from "../assets/blog.jpg";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  coverImage: string;
  tags: string[];
  datePublished: string;
  lastUpdated: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://mondus-backend.onrender.com/api/blogs/viewblog"
        );
        const data = await res.json();
        setBlogs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handlePostClick = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Navbar />

      <section className="relative h-screen w-full">
        <img
          src={blogHeroImage}
          alt="Blog Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white mb-4 uppercase">
            Our Latest Blogs
          </h1>
          <p className="text-lg md:text-2xl text-white">
            With knowledge we build a solid foundation for long term success for
            you
          </p>
        </div>
      </section>

      <section className="w-[90%] mx-auto my-16">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          LATEST ARTICLES
        </h2>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No blog posts available at the moment.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogs.map((post) => (
              <div
                key={post._id}
                className="cursor-pointer relative rounded-lg p-[1.5px] hover:shadow-[0_0_10px_var(--primary-color)] transition"
                style={{
                  background:
                    "linear-gradient(to bottom, #111, var(--primary-color))",
                }}
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="bg-white dark:bg-black rounded-lg h-[450px] flex flex-col overflow-hidden text-left">
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="w-full h-[300px] object-fill rounded-t-lg"
                  />
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-black dark:text-white leading-snug mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 truncate">
                        {post.excerpt}
                      </p>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 italic">
                      By {post.author} •{" "}
                      {new Date(post.datePublished).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default Blog;
