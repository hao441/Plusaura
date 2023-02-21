import Image from 'next/image'
import image from '../../assets/homepage-image.png';

import styles from '../../styles/Landing Page/HomePage.module.css'

export default function HomePageSection() {
    return (
      <>
        <div className="homepage mobile-hide">

          <div className={styles.homePageGrid}>

            <div className={styles.headerElements}>

              <div className={styles.titleText}>
                <h1>Building <span className={styles.digitalProduct}>Digital Product</span></h1>
              </div>

              <div className={styles.headerText}>
                <h2>We specialise in turning and bringing ideas into <b>amazing products</b> through next level visual display</h2>
              </div>
              
              <div className={styles.headerButtons}>
                <span className={styles.test}><button className="get-in-touch-button-no-margin">Get in Touch</button></span>
                <button className={styles.ourServicesButton}>Our Services</button>
              </div>

            </div>
            <div className={styles.headerImage}>
              <Image src={image} alt="image-alt-text"/>
            </div>
          </div>

        </div>
      </>
    )
  }