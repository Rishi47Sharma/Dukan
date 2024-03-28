import { products } from "../Data/HomeData";

const featureProducts = () => {
  // Dummy product data array

  return (
    <section className="text-gray-600 body-font  ">
      <h1 className="title-font sm:text-4xl text-2xl md:text-5xl mb-4 font-medium  px-6 text-fieryRed-300">
        Feature Products
      </h1>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default featureProducts;
