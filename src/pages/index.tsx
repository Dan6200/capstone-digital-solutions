import React from 'react'
import Footer from '../components/footer'
import Hero from '../components/Hero'
import PortfolioSection from '../components/portfolio-section'
import ServiceSection from '../components/service-section'
import Header from '../components/site-header'

const IndexPage: React.FC = () => (
    <div className="bg-white">
        <Header />
        <Hero />
        <ServiceSection />
        <PortfolioSection />
        <Footer />
    </div>
)

export default IndexPage
