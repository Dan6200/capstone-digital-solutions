// cspell:ignore semibold
import React, { FC } from 'react'
import heroImg from '../../images/pexels-christina-morillo-1181498.jpg'

const Hero: FC = () => (
    <div className="px-[5%] h-auto w-full items-center my-[10%]">
        <div className="flex justify-between">
            <div className="h-auto w-[70%]">
                <h1 className="font-heading text-black-900 mb-8 text-4xl font-semibold capitalize">
                    <span className="text-2xl font-light italic">
                        your next
                    </span>{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary">
                        web design
                    </span>{' '}
                    and{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
                        digital marketing
                    </span>{' '}
                    agency
                </h1>
            </div>
            <div className="flex justify-end w-[30%]">
                <img
                    className="border-2 border-primary rounded-full object-cover w-64 h-64"
                    src={heroImg}
                    alt=""
                />
            </div>
            <div className="w-[80%]">
                <p className="text-md font-paragraph mb-16 text-black-800 py-8">
                    Expand your business by using our digital services.
                </p>
                <div className="flex h-auto">
                    <div className="rounded-lg w-64 p-[2pt] h-auto bg-gradient-to-br from-primary inline-block to-secondary mr-32">
                        <div className="rounded-lg w-full h-full bg-white flex align-middle">
                            <button className="font-bold text-md font-heading uppercase bg-clip-text bg-gradient-to-br from-primary to-secondary text-transparent rounded-lg w-full h-auto leading-[60px]">
                                learn more
                            </button>
                        </div>
                    </div>
                    <button className="text-white font-heading font-bold leading-[64px] uppercase rounded-lg w-64 bg-gradient-to-br from-secondary to-primary inline h-auto text-md text-center">
                        get started
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default Hero
