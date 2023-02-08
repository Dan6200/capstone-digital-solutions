import React, { FC } from 'react'
import { services } from './data'
import { FlipCard } from './flip-card'

// cspell:ignore semibold
const Services: FC = () => {
    return (
        <section
            id="services"
            className="w-auto mx-auto mb-[60vw] md:mb-[40vw] lg:mb-[30vw]"
        >
            <style>{`
					.flip-card:hover .flip-card-inner {
						transform: rotateY(-180deg);
					}
				`}</style>
            <h3 className="content-center block w-[40vw] sm:w-[30vw] mx-auto lg:mb-[10vw] mb-[20vw] text-5xl lg:text-2xl md:text-3xl sm:text-4xl italic font-light text-center capitalize border-b-2 border-primary font-heading">
                Our services
            </h3>
            <div className="mx-auto w-[80%] md:w-[80%] sm:w-[60%] grid gap-[20vw] lg:gap-[5vw] md:gap-[10vw] sm:gap-[15vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <FlipCard service={service} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Services
