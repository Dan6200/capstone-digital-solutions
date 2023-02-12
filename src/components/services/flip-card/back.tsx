import { Link } from 'gatsby'
import React from 'react'

export const Back = ({ service, index }: { service: any; index: number }) => {
    return (
        <div
            style={{
                transform: 'rotateY(-180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute flex flex-col justify-center w-full h-full mx-auto text-white border-2 border-white shadow-card-back bg-gradient-to-br from-black-900 to-secondary"
        >
            <div className="flex flex-col justify-between w-[80%] h-[60%] mx-auto mt-[10%]">
                <p className="text-3xl text-center sm:text-2xl md:text-xl lg:text-md font-paragraph">
                    {service.p}
                </p>
                <Link
                    className="self-end w-[50%] justify-center items-center flex text-right hover:text-tertiary text-white font-paragraph xl:text-xs no-underline capitalize text-2xl sm:text-xl md:text-lg lg:text-sm"
                    to={'/services/#' + service.h.replaceAll(' ', '-')}
                >
                    <p className="inline">Learn more</p>
                    <svg
                        className="inline w-[20%] ml-[10%]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        stroke-width="3"
                        stroke="currentColor"
                        fill="none"
                    >
                        <line x1="55.78" y1="32.63" x2="10.33" y2="32.63" />
                        <polyline points="38.55 14.63 55.78 32.79 38.55 49.32" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
