import React, { FC } from 'react'

let Services: object[] = [
    {
        h: 'brand and logo design',
        p: 'We build recognizable branding that reflects your business values',
    },
    {
        h: 'web design',
        p: 'Eye catching unique designs that showcase what is best about your products and/or services.',
    },
    {
        h: 'software development',
        p: 'We use the latest technologies to craft impactful software. Our specialties include Web-App development, Mobile App development, and other custom software solutions.',
    },
    {
        h: 'hosting & maintenance',
        p: 'Let us handle the technical solutions that come with maintaining a digital prescence.',
    },
    {
        h: 'search engine optimization',
        p: 'Get organic growth from Google by improving the quality of your website and its usefulness to your customers',
    },
    {
        h: 'search engine marketing',
        p: 'Capture the eyes of people searching for a product or service that you offer.',
    },
]

// cspell:ignore semibold
const ServiceSection: FC = () => {
    return (
        <section className="w-auto mx-auto">
            <h3 className="content-center block w-64 mx-auto my-16 text-xl italic font-light text-center capitalize font-heading">
                Our services
            </h3>
            <div className="w-[80%] h-auto grid grid-cols-3 mx-auto">
                {Services.map((service) => (
                    <div className="w-full p-8 mx-auto mb-8 text-lg border border-blue-200 h-96">
                        <h4 className="mb-8 font-medium text-center capitalize align-middle font-heading">
                            {service.h}
                        </h4>
                        <p className="text-center text-md font-paragraph">
                            {service.p}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceSection
