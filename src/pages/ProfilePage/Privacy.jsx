import React from 'react'
import {Card, Checkbox} from 'antd'

const Privacy = () => {
  return (
    <div>
        <Card title = {
            <div className='font-bold text-2xl text-center pb-5'>
                <p>Privacy</p>
                <span className='font-normal text-base'>Modify your privacy settings here.</span>
            </div>
        } bordered={false} style={{width:'100%', borderRadius: '0px'}}>
           <ul className='font-bold text-base w-2/3 mx-auto'>
            <li>
                <h2>Profile Page Settings</h2>
            </li>

            <li className='font-normal'>
                <div className="block my-2">
                    <Checkbox>Show your profile to logged-in users</Checkbox>
                </div>
                <div className="block">
                    <Checkbox>Show courses your takein on your profile page</Checkbox>
                </div>

                <button className=' bg-black p-3 text-lg text-white my-5 block font-bold'>Save</button>
            </li>
           </ul>
        </Card>
    </div>
  )
}

export default Privacy