import { Link } from 'react-router-dom';

import styles from './ProductCategory.module.css'

import useFilterByCategory from "../../hooks/useFilterByCategory"

import Button from '../../ui/Button';
import ProductDetails from './ProductDetails';


const ProductCategory = ({page}) => {
  const { data, loading, error } = useFilterByCategory(page);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading {page}</p>;

  const pageCategory = 'category';
  return (
    <div className={styles.containerProductCategory}>
        {data.reverse().map(item => (
          <div className={styles.product} key={item.id}>
            <ProductDetails item={item} page={pageCategory} />
            <Link to={`/product/${item.id}`}><Button className={styles.btn} >See product</Button></Link>
          </div>
        ))}
    </div>
  )
}

export default ProductCategory