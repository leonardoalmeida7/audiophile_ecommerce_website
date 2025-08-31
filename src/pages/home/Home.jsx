import styles from './Home.module.css';
import Products from "../../components/main/Products";
import Recommended from '../../components/main/Recommended';
import Apresentation from '../../components/main/Presentation';

const Home = () => {
  return (
    <>
      <header>
          <div className={styles.hero}>
          </div>
          <div className={styles.content}>
              <span className={styles.newProduct}>NEW PRODUCT</span>
              <h1>XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <button>SEE PRODUCT</button>
          </div>
      </header>
      <main className='container px-3'>
        <Products />
        <Recommended />
        <Apresentation />
      </main>
      
    </>
  )
}

export default Home