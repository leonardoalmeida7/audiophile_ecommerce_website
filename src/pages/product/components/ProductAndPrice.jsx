import { useState, useEffect } from "react";
import { useCart } from "../../../context/useCart";

import ProductDetails from "../../../components/main/ProductDetails";
import ImageProduct from "../../../components/main/ImageProduct";

import styles from "./ProductAndPrice.module.css";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import Button from "../../../ui/Button";

const ProductAndPrice = ({ item }) => {
  const { id, name, slug, price } = item;

  const nameSplit = name.split(" ");
  const removed = nameSplit.pop();
  const nameJoin = nameSplit.join(" ");

  const { cart, addToCart, updateQuantity } = useCart();

  const itemQnty = cart.find((item) => item.id == id)
    ? cart.find((item) => item.id == id).quantity
    : 1;

  const [count, setCount] = useState(itemQnty);

  const refacturingItem = { id, name: nameJoin, slug, price };

  const pageCategory = "features";

  const handleClickAddCart = () => {
    addToCart(refacturingItem);
    updateQuantity(refacturingItem.id, count);
  };

  return (
    <div className={styles.productAndPriceContainer}>
      <ImageProduct item={item} />
      <div>
        <ProductDetails item={item} page={pageCategory} />
        <div className={styles.price}>
          <span>${new Intl.NumberFormat("en-US").format(item.price)}</span>
        </div>
        <div className={styles.controls}>
          <div className={styles.qnty}>
            <FaMinus
              className={styles.icon}
              onClick={() => setCount(count <= 1 ? 1 : count - 1)}
            />
            <input
              type="number"
              min="1"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <FaPlus className={styles.icon} onClick={() => setCount(count + 1)} />
          </div>
          <div>
            <Button className={styles.button} event={handleClickAddCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAndPrice;
