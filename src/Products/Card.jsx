import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from "react-icons/md";

const Card = (props) => {
  const { title, reviews, prevPrice, newPrice, company, rating, imagesByColor, discount, isQuickCartChoice } = props;

  // Calculate the number of full and empty stars
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  // Get the first color by default
  const defaultColor = imagesByColor ? Object.keys(imagesByColor)[0] : null;
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  // Get the first image of the selected color
  const selectedImg = selectedColor && imagesByColor[selectedColor] && imagesByColor[selectedColor][0]
    ? imagesByColor[selectedColor][0]
    : imagesByColor[defaultColor][0];

  return (
    <div className="relative overflow-hidden p-4 gap-1 bg-white border-2 border-gray-100 rounded-lg w-62 h-96 flex flex-col justify-center">
      {isQuickCartChoice && (
        <div className="absolute top-0 left-0 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          QuickCart's <span className='text-orange-400'>Choice</span>
        </div>
      )}
      <div className="flex justify-center mb-4">
        {selectedImg ? (
          <img className="h-32 w-full object-cover items-center" src={selectedImg} alt={title} />
        ) : (
          <div className="h-32 w-full flex items-center justify-center text-gray-500">No Image Available</div>
        )}
      </div>

      <div className="px-1 flex flex-col items-center">
        <div className='flex'>
          <div className="font-semibold text-lg mr-3 text-center">{company}</div>
          {imagesByColor && (
            <div className="flex items-center gap-2">
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
        <div className="font-medium mb-2 text-center">{title}</div>
        <div className="flex items-center mb-2 text-center">
          <div className="flex items-center gap-1">
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
        <div className="flex ">
          <div className="text-2xl font-medium mr-1">₹{newPrice}</div>
          {prevPrice && (
            <div className="flex justify-center gap-1">
              <div className='mr-1'>M.R.P:</div>
              <div className='line-through'>₹{prevPrice}</div>
              {discount && (
                <div className=''>{discount}% off</div>
              )}
            </div>
          )}      
        </div>
      </div>
    </div>
  );
};

export default Card;
