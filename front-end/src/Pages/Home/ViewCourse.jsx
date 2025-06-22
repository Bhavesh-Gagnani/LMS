import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';

const ViewCourse = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    user ? navigate('/course') : openSignIn();
  };

  return (
    <div className="md:h-14 h-12 flex items-center bg-white rounded-sm hover:scale-105 transition duration-300 mt-3">
      <button
        onClick={handleClick}
        className="bg-transparent text-gray-600 md:px-12 px-6 md:py-4 py-3 text-sm md:text-base"
      >
        View All Courses
      </button>
    </div>
  );
};

export default ViewCourse;
