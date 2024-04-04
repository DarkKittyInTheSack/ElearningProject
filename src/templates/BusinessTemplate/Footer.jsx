import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="flex p-5 justify-between">
          <div className="flex justify-between px-5 py-2 w-6/12">
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
                  to={"https://www.udemy.com/mobile/"}
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
            <button className="inline-block pl-4 pr-9 py-2 border border-white w-full">
              <i className="fa-solid fa-globe pr-1"></i>
              English
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="p-5">
            <Link to={"/business"} className="px-5 py-3 w-20 outline-none">
              <img
                src="../../../public/logoApp.png"
                className="w-24 inline-block"
              />
            </Link>
          </div>
          <div className="p-5">
            <p className="font-medium text-sm px-5">&#169; 2024 Learnit, Inc</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
