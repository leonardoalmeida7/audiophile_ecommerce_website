import { useCart } from '../../context/useCart';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import styles from './ShoppingCompleted.module.css';

import { useEffect } from 'react';

const ShoppingCompleted = ({setModalActive}) => {
    const { cart, clearCart } = useCart();

    const handleClick = () => {
        setModalActive(false)
        clearCart()
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

  return (
    <div className={styles.modalShoppingCompleted}>
        <section className={styles.modal}>
            <div>
                <img src={`images/checkout/icon-order-confirmation.svg`} alt={cart[0]?.name} />
            </div>
            <div>
                <h2>Thank you for your order</h2>
                <p>
                    You will receive an email confirmation shortly.
                </p>
            </div>
            <div className={styles.containerItem}>
                <div>
                    <div className={styles.item}>
                        <div>
                            <img src={`images/cart/image-${cart[0]?.slug}.jpg`} alt={cart[0]?.name} />
                            <div>
                                <h4>{cart[0]?.name}</h4>
                                <p>${new Intl.NumberFormat('en-US').format(cart[0]?.price)}</p>
                            </div>
                        </div>
                        <div>
                            <span>x{cart[0]?.quantity}</span>
                        </div>
                    </div>
                    {cart.length > 1 && (
                        <div className={styles.others}>
                            <hr />
                            <p>and {cart.length - 1} other item(s)</p>
                        </div>
                    )}
                </div>
                <div className={styles.total}>
                    <span>Grand Total</span>
                    <span>${new Intl.NumberFormat('en-US').format(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}</span>
                </div>
            </div>
            <Link to="/">
                <Button event={handleClick}>Back to Home</Button>
            </Link>
        </section>
    </div>
  )
}

export default ShoppingCompleted