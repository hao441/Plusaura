import Image from 'next/image'
import logo from '../../assets/logo.png';

export default function HeaderSection() {

  
    return (
      <>
        <div className="header">
        <div className='contact-grid'>
            <Image src={logo} alt="Picture of the author" height={40} width={105.4}/>

            <div id="navbar">
              <a className="navbar-item active" href="#home">Home</a>
              <a className="navbar-item" href="#aboutus">About Us</a>
              <a className="navbar-item" href="#home">Our Services</a>
              <a className="navbar-item" href="#home">Testimonials</a>
              <a className="navbar-item" href="#home">Our Projects</a>
              <a className="navbar-item" href="#home">Contact Us</a>
              
              <p>dark mode switch</p>
              
              <button>Get in Touch</button>
              
            </div>
          </div>
        </div>
      </>
    )
  }