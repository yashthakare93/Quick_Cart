import React from 'react';
import data from '../Data/Sneakers';

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
  return (
    <div className="max-w-sm  overflow-hidden p-4 bg-white border-2 border-gray-100">
      <img className="w-full h-36" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">{company}</div>
        <div className="text-gray-600 text-sm">Color: {color}</div>
        <div className="text-gray-600 text-sm">Category: {category}</div>
        <div className="flex items-center">
          {star}
          <span className="ml-1">{reviews}</span>
        </div>
        <div className="text-red-500 line-through">{prevPrice}</div>
        <div className="text-green-500">{newPrice}</div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((deal, index) => (
        <Card
          key={index}
          img={deal.img}
          title={deal.title}
          star={deal.star}
          reviews={deal.reviews}
          prevPrice={deal.prevPrice}
          newPrice={deal.newPrice}
          company={deal.company}
          color={deal.color}
          category={deal.category}
        />
      ))}
    </div>
  );
};

export default CardGrid;
