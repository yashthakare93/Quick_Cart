import React from 'react';
import heroImage from '../Assets/hero.png'
import HeroSwiper from '../Swipper/HeroSwiper';
import { Link } from 'react-router-dom';

const Hero = () => {
    const slides = [
    {
        title: 'Electronics and Accessories',
        description: 'Discover the best deals on electronics & accessories!',
        ctaText: 'Shop Now',
        ctaLink: '#',
      },
      {
        title: 'Epic Smartphone Deals',
        description: 'Get the latest smartphones at unbeatable prices.',
        ctaText: 'Explore',
        ctaLink: '#',
      },
      {
        title: 'Books, Toys, and Gaming',
        description: 'Find the best deals on books, toys, and gaming gear.',
        ctaText: 'Browse Now',
        ctaLink: '#',
      },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[400px] gap-5 ">
            <div className="relative flex flex-col justify-between bg-gray-200 bg-opacity-50 col-span-1 md:col-span-2 p-4 md:p-6 text-black">
                <div className='z-10 md:pl-10 md:pt-10 pl-4'>
                <p className="hidden md:grid text-sm md:text-lg mb-4 md:mb-6">Discover the latest trends in men's fashion.</p>
                    <h1 className="text-sm md:text-4xl font-semibold mb-2 md:mb-4">Men's T Shirt</h1>
                    <h1 className="text-sm md:text-4xl font-semibold mb-2 md:mb-4">Grab upto 40% off on </h1>
                    <h1 className="text-sm md:text-4xl font-semibold mb-2 md:mb-4"> selected T-Shirts</h1>
                    <Link to='/login'><button className="px-3 md:px-6 py-1 md:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Shop Now
                    </button></Link>
                </div>
                <div className="absolute z-0 md:inset-y-0 right-5 w-1/3 md:w-1/3 h-36 bottom-0 md:h-full" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div>
            {/* only visible for md */}
            <div className="hidden md:flex md:flex-col gap-4">
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/storage/2020/May/Mobile_Header_ClearanceStore.jpg' alt="" className='h-64' />
                <HeroSwiper slides={slides} interval={3000}/>
            </div>
        </div>

    );
}

export default Hero;
