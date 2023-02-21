import Image from 'next/image'
import logo from '../../assets/logo.png';

import styles from '../../styles/Landing Page/Footer.module.css'

export default function FooterSection() {
    return (
      <>
          <div className="footer">
            <div className={styles.footerBox}>
            <div className={styles.footerGrid}>
              <div>
                <Image src={logo} alt="image" height={31.38} width={105.4}/>
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
                  <input id="subscription-email-field" className={styles.subscribeInput} type={"email"} />
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