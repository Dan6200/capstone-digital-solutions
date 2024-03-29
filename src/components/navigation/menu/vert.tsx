import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { HeaderContext, HeaderContextType } from '../../header/context'
import links from './links'
import { SearchBar } from './search-bar'

let menuBtnStyling =
    'text-black-800 self-end justify-self flex w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw]'

export const VertMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    let { mouseCancel, touchCancel, setVertMenuShowing }: HeaderContextType =
        useContext(HeaderContext)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
        setVertMenuShowing(!showMenu)
        // cancel debounced function header animation
        mouseCancel()
        touchCancel()
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
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                >
                    <line x1="7.68" y1="32" x2="56.32" y2="32" />
                    <line x1="7.68" y1="15.97" x2="56.32" y2="15.97" />
                    <line x1="7.68" y1="48.03" x2="56.32" y2="48.03" />
                </svg>
            </div>
            <div
                className="hidden absolute top-0 right-0 flex-col border-[1pt] hover:cursor-pointer bg-white shadow-sm w-[100vw] h-[100vh] p-[2vw] justify-start gap-[25vh] hover:shadow-md rounded-md md:rounded-lg"
                style={{ ...(showMenu ? { display: 'flex' } : null) }}
            >
                {/* close menu icon */}
                <svg
                    onClick={toggleMenu}
                    className={menuBtnStyling}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                >
                    <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
                    <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
                </svg>
                <div className="flex flex-col gap-[5vh] justify-center md:text-xl text-3xl">
                    <SearchBar />
                    <Link
                        onClick={() => {
                            setShowMenu(!showMenu)
                        }}
                        className="w-full no-underline capitalize border-b-[1pt] md:px-[3vw] px-[5vw] md:py-[2vw] py-[3vw] z-10 block active:text-primary text-black-800 font-paragraph "
                        href="/"
                        shallow
                    >
                        home
                    </Link>
                    {links.map((link) => (
                        <Link
                            onClick={() => {
                                setShowMenu(!showMenu)
                            }}
                            key={link}
                            className="w-full no-underline capitalize border-b-[1pt] md:px-[3vw] px-[5vw] md:py-[2vw] py-[3vw] z-10 block active:text-primary text-black-800 font-paragraph "
                            href={'/' + link}
                            shallow
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
