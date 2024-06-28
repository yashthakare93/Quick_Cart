import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Card = (props) => {
  const { title, reviews, prevPrice, newPrice, company, rating, imagesByColor, discount } = props;

  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  const defaultColor = imagesByColor ? Object.keys(imagesByColor)[0] : null;
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const selectedImg = selectedColor && imagesByColor[selectedColor] && imagesByColor[selectedColor][0]
    ? imagesByColor[selectedColor][0]
    : imagesByColor[defaultColor][0];

  return (
    <div className="lg:p-4 sm:p-2 bg-white border border-gray-100 justify-center lg:h-auto">
      <div className="h-48 justify-center lg:h-44 overflow-hidden">
        {selectedImg ? (
          <img src={selectedImg} alt={title} />
        ) : (
          <div className="w-full flex items-center justify-center text-gray-500 h-full">No Image Available</div>
        )}
      </div>

      <div className="px-1 flex flex-col items-center">
        <div className='flex flex-col sm:flex-row'>
          <div className="font-semibold text-lg sm:text-base mr-3 text-center">{company}</div>
          {imagesByColor && (
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              {Object.keys(imagesByColor).map((colorKey, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer ${selectedColor === colorKey ? 'border-2 border-blue-600 ' : ''}`}
                  style={{ backgroundColor: colorKey }}
                  onMouseEnter={() => setSelectedColor(colorKey)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="font-medium mb-2 text-center text-lg sm:text-base">{title}</div>
        <div className="flex items-center mb-2 text-center">
          <div className="flex gap-1">
            {Array.from({ length: fullStars }).map((_, index) => (
              <AiFillStar key={index} className='text-green-500' />
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <AiOutlineStar key={index} className='text-green-500' />
            ))}
          </div>
          <MdKeyboardArrowDown />
          <span className="text-sm text-blue-500 ml-1">{reviews}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="text-2xl sm:text-xl font-medium mr-1">₹{newPrice}</div>
          {prevPrice && (
            <div className='flex justify-center items-center gap-1 text-sm sm:text-base'>
              <div className="flex ">
                <div className='mr-1'>M.R.P:</div>
                <div className='line-through'>₹{prevPrice}</div>
              </div>
              <div>{discount && (
                <div className=''>{discount}% off</div>
              )}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
