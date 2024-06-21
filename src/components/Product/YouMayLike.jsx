import React, { useContext } from 'react';
import { HeadphoneDealsContext } from '../../context/HeadphoneContext';
import { IoIosArrowForward } from 'react-icons/io';

const YouMayLike = () => {
  const headphoneDeals = useContext(HeadphoneDealsContext);
  const items = headphoneDeals.slice(0, 3); // Assuming you want the first 3 items

  return (
    <div className="w-full container bg-white px-4 py-8">
      <div className="relative">
        <div className="absolute right-0 bottom-0 mr-4 mb-4">
          <IoIosArrowForward className="text-white w-6 h-6 bg-blue-600 rounded-full p-1" />
        </div>
        <p className="font-normal text-2xl pb-4 pl-4">You May Like...</p>
      </div>
      <hr className='pt-10' />
      
      <div className="grid grid-cols-4 gap-3 items-center">
      <div className="col-span-2">
        {items.slice(0, 1).map((deal, index) => (
          <div key={index} className="bg-white p-3 rounded-md ">
            <img src={deal.image} alt={deal.name} className="w-44 h-44 object-contain mx-auto" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{deal.name}</h3>
              <p className="mt-2 font-bold text-green-600">Min. 50% Off</p>
            </div>
          </div>
        ))}
        </div>

        <div className="col-span-2 grid gap-1 ">
          {items.slice(1, 3).map((deal, index) => (
            <div key={index} className="bg-white p-3 rounded-md">
              <img src={deal.image} alt={deal.name} className="w-44 h-44 object-contain mx-auto" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{deal.name}</h3>
                <p className="mt-2 font-bold text-green-600">Min. 50% Off</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='pb-3'/>
    </div>
  );
};

export default YouMayLike;
