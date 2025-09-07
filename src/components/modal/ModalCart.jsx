import { useCart } from '../../context/useCart';
import { Link } from 'react-router-dom';

import Button from "../../ui/Button";

import styles from './ModalCart.module.css';

import ControllerCart from './ControllerCart'


const ModalCart = ({ onClose }) => {
    const {cart, clearCart} = useCart();


  return (
    <div className={styles.background} onClick={onClose}>
    <section className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.header}>
                <h5>CART({cart.length})</h5>
                <span onClick={() => clearCart()}>Remove all</span>
            </div>
            {cart.length ? cart.map(item => (
                <div className={styles.item} key={item.id}>
                    <ControllerCart item={item} />
                </div>
            )) : (
                <div className={styles.empty}><p>Your cart is empty</p></div>
            )}
            <div className={styles.checkout}>
                <div className={styles.total}>
                    <h4>Total</h4>
                    <p>${new Intl.NumberFormat('en-US').format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}</p>
                </div>
                <Link to="/checkout"><Button event={onClose}>Checkout</Button></Link>
            </div>
        </section>
    </div>
  )
}

export default ModalCart