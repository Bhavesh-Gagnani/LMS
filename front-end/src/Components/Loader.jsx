import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[1]">
    <div
      className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      style={{ animationDuration: '0.3s' }}
    ></div>
  </div>
);

export default Loader;
