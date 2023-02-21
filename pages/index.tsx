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

import Image from 'next/image'
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png'

import styles from '../styles/Landing Page/Header.module.css';
import { useState } from 'react'

export default function Home() {

  const MobileMenu = useState(false)

  return (
    <>



      
      <div className='main-grid'>
        <HeadSection />
        <HeaderSection />
        <HomePageSection />
        <OurServicesSection />
        <WhyChooseUsSection />
        <OurPortfolioSection />
        <TestimonialSection />
        <ContactUsSection />
        <FooterSection />
        {/* <MainSection /> */}
      </div>
    </>
  )
}
