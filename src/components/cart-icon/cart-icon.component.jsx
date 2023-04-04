import { useContext } from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isOpen, setIsOpen, cartItems } = useContext(CartContext);

    const toggleIsCartOpen = ()=> setIsOpen(!isOpen);
    
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{ cartItems.reduce((prev, item)=> prev + item.quantity, 0) }</span>
        </div>
    );
}

export default CartIcon;