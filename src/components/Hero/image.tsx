import React, { FC } from 'react'
import Image from 'next/image'

export let HeroImage: FC = () => (
    <div className="sm:flex items-center justify-end w-[40%] sm:w-[30%] md:w-[25%] lg:w-[20%]">
        <Image
            className="object-cover w-full h-auto rounded-full"
            src="/Hero Image.png"
            width={500}
            height={500}
            priority
            alt="Happy customer looking at website"
        />
    </div>
)
