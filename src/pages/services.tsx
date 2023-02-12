// cspell:disable
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { content } from '../data/services/content'

const Services: React.FC = () => (
    <div className="bg-white">
        <Header />
        {content.map((subcontent) => (
            <div
                id={subcontent.heading.split(' ')[0]}
                className="w-[90%] mx-auto text-3xl text-left  lg:text-lg xl:text-md md:text-xl sm:text-2xl pb-[20vw] pt-[5vw] sm:pb-[10vw] sm:pt-[2vw] md:pb-[5vw]"
            >
                <h3 className="text-4xl md:text-3xl lg:text-2xl xl:text-xl mb-[4vw] italic w-[90%] font-light capitalize border-b-2 border-primary text-black-900 font-heading">
                    {subcontent.heading}
                </h3>
                {subcontent.body.map((paragraph) => (
                    <p className="mb-[4vw] lg:mb-[2vw] break-words text-black-800 font-paragraph">
                        {paragraph}
                    </p>
                ))}
            </div>
        ))}
        <Footer />
    </div>
)

export default Services
