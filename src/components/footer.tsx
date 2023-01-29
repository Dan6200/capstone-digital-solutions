//cspell:ignore BottomBar
import React, { FC } from 'react'
import BottomBar from './bottom-bar'
import FooterBody from './footer-body'

const Footer: FC = () => (
    <footer className="w-full px-16 py-4">
        <FooterBody />
        <BottomBar />
    </footer>
)

export default Footer
