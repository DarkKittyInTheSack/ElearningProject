import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
    <div className="flex px-5 py-4 justify-between items-center border-b border-b-gray-600">
      <h2 className='px-5  font-bold text-xl'>Top companies choose <span className='text-purple-300'>Udemy Business</span> to build in-demand career skills</h2>
      <ul className='flex space-x-4 items-center px-5'>
        <li>
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="#" />
        </li>
        <li>
          <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="#" />
        </li>
        <li>
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="#" />
        </li>
        <li>
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="#" />
        </li>
      </ul>
    </div>
    <div className="flex p-5 justify-between">
        <div className="flex justify-between px-5 py-2 w-6/12">
          <ul className="space-y-2 items-center font-medium text-sm">
            <li>
              <Link to={"/business"} className="hover:underline duration-500">
                Udemy Business
              </Link>
            </li>
            <li>
              <Link to={"/teacher"} className="hover:underline duration-500">
                Teach on Udemy
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
          <button className="inline-block pl-4 pr-9 py-2 border border-white w-full hover:bg-white hover:text-black duration-500">
            <i className="fa-solid fa-globe pr-1"></i>
            English
          </button>
        </div>
    </div>
    <div className="flex justify-between items-center mb-3">
      <div className="p-5">
        <Link to={'/teacher'} className='px-5 py-3 w-20 outline-none'>
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" className='w-24 inline-block' />
        </Link>
      </div>
      <div className="p-5">
        <p className='font-medium text-sm px-5'>&#169; 2024 Udemy, Inc</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer