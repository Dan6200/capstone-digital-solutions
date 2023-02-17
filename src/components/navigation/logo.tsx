import React from 'react'
import logo from '../../images/capstone-logo-dark.svg'
import Image from 'next/image'

// TODO: import instead of copying svg code
export const Logo = () => (
    <Image className="w-full" src={logo} alt="Capstone logo" />
)
