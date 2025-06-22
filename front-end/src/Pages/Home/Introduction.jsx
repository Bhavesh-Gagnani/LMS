import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useClerk, useUser } from '@clerk/clerk-react'

const Introduction = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const navigate = useNavigate()

  const handleStart = () => {
    user ? navigate('/course') : openSignIn()
  }

  return (
    <div className="w-full pt-16 pb-6 md:px-18 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gray-50 border border-gray-300 shadow-lg md:py-20 py-10 md:px-20 px-8">
        
        <div className="w-full md:w-1/2">
          <video
            className="w-full h-auto rounded-lg object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src={assets.Intro} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-blue-700 underline underline-offset-12 md:underline-offset-20 font-extrabold text-4xl lg:text-6xl">
            E - Learning
          </h1>
          <p className="text-lg text-gray-700 mt-8 md:mt-12">
            It has the power to transform your life, equipping you with the skills and knowledge to unlock new opportunities and achieve your full potential.
          </p>
          <button
            onClick={handleStart}
            className="text-sm mt-6 md:mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white md:px-12 md:py-4 px-8 py-2.5 rounded-lg transition"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Introduction
