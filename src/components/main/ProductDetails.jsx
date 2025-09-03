import styles from './ProductDetails.module.css'

const ProductDetails = ({item, page}) => {
  let style;
  switch (page) {
    case 'category':
      style = 'productInfo';
      break;
    default:
      style = 'productInfo2'
      break;
  }
  return (
    <>
        <div className={styles.imageContainer}>
          <img src={item.categoryImage.mobile} alt={item.name} />
        </div>
        <div className={styles[style]}>
            {item.new && <span className={styles.newProduct}>new product</span>}
          <div className={styles.productName}>
              <h2>{item.name}</h2>
          </div>
            <p>{item.description}</p>
        </div>
    </>
  )
}

export default ProductDetails