import discountBanner from "../../assets/discountBanner.jpg";
const DiscountCoupon = () => {
  return (
    <div>
      <div
        className="hero md:h-[40vh] "
        style={{
          backgroundImage: `url(${discountBanner})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-40"></div> */}
        <div className="hero-content text-center ">
          <div className="">
            <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold">
              Get <span className="text-[#ffc65c]">20%</span> Off Discount
              Coupon
            </h2>
            <p className="mb-3 text-lg font-semibold">
              by Subscribe our Newsletter
            </p>
            <div className="md:join">
              <input
                className="input input-bordered join-item"
                placeholder="Email Address"
              />
              <button className="btn mt-2 join-item bg-[#FFBB38] hover:bg-[#FF497C] hover:text-white ">
                Get The Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCoupon;
