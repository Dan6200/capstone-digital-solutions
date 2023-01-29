import React, { FC } from 'react'
import heroImg from '../../images/pexels-christina-morillo-1181498.jpg'

export let Image: FC = () => (
    <div className="flex items-center justify-end w-[30%]">
        <img
            className="border-2 border-primary rounded-full object-cover w-64 h-64"
            src={heroImg}
            alt=""
        />
    </div>
)
