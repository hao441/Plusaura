import Image from 'next/image'
import { useState } from 'react';
import contactImage from '../../assets/contact-us-image.png';

import styles from '../../styles/Landing Page/ContactUs.module.css'


export default function ContactFormSection() {

    const [fullname, setFullname] = useState('fads');
    const [email, setEmail] = useState('gordonchalice@gmail.com');
    const [message, setMessage] = useState('fgds');
    const [submitted, setSubmitted] = useState(false)
    const [alert, setAlert] = useState('');

    const sendEmail = async (e: { preventDefault: () => void; }) => {

      e.preventDefault()

      console.log("hello")

        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: `You have a new message from - ${email}`,
            message: `<div>${message}</div>`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);
          return;
        }
      console.log(fullname, email, message);
      return setSubmitted(true)
    }


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
                <form id='contact-form' className={styles.formElements} onSubmit={sendEmail}>
                  <input id="name" value={fullname} onChange={(e) => setFullname(e.target.value)} className={styles.formInput} type={"text"} name={"name"} placeholder={"Enter your name"} required/>
                  <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.formInput} type={"email"} name={"email"} placeholder={"Enter your email"} required/>
                  <input id="message" value={message} onChange={(e) => setMessage(e.target.value)} className={styles.messageInput} type={"text"} name={"message"} placeholder={"Enter your message"}/>
                  <div>
                  
                    <div className={styles.checkBoxGroup}>
                      <input id="checkbox" className={styles.checkBox} type={"checkbox"} name={"checkbox"} required/>
                      <p className={styles.checkBoxText}>I agree that the data I submit will be collected and stored.</p>
                    </div>
                    <button className={!submitted ? 'get-in-touch-button margin-auto' : 'get-in-touch-button margin-auto'} disabled={submitted}>Submit</button>
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