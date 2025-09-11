import { Link } from 'react-router-dom';
import Main from '../../layouts/Main';

import styles from './Home.module.css';

import Products from "../../components/main/Products";
import Recommended from './components/Recommended';
import Presentation from '../../components/main/Presentation';

const Home = () => {
  return (
    <>
      <header className={styles.header}>
          <div className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.newProduct}>NEW PRODUCT</span>
                <h1>XX99 Mark II Headphones</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to="/product/4" className="navlink"><button>SEE PRODUCT</button></Link>
            </div>
          </div>
      </header>
      <Main>
        <Products />
        <Recommended />
        <Presentation />
      </Main>
      
    </>
  )
}

export default Home