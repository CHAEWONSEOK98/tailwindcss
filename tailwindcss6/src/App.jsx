import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1677211390580-0731589d6409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1662567693394-179905c34f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1592707463561-fb388ffc7c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTg5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1520809172979-fe0577816d28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDQyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToslide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
