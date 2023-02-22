import Image from 'next/image'

//images  

//dark
import serviceDark1 from '../../assets/our-services/dark/1.png';
import serviceDark2 from '../../assets/our-services/dark/2.png';
import serviceDark3 from '../../assets/our-services/dark/3.png';
import serviceDark4 from '../../assets/our-services/dark/4.png';
import serviceDark5 from '../../assets/our-services/dark/5.png';
import serviceDark6 from '../../assets/our-services/dark/6.png';

//light
import serviceLight1 from '../../assets/our-services/light/1.png';
import serviceLight2 from '../../assets/our-services/light/2.png';
import serviceLight3 from '../../assets/our-services/light/3.png';
import serviceLight4 from '../../assets/our-services/light/4.png';
import serviceLight5 from '../../assets/our-services/light/5.png';
import serviceLight6 from '../../assets/our-services/light/6.png';

import styles from '../../styles/Landing Page/OurServices.module.css'

interface ModeState {
  currentModeState: string;
  currentContactState: boolean;
  newContactState: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function OurServicesSection({currentModeState, currentContactState, newContactState}:ModeState) {

  const handleContact = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    return !currentContactState ? newContactState(true) : newContactState(false);
  }

    return (
      <>
      <div className='our-services'>
        <div className={styles.ourServicesGrid}>
          <div className='our-services-grid'>
            <div className={styles.serviceText}>
              <h5 className={styles.serviceTitle}>Our Services</h5>
              <h3 className={styles.serviceTextSubtitle}>Managing your Business with our Best Services</h3>
            </div>

            <div className={styles.serviceGrid}>
              <div className={styles.serviceBox}>
                <Image className='small-image' src={currentModeState === 'light' ? serviceLight1 : serviceDark1} alt={"image"}/>
                <p>Digital Marketing</p>
              </div>
              <div className={styles.serviceBox}>
                <Image className='small-image' src={currentModeState === 'light' ? serviceLight2 : serviceDark2} alt={"image"}/>
                <p>App/Website Design</p>
              </div>
              <div className={styles.serviceBox}>
                <Image className='small-image' src={currentModeState === 'light' ? serviceLight3 : serviceDark3} alt={"image"}/>
                <p>App/Website Development</p>
              </div>
              <div className={styles.serviceBox}>
                <Image className='small-image' src={currentModeState === 'light' ? serviceLight4 : serviceDark4} alt={"image"}/>
                <p>Brand Design</p>
              </div>
              <div className={styles.serviceBox}>
                <Image className='small-image' src={currentModeState === 'light' ? serviceLight5 : serviceDark5} alt={"image"}/>
                <p>Social Media Strategies</p>
              </div>
              <div className={styles.serviceBox}>
                <Image className='small-image' src={currentModeState === 'light' ? serviceLight6 : serviceDark6} alt={"image"}/>
                <p>Product Consultation</p>
              </div>
            </div>

            <div className={styles.getInTouch}>
              <p className={styles.getInTouchText}>Interested in knowing more details about our service? No problem, just</p>
              <button className='get-in-touch-button' onClick={handleContact}>Get in Touch</button>
            </div>
          </div>
        </div>
        </div>
      </>
    )
  }