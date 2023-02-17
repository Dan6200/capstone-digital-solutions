import React from 'react'
import Image from 'next/image'

// TODO: import instead of copying svg code
export const Logo = () => (
    <Image
        className="w-full"
        src="/capstone-logo-dark.svg"
        width={500}
        height={500}
        priority
        alt="Capstone logo"
    />
)
