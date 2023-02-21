
import styles from '../../styles/Landing Page/ContactUs.module.css'

interface CancelProp {
    newContactState: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function PopUp({ newContactState }: CancelProp) {

    const handleClose = () => {
        newContactState(false)
    }

    return (
    <div className='pop-up'>
      <div className={styles.contactForm}>
        <div>
            <div className={styles.contactFormTop}>
                <h3 className={styles.contactFormTitle}>Let&apos;s Talk</h3>
                <button className={styles.contactFormCancel} onClick={handleClose}>x</button>
            </div>
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
    )
}