import React from 'react'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import Header from '../components/site-header'

const ContactPage: React.FC = () => (
    <div className="w-full flex flex-col justify-between">
        <Header />
        <ContactForm />
        <Footer />
    </div>
)

export default ContactPage
