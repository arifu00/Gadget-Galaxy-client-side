import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddBrand = () => {
  const handleAddBrand = (event) => {
    event.preventDefault();

    const form = event.target;
    const brandName = form.brandName.value;
    const brandPhoto = form.brandPhoto.value;

    const brands = {
      brandName, brandPhoto
    };
    console.log(brands);

    // send data to the server
    fetch("https://gadget-galaxy-server.vercel.app/brands", {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(brands)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Brand added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="container mx-auto mb-8">
      <div className="bg-[#f4f3f0] p-5 lg:p-32 rounded-lg shadow-2xl">
        <h3 className="text-xl lg:text-3xl font-extrabold text-center mb-8">
          Add Brand...
        </h3>

        <form onSubmit={handleAddBrand}>
          {/* form brand name row */}
          <div className="mb-8">
            <div className="form-control lg:w-1/2 mx-auto">
              <label className="label">
                <span className="label-text text-base lg:text-lg font-bold">Brand Name</span>
              </label>

              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                className="p-2 w-full px-3"
              />
            </div>
          </div>

          {/* form photo row */}
          <div className="">
            <div className="form-control lg:w-1/2 mx-auto">
              <label className="label">
                <span className="label-text text-base lg:text-lg font-bold">
                  Brand Photo URL
                </span>
              </label>

              <input
                type="text"
                name="brandPhoto"
                placeholder="Brand Photo URL"
                className="p-2 w-full px-3"
              />
            </div>
          </div>
          {/* submit btn  */}
          <div className="w-1/2 mx-auto">
            <input
              type="submit"
              value="Add Brand"
              className="py-2 mt-8 text-white text-base md:text-xl font-semibold rounded-lg btn-block bg-black"
            />
          </div>
        </form>
        <div className="text-center mt-2">
        <p>
              If want to add Product.?
              <Link to="/addproduct">
                <button className="text-red-500 link-hover ml-2">Add Product</button>
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default AddBrand;
