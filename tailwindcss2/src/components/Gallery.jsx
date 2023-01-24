import React from 'react';

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__480.jpg"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__480.jpg"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945__480.jpg"
            alt="/"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__480.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
