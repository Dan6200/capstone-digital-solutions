import React, { FC } from 'react'
import { Buttons } from './buttons'

export let Body: FC = () => (
    <div className="w-full">
        <p className="text-center md:text-left lg:mb-[5vw] md:mb-[7vw] mb-[10vw] lg:text-lg xl:text-md md:text-xl sm:text-2xl text-3xl font-paragraph text-black-800">
            Expand your business by using our digital services.
        </p>
        <Buttons />
    </div>
)
