import React, { FC } from 'react'
import { services } from './data'
import { FlipCard } from './flip-card'

// cspell:ignore semibold
const Services: FC = () => {
    return (
        <section id="services" className="w-auto mx-auto mb-[60vw]">
            <style>{`
					.flip-card:hover .flip-card-inner {
						transform: rotateY(-180deg);
					}
				`}</style>
            <h3 className="content-center block w-[40vw] sm:w-[30vw] mx-auto mb-[20vw] text-5xl sm:text-4xl italic font-light text-center capitalize border-b-2 border-primary font-heading">
                Our services
            </h3>
            <div className="w-[80%] sm:w-[60%] h-auto grid gap-[20vw] sm:gap-[15vw] grid-cols-1 mx-auto ">
                {services.map((service) => (
                    <FlipCard service={service} />
                ))}
            </div>
        </section>
    )
}

export default Services
