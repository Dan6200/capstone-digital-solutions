import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PortfolioSection from '../components/portfolio-section'
import ServiceSection from '../components/service-section'

const IndexPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ServiceSection />
            <PortfolioSection />
        </div>
    )
}

export default IndexPage
