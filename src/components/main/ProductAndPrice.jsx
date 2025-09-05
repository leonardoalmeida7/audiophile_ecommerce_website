import { useState, useEffect } from "react";

import ProductDetails from "./ProductDetails"
import styles from "./ProductAndPrice.module.css"

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import Button from '../../ui/Button'

import { setItems, getItems } from '../../utils/Cart'

const ProductAndPrice = ({ item }) => {
    const pageCategory = 'features';
    const { id, name, price } = item;

    const splitName = name.split(' ');
    splitName.pop();
    const joinName = splitName.join(' ');

    
    const [itemsCart, setItemsCart] = useState(getItems || []);
    
    const verify = itemsCart.find(item => item.id === id)
    
    const [count, setCount] = useState(1);
    
    const itemStructure = {id, name: joinName, price, qnty: count};

    const handleClickAddCart = () => {
        console.log(count)
        if(verify) {
            verify.qnty += count;
            setItemsCart(prev => [...prev.filter(item => item.id !== id), verify])
            return
        }
        setItemsCart(prev => [...prev, itemStructure])

    }
    
    useEffect(() => {
        setItems(itemsCart)
        
    }, [itemsCart])

  return (
    <div>
        <ProductDetails item={item} page={pageCategory} />
        <div className={styles.price}>
            <span>$ {new Intl.NumberFormat().format(price)}</span>
        </div>
        <div className={styles.controls}>
            <div className={styles.qnty}>
                <FaMinus className={styles.icon} onClick={() => setCount(count - 1)} />
                <input type="number" min="1" value={count} onChange={(e) => setCount(e.target.value)} />
                <FaPlus className={styles.icon} onClick={() => setCount(count + 1)} />
            </div>
            <div>
                <Button className={styles.button} event={handleClickAddCart}>Add to Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductAndPrice