import HeroLeftSide from "../../../../assets/HeroLeftSide.png";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl md:text-5xl mb-4 font-medium   text-fieryRed-400">
            Dukan - Ghar se pass wali !
          </h1>
          <p className="mb-8 leading-relaxed text-xl  text-tahiti-200 ">
            Aaiye, apni duniya ko sawarne ke liye ek nayi shuruaat karein. Hum
            laye hain aapke liye sabse sundar aur anokhe products, sirf apke
            liye. Yahan har cheez milegi, har khwahish poori hogi. Toh ab
            intezaar kis baat ka? Dukan kholne ka samay aa gaya hai!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white  bg-fieryRed-300 border-0 py-2  px-3 md:px-6 focus:outline-none hover:bg-fieryRed-400 rounded text-lg">
              Start Shopping
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-3  md:px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg md:py-0 py-3 lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover h-[400px]  object-center rounded"
            alt="hero"
            src={HeroLeftSide}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
