import styles from './Recommended.module.css';

import imgSpeaker from '../../assets/home/desktop/image-speaker-zx9.png';

const Recommended = () => {
  return (
    <div className={styles.recommended}>
        <div className={styles.containerSpeaker}>
            <img src={imgSpeaker} alt="zx9_speakers"  className={styles.imgSpeaker}/>
            <h2>ZX9 <br /> SPEAKERS</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button>SEE PRODUCT</button>
        </div>
        <div className={styles.containerSpeaker2}>
            <div>
                <h2>ZX7 SPEAKER</h2>
                <button>SEE PRODUCT</button>
            </div>
        </div>
        <div className={styles.containerEarphone}>
            <div className={styles.imgEarphone}>
            </div>
            <div className={styles.textEarphone}>
                <h2>YX1 EARPHONES</h2>
                <button>SEE PRODUCT</button>
            </div>
        </div>
    </div>
  )
}

export default Recommended