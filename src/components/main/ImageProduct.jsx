import styles from './ImageProduct.module.css'

const ImageProduct = ({ item }) => {
  return (
    <div className={styles.imageContainer}>
        <picture>
            <source media="(min-width: 1200px)" srcSet={item.categoryImage.desktop} />
            <source media="(min-width: 768px)" srcSet={item.categoryImage.tablet} />
            <img src={item.categoryImage.mobile} alt={item.name} />
        </picture>
    </div>
  )
}

export default ImageProduct