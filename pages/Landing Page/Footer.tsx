import Image from 'next/image';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';

import styles from '../../styles/Landing Page/Footer.module.css'

interface ModeState {
  currentModeState: string;
}

export default function FooterSection({currentModeState}: ModeState) {
    return (
      <>
          <div className="footer">
            <div className={currentModeState === 'light' ? styles.footerBoxLight : styles.footerBoxDark}>
            <div className={styles.footerGrid}>
              <div className={styles.logoSection}>
                <Image className={styles.logo} src={currentModeState === 'light' ? logoDark : logo} alt="image" height={31.38} width={105.4}/>
                <p className={styles.logoText}>Lorem ipsum dolor sit amet consectetur. Vestibulum posuere nec leo eu. Ipsum consequat dui turpis velit suspendisse. </p>
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

              <div className={styles.subscribeSection}>
                <p className={styles.sectionHeader}>Subscribe Newsletter</p>
                <p className={styles.sectionText}>Newletter Paragraph Text</p>

                <form>
                  <input id="subscription-email-field" className={currentModeState === 'light' ? styles.subscribeInputLight : styles.subscribeInputDark} type={"email"} placeholder={'Enter your email address'}/>
                  <button className={styles.subscribeButton}>Subscribe</button>
                </form> 
              </div>
              </div>
              
              <hr className={styles.hr}/>

              <div className={styles.conditionSection}>
                <div>
                  <p className={styles.conditionsText}> Copyright 2022 Plusaura ...</p>
                </div>
                <div></div>
                <div className={styles.termsPolicy}>
                  <p className={styles.conditionsText}>Terms and Conditions</p>
                  <p className={styles.conditionsText}>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }