import React from 'react'

export const Front = ({ service }) => {
    return (
        <div
            className="absolute flex flex-col justify-center w-full h-full mx-auto border-2 shadow-2xl border-tertiary text-tertiary shadow-secondary bg-gradient-to-tl to-white via-sky-50 from-primary"
            style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
        >
            <h4 className="w-[80%] mx-auto h-auto text-5xl sm:text-4xl font-medium text-center capitalize font-heading">
                {service.h}
            </h4>
        </div>
    )
}
