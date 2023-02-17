//cspell:ignore Topbar
import Link from 'next/link'
import React, { FC } from 'react'
import { Logo } from '../logo'
import links from './links'

export const FlatMenu: FC = () => {
    return (
        <div className="flex justify-between items-end w-full xl:h-fit md:h-[5vw] h-[10vw]">
            <Link
                className="lg:w-[30vw] w-[70vw] md:w-[50vw] block"
                href="/"
                shallow
            >
                <Logo />
            </Link>
            <div className="hidden lg:flex gap-[5%] w-[50%] justify-end">
                {links.map((link) => (
                    <Link
                        key={link}
                        className="hover:text-primary mr-[5%] text-black-800 font-paragraph text-md xl:text-sm no-underline capitalize"
                        href={'/' + link}
                        shallow
                    >
                        {link}
                    </Link>
                ))}
                <Link
                    href="#"
                    className="w-[16pt] text-black-800 font-paragraph hover:text-primary"
                    shallow
                >
                    {/* search icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden w-[1.5vw] lg:block"
                        viewBox="0 0 64 64"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                    >
                        <circle cx="27.31" cy="25.74" r="18.1" />
                        <line x1="39.58" y1="39.04" x2="56.14" y2="57" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
