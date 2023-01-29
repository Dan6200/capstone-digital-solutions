import React from 'react'
import { FAQ } from '../components/faq'
import Footer from '../components/footer'
import { MissionStatement } from '../components/mission-statements'
import Header from '../components/site-header'

const AboutPage: React.FC = () => (
    <div className="h-screen bg-white flex flex-col justify-between">
        <Header />
        <MissionStatement />
        <FAQ />
        <Footer />
    </div>
)

export default AboutPage
