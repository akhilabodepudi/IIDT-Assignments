import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product 1', category: 'Category A' },
  { id: 2, name: 'Product 2', category: 'Category B' },
  { id: 3, name: 'Product 3', category: 'Category A' },
  { id: 4, name: 'Product 4', category: 'Category C' },
];

const ProductFilterApp = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = productsData.filter(product => {
    return (
      (categoryFilter === '' || product.category === categoryFilter) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div>
      <div>
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategoryClick('')}>All</li>
          <li onClick={() => handleCategoryClick('Category A')}>Category A</li>
          <li onClick={() => handleCategoryClick('Category B')}>Category B</li>
          <li onClick={() => handleCategoryClick('Category C')}>Category C</li>
        </ul>
      </div>
      
      <div>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
      </div>
      
      <div>
        <h2>Products</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.name} - {product.category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilterApp;
