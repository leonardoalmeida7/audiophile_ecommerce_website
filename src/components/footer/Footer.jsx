import styles from './Footer.module.css';
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <div className={styles.logoAndNav}>
            <h2>Audiophile</h2>
            <nav>
              <ul>
                <li><Link to="/" className={styles.link}>Home</Link></li>
                <li><Link to="/headphones" className={styles.link}>Headphones</Link></li>
                <li><Link to="/speakers" className={styles.link}>Speakers</Link></li>
                <li><Link to="/earphones" className={styles.link}>Earphones</Link></li>
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
        </div>
      </footer>
  )
}

export default Footer