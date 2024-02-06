import React from 'react'
import {Tabs} from 'antd'
import PublicProfile from './PublicProfile'
import Photo from './Photo'
import CloseAccount from './CloseAccount'
import AccountSetting from './AccountSetting'
import Privacy from './Privacy'
import Notification from './Notification'
import APIClient from './APIClient'
import { Link } from 'react-router-dom'

const Profile = () => {
    const items = [
        {
            label: <div className='mx-auto'><p className='font-bold uppercase px-8 py-10 text-5xl text-center bg-black text-white rounded-full'>US</p>
            <span className='font-bold text-2xl my-1 text-black'>Username</span></div>,
            key: 1,
            children: ''
        },
        {
            label: <Link to={'/profile/public'} className='font-normal text-lg my-0 leading-3 px-5 text-gray-600'>View public profile</Link>,
            key: 2,
            children: ''
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>Profile</p>,
            key: 3,
            children: <PublicProfile/>
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>Photo</p>,
            key: 4,
            children: <Photo/>
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>Account Security</p>,
            key: 5,
            children: <AccountSetting/>
        },
        {
            label: <Link to={'/profile/subcriptions'} className='font-normal text-lg leading-3 my-0 px-5 text-gray-600'>Subcriptions</Link>,
            key: 6,
            children: ''
        },
        {
            label: <Link to={'/profile/payments'} className='font-normal text-lg leading-3 my-0 px-5 text-gray-600'>Payment methods</Link>,
            key: 7,
            children: ''
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>Privacy</p>,
            key: 8,
            children: <Privacy/>
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>Notifications</p>,
            key: 9,
            children: <Notification/>
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>API Clients</p>,
            key: 10,
            children: <APIClient/>
        },
        {
            label: <p className='font-normal text-lg leading-3 px-5 text-gray-600'>Close Account</p>,
            key: 11,
            children: <CloseAccount/>
        },
    ]
  return (
    <div className='container mx-auto border my-10'>
        <Tabs defaultActiveKey='3' tabPosition='left' items={items} className='py-3'/>
    </div>
  )
}

export default Profile