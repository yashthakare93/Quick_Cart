import React from 'react';

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
  return (
    <div className="max-w-sm overflow-hidden p-4 bg-white border-2 border-gray-100">
      <img className="w-full h-40" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-semibold text-md mb-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </div>

        <div className="flex items-center" style={{ color: 'gold' }}>
          {star}
          <span className="ml-1">{reviews}</span>
        </div>
        <div className="text-gray-700 text-base">{company}</div>
        <div className="text-gray-600 text-sm">Color: {color}</div>
        <div className="text-gray-600 text-sm">Category: {category}</div>
        <div className='flex'>
          <div className="text-red-500 line-through mr-2">{prevPrice}</div>
          <div className="text-green-500 ">{newPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Card