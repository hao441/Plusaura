import Image from 'next/image'
import logo from '../../assets/logo.png';
import darkMode from '../../assets/dark-mode.png'


import styles from '../../styles/Landing Page/Header.module.css';
export default function HeaderSection() {

    return (
      <>
        <div className="header">
          <div className={styles.headerGrid}>
            <div className={styles.image}>
              <Image src={logo} alt="image" height={40} width={105}/>
            </div>
            <div className={styles.navbar}>
              <a className="navbar-item active" href="#home">Home</a>
              <a className="navbar-item" href="#aboutus">About Us</a>
              <a className="navbar-item" href="#home">Our Services</a>
              <a className="navbar-item" href="#home">Testimonials</a>
              <a className="navbar-item" href="#home">Our Projects</a>
              <a className="navbar-item" href="#home">Contact Us</a>

              <Image className={styles.dlMode} src={darkMode} alt="light/dark mode"/>

              <button className={styles.headerButton}>Get in Touch</button>
            </div>
          </div>
        </div>
      </>
    )
  }