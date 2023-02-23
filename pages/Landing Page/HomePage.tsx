import Image from 'next/image'
import image from '../../assets/homepage-image.png';

import styles from '../../styles/Landing Page/HomePage.module.css'

interface ModeState {
  currentModeState: string;
  currentContactState: boolean;
  newContactState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomePageSection({currentModeState, currentContactState, newContactState}:ModeState) {

  const handleContact = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    return !currentContactState ? newContactState(true) : newContactState(false);
  }

    return (
      <>
        <div className="homepage mobile-hide">

          <div className={styles.homePageGrid}>

            <div className={styles.headerElements}>

              <div className={styles.titleText}>
                <h1> <span className={styles.textBuilding}>Building </span><span className={styles.digitalProduct}>Digital Product</span></h1>
              </div>

              <div className={styles.headerText}>
                <h2 className={styles.headerSubtext}>We specialise in turning and bringing ideas into <b>amazing products</b> through next level visual display</h2>
              </div>
              
              <div className={styles.headerButtons}>
                <span><button className="get-in-touch-button-no-margin" onClick={handleContact}>Get in Touch</button></span>
                <button className={currentModeState === 'light' ? styles.ourServicesButtonLight : styles.ourServicesButtonDark}>Our Services</button>
              </div>

            </div>
            <div className={styles.headerImage}>
            <div className={styles.test}/>

              {/* <Image src={image} alt="image-alt-text"/> */}
            </div>
          </div>

        </div>
      </>
    )
  }