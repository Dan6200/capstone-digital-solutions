//cspell:ignore Topbar
import React from 'react'
import { FlatMenu } from './menu/flat'
import { VertMenu } from './menu/vert'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full h-fit">
            <FlatMenu />
            <VertMenu />
        </nav>
    )
}

export default Navbar
