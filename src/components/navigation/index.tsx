//cspell:ignore Topbar
import React, { FC } from 'react'
import { FlatMenu } from './menu/flat'
import { VertMenu } from './menu/vert'

const Navbar: FC = () => {
    return (
        <nav className="flex justify-between items-center w-full md:h-[5vw] h-[10vw]">
            <FlatMenu />
            <VertMenu />
        </nav>
    )
}

export default Navbar
