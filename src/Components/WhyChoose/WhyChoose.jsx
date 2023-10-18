import { BiLike } from "react-icons/bi";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { TfiSupport } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

const WhyChoose = () => {
  return (
    <div>
      <div className="mt-12">
        <div className="">
          <div className="flex justify-center gap-2 items-center text-lg ">
            {/* icon  */}
            <div className="p-1 bg-[#FF497C] rounded-full text-white">
              <BiLike></BiLike>
            </div>
            <div className="font-semibold text-[#FF497C]"> Why Us</div>
          </div>
          <h2 className="text-center mt-3 text-2xl lg:text-3xl font-bold text-[#292930] mb-12">
            Why People Choose Us
          </h2>
          {/* card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
                {/* card-1  */}
            <div className="">
              <div className="bg-[#F9F4F1] hover:shadow-xl border border-black px-10 py-12 rounded-lg ">
                <div className="flex justify-center text-5xl">
                  <TbTruckDelivery></TbTruckDelivery>
                </div>
                <h3 className="text-center mt-3 text-xl font-bold">Fast & <br /> Secure Delivery</h3>
              </div>
            </div>
                {/* card-2  */}
            <div className="">
              <div className="bg-[#F9F4F1] hover:shadow-xl border border-black px-10 py-12 rounded-lg ">
                <div className="flex justify-center text-5xl">
                  <LiaMoneyBillWaveSolid></LiaMoneyBillWaveSolid>
                </div>
                <h3 className="text-center mt-3  text-xl font-bold">Money Back <br /> Guarantee</h3>
              </div>
            </div>
                {/* card-3  */}
            <div className="">
              <div className="bg-[#F9F4F1] hover:shadow-xl border border-black px-10 py-12 rounded-lg ">
                <div className="flex justify-center text-5xl">
                  <TbTruckReturn></TbTruckReturn>
                </div>
                <h3 className="text-center mt-3  text-xl font-bold">24 Hour <br /> Return Policy</h3>
              </div>
            </div>
                {/* card-4  */}
            <div className="">
              <div className="bg-[#F9F4F1] hover:shadow-xl border border-black px-10 py-12 rounded-lg ">
                <div className="flex justify-center text-5xl">
                  <TfiSupport></TfiSupport>
                </div>
                <h3 className="text-center mt-3  text-xl font-bold">Pro Quality Support</h3>
              </div>
            </div>
                {/* card-5  */}
            <div className="">
              <div className="bg-[#F9F4F1] hover:shadow-xl border border-black px-10 py-12 rounded-lg ">
                <div className="flex justify-center text-5xl">
                  <BsTelephone></BsTelephone>
                </div>
                <h3 className="text-center mt-3  text-xl font-bold">24/7 <br /> call support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
