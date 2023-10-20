
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const newProduct = {
      productName,
      brandName,
      productType,
      shortDescription,
      price,
      rating,
      photo,
    };
    console.log(newProduct);

    // send data to the server
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
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
            Add Product...
          </h3>

          <form onSubmit={handleAddProduct}>
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
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* submit btn  */}
            <input
              type="submit"
              value="Add Product"
              className="py-2 mt-8 text-white text-base lg:text-xl font-semibold rounded-lg btn-block bg-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
