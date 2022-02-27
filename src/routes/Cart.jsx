import React from 'react';
import { Cart as CartComponent } from '../Components/Cart/Cart';

import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const deleteItem = (e) => {
    const productID = e.target.parentElement.dataset.id;
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((x) => x.id === productID);
    console.log(index);
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  const handleClick = (e) => {
    const productID = e.target.parentElement.parentElement.dataset.id;
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((x) => x.id === productID);
    if (e.target.className === 'Incriment') {
      cartCopy[index] = {
        ...cartCopy[index],
        numOfProducts: cartCopy[index].numOfProducts + 1,
      };
    } else if (e.target.className === 'Decriment') {
      cartCopy[index] = {
        ...cartCopy[index],
        numOfProducts: cartCopy[index].numOfProducts - 1,
      };
    }
    setCart(cartCopy);
  };

  return cart.length > 0 ? (
    <CartComponent
      cart={cart}
      handleClick={handleClick}
      deleteItem={deleteItem}
    />
  ) : (
    <h3>
      Your shopping cart it empty please return to the shop to add products
    </h3>
  );
};

export default Cart;
