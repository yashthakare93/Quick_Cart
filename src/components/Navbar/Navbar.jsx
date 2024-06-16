import React,{useState} from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("Shop");
  return (
   <>
    <div className="flex justify-around items-center p-4 bg-white-800 text-black">
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
            <p className="text-xl font-bold">QuickCart</p>
        </div>
        <ul className="flex space-x-6">
          <li className={`cursor-pointer ${menu === "shop" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`} onClick={()=>{setMenu("shop")}}><Link to='/'> Shop</Link></li>
          <li className={`cursor-pointer ${menu === "men" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`}  onClick={()=>{setMenu("men")}}><Link to='/men'> Men</Link></li>
          <li className={`cursor-pointer ${menu === "women" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`}  onClick={()=>{setMenu("women")}}><Link to='/women'> Women</Link></li>
          <li className={`cursor-pointer ${menu === "kids" ? 'scale-110 text-slate-900 text-xl' : 'hover:scale-110 hover:text-slate-900 hover:text-xl '}`}  onClick={()=>{setMenu("kids")}}><Link to='/kids'> Kids</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-white  border-spacing-3 border-2 border-slate-300 rounded-3xl ">Login</button>
            <img src={cart_icon} alt="Cart" className="h-6" />
        </div>
    </div>
     <hr className="border-t-2 border-gray-200 mt-2" />
   </>
  );
}

export default Navbar;
