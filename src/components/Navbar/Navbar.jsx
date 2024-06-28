import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = ({ onToggleSidebar }) => {
  const [menu, setMenu] = useState("products"); // Default active menu item
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here, e.g., redirecting to a search results page
    console.log("Search query:", searchQuery);
  };

  // Determine active menu based on current path
  useEffect(() => {
    const pathname = location.pathname.toLowerCase();
    if (pathname.includes('products')) {
      setMenu('products');
    } else if (pathname === '/') {
      setMenu('home');
    } else if (pathname === '/contact') {
      setMenu('contact');
    } else if (pathname === '/about') {
      setMenu('about');
    }
  }, [location.pathname]);

  return (
    <>
      <div className="flex justify-around items-center p-4 bg-white text-black">
        <Link to='/'>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
            <p className="text-xl font-bold">QuickCart</p>
          </div>
        </Link>
        {menu !== "products" && (
          <ul className="hidden lg:flex space-x-6">
            {menu !== "home" && (
              <li className={`cursor-pointer ${menu === "home" ? 'scale-110 text-slate-900 text-xl' : ' hover:text-slate-900'}`} onClick={() => { setMenu("home") }}><Link to='/'> Home</Link></li>
            )}
            <li className={`cursor-pointer ${menu === "products" ? 'scale-110 text-slate-900 text-xl' : ' hover:text-slate-900'}`} onClick={() => { setMenu("products") }}><Link to='/products'> Products</Link></li>
            {menu !== "contact" && (
              <li className={`cursor-pointer ${menu === "contact" ? 'scale-110 text-slate-900 text-xl' : ' hover:text-slate-900'}`} onClick={() => { setMenu("contact") }}><Link to='/contact'> Contact Us</Link></li>
            )}
            {menu !== "about" && (
              <li className={`cursor-pointer ${menu === "about" ? 'scale-110 text-slate-900 text-xl' : ' hover:text-slate-900'}`} onClick={() => { setMenu("about") }}><Link to='/about'> About Us</Link></li>
            )}
          </ul>
        )}
        <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center space-x-2 flex-grow max-w-xl">
          <input 
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-full">Search</button>
        </form>
        <div className="flex items-center space-x-4 relative">
          <Link to='/login'><button className="hidden lg:block px-6 py-2 bg-white border-2 border-slate-300 rounded-3xl">Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="Cart" className="h-6" /></Link>
          <div className="absolute top-1 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">0</div>
        </div>
      </div>

    </>
  );
}

export default Navbar;
