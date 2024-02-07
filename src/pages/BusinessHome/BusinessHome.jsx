import React from 'react'
import BusinessDescription from './BusinessDescription'
import BusinessForm from './BusinessForm'

const BusinessHome = () => {
  return (
    <div className='container mx-auto flex'>
        <BusinessDescription/>
        <BusinessForm/>
    </div>
  )
}

export default BusinessHome