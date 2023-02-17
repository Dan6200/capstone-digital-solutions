import React from 'react'
import seoConfig from '../seo-config'
import Footer from './footer'
import Header from './header'
import SEO from './seo'

export default function Layout({ children }) {
    const { description, title } = seoConfig
    return (
        <div className="bg-white">
            <SEO description={description} title={title} />
            <Header />
            <main className="scroll-smooth">{children}</main>
            <Footer />
        </div>
    )
}
