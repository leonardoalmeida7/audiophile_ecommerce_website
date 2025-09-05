import { useState, useEffect } from 'react'

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { setItems, getItems } from '../../utils/Cart';

import styles from './ModalCart.module.css';


const ControllerCart = ({item}) => {
    const [count, setCount] = useState(item.qnty);
    const [cartItem, setCartItem] = useState(item);

    const getItemsCart = getItems();
    
    useEffect(() => {
    setCartItem(prev => ({ ...prev, qnty: count }));
    }, [count]);

    useEffect(() => {
        setItems([...getItemsCart.filter(item => item.id !== cartItem.id), cartItem]); 
    }, [cartItem]);

  return (
    <>
        <div>
            <img src="" alt="" />
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