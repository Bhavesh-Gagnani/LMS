import React from 'react'
import { assets } from '../assets/assets'

const Companies = () => {
  
  return (
    <div className="md:mt-32 mt-14 " id='trigger-element'>
      <p className='md:text-2xl text-md text-gray-500'>Preferred by learners across the globe</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-14 md:mt-8 mt-5'>
        <img src={assets.AmazonIcon} alt="Amazon" className='w-20 md:w-32'/>
        <img src={assets.GoogleIcon} alt="Google" className='w-20 md:w-32'/>
        <img src={assets.MicrosoftIcon} alt="Microsoft" className='w-20 md:w-32'/>
        <img src={assets.FlipkartIcon} alt="Flipkart" className='w-20 md:w-32'/>
        <img src={assets.SpotifyIcon} alt="Spotify" className='w-20 md:w-32'/>
      </div>
    </div>
  )
}

export default Companies