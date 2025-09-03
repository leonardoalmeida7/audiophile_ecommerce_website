import ProductDetails from "./ProductDetails"
import styles from "./ProductAndPrice.module.css"

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import Button from '../../ui/Button'

const ProductAndPrice = ({ item }) => {
    const pageCategory = 'features';
  return (
    <div>
        <ProductDetails item={item} page={pageCategory} />
        <div className={styles.price}>
            <span>$ {new Intl.NumberFormat().format(item.price)}</span>
        </div>
        <div className={styles.controls}>
            <div className={styles.qnty}>
                <FaMinus className={styles.icon} />
                <input type="number" min="1" defaultValue="1" />
                <FaPlus className={styles.icon} />
            </div>
            <div>
                <Button className={styles.button}>Add to Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductAndPrice