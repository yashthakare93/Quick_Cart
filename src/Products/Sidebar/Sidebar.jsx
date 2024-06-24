import React, { useContext } from 'react';
import Price from '../Price/Price';
import Color from '../Colors';
import { FilterContext } from '../../context/FilterContext';

const Sidebar = () => {
  const {setSelectedColor} = useContext(FilterContext);
  return (
    <div className="h-screen w-52 flex flex-col border-r-2 border-gray-300 p-2 items-center">
      <div className="flex-grow overflow-y-auto">
        <Price/>
        <Color  setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
}

export default Sidebar;
