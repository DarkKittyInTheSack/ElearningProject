import React from 'react'

const CourseMoreDetail = () => {
  return (
    <div className='w-4/6'>
        <h2 className='font-bold text-2xl'>Requirements</h2>
        <ul className='font-normal text-base list-disc p-5 space-y-1'>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, esse!</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, esse!</p></li>
        </ul>

        <h2 className='font-bold text-2xl'>Description</h2>
        <p className='font-normal text-base leading-6 my-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tempore molestias quisquam adipisci sed veniam reprehenderit cupiditate quidem accusantium hic ratione asperiores illo neque deserunt eum quam consequuntur accusamus architecto officia, eaque perferendis nesciunt illum! Tenetur maiores enim quod accusantium mollitia, eveniet modi vel incidunt placeat itaque nostrum quae aliquam.</p>

        <h2 className='font-bold text-2xl mt-5'>Who's this course for</h2>
        <ul className='font-normal text-base list-disc p-4 space-y-1'>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
        </ul>
    </div>
  )
}

export default CourseMoreDetail