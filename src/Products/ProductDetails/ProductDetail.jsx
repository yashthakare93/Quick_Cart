import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allData from '../ProductData/allData'; // Import your data from allData.js
import CategoryNav from '../Nav/CategoryNav';
import { BiChevronDown } from 'react-icons/bi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Navbar from '../../components/Navbar/Navbar';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Simulating data fetching delay (replace with actual fetch logic)
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Find product in allData based on productId
                const foundProduct = allData.find(item => item.id === parseInt(productId));

                if (foundProduct) {
                    setProduct(foundProduct);
                    setSelectedImage(foundProduct.imgs[0]); // Set the initial selected image to the first image in the array
                    setLoading(false); 
                } else {
                    throw new Error('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchProduct();
    }, [productId]);


    if (loading) {
        return (
            <div className="container mx-auto flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (!product) {
        return <div>Product not found</div>;
    }
    const handleOnClick = () => {
        alert("EMI currently unavailable"); // Replace with your logic for showing a popup or modal
    };
    const handleImageHover = (img) => {
        setSelectedImage(img); // Update the selected image
    };
    const renderStarRating = (rating) => {
        const stars = Array.from({ length: 5 }, (_, index) => {
            if (index < rating) {
                return <AiFillStar key={index} style={{ color: '#FFD700' }} />;
            } else {
                return <AiOutlineStar key={index} style={{ color: '#FFD700' }} />;
            }
        });
        return stars;
    };
    return (

        <div className="grid grid-cols-12 grid-rows-1 ">
            <div className="row-start-1 col-span-12"><Navbar /></div>
            <div className="row-start-2 col-span-12"><CategoryNav /></div>
            <div className='row-start-3 col-span-12 flex p-10'>
                <div className='flex-col w-36 pr-10 pt-10'>
                    {product.imgs.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={product.title}
                            className="rounded-lg shadow-lg mb-2 border border-gray-400"
                            onMouseEnter={() => handleImageHover(img)}
                        />
                    ))}
                </div>
                <div className='w-full'><img src={selectedImage} alt={product.title} className="w-full h-auto" /></div>
                <div className='w-full pl-10'>
                    <div className="container mx-auto p-4">
                        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

                        <hr className='border-gray-400 my-2' />
                        <div className='flex items-center'>
                            <div>{product.rating}</div>
                            <span className="ml-2 text-yellow-500 flex">
                                {renderStarRating(parseInt(product.rating))}
                            </span>
                            <BiChevronDown />
                            <span className="text-sm text-blue-500 ml-10">{product.reviews}</span>
                        </div>
                        <div className='flex text-sm '>
                            <div>M.R.P.</div>
                            <div className='line-through'>₹{product.prevPrice}</div>
                        </div>
                        <div className='text-sm font-medium pt-2'>Inclusive of all taxes</div>
                        <div className="flex">
                            <div className='font-medium'>EMI starts at ₹82. No Cost EMI available</div>
                            <div className='ml-3 text-green-600'>EMI Options</div>
                            <BiChevronDown className="w-4 h-4 mr-1 mt-1 text-gray-500 cursor-pointer " onClick={handleOnClick} />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
