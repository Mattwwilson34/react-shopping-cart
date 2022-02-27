import './Cart-Product.css';
import Button from '../Button/Button';
const CartProduct = (props) => {
  const { handleClick, deleteItem, cartSum } = props;
  const { id, name, price, color, numOfProducts } = props.product;
  const totalProductCost = Math.floor(price * numOfProducts * 100) / 100;

  return (
    <div className='CartProduct' data-id={id}>
      <div
        className='CartColor'
        style={{
          backgroundColor: `${color}`,
        }}></div>
      <div>{name}</div>
      <div>${price}</div>
      <div className='numOfProductsConatiner'>
        <Button
          className='Incriment'
          text='+'
          onClick={(e) => {
            handleClick(e);
            cartSum();
          }}
        />
        <span className='numOfProducts'>{numOfProducts}</span>
        <Button className='Decriment' text='-' onClick={handleClick} />
      </div>
      <div>${totalProductCost}</div>
      <Button text='Remove' className='CartDeleteBtn' onClick={deleteItem} />
    </div>
  );
};

export default CartProduct;
