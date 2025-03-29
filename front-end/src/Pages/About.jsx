import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center md:pb-24 pb-16 pt-6'  style={{ backgroundImage: `url(${assets.BG_About})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className='md:text-4xl text-3xl text-blue-700 font-extrabold underline md:underline-offset-10 underline-offset-6 md:mb-12 mb-6'>About Us</h1>
      <div className='md:max-w-2xl sm:max-w-md max-w-xs bg-white border border-gray-800 rounded-lg shadow-lg hover:scale-105 hover:transition duration-800 md:p-12 p-8 ' >
        <div className="flex justify-center items-center md:mb-8 mb-4.5">
          <img src={assets.Logo} class="md:w-[80px] w-[48px]" alt="Logo" />
          <span className="md:text-3xl text-lg font-bold whitespace-nowrap md:ms-4 ms-2">E - Learning <span className='md:mx-5 sm:mx-3 mx-1 text-purple-800 font-bold'>|</span> <span className='text-black'> Since 2024 </span> </span>
        </div>
        <p className='md:text-lg text-xs text-justify mb-3'>Our Learning Management System (LMS) is designed to enhance the learning experience by combining innovation, accessibility, and efficiency. We provide a dynamic platform where educators can create, manage, and deliver courses seamlessly, while learners benefit from personalized, AI-driven recommendations and interactive content. Our system supports a variety of learning styles with features like real-time progress tracking, collaborative tools, and intelligent analytics, ensuring an engaging and effective educational journey. Whether for academic institutions, corporate training, or self-paced learning, our LMS fosters growth, knowledge-sharing, and skill development in a flexible and user-friendly environment. We are committed to transforming education by making high-quality learning experiences accessible to everyone, anytime, anywhere.</p>
        <p className='md:text-lg text-xs text-justify mb-3'>At the heart of our LMS is a commitment to empowering both educators and learners through cutting-edge technology. Our platform is built to streamline the teaching process, automate administrative tasks, and provide insightful data that helps instructors enhance their courses. With AI-driven tools, adaptive learning paths, and seamless integration with various educational resources, we create an ecosystem that fosters engagement and continuous improvement. Whether you're an institution looking to scale digital learning or an individual seeking knowledge, our LMS offers the flexibility, support, and innovation needed to succeed in today’s fast-evolving educational landscape.</p>
      </div>
    </div>
  )
}

export default About