import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  const companies = [
    { src: assets.AmazonIcon, alt: 'Amazon' },
    { src: assets.GoogleIcon, alt: 'Google' },
    { src: assets.MicrosoftIcon, alt: 'Microsoft' },
    { src: assets.FlipkartIcon, alt: 'Flipkart' },
    { src: assets.SpotifyIcon, alt: 'Spotify' },
  ]

  return (
    <div className="mt-14 md:mt-32" id="trigger-element">
      <p className="text-md md:text-2xl text-gray-500 text-center">Preferred by learners across the globe</p>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 mt-5 md:mt-8">
        {companies.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            loading="lazy"
            className="w-20 md:w-32"
          />
        ))}
      </div>
    </div>
  )
}

export default Companies
