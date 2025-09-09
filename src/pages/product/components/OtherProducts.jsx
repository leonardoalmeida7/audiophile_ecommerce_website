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
    <div className={styles.othersContainer}>
      <h3>you may also like</h3>
      <div className={styles.others}>
        {item.others.map((other, index) => (
          <div key={index} className={styles.other}>
            <div className={styles.img}>
              <picture>
                <source media="(min-width: 1200px)" srcSet={other.image.desktop} />
                <source media="(min-width: 768px)" srcSet={other.image.tablet} />
                <img src={other.image.mobile} alt={other.name} />
              </picture>
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
    </div>
  );
};

export default OtherProducts;
