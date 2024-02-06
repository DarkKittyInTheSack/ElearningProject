import React from 'react'

const Records = () => {
  return (
    <div className='bg-blue-800 text-white py-10'>
        <div className="grid grid-cols-5 font-bold container mx-auto gap-5 items-center py-5">
            <div className="item text-center">
                <p className='text-5xl mb-1'>62M</p>
                <span className='font-normal'>Students</span>
            </div>

            <div className="item text-center">
                <p className='text-5xl mb-1'>75+</p>
                <span className='font-normal'>Languages</span>
            </div>

            <div className="item text-center">
                <p className='text-5xl mb-1'>830M</p>
                <span className='font-normal'>Enrollments</span>
            </div>

            <div className="item text-center">
                <p className='text-5xl mb-1'>180+</p>
                <span className='font-normal'>Countries</span>
            </div>

            <div className="item text-center">
                <p className='text-5xl mb-1'>15,000+</p>
                <span className='font-normal'>Enterprise Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Records