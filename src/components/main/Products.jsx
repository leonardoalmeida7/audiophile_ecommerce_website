import styles from './Products.module.css'
import iconArrow from '../../assets/shared/desktop/icon-arrow-right.svg'

const Products = () => {
  return (
    <div className={styles.products}>
        <div>
            <div className={styles.item}>
                <div className={styles.img} id={styles.product1}></div>
                <div className={styles.info}>
                    <h3>HEADPHONES</h3>
                    <p>SHOP <img src={iconArrow} alt="arrow icon" /></p>
                </div>
            </div>
        </div>
        <div>
            <div className={styles.item}>
                <div className={styles.img} id={styles.product2}></div>
                <div className={styles.info}>
                    <h3>SPEAKERS</h3>
                    <p>SHOP <img src={iconArrow} alt="arrow icon" /></p>
                </div>
            </div>
        </div>
        <div>
            <div className={styles.item}>
                <div className={styles.img} id={styles.product3}></div>
                <div className={styles.info}>
                    <h3>EARPHONES</h3>
                    <p>SHOP <img src={iconArrow} alt="arrow icon" /></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products