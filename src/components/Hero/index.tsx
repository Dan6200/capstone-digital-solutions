// cspell:ignore semibold
import React, { FC } from 'react'
import { Body } from './body'
import { Heading } from './heading'
import { HeroImage } from './image'

const Hero: FC = () => (
    <div className="pt-[35vw] sm:pt-[25vw] md:pt-[15vw] lg:pt-[10vw] px-[5%] h-auto w-full items-center">
        <div className="flex justify-between md:gap-[5vw] md:flex-row lg:mb-[5vw] mb-[10vw] h-[90vw] sm:h-[80vw] md:h-[30vw] flex-col-reverse items-center">
            <Heading />
            <HeroImage />
        </div>
        <Body />
    </div>
)

export default Hero
