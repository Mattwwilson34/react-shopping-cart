import { React, useState } from 'react';
import './Product.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Product = (props) => {
  const { addToCart } = props;
  const { id, name, price, color } = props.product;
  const [input, setInput] = useState(0);

  // limit user input to numbers
  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '') {
      setInput(0);
    } else if (re.test(e.target.value)) {
      setInput(parseInt(e.target.value));
    }
  };

  // incriment/decriment number of products
  const onClick = (e) => {
    if (e.target.className === 'Incriment') {
      setInput(input + 1);
    } else if (input === 0) {
      return;
    } else {
      setInput(input - 1);
    }
  };

  return (
    <div className='Product' data-product-id={id}>
      <div
        className='Color'
        style={{
          backgroundColor: `${color}`,
        }}></div>
      <div className='Name'>{name}</div>
      <div className='Price'>
        ${price}
        <span className='Unit'>
          (ft<sup>2</sup>)
        </span>
      </div>
      <div className='Input-Btn-Container'>
        <div>
          <Button className='Incriment' text='+' onClick={onClick} />
          <Input
            className='Input'
            type='text'
            value={input}
            onChange={onChange}
          />
          <Button className='Decriment' text='-' onClick={onClick} />
        </div>
        <Button className='CartButton' text='Add to Cart' onClick={addToCart} />
      </div>
    </div>
  );
};

export default Product;
