import styles from './Presentation.module.css';
import imgMan from '/images/shared/mobile/image-best-gear.jpg';
import imgManTablet from '/images/shared/tablet/image-best-gear.jpg';
import imgManDesktop from  '/images/shared/desktop/image-best-gear.jpg';

const Presentation = () => {
  return (
    <div className={styles.bestAudioGear}>
        <div className={styles.imageContainer}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={imgManDesktop} />
            <source media="(min-width: 768px)" srcSet={imgManTablet} />
            <img src={imgMan} alt="Best Audio Gear" />
          </picture>
        </div>
        <div className={styles.textContainer}>
          <h2>Bringing you the <span>best</span> audio gear</h2>
          <p>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of our products. Stop by our store 
              to meet some of the fantastic people who make Audiophile the best place to buy your portable 
              audio equipment.
          </p>
        </div>
    </div>
  )
}

export default Presentation