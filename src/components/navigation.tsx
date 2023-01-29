//cspell:ignore Topbar
import React, { FC } from 'react'
import logo from '../images/Capstone-Logo-New.png'

const links = ['services', 'portfolio', 'about', 'contact', 'articles']
const Navbar: FC = () => {
    return (
        <nav className="w-full flex items-center">
            <a className="mr-[5%] w-96" href="/">
                <img src={logo} alt="Logo" className="block w-full" />
            </a>
            {links.map((link) => (
                <a
                    className="mr-[5%] text-black-900 font-paragraph text-sm no-underline capitalize"
                    href={'/' + link}
                >
                    {link}
                </a>
            ))}
        </nav>
    )
}

export default Navbar
