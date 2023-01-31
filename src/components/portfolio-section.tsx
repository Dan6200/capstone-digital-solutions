import React, { FC } from 'react'
import SlideShow from './slideshow'

// cspell:ignore semibold
const PortfolioSection: FC = () => {
    return (
        <section className="w-auto mx-auto">
            <div className="w-[60%] mx-auto">
                <h3 className="block w-64 mx-auto my-16 text-xl italic font-light text-center capitalize border-b-2 font-heading border-primary">
                    Our Past Work
                </h3>
                <h6 className="mx-auto text-sm font-semibold text-center uppercase text-black-800 font-heading">
                    Take a Look at these unique & creative designs for your
                    future website
                </h6>
            </div>
            <SlideShow />
        </section>
    )
}

export default PortfolioSection
