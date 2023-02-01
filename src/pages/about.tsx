import React from 'react'
import { FAQ } from '../components/faq'
import Footer from '../components/footer'
import Header from '../components/header'
import { MissionStatement } from '../components/mission-statements'

const AboutPage: React.FC = () => (
    <div className="bg-white">
        <Header />
        <MissionStatement />
        <FAQ />
        <Footer />
    </div>
)

export default AboutPage
