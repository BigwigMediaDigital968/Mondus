import { useState } from "react";

const NotifyMe = () => {
  const [formData, setFormData] = useState({
    purpose: "Buy",
    category: "Apartment",
    bedrooms: "1",
    name: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      const response = await fetch(
        "https://mondus-backend.onrender.com/api/notifyme",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("✅ We'll notify you when we find a match!");
        setFormData({
          purpose: "Buy",
          category: "Apartment",
          bedrooms: "1",
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("❌ Submission failed. Please try later.");
    }
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-4 md:px-20 font-raleway transition-colors duration-300">
      <div className="w-11/12 mx-auto bg-gradient-to-r from-[var(--primary-color)] via-gray-900 to-[var(--primary-color)] p-[1px]">
        <div className="bg-white dark:bg-black p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-2">
            Can’t find your dream property?
          </h2>
          <p className="text-sm md:text-base text-center text-gray-600 dark:text-gray-400 mb-8 font-light">
            Fill in your preferences and we’ll notify you as soon as we have
            something that matches.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
          >
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
            >
              <option>Buy</option>
              <option>Rent</option>
              <option>Offplan</option>
            </select>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Penthouse</option>
              <option>Plots</option>
              <option>Studio</option>
            </select>

            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
              required
            />
          </form>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 font-light bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] text-black hover:opacity-90 transition"
            >
              Notify Me
            </button>
          </div>

          {message && (
            <p className="text-center text-sm mt-4 text-green-600 dark:text-green-400">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotifyMe;
