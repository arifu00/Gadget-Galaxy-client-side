import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/SheredStyle/Banner";
import BrandsType from "../../Components/BrandsType/BrandsType";
import WhyChoose from "../../Components/whyChoose/whyChoose";

const Home = () => {
  const brands = useLoaderData();
  // console.log(brands);
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5">
        {/* Shop By Brands  */}
        <div className="my-20">
          <h2 className="text-center text-xl md:text-3xl  font-extrabold">
            Shop By Brands
          </h2>
          <div className="border border-b-0  border-black mt-4 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {brands.map((brand) => (
              <BrandsType key={brand._id} brand={brand}></BrandsType>
            ))}
          </div>
        </div>
        {/* why choose us section  */}
        <div className="mt-20">
          <WhyChoose></WhyChoose>
        </div>
      </div>
    </div>
  );
};

export default Home;
