import React, { useContext, useState } from 'react';
import { SportHealthcareContext } from '../context/SportHealthcareContext';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const SportHealthcare = () => {
    const SportHealthcare = useContext(SportHealthcareContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 6);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 6, 0));
    };

    // Get the current 6 products
    const currentProducts = SportHealthcare.slice(currentIndex, currentIndex + 6);

    return (
        <section className="pb-4">
            <div className="container mx-auto bg-white pb-4">
                <div className="flex items-center justify-between p-3">
                    <h2 className="text-2xl font-normal mb-2">Sport, Healthcare & more</h2>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handlePrevious}
                            className="p-2 rounded-full bg-gray-400 bg-opacity-30 "
                            disabled={currentIndex === 0}
                        >
                            <FaArrowLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full bg-gray-400 bg-opacity-30 "
                            disabled={currentIndex + 6 >= SportHealthcare.length}
                        >
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="rounded-lg p-4 text-center border-2">
                            <img src={product.image} alt={product.name} className="w-full h-48 rounded-lg" />
                            <h3 className="mt-2 text-sm">{product.name}</h3>
                            <div className="mt-1 flex justify-center">
                                <span className="text-md font-semibold flex">
                                  {product.new_price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SportHealthcare;
