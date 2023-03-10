
import { useState } from 'react';
import styles from '../../styles/Landing Page/PopUp.module.css'

interface CancelProp {
    currentContactState: boolean;
    newContactState: React.Dispatch<React.SetStateAction<boolean>>;
    currentModeState: string;
  }

export default function PopUp({ currentContactState, newContactState, currentModeState }: CancelProp) {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [alert, setAlert] = useState('');

    const handleContact = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      return !currentContactState ? newContactState(true) : newContactState(false);
    }

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

    const handleClose = () => {
        newContactState(false)
    }

    return (
    <div id='pop-up' className='pop-up'>
      <div className={currentModeState === 'light' ? styles.contactFormLight : styles.contactFormDark}>
              <div>
                <div className={styles.contactFormTop}>
                  <h3 className={styles.contactFormTitle}>Let&apos;s Talk</h3>
                  <p onClick={handleContact} className={currentModeState === 'light' ? styles.contactFormCancelLight : styles.contactFormCancelDark}>x</p>
                </div>
                <p className={styles.contactFormSubtitle}>Lorem ipsum dolor sit amet consectetur. Ut non pellentesque lacinia convallis vitae.</p>
              </div>
              <div>
                <form id='contact-form' className={styles.formElements} onSubmit={sendEmail}>
                  <input id="name" value={fullname} onChange={(e) => setFullname(e.target.value)} className={currentModeState === 'light' ? styles.formInputLight : styles.formInputDark} type={"text"} name={"name"} placeholder={"Enter your name"} required/>
                  <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={currentModeState === 'light' ? styles.formInputLight : styles.formInputDark} type={"email"} name={"email"} placeholder={"Enter your email"} required/>
                  <input id="message" value={message} onChange={(e) => setMessage(e.target.value)} className={currentModeState === 'light' ? styles.formInputLight : styles.formInputDark} type={"text"} name={"message"} placeholder={"Enter your message"}/>
                  <div>
                  
                    <div className={styles.checkBoxGroup}>
                      <input id="checkbox" className={styles.checkBox} type={"checkbox"} name={"checkbox"} required/>
                      <p className={styles.checkBoxText}>I agree that the data I submit will be collected and stored.</p>
                    </div>
                    <button className={!submitted ? 'get-in-touch-button margin-auto' : 'get-in-touch-button-submitted margin-auto'} disabled={submitted}>{submitted ? 'Submitted' : "Submit"}</button>
                  </div>
                </form>
              </div>
            </div>
      </div>
    )
}