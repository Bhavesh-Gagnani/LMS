import React from 'react'
import { assets } from '../../assets/assets';

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center justify-center md:pb-24 pb-16 pt-6" style={{ backgroundImage: `url(${assets.BG_About})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
        <h1 className="md:text-4xl text-3xl text-blue-700 font-extrabold underline md:underline-offset-10 underline-offset-6 md:mb-12 mb-6">About Us</h1>

        <div className="md:max-w-2xl sm:max-w-md max-w-xs bg-white border border-gray-800 rounded-lg shadow-lg hover:scale-103 transition duration-700 md:p-12 p-8">
          <div className="flex justify-center items-center md:mb-8 mb-5">
            <img src={assets.Logo} alt="Logo" loading="lazy" className="md:w-[80px] w-[48px]"/>
            <span className="md:text-3xl text-lg font-bold whitespace-nowrap md:ms-4 ms-2">
              E-Learning <span className="md:mx-5 mx-2 text-purple-800">|</span>{' '}
              <span className="text-black">Since 2024</span>
            </span>
          </div>

          <p className="md:text-lg text-xs text-justify mb-3">
            Our Learning Management System (LMS) is designed to enhance the
            learning experience by combining innovation, accessibility, and
            efficiency. We provide a dynamic platform where educators can create,
            manage, and deliver courses seamlessly, while learners benefit from
            personalized, AI-driven recommendations and interactive content.
            Real-time progress tracking, collaborative tools, and intelligent
            analytics ensure an engaging and effective educational journey for
            academic institutions, corporate training, or self-paced learning.
          </p>

          <p className="md:text-lg text-xs text-justify">
            At the heart of our LMS is a commitment to empowering both educators
            and learners through cutting-edge technology. Our platform streamlines
            teaching, automates tasks, and delivers insights that help instructors
            improve courses. With AI-driven tools, adaptive learning paths, and
            seamless resource integration, we foster an ecosystem built for
            engagement and continuous improvement — anytime, anywhere.
          </p>
        </div>
      </div>
  )
}

export default AboutContent