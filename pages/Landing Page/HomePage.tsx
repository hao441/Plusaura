import Image from 'next/image'
import image from '../../assets/homepage-image.png';

export default function HomePageSection() {
    return (
      <>
        <div className="homepage">
          <div className='home-page-grid'>
            <div>
              <h1>Building Digital Product</h1>
              <h2>We specialise in turnign and bringing idea into maazing product through next level visual display</h2>
              <button>Get in Touch</button>
              <button>Our Services</button>
            </div>
            <div>
              <Image src={image} alt="Picture of the author"/>
            </div>
          </div>
        </div>
      </>
    )
  }