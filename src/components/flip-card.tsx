import React, { useState } from 'react'

export const FlipCard = ({ service }) => {
    const [flip, setFlip] = useState(false)

    const toggleFlip = () => {
        setFlip(!flip)
    }
    return (
        <div
            className="flip-card mx-auto w-full h-[100vw]"
            style={{
                perspective: '1000px',
                backgroundColor: 'transparent',
            }}
        >
            <div
                onClick={toggleFlip}
                className="flip-card-inner"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform .8s',
                    transformStyle: 'preserve-3d',
                    ...(flip ? { transform: 'rotateY(-180deg)' } : null),
                }}
            >
                <div
                    className="absolute flex flex-col justify-center w-full h-full mx-auto border-2 shadow-2xl border-tertiary text-tertiary shadow-primary bg-gradient-to-tl to-white via-sky-50 from-primary"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                >
                    <h4 className="w-[80%] mx-auto h-auto text-5xl font-medium text-center capitalize font-heading">
                        {service.h}
                    </h4>
                </div>
                <div
                    style={{
                        transform: 'rotateY(-180deg)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="absolute flex flex-col justify-center w-full h-full mx-auto text-white border-2 border-white shadow-2xl shadow-secondary bg-gradient-to-br from-black-900 to-secondary"
                >
                    <p className="w-[80%] mx-auto  h-auto text-3xl text-center font-paragraph">
                        {service.p}
                    </p>
                </div>
            </div>
        </div>
    )
}
