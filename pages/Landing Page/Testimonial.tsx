import Image from 'next/image'

//images
import stars from '../../assets/testimonial/stars.png';

//company logos
import companyLogo2 from '../../assets/testimonial/company-logo/logo-2.png';

    //light
    import companyLogoLight1 from '../../assets/testimonial/company-logo/light/1.png';
    import companyLogoLight3 from '../../assets/testimonial/company-logo/light/3.png';

    //dark
    import companyLogoDark1 from '../../assets/testimonial/company-logo/dark/1.png';
    import companyLogoDark3 from '../../assets/testimonial/company-logo/dark/3.png';

//person
import person1 from '../../assets/testimonial/person/1.png';
import person2 from '../../assets/testimonial/person/2.png';
import person3 from '../../assets/testimonial/person/3.png';

import styles from '../../styles/Landing Page/Testimonial.module.css'

interface ModeState {
  currentModeState: string;
}


export default function TestimonialSection({currentModeState}:ModeState) {
    return (
      <>
        <div className="testimonial mobile-hide">
          <div className='testimonial-grid'>
            <div className={styles.testimonialTitleBox}>
              <h5 className={styles.testimonialTitle}>Testimonial</h5>
              <h3 className={styles.testimonialSubtitle}>What they say about us</h3>
            </div>

            <div>
              <div className={styles.testimonialBoxes}>
                <div className={currentModeState === 'light' ? styles.testimonialBoxLight : styles.testimonialBoxDark}>
                  <div className={styles.testimonialImages}>
                    <Image className={styles.companyLogo} src={currentModeState === 'light' ? companyLogoLight1 : companyLogoDark1} alt={"image"}/> {/*company logo*/}
                    <Image className={styles.starsImage} src={stars} alt={"image"}/> {/*stars*/}
                  </div>

                  <div>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet consectetur. Varius ipsum vel tortor dolor semper. Ullamcorper eget id diam lectus in vestibulum adipiscing netus. Id pellentesque volutpat duis volutpat est ac quis. </p>
                  </div>
                  
                  <div className={styles.testimonialContactBox}>
                    <div>
                      <Image className={styles.testimonialImage} src={person1} alt={"image"}/> {/*person picture */} 
                    </div>
                    <div>
                      <p className={styles.testimonialContactName}>Felix Watson</p>
                      <p className={styles.testimonialContactTitle}>Engineering Manager at Gojek</p>
                    </div>
                  </div>

                </div>
                <div className={currentModeState === 'light' ? styles.testimonialBoxLight : styles.testimonialBoxDark}>

                  <div className={styles.testimonialImages}>
                  <Image src={companyLogo2} alt={"image"}/> {/*company logo*/}
                  <Image className={styles.starsImage} src={stars} alt={"image"}/> {/*stars*/}
                  </div>

                  <div>
                  <p className={styles.testimonialText}>Lorem ipsum dolor sit amet consectetur. Varius ipsum vel tortor dolor semper. Ullamcorper eget id diam lectus in vestibulum adipiscing netus. Id pellentesque volutpat duis volutpat est ac quis. </p>
                  </div>
                  
                  <div className={styles.testimonialContactBox}>
                    <div>
                      <Image className={styles.testimonialImage} src={person2} alt={"image"}/> {/*person picture */} 
                    </div>
                    <div>
                      <p className={styles.testimonialContactName}>Selly Natalia</p>
                      <p className={styles.testimonialContactTitle}>Senior UX Writer at Tokopedia</p>
                    </div>
                  </div>
                </div>
                <div className={currentModeState === 'light' ? styles.testimonialBoxLight : styles.testimonialBoxDark}>
                  <div className={styles.testimonialImages}>
                  <Image src={currentModeState === 'light' ? companyLogoLight3 : companyLogoDark3} alt={"image"}/> {/*company logo*/}
                  <Image className={styles.starsImage} src={stars} alt={"image"}/> {/*stars*/}
                  </div>

                  <div>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet consectetur. Varius ipsum vel tortor dolor semper. Ullamcorper eget id diam lectus in vestibulum adipiscing netus. Id pellentesque volutpat duis volutpat est ac quis. </p>
                  </div>
                  
                  <div className={styles.testimonialContactBox}>
                    <div>
                      <Image className={styles.testimonialImage} src={person3} alt={"image"}/> {/*person picture */} 
                    </div>
                    <div>
                      <p className={styles.testimonialContactName}>Guy Hawkins</p>
                      <p className={styles.testimonialContactTitle}>Digital Marketer Expert at Amazon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }