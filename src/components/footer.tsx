//cspell:ignore BottomBar
import React, { FC } from 'react'
import BottomBar from './bottom-bar'
import FooterBody from './footer-body'

const Footer: FC = () => (
    <footer className="container w-full py-4 px-16">
        <FooterBody />
        <BottomBar />
    </footer>
)

export default Footer
