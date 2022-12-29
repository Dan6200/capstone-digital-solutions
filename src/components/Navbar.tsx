import React from 'react'
import logo from '../images/example.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
		 <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
          <div className="flex items-center">
			  <a className="text-white mr-4" href="/">
				Home
			  </a>
            <a className="text-white mr-4" href="/about">
              About
            </a>
            <a className="text-white" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
