import React, { FC } from 'react'

let Services: string[] = [
    'brand and logo design',
    'web design',
    'software development',
    'search engine optimization',
    'search engine marketing',
    'hosting & maintenance',
]

// cspell:ignore semibold
const ServiceSection: FC = () => {
    return (
        <section className="w-auto mx-auto">
            <h3 className="content-center block w-64 mx-auto my-16 font-semibold text-center capitalize text-l">
                Our services
            </h3>
            <div className="flex flex-wrap justify-between mx-auto w-[800px] h-[256px]">
                {Services.map((service) => (
                    <div className="w-64 p-8 mb-8 border border-blue-200">
                        <h4 className="text-center capitalize">{service}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceSection
