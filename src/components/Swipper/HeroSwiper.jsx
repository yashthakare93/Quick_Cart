import React, { useState, useEffect } from 'react';

const HeroSwiper = ({ slides = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  if (slides.length === 0) {
    return <div className="text-center text-white p-4">No slides available</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-200">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute w-full h-96 top-0 left-0 transition-opacity duration-1000 flex items-center justify-center ${
          index === currentIndex ? 'opacity-100' : 'opacity-0'
        }`}
      >
       <div className=' h-full w-full text-center pt-9'>
       
          <h3 className='text-3xl font-semibold'>{slide.title}</h3>
          <h3>{slide.description}</h3>
          <button className='relative bg-yellow-200 -bottom-6 -right-36 p-2 rounded-lg text-sm'>{slide.ctaText}</button>
          
       </div>
      </div>
    ))}
  </div>

  );
};

export default HeroSwiper;