import React, { FC } from 'react'

const paragraphs = [
    `
            We are an Abuja based IT agency, specializing in creating digital
            products to help showcase your business or as the basis of your
            business. We are driven to make a lasting impact in our industry by
            delivering the best possible products and service on time, every
            time.
			`,
    `
            We are open to working with clients around the world and we believe
            that delivering good quality work should not be limited to your
            location.
			`,
    `
            We absolutely look forward to working with you and taking your
            business to new heights.
			`,
]

export const MissionStatement: FC = () => (
    <section>
        <h3 className="text-black-900 font-bold capitalize font-text-xl">
            what we do
        </h3>
        {paragraphs.map((paragraph) => (
            <p className="text-black-800 text-m">{paragraph}</p>
        ))}
    </section>
)
