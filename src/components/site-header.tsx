//cspell:ignore Topbar
import React, { FC } from 'react'
import Navbar from './navigation'
import Topbar from './top-bar'

const Header: FC = () => (
    <header className="border-b-[1px] border-black-500 w-full mb-[8%] px-16 py-2">
        <Topbar />
        <Navbar />
    </header>
)

export default Header
