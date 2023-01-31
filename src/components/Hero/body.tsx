import React, { FC } from 'react'
import { Buttons } from './buttons'

export let Body: FC = () => (
    <div className="w-[80%]">
        <p className="pb-8 mb-8 text-md font-paragraph text-black-800">
            Expand your business by using our digital services.
        </p>
        <Buttons />
    </div>
)
