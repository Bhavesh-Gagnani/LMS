import React from 'react'
import Hero from '../Components/Hero'
import Companies from '../Components/Companies'
import Testimonial from '../Components/Testimonial'
import Learn from '../Components/Learn'
import Introduction from '../Components/Introduction'

const Home = () => {
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