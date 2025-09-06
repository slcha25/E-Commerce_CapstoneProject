import React from 'react'
import Hero from '../components/Hero'
import NewCollection from '../components/NewCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
        <h1 className='text-2xl m-auto sm:text-lg md:text-base font-sans font-semibold py-10 flex justify-center'>Welcome to emotion store! Discover your emotion and explore your own experience.</h1> 
        <Hero/>
        <NewCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsletterBox/>
    </div>
  )
}

export default Home
