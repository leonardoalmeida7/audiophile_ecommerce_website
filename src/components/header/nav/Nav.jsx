import { useState } from "react";
import { NavLink } from "react-router-dom"; // Troque Link por NavLink

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { useCart } from "../../../context/useCart";

import styles from './Nav.module.css';

const Nav = ({ onCartClick }) => {
  const [isActive, setIsActive] = useState(false);

  const { cart } = useCart();

  console.log(cart);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
      <div className={styles.container}>
        <div>
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
          <div className={styles.cartIconContainer}>
            <AiOutlineShoppingCart className={styles.cartIcon} onClick={onCartClick} />
            {cart.length > 0 && <div className={styles.notification}>{cart.length}</div>}
          </div>
        </div>
    </div>
  )
}

export default Nav