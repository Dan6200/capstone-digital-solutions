import React, { useState } from 'react'

const links = ['about', 'contact', 'services', 'portfolio', 'articles'],
    menuBtnStyling =
        'text-black-800 self-end w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] m-[2vw] md:m-[1vw]',
    inputStyle =
        'font-paragraph focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md border-[1px] w-[70%] bg-black-400 text-black-700 border-black-500 capitalize p-[1vw] lg:p-[1vw]'

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
                {/* search icon */}
                <div className="flex items-center border-t-[1pt] justify-center p-[1vw] w-full border-black-500">
                    <input
                        name="search box"
                        type="text"
                        className={inputStyle}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[6vw] md:w-[4vw] text-black-800 hover:text-primary md:m-[1vw] m-[2vw]"
                        viewBox="0 0 64 64"
                        stroke-width="3"
                        stroke="currentColor"
                        fill="none"
                    >
                        <circle cx="27.31" cy="25.74" r="18.1" />
                        <line x1="39.58" y1="39.04" x2="56.14" y2="57" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
