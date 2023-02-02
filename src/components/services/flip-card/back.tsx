import React from 'react'

export const Back = ({ service }: { service: any }) => {
    return (
        <div
            style={{
                transform: 'rotateY(-180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute flex flex-col justify-center w-full h-full mx-auto text-white border-2 border-white shadow-card-back bg-gradient-to-br from-black-900 to-secondary"
        >
            <p className="w-[80%] mx-auto  h-auto text-3xl sm:text-2xl md:text-xl lg:text-md text-center font-paragraph">
                {service.p}
            </p>
        </div>
    )
}
