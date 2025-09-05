import { useState } from "react";

import { getItems } from '../../utils/Cart';

import Button from "../../ui/Button";

import styles from './ModalCart.module.css';

import ControllerCart from './ControllerCart'


const ModalCart = () => {
    const getItemsCart = getItems();

    const [total, setTotal] = useState(1);

  return (
    <div className={styles.background}>
        <section className={styles.modal}>
            <div className={styles.header}>
                <h5>CART({getItemsCart.length})</h5>
                <span>Remove all</span>
            </div>
            {getItemsCart.length ? getItemsCart.map(item => (
                <div className={styles.item} key={item.id}>
                    <ControllerCart item={item} />
                </div>
            )) : (
                <div className={styles.empty}><p>Your cart is empty</p></div>
            )}
            <div className={styles.checkout}>
                <div className={styles.total}>
                    <h4>Total</h4>
                    <p>${(getItemsCart.reduce((acc, item) => acc + item.price * item.qnty, 0)).toFixed(2)}</p>
                </div>
                <Button>Checkout</Button>
            </div>
        </section>
    </div>
  )
}

export default ModalCart