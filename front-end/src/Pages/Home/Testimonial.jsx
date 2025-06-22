import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const testimonials = [
  {
    id: 1,
    name: 'Emily Parker',
    image: assets.Student_1,
    rating: 4.9,
    feedback:
      'Dedicated educators delivering top quality teaching! Engaging lessons, clear explanations, and interactive learning empowering minds every day!',
  },
  {
    id: 2,
    name: 'Michael Anderson',
    image: assets.Student_2,
    rating: 4.6,
    feedback:
      'Learners praise the exceptional teaching quality and engagement. Highly praised for clarity, knowledge, and interactive sessions.',
  },
  {
    id: 3,
    name: 'Ava Williams',
    image: assets.Student_3,
    rating: 4.2,
    feedback:
      'Educators delivering exceptional teaching with engaging lessons, clear explanations, and interactive learning empowering minds every day!',
  },
]

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating)
  const emptyStars = 5 - filledStars

  return (
    <div className="flex items-center space-x-1">
      {[...Array(filledStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
  )
}

const Testimonial = () => {
  const navigate = useNavigate()

  const Readmore = () => {
    navigate('/educator')
  }

  return (
    <div className="w-full md:pt-32 pt-20">
      <h1 className="text-4xl font-bold mb-5">Testimonials</h1>
      <p className="text-lg text-gray-500 xl:px-72 sm:px-32 mb-16">
        Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-12">
        {testimonials.map(({ id, name, image, rating, feedback }) => (
          <div key={id} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition duration-300">
            <img className="rounded-t-lg" src={image} alt="Student" loading="lazy" />
            <div className="py-3 px-5">
              <h2 className="text-start text-2xl font-medium mt-3 mb-2">{name}</h2>
              <div className="flex items-center mb-4">
                <StarRating rating={rating} />
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded-sm ms-3">{rating}</span>
              </div>
              <p className="text-sm text-justify mb-3">{feedback}</p>
              <button
                onClick={Readmore}
                className="flex items-start text-lg text-blue-700 font-bold hover:underline hover:text-blue-900"
              >
                Read more +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
