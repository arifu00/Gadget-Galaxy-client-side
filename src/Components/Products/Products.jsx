import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { brandName } = useParams();
  //   console.log(brandName);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto px-5">
      {/* slider  */}
      <div className="mb-12 lg:mb-16">
        <Carousel
          autoplay
          loop
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={slider1}
            alt="slider 1"
            className="w-full h-[30vh] md:h-[60vh] object-cover"
          />
          <img
            src={slider2}
            alt="slider 2"
            className="w-full h-[30vh] md:h-[60vh] object-cover"
          />
          <img
            src={slider3}
            alt="slider 3"
            className="w-full h-[30vh] md:h-[60vh] object-cover"
          />
        </Carousel>
      </div>
      {/* product  */}
      <div>
        <h1 className="text-center text-xl md:text-4xl  font-extrabold">
          Products by {brandName}
        </h1>
        <div className="border border-b-0  border-black mt-4 "></div>
        <div className=" mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products
              .filter((product) => product.brandName === brandName)
              .map((product) => (
                <div key={product._id} className="">
                  <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                      <img
                        className="h-64 w-full"
                        src={product.photo}
                        alt={product.productName}
                      />
                      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="block  text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                          {product.productName}
                        </h5>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {product.rating}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className=" inline-flex rounded-2xl  text-xl  font-medium text-[#3577F0] mb-3 bg-[#FCE5DD] px-3 py-1">
                          Brand: {product.brandName}
                        </h5>
                        <h5 className=" inline-flex rounded-xl  text-base  font-medium text-white  bg-[#3577F0] px-3 py-2">
                          Category: {product.productType}
                        </h5>
                      </div>

                      <p className=" text-xl antialiased font-medium leading-relaxed text-gray-700">
                        Price: {product.price}
                      </p>
                      
                    </div>
                    <div className="px-6 pb-6 flex gap-5 justify-between">
                      <Link to={`/product/${product._id}`}>
                      <button
                        className="block w-full  select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Details
                      </button>
                      </Link>
                      <Link to={`/updateproduct/${product._id}`}>
                      <button
                        className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Update
                      </button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {products.filter((product) => product.brandName === brandName)
            .length === 0 && (
            <div className="text-center">
              <h2 className="text-3xl font-black mb-3">Opps Sorry...</h2>
              <h6 className="text-xl font-semibold">
                We are sincerely sorry. None of our products are for sale at
                this time. <br /> We will have good products arriving very soon,
                Insha'Allah
              </h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
