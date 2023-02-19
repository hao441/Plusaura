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


export default function Home() {
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
