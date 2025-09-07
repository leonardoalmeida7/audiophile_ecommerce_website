import styles from "./OtherProducts.module.css";

import { Link } from "react-router-dom";
import Button from "../../../ui/Button";

import useFetch from "../../../hooks/useFetch";

const OtherProducts = ({ item }) => {
  const { data } = useFetch("data.json");

  const getIdBySlug = (name) => {
    return data?.find((v) => v.slug === name).id;
  };

  return (
    <div className={styles.others}>
      <h3>you may also like</h3>
      {item.others.map((other, index) => (
        <div key={index} className={styles.other}>
          <div className={styles.img}>
            <img src={other.image.mobile} alt={other.name} />
          </div>
          <div className={styles.info}>
            <h4>{other.name}</h4>
            <Link to={`/product/${getIdBySlug(other.slug)}`}>
              <Button>See product</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherProducts;
