// cspell:ignore semibold
import React, { FC } from 'react'
import { Body } from './body'
import { Heading } from './heading'
import { Image } from './image'

const Hero: FC = () => (
    <div className="px-[5%] h-auto w-full items-center md:mb-[30vw] lg:mb-[20vw] mb-[40vw]">
        <div className="flex justify-between md:gap-[5vw] md:flex-row lg:mb-[5vw] mb-[10vw] h-[90vw] sm:h-[80vw] md:h-[30vw] flex-col-reverse items-center">
            <Heading />
            <Image />
        </div>
        <Body />
    </div>
)

export default Hero
