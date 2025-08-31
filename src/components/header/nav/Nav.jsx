import { useState } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from './Nav.module.css';

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
      <div className={styles.container}>
        <div className={styles.containerModal}>
          <div onClick={handleClick}>
            <GiHamburgerMenu  className={styles.hamburgerIcon} />
          </div>
          <nav className={!isActive ? styles.hidden : styles.showNav}>
              <ul className={styles.navList}>
                  <li>Home</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                  <li>Earphones</li>
              </ul>
          </nav>
        </div>
        <div className={styles.title}>
            <h1>Audiophile</h1>
        </div>
        <div>
          <AiOutlineShoppingCart className={styles.cartIcon} />
        </div>
    </div>
  )
}

export default Nav