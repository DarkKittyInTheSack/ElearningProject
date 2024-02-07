import React from 'react'
import {Card, Input} from 'antd'

const Photo = () => {
  return (
    <div>
        <Card title = {
            <div className='font-bold text-2xl text-center pb-5'>
                <p>Photo</p>
                <span className='font-normal text-base'>Add a nice photo for yourself</span>
            </div>
        } bordered={false} style={{width:'100%', borderRadius: '0px'}}>
           <ul className='font-bold text-base w-2/3 mx-auto'>
            <li>
                <h2>Image Preview</h2>
            </li>
            <li className='py-3'>
                <div className="p-3 border border-black">
                    <i className='w-full mx-auto fa-regular fa-circle-user text-center text-9xl bg-gray-100 text-gray-400'></i>
                </div>
            </li>
            <li className='pb-3'>
                <h2>Add / Change Image</h2>
            </li>
            <li>
                <input type="text" className='p-3 border-black border outline-none w-2/3' placeholder='No file selected'/>
                <button className='bg-black py-3 border border-black px-4 text-base text-white my-1'>Upload Image</button>
            </li>

            <li>
                <button className=' bg-black py-3 px-4 text-lg text-white my-3'>Save</button>
            </li>
           </ul>
        </Card>
    </div>
  )
}

export default Photo