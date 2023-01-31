import React, { FC } from 'react'

const paragraphs = [
    `
            We are an Abuja based IT agency, specializing in creating digital
            products to help showcase your business or as the basis of your
            business. 			`,
    `
		Our mission is to provide innovative and effective web design and digital marketing solutions that help our clients achieve their business goals and enhance their online presence. We strive to create visually stunning websites that are user-friendly, responsive, and optimized for search engines; create digital marketing campaigns that actually convert to real paying customers, while maintaining the highest standards of customer service and satisfaction. 	`,
    `
	We are determined to make a lasting impact in our industry by
            delivering the best possible products and service on time, every
            time.  `,
    `
            We absolutely look forward to working with you and your
            business wherever it is in the world and take it to new heights.
			`,
]

export const MissionStatement: FC = () => (
    <section className="max-w-2xl w-[50%] h-[1024px] p-2 mx-auto mb-64 overflow-visible ">
        <div
            style={{
                shapeOutside: `polygon(0px 0px, 70.82% -6px, 30.05% 8.08%, 14.65% 17.20%, 6% 32.6%, 0px 50%, 6% 65.6%, 23.4% 82.7%, 50% 94%, 98% 100%, 1px 99.9%)`,
                float: 'left',
            }}
            className="w-[50%] h-[1024px] "
        ></div>
        <div
            style={{
                shapeOutside: `polygon(
				    2% 0%,
					    100% 0%,
						    100% 100%,
					    2% 100%,
						    50% 94%,
					    76.6% 82.7%,
						    94% 65.6%,
					    100% 50%,
						    94% 32.6%,
					    76.6% 17.3%,
						    50% 6%
					    )`,
                float: 'right',
            }}
            className="w-[50%] h-[1024px] "
        ></div>
        <div className="my-[15%]">
            <h3 className="w-64 mx-auto mb-16 text-xl italic font-light text-center capitalize border-b-2 border-primary text-black-900 font-heading">
                what we do
            </h3>
            {paragraphs.map((paragraph) => (
                <p className="mb-8 italic text-center break-words text-black-800 text-md font-paragraph">
                    {paragraph}
                </p>
            ))}
        </div>
    </section>
)
