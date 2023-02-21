import Image from 'next/image'
import logo from '../../assets/logo.png';
import darkMode from '../../assets/dark-mode.png'


import styles from '../../styles/Landing Page/Header.module.css';
export default function HeaderSection() {

    return (
      <>
        <div className="header">
          <div className='header-grid-main'>
              <div className={styles.image}>
                <Image className={styles.logo} src={logo} alt="image" height={31.38} width={105.4}/>
              </div>
              <div className={styles.navbar}>
                <a className="navbar-item active" href="#home">Home</a>
                <a className="navbar-item" href="#aboutus">About Us</a>
                <a className="navbar-item" href="#home">Our Services</a>
                <a className="navbar-item" href="#home">Testimonials</a>
                <a className="navbar-item" href="#home">Our Projects</a>
                <a className="navbar-item" href="#home">Contact Us</a>
              </div>
              <div className={styles.darkTouch}>
                <Image className={styles.dlMode} src={darkMode} alt="light/dark mode"/>
                <button className={styles.headerButton}>Get in Touch</button>
              </div>
            </div>
            <body className='nav-body'>
              <nav>
                <div className="navbar">
                  <div className="container nav-container">
                    
                      <input className="checkbox" type="checkbox" name="" id="" />
                       <div className='header-grid'>
                      <div className={styles.image}>
                        <Image className={styles.logo} src={logo} alt="image" height={31.38} width={105.4}/>
                      </div>
                      <div className={styles.navbar}>
                        <a className="navbar-item active" href="#home">Home</a>
                        <a className="navbar-item" href="#aboutus">About Us</a>
                        <a className="navbar-item" href="#home">Our Services</a>
                        <a className="navbar-item" href="#home">Testimonials</a>
                        <a className="navbar-item" href="#home">Our Projects</a>
                        <a className="navbar-item" href="#home">Contact Us</a>
                      </div>
                      <div className={styles.darkTouch}>
                        <Image className={styles.dlMode} src={darkMode} alt="light/dark mode"/>
                        <button className={styles.headerButton}>Get in Touch</button>
                      </div>
                      </div>
                      <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                      </div> 
                    <div className="menu-items">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">about</a></li>
                      <li><a href="#">blogs</a></li>
                      <li><a href="#">portfolio</a></li>
                      <li><a href="#">contact</a></li>
                    </div>
                  </div>
                </div>
              </nav>
            </body>
          
        </div>
      </>
    )
  }