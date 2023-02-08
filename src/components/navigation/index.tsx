//cspell:ignore Topbar
import React, { FC } from 'react'
import { FlatMenu } from './menu/flat'
import { VertMenu } from './menu/vert'

const Navbar: FC = () => {
    return (
        <nav className="flex items-center justify-between w-full h-fit">
            <FlatMenu />
            <VertMenu />
        </nav>
    )
}

export default Navbar
