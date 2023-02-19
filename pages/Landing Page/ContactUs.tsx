import Image from 'next/image'
import contactImage from '../../assets/contact-us-image.png';

import styles from '../../styles/Landing Page/ContactUs.module.css'


export default function ContactFormSection() {
    return (
      <>
        <div className="contact-us">
          <div className={styles.contactUsGrid}>
            <div>
              <Image src={contactImage} alt={'image'} />
            </div>
            <div className={styles.contactForm}>
              <div>
                <h3 className={styles.contactFormTitle}>Let's Talk</h3>
                <p className={styles.contactFormSubtitle}>Lorem ipsum dolor sit amet consectetur. Ut non pellentesque lacinia convallis vitae.</p>
              </div>
              <div>
                <form className={styles.formElements}>
                  <input id="name" className={styles.formInput} type={"text"} name={"name"} placeholder={"Enter your name"}/>
                  <input id="email" className={styles.formInput} type={"text"} name={"email"} placeholder={"Enter your email"}/>
                  <input id="message" className={styles.formInput} type={"text"} name={"message"} placeholder={"Enter your message"}/>
                  <div>
                    <div className={styles.checkBoxGroup}>
                      <input id="checkbox" className={styles.formInput} type={"checkbox"} name={"checkbox"} />
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
              <h4>Text Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Dictum erat odio integer purus eget porta fermentum.</p>
            </div>
            <div>
              <button className='get-in-touch-button'>Get in Touch</button>
            </div>
          </div>
          
        </div>
      </>
    )
  }