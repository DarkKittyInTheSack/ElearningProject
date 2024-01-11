import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='font-sans mx-auto '>
        <nav className='flex items-center p-3 border-gray-200 border-b-2'>
            <div className="flex items-center mr-3">
                <Link to={'/'} className='px-3 py-2 w-28 outline-none'>
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" className='w-full block' />
                </Link>

                <button className='text-sm text-slate-700 mx-3 font-medium'>Categories</button>
            </div>

            <div className="flex border border-slate-800 rounded-3xl w-4/12 bg-gray-200 p-3 mr-2">
                <button className='text-center w-7'><i className='fa fa-search text-gray-500'></i></button>
                <input type="text" className='mx-3 w-full text-sm outline-none bg-transparent' placeholder='Search for anything...'/>
            </div>


            <ul className='mx-3 flex list-none items-center'>
                <li>
                    <button className='text-sm text-slate-700 mr-3 ml-1 font-medium'>Udemy Business</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mr-3 ml-1 font-medium'>Teach on Udemy</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mr-3 ml-1 font-medium'>My Learning</button>
                </li>
            </ul>

            <ul className='flex list-none items-center'>
                <li>
                    <button className='text-sm text-slate-700 mr-3 ml-1 font-medium'><i className='fa-regular fa-heart text-lg'></i></button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mr-3 ml-1 font-medium'><i className='fa-solid fa-cart-shopping text-lg'></i></button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mr-3 ml-1 font-medium'><i className='fa-regular fa-bell text-lg'></i></button>
                </li>
            </ul>

            <div className='flex list-none items-center'>
                    <button className='mx-0 text-sm text-black mx-3 font-medium border border-black border-t-2 border-b-2 border-l-2 border-r-2 px-3 py-2'>Login</button>
                    <button className='text-sm text-white bg-black border border-black border-t-2 border-b-2 border-l-2 border-r-2 mx-3 font-medium px-3 py-2'>Sign Up</button>
                    <button className='mx-0 text-sm text-center border border-black border-t-2 border-b-2 border-l-2 border-r-2 mx-3 font-medium px-3 py-2'><i className='fa-solid fa-globe'></i></button>
            </div>
        </nav>
        <nav className='py-2'>
            <ul className='flex justify-center list-none items-center'>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Development</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Business</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Finance & Accounting</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>IT & Software</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Office Productivity</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Personal Development</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Design</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Marketing</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Health & Fitness</button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium'>Music</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header