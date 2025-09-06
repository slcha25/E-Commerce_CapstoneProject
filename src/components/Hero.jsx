import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
    {/* Hero section-Left Side */}
     <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
      <div className='text-[#414141]'>
        <div className='flex items-center gap-2'>
            <p className='w-10 md:w-11 h-[3px] bg-[#414141]'></p>
            <p className='font-semibold text-indigo-600 text-base md:text-lg lg:text-xl'>Best Sellers</p>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold py-5'>New Collection</h1>
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-orange-400 text-base md:text-lg lg:text-xl'>Shop Now</p>
            <p className='w-10 md:w-11 h-[3px] bg-[#414141]'></p>

            </div> 
      </div>
        
     </div>
        {/* Hero section-Right Side */}
    <div className='w-full sm:w-1/2 '>
        <img src={assets.hero} alt='hero' className='h-full w-full object-cover' />
    </div>
  </div>
  )
}

export default Hero
