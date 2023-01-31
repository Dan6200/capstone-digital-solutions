import React, { FC } from 'react'
import heroImg from '../../images/Hero Image.png'

export let Image: FC = () => (
    <div className="sm:flex items-center justify-end w-[40%] sm:[30%]">
        <img
            className="object-cover w-full h-auto rounded-full"
            src={heroImg}
            alt=""
        />
    </div>
)
