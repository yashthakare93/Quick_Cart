import React from 'react';
import data from '../Data/Sneakers';

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
  return (
    <div className="max-w-sm  overflow-hidden p-4 bg-white border-2 border-gray-100">
      <img className="w-full h-36" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex items-center style={{ color: 'gold' }}">
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

const CardGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
    {data.map((product, index) => (
      <div key={index}>
        <Card
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          company={product.company}
          color={product.color}
          category={product.category}
        />
      </div>
    ))}
  </div>
  );
};
  
export default CardGrid;
