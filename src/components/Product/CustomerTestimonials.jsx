// src/components/Testimonials.js
import React from 'react';

const testimonials = [
  { id: 1, name: 'John Doe', review: 'Great products and excellent customer service!', imageUrl: 'https://example.com/johndoe.jpg' },
  { id: 2, name: 'Jane Smith', review: 'Fast shipping and amazing quality.', imageUrl: 'https://example.com/janesmith.jpg' },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-2 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
