import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/Hero'
import Services from '../components/services'
// import PortfolioSection from '../components/portfolio-section'

const IndexPage: React.FC = () => (
    <div className="bg-white">
        <Header />
        <Hero />
        <Services />
        {/*        <PortfolioSection /> */}
        <Footer />
    </div>
)

export default IndexPage
