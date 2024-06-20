import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS user ID, service ID, and template ID
    const userId = 'WDvxPkVGtquOERKgA';
    const serviceId = 'service_jy9kp75';
    const templateId = 'template_emzoiw2';

    const templateParams = {
      to_name: 'Recipient Name', // Replace with the recipient's name
      from_name: 'Your Name', // Replace with your name
      message: 'This is a test message', // Replace with the message content
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Subscription successful! Thank you.');
        setError('');
      }, (err) => {
        console.error('FAILED...', err);
        setMessage('Subscription failed. Please try again.');
        setError('Failed to send email. Please try again later.');
      });

    setEmail('');
  };

  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Get the latest updates on new products and upcoming sales</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg text-gray-800"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-900 rounded-lg"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
