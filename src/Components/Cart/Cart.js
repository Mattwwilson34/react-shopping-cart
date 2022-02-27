import './Cart.css';
import CartProduct from '../Cart-Product/Cart-Product';

const Cart = (props) => {
  const { cart, handleClick, deleteItem } = props;

  const cartSum = () => {
    const prices = cart.map((product) => product.price * product.numOfProducts);
    const sum =
      Math.floor(prices.reduce((prev, cur) => prev + cur) * 100) / 100;
    return sum;
  };

  return (
    <div className='Cart'>
      <h2>Shopping Cart</h2>
      <div className='CartProductContainer'>
        {cart.map((product) => {
          return (
            <CartProduct
              key={product.id}
              product={product}
              handleClick={handleClick}
              deleteItem={deleteItem}
              cartSum={cartSum}
            />
          );
        })}
      </div>
      <div className='CartTotal'>
        <div className='TotalText'>Total:</div>
        <div className='TotalNum'>${cartSum()}</div>
      </div>
    </div>
  );
};

export { Cart };
