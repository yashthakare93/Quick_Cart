import { useContext } from 'react';
import React from 'react';
import { MobileDealsContext } from '../../context/MobileDealsContext';

const MobileDeals = () => {
    const mobileDeals = useContext(MobileDealsContext);
    return (
      <section className="py-12">
      <div className="container mx-auto bg-white pb-4">
        <h2 className="text-2xl font-semibold mb-2 p-3">Best Deals on Mobile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 ">
          {mobileDeals.map((product) => (
            <div key={product.id} className="rounded-lg  p-4 text-center border-2">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-sm ">{product.name}</h3>
              <div className="mt-2 flex justify-center">
                <span className="text-md font-bold flex"><p className='font-sm pr-1'>Just for </p>{ product.new_price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default MobileDeals;
