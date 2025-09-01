import styles from './ProductCategory.module.css'

import useFilterByCategory from "../../hooks/useFilterByCategory"

import Button from '../../ui/Button';

const ProductCategory = ({page}) => {
  const { data, loading, error } = useFilterByCategory(page);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading {page}</p>;
  return (
    <div className={styles.containerProductCategory}>
        {data.reverse().map(item => (
          <div className={styles.product} key={item.id}>
            <div className={styles.imageContainer}>
              <img src={item.categoryImage.mobile} alt={item.name} />
            </div>
            <div className={styles.productInfo}>
              {item.new && <span className={styles.newProduct}>new product</span>}
              <div className={styles.productName}>
                <h2>{item.name}</h2>
              </div>
              <p>{item.description}</p>
              <Button className={styles.btn} >See product</Button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProductCategory