//cspell:ignore BottomBar
import React, { FC } from 'react'
import BottomBar from './bottom-bar'
import FooterBody from './footer-body'

const Footer: FC = () => (
    <footer className="w-full px-[5vw] sm:px-[2vw] py-[2vw] mt-[40vw] sm:mt-[30vw] md:mt-[20vw]">
        <FooterBody />
        <BottomBar />
    </footer>
)

export default Footer
