import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='font-sans mx-auto'>
        <nav className='flex items-center p-3 border-gray-200 border-b-2'>
            <div className="flex items-center mr-3">
                <Link to={'/'} className='px-3 py-2 w-28 outline-none'>
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" className='w-full block' />
                </Link>

                <button className='text-sm text-slate-700 mx-3 font-normal'>Categories</button>
            </div>

            <div className="flex border border-slate-800 rounded-3xl w-5/12 bg-gray-200 p-3 mr-2">
                <button className='text-center w-7'><i className='fa fa-search text-gray-500'></i></button>
                <input type="text" className='mx-3 w-full text-sm outline-none bg-transparent' placeholder='Search for anything...'/>
            </div>


            <ul className='mx-3 flex list-none items-center'>
                <li>
                    <Link to={'/business'} className='text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500'>Udemy Business</Link>
                </li>
                <li>
                    <Link to={'/learning'} className='text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500'>My Learning</Link>
                </li>
            </ul>

            <ul className='flex list-none items-center mx-1'>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500'><i className='fa-regular fa-heart text-lg'></i></button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500'><i className='fa-solid fa-cart-shopping text-lg'></i></button>
                </li>
                <li>
                    <button className='text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500'><i className='fa-regular fa-bell text-lg'></i></button>
                </li>
            </ul>

            <div className='flex list-none items-center'>
                    <button className='mx-0 text-sm text-black  font-medium border border-black border-t-2 border-b-2 border-l-2 border-r-2 px-3 py-2 hover:bg-gray-100 duration-300'>Login</button>
                    <button className='text-sm text-white bg-black border border-black border-t-2 border-b-2 border-l-2 border-r-2 mx-3 font-medium px-3 py-2 hover:text-gray-100 duration-300'>Sign Up</button>
                    <button className='mx-0 text-sm text-center border border-black border-t-2 border-b-2 border-l-2 border-r-2 font-medium px-3 py-2 hover:bg-gray-100 duration-300'><i className='fa-solid fa-globe'></i></button>
            </div>
        </nav>
    </header>
  )
}

export default Header