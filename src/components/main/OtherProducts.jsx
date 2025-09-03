import styles from './OtherProducts.module.css'

import Button from '../../ui/Button'

const OtherProducts = ({ item }) => {
  return (
    <div className={styles.others}>
        <h3>you may also like</h3>
        {item.others.map((other, index) => (
        <div key={index} className={styles.other}>
            <div className={styles.img}>
            <img src={other.image.mobile} alt="" />
            </div>
            <div className={styles.info}>
            <h4>{other.name}</h4>
            <Button>See product</Button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default OtherProducts