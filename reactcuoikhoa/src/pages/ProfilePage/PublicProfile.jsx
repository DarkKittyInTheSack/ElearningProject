import React from 'react'
import {Card, Input} from 'antd'
 
const PublicProfile = () => {
    const {TextArea} = Input
  return (
    <div>
        <Card title = {
            <div className='font-bold text-2xl text-center pb-5'>
                <p>Public Profile</p>
                <span className='font-normal text-base'>Add information about yourself</span>
            </div>
        } bordered={false} style={{width:'100%', borderRadius: '0px'}}>
           <ul className='font-bold text-base w-2/3 mx-auto'>
            <li>
                <h2>Basic:</h2>
            </li>
            <li className='py-4 border-b'>
                <form action="#">
                    <input type="text" className='border border-black w-full p-3 font-normal outline-none my-2' placeholder='First-name'/>
                    <input type="text" className='border border-black w-full p-3 font-normal outline-none my-2' placeholder='Last-name'/>
                    <input type="text" className='border border-black w-full p-3 font-normal outline-none my-2' placeholder='Headline'/>
                    <span className='font-normal text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

                    <TextArea rows={4} className='w-full border border-black p-3 font-normal rounded-none my-2' placeholder='Describe yourself'/>
                    <span className='font-normal text-sm text-gray-600 outline-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

                    <select name="#" id="" className='w-full py-3 font-normal outline-none my-2 border border-black'>
                        <option value="#">English (US)</option>
                    </select>
                </form>
            </li>
            <li className='py-3'>
                <h2>Link:</h2>
            </li>
            <li>
            <form action="#">
                    <input type="text" className='border border-black w-full p-3 font-normal outline-none my-2' placeholder='Website (https://)'/>
                    <input type="text" className='border border-black w-full p-3 font-normal outline-none my-2' placeholder='Last-name'/>
                    <input type="text" className='border border-black w-full p-3 font-normal outline-none my-2' placeholder='Headline'/>

                    <input className='w-full border border-black p-3 font-normal outline-none rounded-none my-2' placeholder='Twitter Profile'/>
                    <span className='font-normal text-sm text-gray-600 outline-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

                    <input className='w-full border border-black p-3 font-normal outline-none rounded-none my-2' placeholder='Facebook Profile'/>
                    <span className='font-normal text-sm text-gray-600 outline-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

                    <input className='w-full border border-black p-3 font-normal outline-none rounded-none my-2' placeholder='LinkIn Profile'/>
                    <span className='font-normal text-sm text-gray-600 outline-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

                    <input className='w-full border border-black p-3 font-normal outline-none rounded-none my-2' placeholder='YouTube Profile'/>
                    <span className='font-normal text-sm text-gray-600 outline-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </form>
            </li>

            <li>
                <button className=' bg-black py-3 px-4 text-lg text-white my-5'>Save</button>
            </li>
           </ul>
        </Card>
    </div>
  )
}

export default PublicProfile