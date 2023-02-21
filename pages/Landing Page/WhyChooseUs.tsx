import Image from 'next/image';

//images
import chooseImage from '../../assets/why-choose-us-image.png';
import boxImage1 from '../../assets/why-choose-us/box-1-image.png';
import boxImage2 from '../../assets/why-choose-us/box-2-image.png';
import boxImage3 from '../../assets/why-choose-us/box-3-image.png';

import styles from '../../styles/Landing Page/WhyChooseUs.module.css'



export default function WhyChooseUsSection() {
    return (
      <>
        <div className="why-choose-us mobile-hide">
          <div className={styles.whyChooseUsGrid}>
            <div className={styles.chooseImage}>
              <Image className={styles.chooseImage} src={chooseImage} alt={"image"} />
            </div>

            <div>
              <div>
                <h5 className={styles.chooseTitle}>Why Choose Us</h5>
                <h3 className={styles.chooseSubTitle}>Specialist in providing client best digital product of various services</h3>
              </div>
              
              <div className={styles.clientBoxes}>
                <div className={styles.clientBox}>
                <Image className={styles.boxImage} src={boxImage1} alt={"image"} />
                <div className={styles.clientText}>
                    <h4 className={styles.clientTextTitle}>Focus on Client Problem</h4>
                    <p className={styles.clientTextSubtitle}>Work with small to large business willing to bring there brand to the next level with slick designs.</p>
                  </div>
                </div>

                <div className={styles.clientBox}>
                <Image className={styles.boxImage} src={boxImage2} alt={"image"} />
                  <div className={styles.clientText}>
                    <h4 className={styles.clientTextTitle}>Provide a Real Solution</h4>
                    <p className={styles.clientTextSubtitle}>Optimalise website for increasing sales, creating funnels to drive more sales.</p>
                  </div>
                </div>

                <div className={styles.clientBox}>
                  <div>
                    <Image className={styles.boxImage} src={boxImage3} alt={"image"} />
                  </div>
                  <div className={styles.clientText}>
                    <h4 className={styles.clientTextTitle}>High Quality Service</h4>
                    <p className={styles.clientTextSubtitle}>We don’t work with more then a certain amount of business at one time to ensure the highest quality of work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


            <div className='get-in-touch-box margin-auto'>
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