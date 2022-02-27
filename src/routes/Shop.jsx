import React from 'react';
import '../App/App.css';
import Product from '../Components/Product/Product';
import getProducts from '../Data/data';

import { useOutletContext } from 'react-router-dom';

const Shop = () => {
  const products = getProducts();
  const [cart, setCart] = useOutletContext();

  const addToCart = (e) => {
    const numOfProducts = parseInt(
      e.target.parentElement.children[0].children[1].value
    );
    const productID = e.target.parentElement.parentElement.dataset.productId;

    // check for non-zero products
    if (!numOfProducts) {
      return;
    }

    let product = products.filter((product) => {
      return product.id === productID;
    });
    product[0].numOfProducts = numOfProducts;
    setCart([...cart, product[0]]);
  };

  return (
    <div>
      <h2>Products</h2>
      <div className='Products'>
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} addToCart={addToCart} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
