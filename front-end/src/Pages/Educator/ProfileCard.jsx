import React from 'react';

const ProfileCard = ({ name, title, img }) => (
  <div className="w-sm bg-stone-50 shadow-lg rounded-lg p-4 flex items-center hover:scale-105 transition duration-300 space-x-4">
    <img
      src={img}
      alt={name}
      className="w-24 h-24 rounded-full object-cover"
    />
    <div>
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  </div>
);

export default ProfileCard;
