import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-4 px-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">QuickCart</h2>
          <p>&copy; 2024 QuickCart. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:underline">Facebook</a>
          <a href="/" className="hover:underline">Twitter</a>
          <a href="/" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
