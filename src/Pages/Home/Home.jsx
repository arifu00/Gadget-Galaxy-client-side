import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/SheredStyle/Banner";
import BrandsType from "../../Components/BrandsType/BrandsType";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5">
        {/* Shop By Brands  */}
        <div className="my-12">
          <h2 className="text-center text-xl md:text-3xl  font-extrabold">
            Shop By Brands
          </h2>
          <div className="border border-b-0  border-black mt-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {brands.map((brand) => (
              <BrandsType key={brand._id} brand={brand}></BrandsType>
            ))}
          </div>
        </div>
        {/* best offer section  */}
        <div className="">
            
        </div>
      </div>
    </div>
  );
};

export default Home;
