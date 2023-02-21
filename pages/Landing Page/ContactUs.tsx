import Image from 'next/image'
import contactImage from '../../assets/contact-us-image.png';

import styles from '../../styles/Landing Page/ContactUs.module.css'


export default function ContactFormSection() {
    return (
      <>
        <div className="contact-us">
          <div className={styles.contactUsGrid}>
            <div>
              <Image className={styles.contactImage} src={contactImage} alt={'image'} />
            </div>
            <div className={styles.contactForm}>
              <div>
                <h3 className={styles.contactFormTitle}>Let&apos;s Talk</h3>
                <p className={styles.contactFormSubtitle}>Lorem ipsum dolor sit amet consectetur. Ut non pellentesque lacinia convallis vitae.</p>
              </div>
              <div>
                <form id='contact-form' className={styles.formElements}>
                  <input id="name" className={styles.formInput} type={"text"} name={"name"} placeholder={"Enter your name"}/>
                  <input id="email" className={styles.formInput} type={"text"} name={"email"} placeholder={"Enter your email"}/>
                  <input id="message" className={styles.messageInput} type={"text"} name={"message"} placeholder={"Enter your message"}/>
                  <div>
                    <div className={styles.checkBoxGroup}>
                      <input id="checkbox" className={styles.checkBox} type={"checkbox"} name={"checkbox"} />
                      <p className={styles.checkBoxText}>I agree that the data I submit will be collected and stored.</p>
                    </div>
                    <button className='get-in-touch-button margin-auto'>Submit</button>
                    </div>
                </form>
              </div>
            </div>

          </div>

          <div className='get-in-touch-box margin-top'>
              <div>
                <h5 className='get-in-touch-title'>Text Title Here</h5>
                <p className='get-in-touch-subtitle'>Lorem ipsum dolor sit amet consectetur. Dictum erat odio integer purus eget porta fermentum.</p>
              </div>
              <div className='get-in-touch-button-box'>
                <button className='get-in-touch-button'>Get in Touch</button>
              </div>
            </div>  
          
        </div>
      </>
    )
  }