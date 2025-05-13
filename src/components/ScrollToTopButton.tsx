import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollTop / docHeight) * 100;
    setScrollPercent(scrollProgress);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-50"
      aria-label="Scroll to top"
    >
      <svg width="48" height="48" viewBox="0 0 36 36" className="absolute">
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#A97B64"
          strokeWidth="2"
          strokeDasharray="100, 100"
          strokeDashoffset={`${100 - scrollPercent}`}
        />
      </svg>
      <span className="relative z-10 text-[var(--primary-color)]">&#8679;</span>
    </button>
  );
};

export default ScrollToTopButton;
