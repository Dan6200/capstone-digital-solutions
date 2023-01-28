// cspell:ignore semibold
import React, { FC } from 'react'
import heroImg from '../images/pexels-christina-morillo-1181498.jpg'

const Hero: FC = () => (
    <div className="container px-16 w-full flex items-center">
        <div className="h-auto">
            <h1 className="text-black-900 py-8 text-7xl font-semibold capitalize">
                your next web design and digital marketing agency
            </h1>
            <p className="text-black-800 py-8">
                Expand your business by using our digital services.
            </p>
            <button className="p-2 mr-8 border">learn more</button>
            <button className="p-2 mr-8 border">get started</button>
        </div>
        <div className="">
            <img className="w-64" src={heroImg} alt="" />
        </div>
    </div>
)

export default Hero
