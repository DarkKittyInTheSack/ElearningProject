import React, { useState } from 'react'
import { Menu,Rate,Radio, Checkbox } from 'antd'
import './AllCourses.scss'
import AllCoursesList from './AllCoursesList'

const AllCourses = () => {
    const subMenuList = ['sub1','sub2','sub4']
    const [key,setKey] = useState(['sub1'])
    const SubMenu = Menu.SubMenu
    const onChangeData = (keys) =>{
        const latest = key.find(item => key.indexOf(item) === -1)
        subMenuList.indexOf(latest) === -1 ?
        setKey(keys) : (setKey(latest ? [latest] : []))
    }

  return (
    <div className='my-5'>
        <h2 className='font-bold text-2xl mt-10 mb-5'>All development courses</h2>
        <div className="flex my-5 items-center justify-between">
            <div className="flex font-bold text-base">
                <button className='border border-black px-3 py-4'><i className='fa-solid fa-arrow-up-wide-short mr-2'></i>Filter</button>
                <div className="mx-3 border border-black p-2">
                    <p className='my-1'>Sort by</p>
                    <select name="" id="" className='font-normal text-base outline-none'>
                        <option value="#">Highest view</option>
                        <option value="#">Most relevant</option>
                        <option value="#">Most rating</option>
                    </select>
                </div>
            </div>
            <span className='font-bold text-gray-600'>10,000 results</span>
        </div>
        <div className="flex">
            <Menu mode="inline"
            openKeys={key}
            onOpenChange={onChangeData}
            style={{ width: 350, border: 'none'}} className='my-3'>
                <SubMenu key="sub1" title={<span className='font-bold text-xl'>Ratings</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                    <Menu.Item key="1">
                        <Radio>
                            <Rate allowHalf defaultValue={4.5} className='mx-1 text-sm space-x-0.5'/> 4.5 and Up (10,000)
                        </Radio>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Radio>
                            <Rate allowHalf defaultValue={4} className='mx-1 text-sm space-x-0.5'/> 4.0 and Up (10,000)
                        </Radio>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Radio>
                            <Rate allowHalf defaultValue={3.5} className='mx-1 text-sm space-x-0.5'/> 3.5 and Up (10,000)
                        </Radio>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Radio>
                            <Rate allowHalf defaultValue={3} className='mx-1 text-sm space-x-0.5'/> 3.0 and Up (10,000)
                        </Radio>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span className='font-bold text-xl'>Language</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                    <Menu.Item key="5">
                        <Checkbox> English (10,000)</Checkbox>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Checkbox> Chinese (10,000)</Checkbox>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span className='font-bold text-xl'>Video Duration</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                    <Menu.Item key="9"><Checkbox> 0-1 hours (10,000)</Checkbox></Menu.Item>
                    <Menu.Item key="10"><Checkbox> 1-3 hours (10,000)</Checkbox></Menu.Item>
                    <Menu.Item key="11"><Checkbox> 3-6 hours (10,000)</Checkbox></Menu.Item>
                    <Menu.Item key="12"><Checkbox> 6-17 hours (10,000)</Checkbox></Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span className='font-bold text-xl'>Features</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                    <Menu.Item key="9"><Checkbox> Subtitles (10,000) </Checkbox></Menu.Item>
                    <Menu.Item key="10"><Checkbox> Quizzers </Checkbox></Menu.Item>
                    <Menu.Item key="11"><Checkbox> Coding Excercises </Checkbox></Menu.Item>
                    <Menu.Item key="12"><Checkbox> Practicse Test</Checkbox></Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span className='font-bold text-xl'>Topic</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                    <Menu.Item key="9"><Checkbox> Python (10,000) </Checkbox></Menu.Item>
                    <Menu.Item key="10"><Checkbox> Java (1,200) </Checkbox></Menu.Item>
                    <Menu.Item key="11"><Checkbox> HTML (100) </Checkbox></Menu.Item> 
                    <Menu.Item key="12"><Checkbox> CSS (50) </Checkbox></Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title={<span className='font-bold text-xl'>Level</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                    <Menu.Item key="9"><Checkbox> All level (10,000) </Checkbox></Menu.Item>
                    <Menu.Item key="10"><Checkbox> Beginner (10,000) </Checkbox></Menu.Item>
                    <Menu.Item key="11"><Checkbox> Intermediate (10,000) </Checkbox></Menu.Item>
                    <Menu.Item key="12"><Checkbox> Expert (10,000) </Checkbox></Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" title={<span className='font-bold text-xl'>Substiles</span>} style={{borderTop: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                <Menu.Item key="5">
                        <Checkbox> English (10,000)</Checkbox>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Checkbox> Chinese (10,000)</Checkbox>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub8" title={<span className='font-bold text-xl'>Price</span>} style={{borderTop: '1px solid gray',borderBottom: '1px solid gray', borderRadius: 0, padding: '5px 0'}}>
                <Menu.Item key="5">
                        <Checkbox> Paid (10,000)</Checkbox>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Checkbox> Free (10,000)</Checkbox>
                    </Menu.Item>
                </SubMenu>
            </Menu>
            <AllCoursesList/>
        </div>
    </div>
  )
}

export default AllCourses