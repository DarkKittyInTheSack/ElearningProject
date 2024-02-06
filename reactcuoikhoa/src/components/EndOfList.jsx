import React from 'react'
import Lottie from 'react-lottie'
import * as EndOfListAnimation from '../assets/animations/EndOfList.json'

const EndOfList = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EndOfListAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    }
  return (
    <div
      className="block top-0 left-0 right-0 bottom-0 bg-white opacity-40"
      style={{ zIndex: '9999' }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
      <span className='font-bold text-2xl text-center w-full block'>Sorry, This is the end of list</span>
    </div>
  )
}

export default EndOfList