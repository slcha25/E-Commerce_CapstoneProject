import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-xl text-center pt-8 border-t font-semibold'>
      <Title text1={'About'} text2={'US'} />
        </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-80 rounded-2xl sm:max-w-[500px] md:max-w-[450px]' src={assets.About_us} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p> My Emo was born since I love Inside Out Movie. I wanted to create a platform where people can find merchandise that resonates with their emotions and personalities, just like the characters in the movie. Our mission is to provide high-quality, unique products that help you express your true self.</p>
        <p>At My Emo, we believe that everyone has a story to tell, and our products are designed to help you share that story with the world. Whether you're looking for a gift for a loved one or something special for yourself, we have something for everyone.</p>
        <p className='font-semibold'>- Our Mission</p>
        <p>To provide high-quality, unique products that help individuals express their true selves and celebrate their individuality.</p>
      </div>
    </div>
    <div className='text-xl py-4 text-center '>
      <Title text1={'Our'} text2={'Products'} />
    </div>
    <div className='mb-10 text-gray-600'>
      <div className='border rounded-2xl px-8 md:px-10 py-6 sm:py-20 flex flex-col gap-5'>
          <p className='text-2xl font-semibold text-center'>Inside Out Merchandise</p>
          <ul className='list-disc list-inside mt-4 space-y-1 text-center'>
        <li>Apparel: T-shirts, hoodies, and accessories featuring characters and themes from Inside Out.</li>
        <li>Home Decor: Posters, wall art, and other items to brighten up your living space.</li>
        <li>Toys and Collectibles: Plush toys, figurines, and other collectibles for fans of all ages.</li>
      </ul>
      </div>
      <br />
      <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <p className='text-2xl font-semibold text-center'>Quality Assurance</p>
      <p className='mt-4'>All our products are carefully curated to ensure they meet our high standards of quality and design. We work with trusted suppliers to bring you the best merchandise that you'll love.</p></div>
      </div>
  </div>
  )
}

export default About
