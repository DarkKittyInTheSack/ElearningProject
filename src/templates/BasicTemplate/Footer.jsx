import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex px-5 py-3 md:justify-between items-center border-b border-b-gray-600 sm:hidden">
        <div className="w-2/3 px-5">
          <h2 className="font-bold text-xl ">Teach the world online</h2>
          <span className="text-base ">
            Create an online video course, reach students across the globe, and
            earn money
          </span>
        </div>
        <div className="px-5">
          <Link
            to={"/teacher"}
            className="border border-white  text-xl font-bold p-2 hover:bg-white hover:text-black duration-500"
          >
            Teach With Us
          </Link>
        </div>
      </div>
      <div className="md:flex px-5 py-4 justify-between md:items-center border-b border-b-gray-600 ">
        <h2 className="px-5  font-bold text-xl">
          Top companies choose{" "}
          <span className="text-purple-300">learnit Business</span> to build
          in-demand career skills
        </h2>
        <ul className="md:flex md:space-y-0 space-x-4 items-center px-5 sm:grid sm:grid-cols-4 sm:space-y-2">
          <li>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
              alt="#"
            />
          </li>
          <li>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
              alt="#"
            />
          </li>
        </ul>
      </div>
      <div className="md:flex p-5 md:justify-between sm:grid sm:grid-cols-1">
        <div className="md:flex md:justify-between px-5 py-2 md:w-6/12 sm:grid sm:grid-cols-3 sm:w-full">
          <ul className="space-y-2 items-center font-medium text-sm">
            <li>
              <Link to={"/business"} className="hover:underline duration-500">
                learnit Business
              </Link>
            </li>
            <li>
              <Link to={"/teacher"} className="hover:underline duration-500">
                Teach With Us
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.learnit.com/mobile/"}
                className="hover:underline duration-500"
              >
                Get the app
              </Link>
            </li>
            <li>
              <Link to={""} className="hover:underline duration-500">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">Contact Us</Link>
            </li>
          </ul>
          <ul className="space-y-2 items-center font-medium text-sm">
            <li>
              <Link to={"/profile"} className="hover:underline duration-500">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">Blogs</Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">
                Help and Support
              </Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">Affiliate</Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">Investors</Link>
            </li>
          </ul>
          <ul className="space-y-2 items-center font-medium text-sm">
            <li>
              <Link className="hover:underline duration-500">Terms</Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">
                Cookie settings
              </Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">Sitemap</Link>
            </li>
            <li>
              <Link className="hover:underline duration-500">
                Accessibility statement
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-5 py-2">
          <button className="inline-block pl-4 pr-9 py-2 border border-white w-full hover:bg-white hover:text-black duration-500">
            <i className="fa-solid fa-globe pr-1"></i>
            English
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="p-5">
          <Link to={"/"} className="px-5 py-3 w-20 outline-none">
            <img
              src="../../../public/logoApp.png"
              className="w-24 inline-block"
            />
          </Link>
        </div>
        <div className="p-5">
          <p className="font-medium text-sm px-5">&#169; 2024 learnit, Inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
