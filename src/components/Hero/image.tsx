import React, { FC } from 'react'
import Image from 'next/image'
import heroImg from '../../images/Hero Image.png'

export let HeroImage: FC = () => (
    <div className="sm:flex items-center justify-end w-[40%] sm:w-[30%] md:w-[25%] lg:w-[20%]">
        <Image
            className="object-cover w-full h-auto rounded-full"
            src={heroImg}
            alt=""
        />
    </div>
)
