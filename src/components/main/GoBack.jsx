import styles from './GoBack.module.css'

import { Link } from 'react-router-dom';

const GoBack = ({item}) => {
  return (
    <div className={styles.back}>
        <Link to={`/${item.category}`}>Go Back</Link>
    </div>
  )
}

export default GoBack