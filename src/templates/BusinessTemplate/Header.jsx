import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border-b-2 border-gray-200'>
        <header className='font-sans mx-auto container'>
        <nav className='flex items-center p-3'>
            <div className="flex items-center mr-3">
                <Link to={'/business'} className='px-3 py-2 outline-none'>
                    <img src="src/assets/images/logo_trial.png" className='w-full block' />
                </Link>
            </div>

            <ul className='ms-8 flex list-none items-center w-2/3'>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium hover:text-purple-500 duration-500'>What we do</button>
                </li>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium hover:text-purple-500 duration-500'>How we do it</button>
                </li>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium hover:text-purple-500 duration-500'>Resources</button>
                </li>
                <li>
                    <button className='text-base text-slate-700 mx-3 py-3 font-medium hover:text-purple-500 duration-500'>Plans</button>
                </li>
            </ul>

            <div className='flex list-none items-center'>
                    <button className='mx-0 text-sm text-black border-2 border-white font-medium  px-3 py-2 hover:text-white hover:bg-black duration-500'>Login</button>
                    <button className='text-sm text-white bg-black border-black border-2 mx-3 font-medium px-3 py-2 hover:text-black hover:bg-white hover:border-black duration-500'>Get Started</button>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header