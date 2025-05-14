import { useParams } from "react-router-dom";
import blogData from "../data/blogData.json";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";
import { useEffect } from "react";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <p className="text-center my-10">Blog not found.</p>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="mb-16 md:mb-24 pt-5">
        <Navbar />
      </div>
      <div className="w-full md:w-[90%] mx-auto px-4 my-10">
        <h1 className="text-4xl mb-2">{blog.title}</h1>
        <p className=" mb-4">{blog.date}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
        <div className="whitespace-pre-line leading-7">{blog.content}</div>
      </div>
      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default BlogDetails;
