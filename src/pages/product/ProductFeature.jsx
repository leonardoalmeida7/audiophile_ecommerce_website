import styles from './ProductFeature.module.css'

import ProductAndPrice from '../../components/main/ProductAndPrice'

import useFilterByCategory from '../../hooks/useFilterByCategory'

import Main from '../../ui/Main'
import Button from '../../ui/Button'

import { Link } from 'react-router-dom';


const HeadphoneFeatures = () => {
  const { data, loading, error } = useFilterByCategory('headphones');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading headphones</p>;

  const paramsId = window.location.href.split('#')[1].split('/').pop();


  const item = data.filter(item => Number(paramsId) === item.id)[0];
 

  return (
    <Main>
        <div className={styles.back}>
          <Link to="/headphones">Go Back</Link>
        </div>
        <ProductAndPrice item={item} />
        <div className={styles.features}>
          <h2>Features</h2>
          {item.features.split("\n").map((paragraph, index) => (
            <p key={index} >
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.includes}>
          <h3>in the box</h3>
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
        <div className={styles.imagesContainer}>
          {Object.keys(item.gallery).map(v => (
            <div key={v}>
              <img src={item.gallery[v].mobile} alt={item.gallery[v].alt} />
            </div>
          ))}
        </div>
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
    </Main>
  )
}

export default HeadphoneFeatures