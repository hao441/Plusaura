import Image from 'next/image'

//images
import service1 from '../../assets/our-services/1.png';
import service2 from '../../assets/our-services/2.png';
import service3 from '../../assets/our-services/3.png';
import service4 from '../../assets/our-services/4.png';
import service5 from '../../assets/our-services/5.png';
import service6 from '../../assets/our-services/6.png';


export default function OurServicesSection() {
    return (
      <>
        <div className="our-services">
          <div className='our-services-grid'>
            <div>
              <h5>Our Services</h5>
              <h3>Managing your Business with our Best Services</h3>
            </div>

            <div>
              <div>
                <Image src={service1} alt={"image"}/>
                <p>Digital Marketing</p>
              </div>
              <div>
                <Image src={service2} alt={"image"}/>
                <p>App/Website Design</p>
              </div>
              <div>
                <Image src={service3} alt={"image"}/>
                <p>App/Website Development</p>
              </div>
              <div>
                <Image src={service4} alt={"image"}/>
                <p>Brand Design</p>
              </div>
              <div>
                <Image src={service5} alt={"image"}/>
                <p>Social Media Strategies</p>
              </div>
              <div>
                <Image src={service6} alt={"image"}/>
                <p>Product Consultation</p>
              </div>
            </div>

            <div>
              <p>Interested in knowing more details about our service? No problem</p>
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </>
    )
  }