// cspell:ignore semibold
import React, { FC } from 'react'
import { Body } from './body'
import { Heading } from './heading'
import { Image } from './image'

const Hero: FC = () => (
    <div className="px-[5%] h-auto w-full items-center mb-64">
        <div className="flex justify-between">
            <Heading />
            <Image />
        </div>
        <Body />
    </div>
)

export default Hero
