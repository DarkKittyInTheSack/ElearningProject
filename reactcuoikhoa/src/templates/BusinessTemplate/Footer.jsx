import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='bg-black text-white'>
      
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
          <Link to={'/business'} className='px-5 py-3 w-20 outline-none'>
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" className='w-24 inline-block' />
          </Link>
        </div>
        <div className="p-5">
          <p className='font-medium text-sm px-5'>&#169; 2024 Udemy, Inc</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer