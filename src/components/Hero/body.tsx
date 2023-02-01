import React, { FC } from 'react'
import { Buttons } from './buttons'

export let Body: FC = () => (
    <div className="w-full">
        <p className="text-center mb-[10vw] sm:text-2xl text-3xl font-paragraph text-black-800">
            Expand your business by using our digital services.
        </p>
        <Buttons />
    </div>
)
