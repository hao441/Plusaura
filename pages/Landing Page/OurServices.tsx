import Image from 'next/image'

//images  
import service1 from '../../assets/our-services/1.png';
import service2 from '../../assets/our-services/2.png';
import service3 from '../../assets/our-services/3.png';
import service4 from '../../assets/our-services/4.png';
import service5 from '../../assets/our-services/5.png';
import service6 from '../../assets/our-services/6.png';

import styles from '../../styles/Landing Page/OurServices.module.css'



export default function OurServicesSection() {
    return (
      <>
        <div className={styles.ourServicesGrid}>
          <div className='our-services-grid'>
            <div className={styles.serviceText}>
              <h5 className='pageTitle center'>Our Services</h5>
              <h3 className={styles.serviceTextSubtitle}>Managing your Business with our Best Services</h3>
            </div>

            <div className={styles.serviceGrid}>
              <div className={styles.serviceBox}>
                <Image src={service1} alt={"image"}/>
                <p>Digital Marketing</p>
              </div>
              <div className={styles.serviceBox}>
                <Image src={service2} alt={"image"}/>
                <p>App/Website Design</p>
              </div>
              <div className={styles.serviceBox}>
                <Image src={service3} alt={"image"}/>
                <p>App/Website Development</p>
              </div>
              <div className={styles.serviceBox}>
                <Image src={service4} alt={"image"}/>
                <p>Brand Design</p>
              </div>
              <div className={styles.serviceBox}>
                <Image src={service5} alt={"image"}/>
                <p>Social Media Strategies</p>
              </div>
              <div className={styles.serviceBox}>
                <Image src={service6} alt={"image"}/>
                <p>Product Consultation</p>
              </div>
            </div>

            <div className={styles.getInTouch}>
              <p className={styles.getInTouchText}>Interested in knowing more details about our service? No problem, just</p>
              <button className='get-in-touch-button'>Get in Touch</button>
            </div>
          </div>
        </div>
      </>
    )
  }