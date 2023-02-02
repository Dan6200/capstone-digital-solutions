import React, { useState } from 'react'
import { SearchBar } from './search-bar'

const links = ['about', 'contact', 'services', 'portfolio', 'articles'],
    menuBtnStyling =
        'text-black-800 self-end w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] m-[2vw] md:m-[1vw]'

export const VertMenu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <div className="lg:hidden">
                {/* hamburger menu icon */}
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
                className="hidden absolute md:top-[17vw] top-[25vw] right-[5vw] md:right-[2vw] flex-col border-[1pt] hover:cursor-pointer bg-white shadow-sm w-[70vw] md:w-[50vw] hover:shadow-md rounded-md md:rounded-lg"
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
                            className="w-full no-underline capitalize border-t-[1pt] md:px-[3vw] px-[5vw] md:py-[1vw] py-[2vw] z-10 block active:text-primary text-black-800 font-paragraph md:text-xl text-3xl"
                            href={'/' + link}
                        >
                            {link}
                        </a>
                    </div>
                ))}
                <SearchBar />
            </div>
        </div>
    )
}
