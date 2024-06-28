import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import Card from '../Products/Card';
import { Link } from 'react-router-dom';

const CardGrid = ({ data }) => {
  const { selectedCategory, selectedColor, selectedPrice } = useContext(FilterContext);

  const filteredData = data.filter(product => {
    const matchColor = selectedColor === 'all' || product.colors.includes(selectedColor.toLowerCase());
    const matchCategory = selectedCategory === 'All' || (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());
    const matchPrice = selectedPrice === 'all' || (
      (selectedPrice === 'under1000' && parseInt(product.newPrice.replace(',', '')) < 1000) ||
      (selectedPrice === '1000-5000' && parseInt(product.newPrice.replace(',', '')) >= 1000 && parseInt(product.newPrice.replace(',', '')) <= 5000) ||
      (selectedPrice === '5000-10000' && parseInt(product.newPrice.replace(',', '')) >= 5000 && parseInt(product.newPrice.replace(',', '')) <= 10000) ||
      (selectedPrice === '10000-20000' && parseInt(product.newPrice.replace(',', '')) >= 10000 && parseInt(product.newPrice.replace(',', '')) <= 20000) ||
      (selectedPrice === 'over20000' && parseInt(product.newPrice.replace(',', '')) > 20000)
    );


    return matchColor && matchCategory && matchPrice;
  });

  return (
    <div className="grid grid-cols-5 gap-1 p-4">
      {filteredData.map((product, index) => {
        const colorKey = selectedColor === 'all' ? product.colors[0].toLowerCase() : selectedColor.toLowerCase();
        const productImage = product.imagesByColor[colorKey] && product.imagesByColor[colorKey][0]
          ? product.imagesByColor[colorKey][0]
          : product.imagesByColor[product.colors[0].toLowerCase()][0];

        return (
          <div key={index}>
            <Link to={`/products/${product.id}`}>
              <Card
                img={productImage}
                title={product.title}
                star={product.star}
                reviews={product.reviews}
                prevPrice={product.prevPrice}
                newPrice={product.newPrice}
                company={product.company}
                color={product.colors}
                category={product.subcategory}
                rating={product.rating}
                imagesByColor={product.imagesByColor}
                discount={product.discount}
                isQuickCartChoice={product.isQuickCartChoice}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;
