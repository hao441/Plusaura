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
              <h5 className={styles.portfolioTitle}>Our Portfolio</h5>
              <h3 className={styles.pageSubTitle}>Plusaura Latest Portfolio</h3>
            </div>

            <div className={styles.portfolioGrid}>
              <Image src={portfolio1} alt={"image"}/>
              <Image src={portfolio2} alt={"image"}/>
              <Image src={portfolio3} alt={"image"}/>
              <Image src={portfolio4} alt={"image"}/>
            </div>

            <div className='get-in-touch-box margin-top'>
              <div>
                <h5 className='get-in-touch-title'>Text Title Here</h5>
                <p className='get-in-touch-subtitle'>Lorem ipsum dolor sit amet consectetur. Dictum erat odio integer purus eget porta fermentum.</p>
              </div>
              <div className='get-in-touch-button-box'>
                <button className='get-in-touch-button'>Get in Touch</button>
              </div>
            </div>  
          </div>
        </div>
      </>
    )
  }