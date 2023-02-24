import MainSection from './main'
import HeadSection from './head'
import HeaderSection from './Landing Page/Header'
import HomePageSection from './Landing Page/HomePage'
import OurServicesSection from './Landing Page/OurServices'
import WhyChooseUsSection from './Landing Page/WhyChooseUs'
import OurPortfolioSection from './Landing Page/OurPortfolio'
import TestimonialSection from './Landing Page/Testimonial'
import ContactUsSection from './Landing Page/ContactUs'
import FooterSection from './Landing Page/Footer'
import PopUp from './Landing Page/PopUp'

import type { AppProps } from 'next/app'

import styles from '../styles/Landing Page/ContactUs.module.css'

import { useState } from 'react'


export default function Home() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mode, setMode] = useState('dark');
  const [contactMenu, setContactMenu] = useState(false)



  return (
    <>
    
    <div className={mode === 'dark' ? 'dark' : 'light'}>
    <div className='threed'>
      <div className={!contactMenu ? 'pop-off' : 'pop-on'}>
        <PopUp
          currentContactState={contactMenu}
          newContactState={setContactMenu}
          currentModeState={mode}
        />
      </div>

        <HeadSection />
        <HeaderSection
          currentMobileState={mobileMenu}
          newMobileState={setMobileMenu}
          currentModeState={mode}
          newModeState={setMode}
          currentContactState={contactMenu}
          newContactState={setContactMenu}
        />
        <div className={ mobileMenu && mode === 'light' ? 'white' : mobileMenu && mode === 'dark' ? 'black' : ''}></div>
        <div className={mobileMenu ? 'none' : ''}>
        <HomePageSection 
          currentModeState={mode}
          currentContactState ={contactMenu}
          newContactState={setContactMenu}
        />
        <OurServicesSection 
          currentModeState={mode}
          currentContactState={contactMenu}
          newContactState={setContactMenu}
        />
        <WhyChooseUsSection 
          currentModeState={mode}
          currentContactState={contactMenu}
          newContactState={setContactMenu}
        />
        <OurPortfolioSection 
          currentModeState={mode}
          currentContactState={contactMenu}
          newContactState={setContactMenu}
        />
        <TestimonialSection currentModeState={mode}/>
        <ContactUsSection 
          currentModeState={mode}
          currentContactState={contactMenu}
          newContactState={setContactMenu}
        />
        <FooterSection currentModeState={mode}/>
        {/* <MainSection /> */}
        </div>
        </div>
      </div>
      
    </>
  )
}
