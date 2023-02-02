//cspell:ignore semibold
import React, { FC } from 'react'

const FooterBody: FC = () => {
    return (
        <section className="w-[90vw] sm:w-[80vw] md:w-[90vw] mx-auto mb-[40vw] lg:mb-[15vw] sm:mb-[30vw] text-center md:text-left">
            <h4 className="mb-[10vw] md:mb-[8vw] lg:mb-[6vw] xl:mb-[4vw] text-5xl font-semibold capitalize sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl font-heading">
                let us bring your business online
            </h4>
            <p className="mb-[10vw] md:mb-[8vw] lg:mb-[6vw] xl:mb-[4vw] text-3xl sm:text-2xl md:text-xl lg:text-lg xl:text-md text-black-800 font-paragraph">
                If you are looking for an agency with exceptional quality and a
                client-centric approach, we absolutely look forward to working
                with you and taking your business to new heights!
            </p>
            <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto md:mx-0">
                <div className="flex flex-col sm:text-2xl md:text-xl lg:text-lg xl:text-md sm:flex-row md:gap-0 gap-[5vw] items-center text-center justify-between md:mx-0 mx-auto mb-[10vw] md:mb-[8vw] lg:mb-[6vw] xl:mb-[4vw] text-3xl text-black-800 font-paragraph">
                    <span className="mr-4 text-primary">
                        info@capstone-digital-solutions
                    </span>
                    <span>+2349033117211</span>
                </div>
                <a href="/contact">
                    <button className="shadow-xl text-white font-heading font-semibold leading-[15vw] md:leading-[8vw] lg:leading-[6vw] uppercase rounded-lg xl:w-[70%] sm:w-[80%] w-[90%] active:opacity-75 hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary h-auto text-3xl sm:text-2xl md:text-xl lg:text-lg xl:text-md text-center">
                        click to get started
                    </button>
                </a>
            </div>
        </section>
    )
}

export default FooterBody
