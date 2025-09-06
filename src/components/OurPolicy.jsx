import React from 'react'
import assets from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange} className='w-15 m-auto mb-5' alt="exchange" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-600'>Hassle-free exchange policy</p>
      </div>
      <div>
        <img src={assets.return_icon} className='w-15 m-auto mb-5' alt="exchange" />
        <p className='font-semibold'>14 days return</p>
        <p className='text-gray-600'>We provide 14 days free return</p>
      </div>
      <div>
        <img src={assets.support_agent} className='w-15 m-auto mb-5' alt="exchange" />
        <p className='font-semibold'>Customer Service Agent</p>
        <p className='text-gray-600'>24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy
