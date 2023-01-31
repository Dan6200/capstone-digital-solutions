//cspell:ignore Topbar
import React, { FC } from 'react'
import logo from '../images/Capstone-Logo-New.png'

const links = ['services', 'portfolio', 'about', 'contact', 'articles']

const Navbar: FC = () => {
    return (
        <nav className="flex items-center w-full h-16">
            <a className="mr-[5%] w-96" href="/">
                <img src={logo} alt="Logo" className="block w-full" />
            </a>
            {links.map((link) => (
                <a
                    className="hover:text-primary mr-[5%] text-black-800 font-paragraph text-sm no-underline capitalize"
                    href={'/' + link}
                >
                    {link}
                </a>
            ))}
            <a
                href="#"
                className="mr-[5%] text-black-800 font-paragraph text-sm hover:text-primary"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                    width="24"
                    height="24"
                    viewBox="0 0 64 64"
                    stroke-width="3"
                    stroke="currentColor"
                    fill="none"
                >
                    <circle cx="27.31" cy="25.74" r="18.1" />
                    <line x1="39.58" y1="39.04" x2="56.14" y2="57" />
                </svg>
            </a>
        </nav>
    )
}

export default Navbar
