import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPageHandler = () => {
    navigate('/checkout');
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        { cartItems && cartItems.map((item, i) => {
          return <CartItem key={i} cartItem={item} />;
        })}
      </div>
      <Button onClick={goToCheckoutPageHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
