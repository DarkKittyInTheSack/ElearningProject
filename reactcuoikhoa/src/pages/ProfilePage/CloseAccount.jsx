import React from 'react'
import {Card, Input} from 'antd'

const CloseAccount = () => {
  return (
    <div>
        <Card title = {
            <div className='font-bold text-2xl text-center pb-5'>
                <p>Close Account</p>
                <span className='font-normal text-base'>Close Your account permanently</span>
            </div>
        } bordered={false} style={{width:'100%', borderRadius: '0px'}}>
           <ul className='font-bold text-base w-2/3 mx-auto'>
            <li className='flex'>
                <h2 className='font-normal text-lg'> <span className='text-red-700 font-bold'>Warning:</span> If you close your account, you will be unsubscribed from all your 7 courses, and will lose access forever.</h2>
            </li>
            <li>
                <button className=' bg-black py-3 px-4 text-lg text-white my-3'>Close Account</button>
            </li>
           </ul>
        </Card>
    </div>
  )
}

export default CloseAccount