import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5 mt-10 text-sm'>    
      <div>
        <img src={assets.logo} className='mb-5 w-35' alt="logo" />
        <p className='w-full md:w-2/3 text-gray-600 sm:text-base'>
            My Emo Commerce is your one-stop shop for all things emo.Our mission is to provide high-quality, affordable products that help you express your unique style and personality.
        </p>
      </div>
        <div>
            <h1 className='text-xl font-semibold mb-5'>Quick Links</h1>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>

         <div>
            <p className='text-xl font-semibold mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>1-123-456-7890</li>
                <li>myemo@emotion.com</li>
            </ul>
         </div>
         <div>
        <p className='text-shadow-gray-200 text-base mb-10'>© 2025 Sandra Chan. All rights reserved.</p>
    </div>
    </div>
    
  )
}

export default Footer
