import React, { FC } from 'react'
import SlideShow from './slideshow'

// cspell:ignore semibold
const PortfolioSection: FC = () => {
    return (
        <section className="w-auto mx-auto">
            <h3 className="content-center block w-64 mx-auto my-16 font-semibold text-center capitalize text-l">
                Samples
            </h3>
            <SlideShow />
        </section>
    )
}

export default PortfolioSection
