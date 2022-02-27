import React from 'react';
import './Nav.css';
import HeaderLink from '../Header-Link/Header-Link';

function Nav(props) {
  const { itemsInCart } = props;
  return (
    <nav className='Navbar'>
      <HeaderLink path='About' />
      <HeaderLink path='Shop' />
      <div>
        <HeaderLink path='Cart' itemsInCart={itemsInCart} />
        <sub>{itemsInCart}</sub>
      </div>
    </nav>
  );
}
export default Nav;
