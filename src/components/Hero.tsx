import React, { FC } from 'react'
import heroImg from '../images/pexels-christina-morillo-1181498.jpg'

const Hero: FC = () => {
    return (
        <div className="flex items-center mx-auto">
            <div className="">
                <h1 className="text-4xl font-semibold capitalize">
                    your next web design and digital marketing agency
                </h1>
                <p>Expand your business by using our digital services.</p>
                <button className="p-2 mr-8 border">learn more</button>
                <button className="p-2 mr-8 border">get started</button>
            </div>
            <div className="">
                <img className="w-64" src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero
