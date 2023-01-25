import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/service-section'

const IndexPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ServiceSection />
        </div>
    )
}

export default IndexPage
