import Image from 'next/image'

//images
import stars from '../../assets/testimonial/stars.png';

//company logos
import companyLogo1 from '../../assets/testimonial/company-logo/logo-1.png';
import companyLogo2 from '../../assets/testimonial/company-logo/logo-2.png';
import companyLogo3 from '../../assets/testimonial/company-logo/logo-3.png';

//person
import person1 from '../../assets/testimonial/person/1.png';
import person2 from '../../assets/testimonial/person/2.png';
import person3 from '../../assets/testimonial/person/3.png';

import styles from '../../styles/Landing Page/Testimonial.module.css'


export default function TestimonialSection() {
    return (
      <>
        <div className="testimonial">
          <div className='testimonial-grid'>
            <div>
              <h5 className='pageTitle center'>Testimonial</h5>
              <h3 className='center'>What they say about us</h3>
            </div>

            <div>
              <div className={styles.testimonialBoxes}>
                <div className={styles.testimonialBox}>
                  <div className={styles.testimonialImages}>
                  <Image src={companyLogo1} alt={"image"}/> {/*company logo*/}
                  <Image src={stars} alt={"image"}/> {/*stars*/}
                  </div>

                  <div>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet consectetur. Varius ipsum vel tortor dolor semper. Ullamcorper eget id diam lectus in vestibulum adipiscing netus. Id pellentesque volutpat duis volutpat est ac quis. </p>
                  </div>
                  
                  <div className={styles.testimonialContactBox}>
                    <div>
                      <Image src={person1} alt={"image"}/> {/*person picture */} 
                    </div>
                    <div>
                      <p className={styles.testimonialContactName}>Felix Watson</p>
                      <p className={styles.testimonialContactTitle}>Engineering Manager at Gojek</p>
                    </div>
                  </div>

                </div>
                <div className={styles.testimonialBox}>

                  <div>
                  <Image src={companyLogo2} alt={"image"}/> {/*company logo*/}
                  <Image src={stars} alt={"image"}/> {/*stars*/}
                  </div>

                  <div>
                  <p className={styles.testimonialText}>Lorem ipsum dolor sit amet consectetur. Varius ipsum vel tortor dolor semper. Ullamcorper eget id diam lectus in vestibulum adipiscing netus. Id pellentesque volutpat duis volutpat est ac quis. </p>
                  </div>
                  
                  <div className={styles.testimonialContactBox}>
                    <div>
                      <Image src={person2} alt={"image"}/> {/*person picture */} 
                    </div>
                    <div>
                      <p className={styles.testimonialContactName}>Selly Natalia</p>
                      <p className={styles.testimonialContactTitle}>Senior UX Writer at Tokopedia</p>
                    </div>
                  </div>
                </div>
                <div className={styles.testimonialBox}>
                  <div>
                  <Image src={companyLogo3} alt={"image"}/> {/*company logo*/}
                  <Image src={stars} alt={"image"}/> {/*stars*/}
                  </div>

                  <div>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet consectetur. Varius ipsum vel tortor dolor semper. Ullamcorper eget id diam lectus in vestibulum adipiscing netus. Id pellentesque volutpat duis volutpat est ac quis. </p>
                  </div>
                  
                  <div className={styles.testimonialContactBox}>
                    <div>
                      <Image src={person3} alt={"image"}/> {/*person picture */} 
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