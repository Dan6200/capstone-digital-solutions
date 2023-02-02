//cspell:ignore Topbar
import React, { FC } from 'react'
import { Logo } from './logo'

const links = ['about', 'contact', 'services', 'portfolio', 'articles']

const Navbar: FC = () => {
    return (
        <nav className="flex justify-between items-center w-full md:h-[7vw] lg:h-[5vw] h-[10vw]">
            <a
                className="mr-[5%] lg:w-[30vw] w-[90vw] sm:w-[70vw] md:w-[60vw]"
                href="/"
            >
                <Logo />
            </a>
            <div className="flex gap-[5%] w-fit">
                {links.map((link) => (
                    <div className="flex-row lg:flex">
                        <a
                            className="no-underline capitalize hover:text-primary text-black-800 font-paragraph text-md"
                            href={'/' + link}
                        >
                            {link}
                        </a>
                    </div>
                ))}
                {links.map((link) => (
                    <div className="flex-row hidden lg:flex">
                        <a
                            className="hover:text-primary mr-[5%] text-black-800 font-paragraph text-md no-underline capitalize"
                            href={'/' + link}
                        >
                            {link}
                        </a>
                    </div>
                ))}
            </div>
            <a
                href="#"
                className="mr-[5%] text-black-800 font-paragraph text-sm hover:text-primary"
            >
                {/* search icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:block hidden w-[2vw] h-[2vw]"
                    viewBox="0 0 64 64"
                    stroke-width="3"
                    stroke="currentColor"
                    fill="none"
                >
                    <circle cx="27.31" cy="25.74" r="18.1" />
                    <line x1="39.58" y1="39.04" x2="56.14" y2="57" />
                </svg>
            </a>
            {/* hamburger menu icon */}
            <div className="hover:shadow-md p-[2vw] md:p-[1vw] rounded-md">
                <svg
                    className="lg:hidden w-[5vw] h-[5vw]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    stroke-width="3"
                    stroke="currentColor"
                    fill="none"
                >
                    <line x1="7.68" y1="32" x2="56.32" y2="32" />
                    <line x1="7.68" y1="15.97" x2="56.32" y2="15.97" />
                    <line x1="7.68" y1="48.03" x2="56.32" y2="48.03" />
                </svg>
            </div>
            {/* close menu icon */}
            <svg
                className="hidden w-[5vw] h-[5vw]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
            >
                <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
                <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
            </svg>
        </nav>
    )
}

export default Navbar
