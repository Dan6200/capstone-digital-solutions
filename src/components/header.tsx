//cspell:ignore Topbar
import React, { FC } from 'react'
import Navbar from './navigation'
import Topbar from './top-bar'

const Header: FC = () => (
    <header className="flex flex-col border-b-[1px] sm:mb-[20vw] lg:p-[1vw] sm:p-[2vw] border-black-500 w-full lg:mb-[10vw] mb-[40vw] p-[5vw]">
        <Topbar />
        <Navbar />
    </header>
)

export default Header
