import React, { FC } from 'react'

const shapeStyling =
    'w-[30%] sm:w-[50%] sm:h-[120vw] xl:h-[60vw] lg:h-[80vw] md:h-[90vw] h-[200vw]'
const paragraphs = [
    `
            We are an agency that specializes in creating digital
            products and services that are necessary for businesses to thrive in this digital economy.`,
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
    <section className="pt-[35vw] sm:pt-[25vw] md:pt-[15vw] lg:pt-[10vw] w-[90%] lg:w-[50%] xl:w-[40%] md:w-[70%] mx-auto overflow-visible">
        <div
            style={{
                shapeOutside: `polygon(0px 0px, 86.77% -1px, 59.88% 6.08%, 35.23% 14.04%, 6% 32.6%, 0px 50%, 6% 65.6%, 23.4% 82.7%, 50% 94%, 98% 100%, 1px 99.9%)`,
                float: 'left',
            }}
            className={shapeStyling}
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
            className={shapeStyling}
        ></div>
        <div className="text-3xl lg:text-lg xl:text-md md:text-xl sm:text-2xl">
            <h3 className="pt-[10vw] md:pt-[5vw] text-4xl md:text-3xl lg:text-2xl xl:text-xl mb-[4vw] mx-auto italic w-[45%] font-light text-center capitalize border-b-2 border-primary text-black-900 font-heading">
                what we do
            </h3>
            {paragraphs.map((paragraph) => (
                <p className="text-center break-words text-black-800 font-paragraph">
                    {paragraph}
                </p>
            ))}
        </div>
    </section>
)
