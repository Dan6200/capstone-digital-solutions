//cspell:ignore Topbar
import React, { FC } from 'react'
import { Logo } from '../logo'

const links = ['about', 'contact', 'services', 'portfolio', 'articles']

export const FlatMenu: FC = () => {
    return (
        <div className="flex justify-between items-end w-full md:h-[5vw] h-[10vw]">
            <a className="lg:w-[30vw] w-[70vw] md:w-[50vw] block" href="/">
                <Logo />
            </a>
            <div className="hidden lg:flex gap-[5%] w-[50%] justify-end">
                {links.map((link) => (
                    <div className="">
                        <a
                            className="hover:text-primary mr-[5%] text-black-800 font-paragraph text-md xl:text-sm no-underline capitalize"
                            href={'/' + link}
                        >
                            {link}
                        </a>
                    </div>
                ))}
                <a
                    href="#"
                    className="w-[16pt] text-black-800 font-paragraph hover:text-primary"
                >
                    {/* search icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden w-full lg:block"
                        viewBox="0 0 64 64"
                        stroke-width="3"
                        stroke="currentColor"
                        fill="none"
                    >
                        <circle cx="27.31" cy="25.74" r="18.1" />
                        <line x1="39.58" y1="39.04" x2="56.14" y2="57" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
