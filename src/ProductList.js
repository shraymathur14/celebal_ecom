import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/', {
        headers: { 'app-id': 'your-app-id' } // Replace 'your-app-id' with your actual app ID
      })
      .then(response => {
        setProducts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.firstName} {product.lastName}
            <button onClick={() => onSelectProduct(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
