import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-[#f4f3f0]  p-32 ">
          <h3 className="text-3xl font-extrabold text-center mb-8">
            Add Product...
          </h3>

          <form
          // onSubmit={handleAddCoffee}
          >
            {/* form name & quantity row */}
            <div className="md:flex gap-8 mb-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Brand Name
                  </span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Available Quantity
                  </span>
                </label>

                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form supplier & tastes row */}
            <div className="md:flex gap-8 mb-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Supplier Name
                  </span>
                </label>

                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Taste</span>
                </label>

                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form category & details row */}
            <div className="md:flex gap-8 mb-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Category</span>
                </label>

                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="p-2 w-full px-3"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Details</span>
                </label>

                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="p-2 w-full px-3"
                />
              </div>
            </div>
            {/* form photo row */}
            <div className="">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-lg font-bold">
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
              value="Add Coffee"
              className="py-2 mt-8 text-white text-xl font-semibold rounded-lg btn-block bg-black"
            />
          </form>
          <div className="text-center">
            <Link to="/addbrand">
              <button className="text-red-500 link-hover">Add Brand</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
