import React, { FC } from 'react'
import Images from '../images'
import Image from 'next/image'
// cspell:ignore semibold

const SlideShow: FC = () => {
    return (
        <>
            {Images.map((image, index) => (
                // TODO: create a selected state where each number represenst the project being done
                <>
                    <div className="flex items-center justify-between mx-auto gap-4 w-fit">
                        <div className="w-16 h-16 p-4 my-8 mr-2 text-center border-4 rounded-full border-secondary">
                            {index + 1}
                        </div>
                        <div>
                            <svg
                                width="37"
                                height="42"
                                viewBox="0 0 37 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.2478 20.9155L0.247803 41.7001L0.247803 0.130919L36.2478 20.9155Z"
                                    fill="#24282A"
                                    fill-opacity="0.75"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full px-16 mx-auto mb-64 bg-primary">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="relative w-full max-w-6xl mx-auto top-16"
                        />
                    </div>
                </>
            ))}
        </>
    )
}

export default SlideShow
