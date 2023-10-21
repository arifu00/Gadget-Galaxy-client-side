import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const OurBestPro = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://gadget-galaxy-server-49jhfspmu-arifs-projects-52e10814.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {products.slice(0, 6).map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
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

                <p className=" text-xl antialiased font-medium leading-relaxed text-gray-700">
                  Price: {product.price}
                </p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBestPro;
