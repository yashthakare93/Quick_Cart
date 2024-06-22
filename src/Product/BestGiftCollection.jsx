import React, { useContext } from 'react';
import { HeadphoneDealsContext } from '../context/HeadphoneContext';
import { IoIosArrowForward } from "react-icons/io";

const BestGiftCollection = () => {
    const headphoneDeals = useContext(HeadphoneDealsContext);
    const items = headphoneDeals.slice(0, 4);

    return (
        <div className="w-full px-4 py-8 bg-white">
            <div className="relative">
                <div className="absolute right-0 bottom-0 mr-4 mb-4">
                    <IoIosArrowForward className="text-white w-6 h-6 bg-blue-600 rounded-full p-1" />
                </div>
                <p className='font-normal text-2xl pb-4 pl-4'>Best Gift Collection</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-8">
                {items.map((deal, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-center items-center p-2 relative">
                        <img src={deal.image} alt={deal.name} className="w-44 h-44 object-contain" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{deal.name}</h3>
                            <p className="mt-2 font-bold text-green-600">Min. 50% Off</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestGiftCollection;
