import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(${gradientPosition}deg, 
              #667eea 0%, 
              #764ba2 25%, 
              #f093fb 50%, 
              #4facfe 75%, 
              #00f2fe 100%)`,
          backgroundSize: "400% 400%",
          transition: "background 0.5s ease",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <h1 className="text-white text-6xl font-bold flex items-center gap-4 relative z-10 drop-shadow-2xl">
          <span className="text-5xl animate-pulse">↻</span> Sukma Tech
        </h1>
      </div>

      <section className="px-20 py-16 grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Crafting Digital
            <br />
            Excellence
          </h2>
        </div>
        <div className="text-gray-700 leading-relaxed text-lg space-y-6">
          <p>
            At Sukma Tech Indonesia, we transform your vision into powerful
            digital solutions. From custom websites and robust backend systems
            to innovative mobile applications—we build technology that drives
            your business forward.
          </p>
          <p>
            Our commitment is simple: deliver cutting-edge IT solutions with
            precision, creativity, and reliability. Whether you're a startup or
            an enterprise, we partner with you to create digital experiences
            that matter.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
