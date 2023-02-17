import React from 'react'
import seoConfig from '../seo-config'
import Footer from './footer'
import Header from './header'
import SEO from './seo'
import Tracking from './tracking-and-analytics'

export default function Layout({ children }) {
    const { description, title } = seoConfig
    return (
        <div className="bg-white">
            <SEO description={description} title={title} />
            <Tracking />
            <Header />
            <main className="scroll-smooth">{children}</main>
            <Footer />
        </div>
    )
}
