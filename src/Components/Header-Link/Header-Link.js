import React from 'react';
import './Header-Link.css';
import { NavLink } from 'react-router-dom';

const HeaderLink = (props) => {
  const { path } = props;
  return (
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'selected' : ''}`}
      to={`/${path}`}>
      {path}
    </NavLink>
  );
};

export default HeaderLink;
