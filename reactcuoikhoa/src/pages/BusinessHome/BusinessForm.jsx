import React from 'react'

const BusinessForm = () => {
  return (
    <div className='container mx-auto py-10'>
        <ul className="font-bold space-y-3">
            <li>
                <div className="flex justify-between items-center">
                    <input type="text" placeholder='First Name' className='font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-1/2'/>
                    <input type="text" placeholder='Last Name' className='font-normal ms-3 text-base p-3 placeholder:font-bold outline-none border border-black w-1/2'/>
                </div>
            </li>
            <li>
                <input type="text" placeholder='Work Email' className='font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full'/>
            </li>
            <li>
                <input type="text" placeholder='Phone Number' className='font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full'/>
            </li>
            <li>
                <select className='font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full'>
                    <option value="#" className='font-bold text-base block'>Select...</option>
                </select>
            </li>
        </ul>
        <ul className="font-bold space-y-3 my-10">
            <li>
                <input type="text" placeholder='Company Name' className='font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full'/>
            </li>
            <li>
                <div className="flex justify-between items-center">
                    <select className='font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-1/2'>
                        <option value="#">Company Size</option>
                    </select>
                    <select className='font-bold ms-3 text-base p-3 placeholder:font-bold outline-none border border-black w-1/2'>
                        <option value="#">Number of people to train</option>
                    </select>
                </div>
            </li>
            <li>
                <div className="flex justify-between items-center">
                    <input type="text" placeholder='Job Title' className='font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-1/2'/>

                    <select className='font-bold ms-3 text-base p-3 placeholder:font-bold outline-none border border-black w-1/2'>
                        <option value="#">Job Level</option>
                    </select>
                </div>
            </li>
            <li>
                <button className='bg-black text-base font-bold py-3 w-full text-white my-10'>Submit</button>
            </li>
        </ul>
    </div>
  )
}

export default BusinessForm