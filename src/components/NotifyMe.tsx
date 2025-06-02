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

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const handleSendOtp = async (e: any) => {
    e.preventDefault();
    setMessage("");

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setMessage("❌ All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("❌ Invalid email format.");
      return;
    }

    if (!validatePhone(phone)) {
      setMessage("❌ Invalid phone number.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://mondus-backend.onrender.com/api/send-otp/notify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ OTP sent to your email.");
        setStep(2);
      } else {
        setMessage("❌ " + (data.error || "Failed to send OTP."));
      }
    } catch (error) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "https://mondus-backend.onrender.com/api/verifyOtp/notifyme",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, otp }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem("formData", JSON.stringify(formData));
        setMessage("✅ OTP verified. Data submitted successfully.");
        setFormData({
          purpose: "Buy",
          category: "Apartment",
          bedrooms: "1",
          name: "",
          phone: "",
          email: "",
        });
        setOtp("");
        setStep(1);
        sessionStorage.removeItem("formData");
      } else {
        setMessage("❌ " + (data.error || "OTP verification failed."));
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-4 md:px-20 font-raleway transition-colors duration-300">
      <div className="w-11/12 mx-auto bg-gradient-to-r from-[var(--primary-color)] via-gray-900 to-[var(--primary-color)] p-[1px]">
        <div className="bg-white dark:bg-black p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-2">
            Help me find my dream home or investment property
          </h2>
          <p className="text-sm md:text-base text-center text-gray-600 dark:text-gray-400 mb-8 font-light">
            Fill in your preferences and we’ll notify you as soon as we have
            something that matches.
          </p>

          <form
            onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-light"
          >
            {step === 1 && (
              <>
                <div className="flex flex-col">
                  <label htmlFor="purpose" className="mb-1 text-sm">
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
                  >
                    <option>Buy</option>
                    <option>Rent</option>
                    <option>Offplan</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="category" className="mb-1 text-sm">
                    Category
                  </label>
                  <select
                    id="category"
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
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bedrooms" className="mb-1 text-sm">
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
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
                </div>

                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-1 text-sm">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-sm">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="mb-1 text-sm">
                    Your Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    aria-label="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
                    required
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div className="col-span-full flex flex-col">
                <label htmlFor="otp" className="mb-1 text-sm">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  aria-label="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border px-2 py-2 bg-white dark:bg-black border-gray-400 dark:border-gray-500"
                  required
                />
              </div>
            )}

            <div className="col-span-full flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black px-4 py-2 uppercase tracking-wider text-sm hover:opacity-80 transition"
              >
                {loading
                  ? "Please wait..."
                  : step === 1
                  ? "Send OTP"
                  : "Verify OTP"}
              </button>
            </div>
          </form>

          {message && (
            <p
              className={`text-center text-sm mb-4 ${
                message.startsWith("✅")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotifyMe;
