import { useState } from "react";
import { NavLink } from "react-router-dom"; // Troque Link por NavLink

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from './Nav.module.css';

const Nav = ({isOpen, setCartActive}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      setIsActive(!isActive);
  }

  return (
      <div className={styles.container}>
        <div className={styles.containerModal}>
          <div onClick={handleClick}>
            <GiHamburgerMenu  className={styles.hamburgerIcon} />
          </div>
          <nav className={!isActive ? styles.hidden : styles.showNav}>
              <ul className={styles.navList}>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? `${styles.active} navlink` : "navlink"} 
                    onClick={handleClick}
                  >
                    <li>Home</li>
                  </NavLink>
                  <NavLink 
                    to="/headphones" 
                    className={({ isActive }) => isActive ? `${styles.active} navlink` : "navlink"} 
                    onClick={handleClick}
                  >
                    <li>Headphones</li>
                  </NavLink>
                  <NavLink 
                    to="/speakers" 
                    className={({ isActive }) => isActive ? `${styles.active} navlink` : "navlink"} 
                    onClick={handleClick}
                  >
                    <li>Speakers</li>
                  </NavLink>
                  <NavLink 
                    to="/earphones" 
                    className={({ isActive }) => isActive ? `${styles.active} navlink` : "navlink"} 
                    onClick={handleClick}
                  >
                    <li>Earphones</li>
                  </NavLink>
              </ul>
          </nav>
        </div>
        <div className={styles.title}>
            <h1>Audiophile</h1>
        </div>
        <div>
          <AiOutlineShoppingCart className={styles.cartIcon} onClick={() => setCartActive(!isOpen)} />
        </div>
    </div>
  )
}

export default Nav