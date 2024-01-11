import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className="flex px-5 py-3 justify-between items-center border-b border-b-gray-600">
        <div className="w-2/3 px-5">
          <h2 className='font-bold text-xl '>Teach the world online</h2>
          <span className='text-base '>Create an online video course, reach students across the globe, and earn money</span>
        </div>
        <div className="px-5">
            <button className='border border-white  text-xl font-bold p-2'>Teach on Udemy</button>
        </div>
      </div>
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
        <div className='flex justify-between px-5 py-2 w-6/12'>
          <ul className='space-y-2 items-center font-medium text-sm'>
            <li>
              <Link>Udemy Business</Link>
            </li>
            <li>
              <Link>Teach on Udemy</Link>
            </li>
            <li>
              <Link>Get the app</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul className='space-y-2 items-center font-medium text-sm'>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
            <li>
              <Link>Help and Support</Link>
            </li>
            <li>
              <Link>Affiliate</Link>
            </li>
            <li>
              <Link>Investors</Link>
            </li>
          </ul>
          <ul className='space-y-2 items-center font-medium text-sm'>
            <li>
              <Link>Terms</Link>
            </li>
            <li>
              <Link>Privacy policy</Link>
            </li>
            <li>
              <Link>Cookie settings</Link>
            </li>
            <li>
              <Link>Sitemap</Link>
            </li>
            <li>
              <Link>Accessibility statement</Link>
            </li>
          </ul>
        </div>
        <div className="px-5 py-2">
          <button className='inline-block pl-4 pr-9 py-2 border border-white w-full'>
            <i className='fa-solid fa-globe pr-1'></i>
            English
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="p-5">
          <Link to={'/'} className='px-5 py-3 w-20 outline-none'>
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