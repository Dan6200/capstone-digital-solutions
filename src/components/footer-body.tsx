//cspell:ignore semibold
import React, { FC } from 'react'

const FooterBody: FC = () => {
    return (
        <section className="w-[90vw] sm:w-[80vw] mx-auto mb-[40vw] sm:mb-[30vw] text-center md:text-left">
            <h4 className="mb-16 text-5xl font-semibold capitalize sm:text-4xl md:text-3xl lg:text-2xl font-heading">
                let us bring your brand online
            </h4>
            <p className="mb-16 text-3xl sm:text-2xl md:text-xl lg:text-md text-black-800 font-paragraph">
                If you are looking for an agency with exceptional quality and a
                client-centric approach, we absolutely look forward to working
                with you and taking your business to new heights!
            </p>
            <div className="w-full md:w-[80%] lg:w-[60%] mx-auto md:mx-0">
                <div className="flex flex-col sm:text-2xl md:text-xl lg:text-md sm:flex-row md:gap-0 gap-[5vw] items-center text-center justify-between md:mx-0 mx-auto mb-[10vw] text-3xl text-black-800 font-paragraph">
                    <span className="mr-4 text-primary">
                        info@capstone-digital-solutions
                    </span>
                    <span>+2349033117211</span>
                </div>
                <a href="/contact">
                    <button className="shadow-xl text-white font-heading font-semibold leading-[15vw] md:leading-[8vw] lg:leading-[6vw] uppercase rounded-lg sm:w-[80%] w-[90%] active:opacity-75 hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary h-auto text-3xl sm:text-2xl md:text-xl lg:text-md text-center">
                        click to get started
                    </button>
                </a>
            </div>
        </section>
    )
}

export default FooterBody
