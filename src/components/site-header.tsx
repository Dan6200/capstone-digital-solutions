//cspell:ignore Topbar
import React, { FC } from 'react'
import Navbar from './navigation'
import Topbar from './top-bar'

const Header: FC = () => (
    <header className="w-full px-16 py-4">
        <Topbar />
        <Navbar />
    </header>
)

export default Header
