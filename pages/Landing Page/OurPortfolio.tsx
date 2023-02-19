import Image from 'next/image';

//images
import portfolio1 from '../../assets/our-portfolio/portfolio-1.png';
import portfolio2 from '../../assets/our-portfolio/portfolio-2.png';
import portfolio3 from '../../assets/our-portfolio/portfolio-3.png';
import portfolio4 from '../../assets/our-portfolio/portfolio-4.png';

import styles from '../../styles/Landing Page/OurPortfolio.module.css'

export default function OurPortfolioSection() {
    return (
      <>
       <div className="our-portfolio">
          <div className='our-portfolio-grid'>
            <div>
              <h5>Our Portfolio</h5>
              <h3>Plusaura Latest Portfolio</h3>
            </div>

            <div>
              <Image src={portfolio1} alt={"image"}/>
              <Image src={portfolio2} alt={"image"}/>
              <Image src={portfolio3} alt={"image"}/>
              <Image src={portfolio4} alt={"image"}/>
            </div>

            <div>
              <h5>Text Title Here</h5>
              <p>Sample Text</p>
              <button className='get-in-touch-button'>Get in Touch</button>
            </div>
          </div>
        </div>
      </>
    )
  }