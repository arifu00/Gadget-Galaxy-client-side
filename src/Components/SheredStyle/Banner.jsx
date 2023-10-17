import { NavLink } from "react-router-dom";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[80vh]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-xl md:text-3xl lg:text-4xl font-bold lg:font-black">
              Always ahead for a <br />{" "}
              <span className="text-light-blue-400">good quality product.</span>
            </h1>
            <p className="mb-5 italic text-lg">
              Your one-stop shop for all things tech and innovation
            </p>
            <button className="px-4 py-3 rounded-lg text-lg font-semibold text-blue-gray-50 hover:text-black bg-gradient-to-r from-cyan-500 to-blue-500">
              <NavLink to="/register">Register Now</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
