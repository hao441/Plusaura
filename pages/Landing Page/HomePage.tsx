import Image from 'next/image'
import image from '../../assets/homepage-image.png';

import styles from '../../styles/Landing Page/HomePage.module.css'

export default function HomePageSection() {
    return (
      <>
        <div className="homepage">

          <div className={styles.homePageGrid}>

            <div className={styles.headerText}>
              <h1>Building Digital Product</h1>
              <h2>We specialise in turnign and bringing idea into maazing product through next level visual display</h2>
              <button className="get-in-touch-button">Get in Touch</button>
              <button className={styles.ourServicesButton}>Our Services</button>
            </div>

            <div className={styles.headerImage}>
              <Image src={image} alt="image-alt-text"/>
            </div>
          </div>

        </div>
      </>
    )
  }