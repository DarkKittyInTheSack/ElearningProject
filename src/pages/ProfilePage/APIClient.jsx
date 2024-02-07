import React from 'react'
import {Card, Input} from 'antd'

const APIClient = () => {
  return (
    <div>
        <Card title = {
            <div className='font-bold text-2xl text-center pb-5'>
                <p>API Clients</p>
                <span className='font-normal text-base'>Create and list your API clients.</span>
            </div>
        } bordered={false} style={{width:'100%', borderRadius: '0px'}}>
           <ul className='font-bold text-base w-2/3 mx-auto'>
            <li>
                <h2 className='font-bold text-4xl my-4'>Affiliate API</h2>
            </li>
            <li>
                <p className='font-normal text-lg my-2'>The Udemy Affiliate API exposes functionalities of Udemy to help developers build client applications and integrations with Udemy. To see more details, please visit <span className='text-purple-500 underline underline-offset-1'>Udemy Affiliate API</span></p>
            </li>

            <li>
                <button className=' bg-black py-3 px-4 text-lg text-white my-3'>Request Affiliate API Client</button>
                <div className="my-3 border p-3">
                    <i className='fa-solid fa-circle-exclamation mx-3 text-2xl'></i>
                    <span className='text-lg'>You dont have API Client yet</span>
                </div>
                
            </li>
           </ul>
        </Card>
    </div>
  )
}

export default APIClient