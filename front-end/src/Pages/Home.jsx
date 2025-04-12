import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Companies from '../Components/Companies'
import Testimonial from '../Components/Testimonial'
import Learn from '../Components/Learn'
import Introduction from '../Components/Introduction'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, []);
  
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Introduction />
      <Companies />
      <Testimonial />
      <Learn />
    </div>
  )
}

export default Home
