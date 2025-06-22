import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useClerk, useUser } from '@clerk/clerk-react'

const Learn = () => {
  const navigate = useNavigate()
  const { openSignIn } = useClerk()
  const { user } = useUser()

  const handleStart = () => {
    user ? navigate('/course') : openSignIn()
  }

  const handleLearnMore = () => {
    navigate('/about')
  }

  return (
    <div className="w-full pt-12 md:pt-30 sm:pt-24 pb-3 md:pb-6 sm:pb-12 text-center">
      <h1 className="text-xl md:text-[32px] text-gray-800 font-bold tracking-wide">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-sm md:text-lg md:px-0 px-16 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet voluptatum id.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-6 md:mt-10 mb-20 md:mb-32">
        <button
          onClick={handleStart}
          className="text-sm text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg md:px-12 md:py-4 px-6 py-2"
        >
          Get Started
        </button>

        <button
          onClick={handleLearnMore}
          className="flex items-center gap-1.5 rounded-md hover:bg-gray-200/60 md:px-8 md:py-3.5 px-4 py-2"
        >
          Learn More
          <img className="h-5" src={assets.RightArrow} alt="Arrow" loading="lazy" />
        </button>
      </div>
    </div>
  )
}

export default Learn
