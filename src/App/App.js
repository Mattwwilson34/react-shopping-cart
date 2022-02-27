import { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Nav itemsInCart={cart.length} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
}
