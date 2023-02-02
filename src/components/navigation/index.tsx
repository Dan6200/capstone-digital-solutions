//cspell:ignore Topbar
import React, { FC, useState } from 'react'
import { Logo } from './logo'

const links = ['about', 'contact', 'services', 'portfolio', 'articles']
const menuBtnStyling =
    'text-black-800 self-end w-[16pt] h-[16pt] md:w-[24pt] md:h-[24pt] m-[2vw] md:m-[1vw]'

const Navbar: FC = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }

    return (
        <nav className="flex justify-between items-center w-full md:h-[5vw] h-[10vw]">
            <a className="lg:w-[30vw] w-[70vw] md:w-[50vw]" href="/">
                <Logo />
            </a>
            <div className="flex gap-[5%] w-fit">
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
            <div
                className="hidden"
                style={{
                    ...(showMenu ? null : { display: 'block' }),
                }}
            >
                <svg
                    onClick={toggleMenu}
                    className={menuBtnStyling}
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
            <div
                className="hidden absolute md:top-[17vw] top-[25vw] right-[5vw] md:right-[2vw] flex-col border-[1pt] hover:cursor-pointer bg-white shadow-sm w-[50vw] hover:shadow-md rounded-md md:rounded-lg"
                style={{ ...(showMenu ? { display: 'flex' } : null) }}
            >
                {/* close menu icon */}
                <svg
                    onClick={toggleMenu}
                    className={menuBtnStyling}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    stroke-width="3"
                    stroke="currentColor"
                    fill="none"
                >
                    <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
                    <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
                </svg>
                {links.map((link) => (
                    <div className="">
                        <a
                            className="w-full no-underline capitalize border-t-[1pt] md:p-[1vw] p-[2vw] z-10 block active:text-primary text-black-800 font-paragraph md:text-xl text-3xl"
                            href={'/' + link}
                        >
                            {link}
                        </a>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
