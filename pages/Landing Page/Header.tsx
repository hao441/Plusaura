import Image from 'next/image'
import logo from '../../assets/logo.png';
import logoDark from '../../assets/logo-dark.png';
import darkMode from '../../assets/dark-mode.png';
import lightMode from '../../assets/light-mode.png';

import { useState } from 'react';

interface StateProps {
  currentMobileState: boolean;
  newMobileState: React.Dispatch<React.SetStateAction<boolean>>;
  currentModeState: string;
  newModeState: React.Dispatch<React.SetStateAction<string>>;
  currentContactState: boolean;
  newContactState: React.Dispatch<React.SetStateAction<boolean>>;
}

import styles from '../../styles/Landing Page/Header.module.css';
export default function HeaderSection({ currentMobileState, newMobileState, currentModeState, newModeState, currentContactState, newContactState}: StateProps) {

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobile = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    return !currentMobileState ? newMobileState(true) : newMobileState(false);
  }

  const handleMode = () => {
    return currentModeState === 'dark' ? newModeState('light') : newModeState('dark');
  }

  const handleContact = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    return !currentContactState ? newContactState(true) : newContactState(false);
  }

    return (
      <>
        <div className="header">
          <div className='header-grid-main'>
              <div className={styles.image}>
                <Image className={styles.logo} src={currentModeState === 'light' ? logoDark : logo} alt="image" height={31.38} width={105.4}/>
              </div>
              <div className={styles.navbar}>
                <a className={currentModeState === 'light' ? 'light-text' : 'dark-text'} href="#home">Home</a>
                <a className={currentModeState === 'light' ? 'light-text' : 'dark-text'}  href="#aboutus">About Us</a>
                <a  className={currentModeState === 'light' ? 'light-text' : 'dark-text'} href="#home">Our Services</a>
                <a  className={currentModeState === 'light' ? 'light-text' : 'dark-text'} href="#home">Testimonials</a>
                <a  className={currentModeState === 'light' ? 'light-text' : 'dark-text'} href="#home">Our Projects</a>
                <a  className={currentModeState === 'light' ? 'light-text' : 'dark-text'} href="#home">Contact Us</a>

              </div>
              <div className={styles.darkTouch}>
                <Image className='dl-mode' src={currentModeState === 'light' ? lightMode : darkMode} alt="light/dark mode" onClick={handleMode}/>
                <button className={styles.headerButton} onClick={handleContact}>Get in Touch</button>
              </div>
            </div>
            <div className='nav-body'>
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
                      <hr className='menu-hr'/>
                      <li><a href="#">about</a></li>
                      <hr className='menu-hr'/>
                      <li><a href="#">blogs</a></li>
                      <hr className='menu-hr'/>
                      <li><a href="#">portfolio</a></li>
                      <hr className='menu-hr'/>
                      <li><a href="#">contact</a></li>
                      <hr className='menu-hr'/>
                      <button className={styles.headerButtonMobile} onClick={handleContact}>Get in Touch</button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          
        </div>
      </>
    )
  }