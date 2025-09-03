import styles from './ImagesGallery.module.css'

const ImagesGallery = ({item}) => {
  return (
    <div className={styles.imagesContainer}>
        {Object.keys(item.gallery).map(v => (
        <div key={v}>
            <img src={item.gallery[v].mobile} alt={item.gallery[v].alt} />
        </div>
        ))}
    </div>
  )
}

export default ImagesGallery