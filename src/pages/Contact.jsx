import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'

const Contact = () => {
  return (
    <div className='border-t'>
      <div className=' text-xl font-semibold text-center py-8'>
        <Title text1={'Contact'} text2={'US'} />
      </div>
      
      <div className='my-5 flex flex-col md:flex-row gap-12 items-center justify-center pb-10'>
        {/* Image Section - Centered on mobile */}
        <div className='flex justify-center md:justify-end w-full md:w-1/2'>
          <img 
            className='w-90 rounded-2xl md:max-w-[480px] max-w-full' 
            src={assets.Contact} 
            alt="Contact us" 
          />
        </div>
        
        {/* Form Section - Larger and better positioned */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
          <div className="w-full max-w-md border rounded-2xl p-6 md:p-8 shadow-lg">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="c573cda8-2be6-49c8-9675-496a0dcc3fbb"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your message:</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows="5"
                  className="contact-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>
              
              <div className='w-full text-center'>
                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Contact