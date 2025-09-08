import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        alert('Thank you for subscribing!');
    }

  return (
    <div className='text-center'>
        <h1 className='text-2xl font-semibold mb-5'>Subscribe to our Newsletter</h1>
        <p className='text-gray-600 mb-5'>Stay updated with the latest news and exclusive offers.</p>
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-center gap-3'>
            <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded-md p-2 w-100 sm:w-80  focus:outline-none focus:ring-2 focus:ring-blue-500' required/>
            <button type="submit" className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300'>Subscribe</button>
        </form>
      
    </div>
  )
}

export default NewsletterBox
