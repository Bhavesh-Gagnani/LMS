import React from "react";

const CourseCard = ({ course, selectedVideo, setSelectedVideo }) => {
  const { id, title, category, description, price, videoUrl, thumbnail } = course;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">

      {selectedVideo === id ? (
        <iframe
          src={`${videoUrl}?autoplay=1`}
          title={title}
          className="w-full aspect-video rounded-t-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video rounded-t-lg cursor-pointer"
          onClick={() => setSelectedVideo(id)}
        />
      )}

      <div className="text-start py-4 px-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{description}</p>
        <p className="text-lg font-semibold text-blue-700">{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
