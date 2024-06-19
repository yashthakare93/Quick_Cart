// src/components/FeaturedProducts.js
import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$20', imageUrl: 'https://example.com/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$30', imageUrl: 'https://example.com/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$40', imageUrl: 'https://example.com/product3.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-lg">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
