import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [Products, setProducts] = useState(cartProducts);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log('delete confirmed');
        fetch(`http://localhost:5000/addtocard/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = cartProducts.filter((product) => product._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="container mx-auto px-5">
        {Products.map((product) => (
          <div key={product._id}>
            <div className="relative flex w-full items-center flex-row gap-7 mb-7 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src={product.photo}
                  alt={product.productName}
                  className="object-cover w-full h-96"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-pink-500">
                    {product.productName}
                  </h4>
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
                <p className="block mb-8  text-base antialiased font-normal leading-relaxed text-gray-700">
                  {product.shortDescription}
                </p>
                <a className="inline-block" href="#">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex items-center gap-2 px-6 py-3  text-lg font-bold text-center text-pink-500  align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Delete Item
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
