import { useState, useEffect } from 'react'

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCart } from '../../context/useCart';

import styles from './ModalCart.module.css';


const ControllerCart = ({item}) => {
    const [count, setCount] = useState(item.quantity);

    const {updateQuantity, removeFromCart} = useCart();

    useEffect(() => {
        updateQuantity(item.id, count);
        if(count === 0) {
            removeFromCart(item.id);
        }
    }, [count])

  return (
    <>
        <div>
            <img src={`images/cart/image-${item.slug}.jpg`} alt={item.slug} />
        </div>
        <div className={styles.details}>
            <h4>{item.name}</h4>
            <p>${item.price}</p>
        </div>
        <div className={styles.qnty}>
            <FaMinus className={styles.icon} onClick={() => setCount(count - 1)} />
            <input type="number" min="1" value={count} disabled />
            <FaPlus className={styles.icon} onClick={() => setCount(count + 1)} />
        </div>
    </>
  )
}

export default ControllerCart