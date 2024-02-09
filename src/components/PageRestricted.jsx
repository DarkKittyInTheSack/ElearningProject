import React from 'react'
import Lottie from 'react-lottie'
import * as RestrictedAnimation from '../assets/animations/RestrictedAnimation.json'
import { Link } from 'react-router-dom'

const PageRestricted = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: RestrictedAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    }
  return (
    <div
      className="block top-0 left-0 right-0 bottom- opacity-40"
      style={{ zIndex: '9999' }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
      <span className='font-bold text-2xl text-center w-full block text-black'>Sorry, You don't have any Access on this page, please turn back to home page</span>
      <Link to={'/'} className='my-3 text-2xl font-bold text-center text-blue-900 block'>To Home Page</Link>
    </div>
  )
}

export default PageRestricted