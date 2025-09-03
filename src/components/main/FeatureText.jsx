import styles from './FeatureText.module.css'

const FeatureText = ({item}) => {
  return (
    <div className={styles.features}>
        <h2>Features</h2>
        {item.features.split("\n").map((paragraph, index) => (
            <p key={index} >
                {paragraph}
            </p>
        ))}
    </div>
  )
}

export default FeatureText