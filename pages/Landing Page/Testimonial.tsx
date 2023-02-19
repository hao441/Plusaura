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
              <h5>Testimonial</h5>
              <h3>What they say about us</h3>
            </div>

            <div>
              <div>
                <div>
                  <Image src={companyLogo1} alt={"image"}/> {/*company logo*/}
                  <Image src={stars} alt={"image"}/> {/*stars*/}
                  <p>Testimonial Text</p>
                  <div>
                    <Image src={person1} alt={"image"}/> {/*person picture */} 
                    <p>name</p>
                    <p>title</p>
                  </div>
                </div>
                <div>
                  <Image src={companyLogo2} alt={"image"}/> {/*company logo*/}
                  <Image src={stars} alt={"image"}/> {/*stars*/}
                  <p>Testimonial Text</p>
                  <div>
                    <Image src={person2} alt={"image"}/> {/*person picture */}
                    <p>name</p>
                    <p>title</p>
                  </div>
                </div>
                <div>
                  <Image src={companyLogo3} alt={"image"}/> {/*company logo*/}
                  <Image src={stars} alt={"image"}/> {/*stars*/}
                  <p>Testimonial Text</p>
                  <div>
                    <Image src={person3} alt={"image"}/> {/*person picture */}
                    <p>name</p>
                    <p>title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }