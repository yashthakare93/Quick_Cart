import React, { useState } from 'react';
import { FilterProvider } from '../../context/FilterContext';
import CardGrid from '../CardGrid';
import Sidebar from '../Sidebar/Sidebar';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

const CategoryPage = ({ selectedCategory, data }) => {
  const [showSidebar, setShowSidebar] = useState(false); // State to manage sidebar visibility

  let dataToRender = data; // Start with all data

  if (selectedCategory.toLowerCase() !== 'all') {
    dataToRender = data.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  return (
    <FilterProvider>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar section for larger devices */}
        <div className="hidden lg:block lg:pt-4 lg:pr-4">
          <Sidebar selectedCategory={selectedCategory} />
        </div>

        {/* Main content section */}
        <div className="flex-grow lg:p-4 pb-20"> {/* Add padding bottom here */}
          {/* CardGrid component */}
          <CardGrid data={dataToRender} selectedCategory={selectedCategory} />
        </div>

        {/* Sidebar section for small devices */}
        <div
          className={`fixed inset-y-0 right-0 bg-white w-1/2 lg:hidden pt-4 transform ${
            showSidebar ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setShowSidebar(false)}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <Sidebar selectedCategory={selectedCategory} />
        </div>
      </div>
    </FilterProvider>
  );
};

export default CategoryPage;
