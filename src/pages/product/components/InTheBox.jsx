import styles from './InTheBox.module.css'

const InTheBox = ({item}) => {
  return (
    <div className={styles.includes}>
        <h3>in the box</h3>
        <div>
          {item.includes.map((include, index) => (
          <div key={index}>
              <span className={styles.quantity}>
              {include.quantity}x
              </span>
              <span>
              {include.item}
              </span>
          </div>
          ))}
        </div>
    </div>
  )
}

export default InTheBox