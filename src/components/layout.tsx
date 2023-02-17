import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
    return (
        <div className="bg-white">
            <Header />
            <main className="scroll-smooth">{children}</main>
            <Footer />
        </div>
    )
}
