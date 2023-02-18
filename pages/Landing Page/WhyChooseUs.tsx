import Image from 'next/image';

//images
import chooseImage from '../../assets/why-choose-us-image.png';
import boxImage1 from '../../assets/why-choose-us/box-1-image.png';
import boxImage2 from '../../assets/why-choose-us/box-2-image.png';
import boxImage3 from '../../assets/why-choose-us/box-3-image.png';


export default function WhyChooseUsSection() {
    return (
      <>
        <div className="why-choose-us">
          <div className='why-choose-us-grid'>
            <div>
              <Image src={chooseImage} alt={"image"} />
            </div>

            <div>
              <h5>Why Choose Us</h5>
              <h3>Specialist in providing client best digital product of various services</h3>
            </div>
            
            <div>
              <div>
              <Image src={boxImage1} alt={"image"} />
                <h4>Focus on Client Problem</h4>
                <p>Work with small to large business willing to bring there brand to the next level with slick designs.</p>
              </div>

              <div>
              <Image src={boxImage2} alt={"image"} />
                <h4>Provide a Real Solution</h4>
                <p>Optimalise website for increasing sales, creating funnels to drive more sales.</p>
              </div>

              <div>
              <Image src={boxImage3} alt={"image"} />
                <h4>High Quality Service</h4>
                <p>We don’t work with more then a certain amount of business at one time to ensure the highest quality of work.</p>
              </div>
            </div>

            <div>
              <h5>Text Title Here</h5>
              <p>Sample Text</p>
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </>
    )
  }