import React from 'react'
import logo from '../images/Capstone-Logo-New.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-50 py-4 container mx-auto px-4 flex items-center">
            <a className="mr-16" href="/">
				<img src={logo} alt="Logo" className="block m-auto w-96"/>
            </a>
            <a className="text-gray-900 mr-16 no-underline" href="/services">
			  Services
            </a>
            <a className="text-gray-900 mr-16 no-underline" href="/portfolio">
              Portfolio
            </a>
            <a className="text-gray-900 mr-16 no-underline" href="/about">
              About Us
            </a>
            <a className="text-gray-900 mr-16 no-underline" href="/articles">
              Artictles
            </a>
            <a className="text-gray-900 no-underline" href="/contact">
              Contact Us
            </a>
    </nav>
  )
}

export default Navbar
