import React, { FC } from 'react'
import { FlipCard } from './flip-card'

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
        p: 'We use the latest technologies to craft impactful software. We build Web Applications, Mobile Applications, and other custom software solutions.',
    },
    {
        h: 'hosting & maintenance',
        p: 'Let us handle the technical solutions that come with maintaining digital products and a digital presence.',
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
        <section className="w-auto mx-auto mb-[60vw]">
            <style>{`
			.flip-card:hover .flip-card-inner {
				transform: rotateY(-180deg);
			}
				`}</style>
            <h3 className="content-center block w-[40vw] mx-auto mb-[20vw] text-5xl italic font-light text-center capitalize border-b-2 border-primary font-heading">
                Our services
            </h3>
            <div className="w-[80%] h-auto grid gap-[20vw] grid-cols-1 mx-auto">
                {Services.map((service) => (
                    <FlipCard service={service} />
                ))}
            </div>
        </section>
    )
}

export default ServiceSection
