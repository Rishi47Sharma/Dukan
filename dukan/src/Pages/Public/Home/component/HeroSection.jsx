import HeroLeftSide from "../../../../assets/HeroLeftSide.png";
import HeroShopping from "../../../../assets/HeroShopping.svg";
import WebShoping from "../../../../assets/web_shopping.svg";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font bg-[#F3F4F6]">
      <div className="container mx-auto flex px-5 md:py-20 md:flex-row flex-col items-center">
        <div className="max-w-screen-sm md:py-0 py-3 lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover w-full h-auto object-center rounded"
            alt="hero"
            src={WebShoping}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:leading-12 md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-8">
          <h1 className="title-font sm:text-4xl text-2xl md:text-5xl mb-4 font-medium text-fieryRed-400 pt-2">
            Dukan - Ghar se pass wali!
          </h1>
          <p className="mb-8 leading-relaxed text-xl text-tahiti-200 pt-2">
            Ab intezaar kis baat ka? Dukan kholne ka samay aa gaya hai! <br />
            <span className="text-fieryRed-300 font-semibold block leading-loose pt-2">
              Save more with coupons and get up to 70% off!
            </span>
          </p>
          <div className="flex justify-center  pt-2 ">
            <button className="inline-flex text-white bg-fieryRed-300 border-0 py-2 px-6 focus:outline-none hover:bg-fieryRed-400 rounded text-lg">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
