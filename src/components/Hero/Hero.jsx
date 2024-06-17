import React from 'react';
import heroImage from '../Assets/hero.png'
const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[500px] p-6 md:px-16  gap-4">
            <div className="relative flex flex-col justify-between bg-gray-200 bg-opacity-50 col-span-1 md:col-span-2 p-4 md:p-6 text-black">
                <div className='z-10 md:pl-10 md:pt-10 pl-4'>
                <p className="hidden md:grid text-sm md:text-lg mb-4 md:mb-6">Discover the latest trends in men's fashion.</p>
                    <h1 className="text-sm md:text-4xl font-semibold mb-2 md:mb-4">Men's T Shirt</h1>
                    <h1 className="text-sm md:text-4xl font-semibold mb-2 md:mb-4">Grab upto 50% off on </h1>
                    <h1 className="text-sm md:text-4xl font-semibold mb-2 md:mb-4"> selected T-Shirts</h1>
                    <button className="px-3 md:px-6 py-1 md:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Shop Now
                    </button>
                </div>
                <div className="absolute z-0 md:inset-y-0 right-5 w-1/3 md:w-1/3 h-36 bottom-0 md:h-full" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div>
            {/* only visible for md */}
            <div className="hidden md:grid grid-rows-2 gap-4">
                <div className="flex justify-center items-center bg-gray-200 h-24 md:h-auto">
                    {/* Content for row 1 */}
                </div>
                <div className="flex justify-center items-center bg-gray-200 h-24 md:h-auto">
                    {/* Content for row 2 */}
                </div>
            </div>
        </div>

    );
}

export default Hero;
