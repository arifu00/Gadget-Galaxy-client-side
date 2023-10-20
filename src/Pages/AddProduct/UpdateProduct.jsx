import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loadProduct = useLoaderData();
  console.log(loadProduct);
  const {
    _id,
    productName,
    brandName,
    productType,
    shortDescription,
    price,
    rating,
    photo,
  } = loadProduct;
  // console.log(_id);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updatedProduct = {
      productName,
      brandName,
      productType,
      shortDescription,
      price,
      rating,
      photo,
    };
    // console.log(updatedProduct);
    console.log(_id);
    // send data to the server
    fetch(`https://gadget-galaxy-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-[#f4f3f0] px-3 py-5  lg:p-32 ">
          <h3 className="text-xl md:text-3xl font-extrabold text-center mb-8">
            Update Product...
          </h3>

          <form onSubmit={handleUpdateProduct}>
            {/* form product name & brand name row */}
            <div className="md:flex gap-8 lg:mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Product Name
                  </span>
                </label>

                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  defaultValue={productName}
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Brand Name
                  </span>
                </label>

                <input
                  type="text"
                  name="brandName"
                  placeholder="Brand Name"
                  defaultValue={brandName}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form product type & Short description row */}
            <div className="md:flex gap-8 lg:mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Product type
                  </span>
                </label>

                <input
                  type="text"
                  name="productType"
                  placeholder="Product Type"
                  defaultValue={productType}
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Short Description
                  </span>
                </label>

                <input
                  type="text"
                  name="shortDescription"
                  placeholder="Short Description"
                  defaultValue={shortDescription}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form Price & Rating row */}
            <div className="md:flex gap-8 lg:mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Price
                  </span>
                </label>

                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  defaultValue={price}
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Rating
                  </span>
                </label>

                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={rating}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form photo row */}
            <div className="">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-base lg:text-lg font-bold">
                    Photo URL
                  </span>
                </label>

                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  defaultValue={photo}
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* submit btn  */}
            <input
              type="submit"
              value="Update Product"
              className="py-2 mt-8 text-white text-base lg:text-xl font-semibold rounded-lg btn-block bg-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
