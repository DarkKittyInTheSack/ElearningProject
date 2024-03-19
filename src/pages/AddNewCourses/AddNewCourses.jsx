import React, { useState } from "react";
import {Input,DatePicker} from 'antd'
import { Link } from "react-router-dom";
import { getLocalStore } from "../../utils/local";
const {TextArea} = Input
const AddNewCourses = () => {

  const [imagePicker, setImagePicker] = useState()
  const user = getLocalStore('user_info')

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center">
        <div className="mb-10">
          <h2 className="font-bold font-sans text-2xl ">Add new Course</h2>
          <span className="font-normal text-base my-3 ">Share your knowledge for everyone</span>
        </div>

        <Link to={`/teacher/yourCourse/${user.taiKhoan}`} className="bg-black px-2 py-3 rounded text-white">View all your course</Link>
      </div>
      

      <ul className="font-bold space-y-3">
        <li>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Course Code"
              className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-1/2"
            />
            <input
              type="text"
              placeholder="Course Alias"
              className="font-normal ms-3 text-base p-3 placeholder:font-bold outline-none border border-black w-1/2"
            />
          </div>
        </li>
        <li>
          <TextArea className="font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full rounded-none hover:border-black" rows={4} placeholder='Course Description '/>
        </li>
        <li>
          <select className="font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full">
            <option value="#" className="font-bold text-base block">
              Course Category
            </option>
          </select>
        </li>
      </ul>
      <ul className="font-bold space-y-3 my-10">
        <li>
          <label htmlFor="date">Date created:</label>
          <DatePicker name="date" className="mx-3 font-bold text-base" onChange={(date, dateString) => console.log(date, dateString)}/>
        </li>
        <li>
          <label htmlFor="image">Course Image:</label>
          <input type="file" accept="image/*" 
          className="mx-3"
            onChange={(event) =>{
              const image = event.target.files[0]
              if(image){
                const imageUrl = URL.createObjectURL(image)
                setImagePicker(imageUrl)
              }
            }} />
          <div className="w-1/4 my-3">
            <img src={imagePicker} alt="" className="w-full block"/>
          </div>
          
        </li>
        <li>
          <button className="bg-black text-base font-bold py-3 w-full text-white my-10">
            Submit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AddNewCourses;
