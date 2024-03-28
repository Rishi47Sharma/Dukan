import React from "react";
import LogoDukan from "../assets/LogoDukan.svg";

const categories = [
  {
    title: "Category 1",
    links: ["First Link", "Second Link", "Third Link", "Fourth Link"],
  },
  {
    title: "Category 2",
    links: ["Fifth Link", "Sixth Link", "Seventh Link", "Eighth Link"],
  },

  // Add more categories as needed
];

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center  justify-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Brand section */}
        <div className="w-64 flex-shrink-0 md:flex-grow md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">
              {" "}
              <img src={LogoDukan} alt="" />
            </span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Ghar se pass wali!</p>
        </div>
        {/* Categories section */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {categories.map((category, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                {category.title}
              </h2>
              <nav className="list-none mb-10">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <a className="text-gray-600 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom section */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Dukan —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @RishiSharma
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* Other social icons */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
