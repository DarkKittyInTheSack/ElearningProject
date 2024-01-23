import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border-b-2 border-gray-200'>
        <header className='font-sans mx-auto container'>
        <nav className='flex items-center p-3'>
            <div className="flex items-center mr-3">
                <Link to={'/business'} className='px-3 py-2 outline-none'>
                    <img src="https://business.udemy.com/wp-content/uploads/2021/04/udemy-business-logo.svg" className='w-full block' />
                </Link>
            </div>

            <ul className='ms-8 flex list-none items-center w-2/3'>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium'>What we do</button>
                </li>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium'>How we do it</button>
                </li>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium'>Resources</button>
                </li>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium'>Plans</button>
                </li>
            </ul>

            <div className='flex list-none items-center'>
                    <button className='mx-0 text-sm text-black  font-medium  px-3 py-2'>Login</button>
                    <button className='text-sm text-white bg-black border border-black border-t-2 border-b-2 border-l-2 border-r-2 mx-3 font-medium px-3 py-2'>Get Started</button>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header