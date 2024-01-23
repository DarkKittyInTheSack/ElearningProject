
import { useSignals } from '@preact/signals-react/runtime'
import React from 'react'

const CourseContent = () => {
    const clicked = useSignals(false)
  return (
    <div className='w-4/6'>
        <h2 className='font-bold text-2xl mb-5'>Course Content</h2>
        <div className="flex text-sm font-normal my-3 items-center justify-between">
            <span>80 sections &#8226; 774 lectures &#8226; 89h 21m total length</span>
            <button className='font-bold text-blue-800'>Expand all sections</button>
        </div>
        
        <ul>
            <li>
                <button className='w-full border border-gray-400' onClick={() =>{
                    const content = document.getElementById('dropdown_data')
                    if(!clicked.u){
                        content.style.display = 'block'
                        clicked.u = true
                    }else{
                        content.style.display = 'none'
                        clicked.u = false
                    }
                }}>
                    <div className="flex items-center text-lg font-bold justify-between px-2 py-3 bg-gray-200 border-b border-gray-400">
                        <p className='text-center uppercase px-3'><i className='fa-solid fa-chevron-down text-xs pr-3 pl-2'></i> Course Update and anything new</p>
                        <span className='font-normal text-gray-700 text-sm'>4 lectures &#8226; 2min</span>
                    </div>
                </button>
                <ul className='p-4 border-l-2 border-r-2 border-b-2' id='dropdown_data' style={{display: 'none'}}>
                        <li className='py-2'>
                            <div className="flex justify-between items-center font-normal text-sm">
                                <div className='flex items-center'>
                                    <i className='fa-regular fa-file mx-2'></i>
                                    <p className='px-3 underline text-blue-800'>Log Information</p>
                                </div>
                                <div className="flex item-center">
                                    <button className='underline text-blue-800 px-4'>Preview</button>
                                    <span className='px-4 text-gray-500'>00:02</span>
                                </div>
                            </div>
                        </li>
                        <li className='py-2'>
                            <div className="flex justify-between items-center font-normal text-sm">
                                <div className='flex items-center'>
                                    <i className='fa-regular fa-file mx-2'></i>
                                    <p className='px-3 underline text-blue-800'>Log Information</p>
                                </div>
                                <div className="flex item-center">
                                    <button className='underline text-blue-800 px-4'>Preview</button>
                                    <span className='px-4 text-gray-500'>00:02</span>
                                </div>
                            </div>
                        </li>
                    </ul>
            </li>
            <li>
                <button className='w-full border border-gray-400' onClick={() =>{
                    const content = document.getElementById('dropdown_data_2')
                    if(!clicked.u){
                        content.style.display = 'block'
                        clicked.u = true
                    }else{
                        content.style.display = 'none'
                        clicked.u = false
                    }
                }}>
                    <div className="flex items-center text-lg font-bold justify-between px-2 py-3 bg-gray-200 border-b border-gray-400">
                        <p className='text-center uppercase px-3'><i className='fa-solid fa-chevron-down text-xs pr-3 pl-2'></i> Course Update and anything new</p>
                        <span className='font-normal text-gray-700 text-sm'>4 lectures &#8226; 2min</span>
                    </div>
                    
                </button>
                <ul className='p-4 border-l-2 border-r-2 border-b-2' id='dropdown_data_2' style={{display: 'none'}}>
                        <li className='py-2'>
                            <div className="flex justify-between items-center font-normal text-sm">
                                <div className='flex items-center'>
                                    <i className='fa-regular fa-file mx-2'></i>
                                    <p className='px-3 underline text-blue-800'>Log Information</p>
                                </div>
                                <div className="flex item-center">
                                    <button className='underline text-blue-800 px-4'>Preview</button>
                                    <span className='px-4 text-gray-500'>00:02</span>
                                </div>
                            </div>
                        </li>
                        <li className='py-2'>
                            <div className="flex justify-between items-center font-normal text-sm">
                                <div className='flex items-center'>
                                    <i className='fa-regular fa-file mx-2'></i>
                                    <p className='px-3 underline text-blue-800'>Log Information</p>
                                </div>
                                <div className="flex item-center">
                                    <button className='underline text-blue-800 px-4'>Preview</button>
                                    <span className='px-4 text-gray-500'>00:02</span>
                                </div>
                            </div>
                        </li>
                </ul>
            </li>
        </ul>

        <button className='font-bold text-sm text-center w-full py-2 border border-black my-4'>70 more Sections</button>
    </div>
  )
}

export default CourseContent