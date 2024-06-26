import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allData from '../ProductData/allData';
import CategoryNav from '../Nav/CategoryNav';
import { AiFillStar } from 'react-icons/ai';
import { PiLineVerticalThin } from "react-icons/pi";
import Navbar from '../../components/Navbar/Navbar';
import ImageModal from './ImageModal';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [modalImage, setModalImage] = useState(null);

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
                    setSelectedSize(foundProduct.availableSizes[0]); // Set the initial selected size to the first size available
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


    const handleImageHover = (img) => {
        setSelectedImage(img); // Update the selected image
    };
     const handleImageClick = (img) => {
        setModalImage(img); // Set the clicked image as the modal image
    };



    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value); // Update selected size
    };

    return (
        <div className="grid grid-cols-12 grid-rows-1 ">
            <div className="row-start-1 col-span-12"><Navbar /></div>
            <div className="row-start-2 col-span-12"><CategoryNav /></div>
            <div className='row-start-3 col-span-12 flex p-10'>
                <div className='flex-col w-36 pr-10 pt-10'>
                    {product.imgs?.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={product.title}
                            className="rounded-lg shadow-lg mb-2 border border-gray-400"
                            onMouseEnter={() => handleImageHover(img)}
                        />
                    ))}
                </div>
                <div className='w-full '>
                <div className=''>
                <img src={selectedImage} alt={product.title} className="w-full rounded-lg" /> </div>
                <div className="container flex flex-wrap mt-10">
                    {product.imgs.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={product.title}
                            className="rounded-lg shadow-lg mb-2 w-96 border border-gray-400 cursor-pointer"
                            onClick={() => handleImageClick(img)} // Open the image in the modal on click
                        />
                    ))}
          
                </div>
                </div>
                <div className='w-full pl-10'>
                    <div className="container mx-auto p-4">
                        <h2 className="text-xl font-bold ">{product.company}</h2>
                        <h2 className="text-xl font-semibold text-gray-400 mb-4">{product.title}</h2>

                        <div className='flex items-center border-2 w-fit px-2 hover:border-slate-950'>
                            <div className='flex items-center gap-1 '>
                                {product.rating}
                               <AiFillStar /> 
                               <PiLineVerticalThin/>
                            </div>
                            <span className="text-sm text-blue-500 ml-1">{product.reviews}</span>
                        </div>

                        <hr className='border-gray-400 mt-4' />
                        <div className='text-sm font-medium pt-2 text-green-400'>Inclusive of all taxes</div>

                        <div className="flex my-4 items-center gap-3">
                            <div className=" text-3xl font-semibold text-gray-900 ">{product.newPrice}</div>
                            <div className='flex gap-1'>
                                <div className="text-xl text-gray-500  ">
                                    MRP
                                </div>
                                <div className="text-xl text-gray-500 line-through  ">
                                    {product.prevPrice}
                                </div>
                            </div>
                            <div className=" text-orange-500 font-semibold ">
                                ({product.discount} OFF)
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="text-sm">MORE COLORS</div>
                            <div className="flex items-center space-x-2">
                                {product.colors?.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`w-6 h-6 rounded-full cursor-pointer border border-gray-400}`}
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                            <div className="text-sm">
                                SELECT SIZE
                                <select value={selectedSize} onChange={handleSizeChange} className="ml-2 border border-gray-400 p-1">
                                    {product.availableSizes?.map((size, index) => (
                                        <option key={index} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                ADD TO BAG
                            </button>
                            <button className="ml-4 text-blue-500">
                                WISHLIST
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {modalImage && <ImageModal image={modalImage} onClose={() => setModalImage(null)} />}
        </div>
    );
};

export default ProductDetails;
