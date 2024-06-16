import React,{useState} from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);
    const [menu,setMenu] = useState("Shop");
  return (
   <>
    <div className="flex justify-around items-center p-4 bg-white-800 text-black">
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
            <p className="text-xl font-bold">QuickCart</p>
        </div>
        <ul className="flex space-x-6">
          <li className={`cursor-pointer ${menu === "shop" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`} onClick={()=>{setMenu("shop")}}>Shop</li>
          <li className={`cursor-pointer ${menu === "men" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`}  onClick={()=>{setMenu("men")}}>Men</li>
          <li className={`cursor-pointer ${menu === "women" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`}  onClick={()=>{setMenu("women")}}>Women</li>
          <li className={`cursor-pointer ${menu === "kids" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`}  onClick={()=>{setMenu("kids")}}>Kids</li>
        </ul>
        <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-white  border-spacing-3 border-2 border-slate-300 rounded-3xl ">Login</button>
            <img src={cart_icon} alt="Cart" className="h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
        </div>
    </div>
     <hr className="border-t-2 border-gray-200 mt-2" />
   </>
  );
}

export default Navbar;
