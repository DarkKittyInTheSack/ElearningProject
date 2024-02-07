import React from 'react'

const BusinessDescription = () => {
  return (
    <div className='container mx-auto font-bold mx-3'>
        <h2 className="font-sans font-serif text-5xl py-5">Get your demo</h2>
        <span className='font-normal text-lg text-gray-500'>Tell us your needs and we’ll start on a custom plan to drive results.</span>

        <ul className='py-8 space-y-4'>
            <li>
                <h2 className='text-xl'>With Udemy as your learning partner, you can:</h2>
            </li>
            <li>
                <p className='font-normal text-sm'><i className='fa-solid fa-check mx-3 text-green-800'></i>Train your entire workforce with over 24,000+ courses in 15 languages</p>
            </li>
            <li>
                <p className='font-normal text-sm'><i className='fa-solid fa-check mx-3 text-green-800'></i>Prep employees for over 200 industry-recognized certification exams</p>
            </li>
            <li>
                <p className='font-normal text-sm'><i className='fa-solid fa-check mx-3 text-green-800'></i>Develop highly skilled tech teams in risk-free practice environments</p>
            </li>
            <li>
                <p className='font-normal text-sm'><i className='fa-solid fa-check mx-3 text-green-800'></i>Identify emerging skills gaps, learning trends, and industry benchmarks</p>
            </li>
            <li>
                <p className='font-normal text-sm'><i className='fa-solid fa-check mx-3 text-green-800'></i>Integrate content with your existing learning management system</p>
            </li>
        </ul>

        <h2 className='py-3 text-lg'>Trusted by:</h2>
        <div className="grid grid-cols-4 w-2/3 my-3 gap-10 my-3">
            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/volkswagen-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/samsung-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/cisco-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/att-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/pg-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/hpe-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/citi-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>

            <figure>
                <img src="https://business.udemy.com/wp-content/uploads/2023/11/ericsson-logo-11-2023.png" width={'237px'} height={'112px'} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default BusinessDescription