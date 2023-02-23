import Image from 'next/image';
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';

import styles from '../../styles/Landing Page/Footer.module.css'
import { useState } from 'react';

interface ModeState {
  currentModeState: string;
}

export default function FooterSection({currentModeState}: ModeState) {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);


  const handleSubscription = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setLoading(true)

    console.log("hello")
  
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }

  console.log(email);
  setLoading(false)
  return setSubmitted(true)
}


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

                <form className={styles.subscribeInputSection} onSubmit={handleSubscription}>
                  <input id="subscription-email-field" value={email} onChange={(e) => setEmail(e.target.value)} className={currentModeState === 'light' ? styles.subscribeInputLight : styles.subscribeInputDark} type={"email"} placeholder={'Enter your email address'} required/>
                  <button className={!submitted ? styles.subscribeButton : styles.subscribedButton} disabled={submitted}>{submitted ? 'Subscribed' : loading ? ". . ." : 'Subscribe'}</button>
                </form> 
              </div>
              <div></div>
              </div>
              
              <hr className={styles.hr}/>

              <div className={styles.conditionSection}>
                <div>
                  <p className={styles.conditionsText}> Copyright 2022 Plusaura</p>
                </div>
                <div className={styles.empty}></div>
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