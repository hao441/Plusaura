import Image from 'next/image'
import logo from '../../assets/logo.png';

import styles from '../../styles/Landing Page/Footer.module.css'

export default function FooterSection() {
    return (
      <>
          <div className="footer">
            <div className={styles.footerGrid}>
              <div>
                <Image src={logo} alt="image" height={40} width={105}/>
                <p className={styles.sectionText}>Text underneath Logo</p>
              </div>

              <div>
                <p className={styles.sectionHeader}>Useful Links</p>
                <div className={styles.linkSection}>
                  <p className={styles.sectionText}>Contact Us</p>
                  <p className={styles.sectionText}>How We Work</p>
                  <p className={styles.sectionText}>About Us</p>
                  <p className={styles.sectionText}>Terms of Service</p>
                  <p className={styles.sectionText}>Our Services</p>
                </div>
              </div>

              <div>
                <p className={styles.sectionHeader}>Subscribe Newsletter</p>
                <p className={styles.sectionText}>Newletter Paragraph Text</p>

                <form>
                  <input id="subscription-email-field" type={"email"} />
                  <button>Subscribe</button>
                </form>
              </div>
                <hr className={styles.hr}/>

              <div className={styles.conditionSection}>
                <p className={styles.conditionsText}> Copyright 2022 Plusaura ...</p>
                <p className={styles.conditionsText}>Terms and Conditions</p>
                <p className={styles.conditionsText}>Privacy Policy</p>
              </div>
            </div>
          </div>
      </>
    )
  }