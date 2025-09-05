import styles from './Products.module.css'
import iconArrow from '/images/shared/desktop/icon-arrow-right.svg'

import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className={styles.products}>
        <Link to="/headphones">
            <div>
                <div className={styles.item}>
                    <div className={styles.img} id={styles.product1}></div>
                    <div className={styles.info}>
                        <h3>HEADPHONES</h3>
                        <p>SHOP <img src={iconArrow} alt="arrow icon" /></p>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/speakers">
            <div>
                <div className={styles.item}>
                    <div className={styles.img} id={styles.product2}></div>
                    <div className={styles.info}>
                        <h3>SPEAKERS</h3>
                        <p>SHOP <img src={iconArrow} alt="arrow icon" /></p>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/earphones">
            <div>
                <div className={styles.item}>
                    <div className={styles.img} id={styles.product3}></div>
                    <div className={styles.info}>
                        <h3>EARPHONES</h3>
                        <p>SHOP <img src={iconArrow} alt="arrow icon" /></p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Products