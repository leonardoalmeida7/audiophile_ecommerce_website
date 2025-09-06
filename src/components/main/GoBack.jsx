import styles from './GoBack.module.css'


const GoBack = () => {
  return (
    <div className={styles.back}>
        <span onClick={() => window.history.back()}>Go Back</span>
    </div>
  )
}

export default GoBack