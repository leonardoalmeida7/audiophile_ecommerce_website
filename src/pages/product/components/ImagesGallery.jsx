import styles from './ImagesGallery.module.css'

const ImagesGallery = ({item}) => {
  return (
    <div className={styles.imagesContainer}>
        {Object.keys(item.gallery).map(v => (
          <div key={v} className={`${styles.imageWrapper} ${styles[v] || ''}`}>
          <picture>
            <source media="(min-width: 1200px)" srcSet={item.gallery[v].desktop} />
            <source media="(min-width: 768px)" srcSet={item.gallery[v].tablet} />
            <img src={item.gallery[v].mobile} alt={item.gallery[v].alt} />
          </picture>
        </div>
        ))}
    </div>
  )
}

export default ImagesGallery