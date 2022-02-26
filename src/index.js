import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import About from './routes/About';
import Shop from './routes/Shop';
import Cart from './routes/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/About' element={<About />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Cart' element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
