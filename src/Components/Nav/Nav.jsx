import React from 'react';
import './Nav.css';
import HeaderLink from '../Header-Link/Header-Link';

function Nav() {
  return (
    <nav className='Navbar'>
      <HeaderLink path='Shop' />
      <HeaderLink path='About' />
      <HeaderLink path='Cart' />
    </nav>
  );
}
export default Nav;
