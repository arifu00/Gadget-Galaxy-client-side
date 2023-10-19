import { Link } from "react-router-dom";

const BrandsType = ({ brand }) => {
  //   console.log(brand);
  return (
    <div>
      <Link to={`/brands/${brand.brandName}`}>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-xl  rounded-xl bg-clip-border transition duration-300 ease-in-out hover:scale-110">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">
            <img src={brand.brandPhoto} alt={brand.brandName} />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {brand.brandName}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandsType;
