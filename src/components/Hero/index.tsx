// cspell:ignore semibold
import React, { FC } from 'react'
import { Body } from './body'
import { Heading } from './heading'
import { Image } from './image'

const Hero: FC = () => (
    <div className="px-[5%] h-auto w-full items-center mb-[40vw]">
        <div className="flex justify-between sm:flex-row mb-[10vw] h-[90vw] flex-col-reverse items-center">
            <Heading />
            <Image />
        </div>
        <Body />
    </div>
)

export default Hero
