import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://vrthumb.imagetoday.co.kr/2016/12/26/tip250t009615.jpg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            cum vitae quibusdam nam quaerat, labore dolorem veniam, consectetur
            hic accusantium voluptatibus, itaque error facere iusto aperiam a.
            Quisquam, dicta voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
