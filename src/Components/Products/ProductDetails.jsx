import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
//   console.log(product);

  const handleAddToCart = id =>{
    // console.log(id);
    fetch('http://localhost:5000/addtocard',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(res=> res.json())
    .then(data => {
        if (data.insertedId) {
            Swal.fire({
                title: "Success!",
                text: "You have successfully added the product to the card",
                icon: "success",
                confirmButtonText: "OK",
              });
        }
    })
  }
  return (
    <div>
      <div className="container mx-auto px-5 ">
        <div className="mt-8">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
              <img
                src={product.photo}
                className="object-cover w-full h-[700px]"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block  text-2xl antialiased font-bold leading-relaxed text-blue-gray-900">
                  {product.productName}
                </p>
                <p className="block text-xl antialiased font-semibold leading-relaxed text-blue-gray-900">
                  Price: {product.price}
                </p>
              </div>
              <p className="block text-xl antialiased font-medium leading-normal text-gray-700 opacity-75">
               {product.shortDescription}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button onClick={handleAddToCart}
                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
