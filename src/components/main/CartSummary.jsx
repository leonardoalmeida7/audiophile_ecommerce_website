import { useCart } from '../../context/useCart';
import { Link } from 'react-router-dom';

import Button from "../../ui/Button";

import styles from './CartSummary.module.css';

const CartSummary = () => {
    const {cart, clearCart} = useCart();

    const total = new Intl.NumberFormat('en-US').format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));

    const VAT = new Intl.NumberFormat('en-US').format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.2);

    const shipping = 50;

    const grandTotal = new Intl.NumberFormat('en-US').format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + shipping);

  return (
    <section className={styles.summary}>
       <div>
           <h3>Summary</h3>
       </div>
       <div className={styles.items}>
        {cart.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.details}>
                <div>
                  <img src={`images/cart/image-${item.slug}.jpg`} alt={item.name} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>${new Intl.NumberFormat().format(item.price)}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <p>x{item.quantity}</p>
              </div>
            </div>
        ))}
       </div>
       <div className={styles.grandTotal}>
        <div className={styles.total}>
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <div className={styles.shipping}>
          <span>Shipping:</span>
          <span>${shipping}</span>
        </div>
        <div className={styles.VAT}>
          <span>VAT (INCLUDED):</span>
          <span>${VAT}</span>
        </div>
        <div className={styles.finalTotal}>
          <span>Grand Total:</span>
          <span>${grandTotal}</span>
        </div>
        <Button onClick={clearCart}>Continue & pay</Button> 
       </div>
    </section>
  )
}

export default CartSummary;