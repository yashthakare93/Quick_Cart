// src/components/Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Get the latest updates on new products and upcoming sales</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg text-gray-800" />
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 rounded-lg">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
