import styles from './Footer.module.css';
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logoAndNav}>
          <h2>Audiophile</h2>
          <nav>
            <ul>
              <li>Home</li>
              <li>Headphones</li>
              <li>Speakers</li>
              <li>Earphones</li>
            </ul>
          </nav>
        </div>
        <div className={styles.description}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className={styles.copyAndIcons}>
          <p>&copy; 2025 Audiophile. All rights reserved.</p>
          <div className={styles.icons}>
            <ImFacebook2  className={styles.icon}/>
            <FaXTwitter className={styles.icon}/>
            <FaInstagram className={styles.icon}/>
          </div>
        </div>
      </footer>
  )
}

export default Footer