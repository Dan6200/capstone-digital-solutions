import React, { FC } from 'react'

export const Heading = () => (
    <div className="w-full lg:w-[70%] sm:w-[80%] h-auto">
        <h1 className="text-6xl font-semibold text-center capitalize md:text-left md:text-4xl sm:text-5xl font-heading text-black-900">
            <span className="text-4xl italic font-light md:text-2xl sm:text-3xl">
                your next
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary">
                web design
            </span>{' '}
            and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                digital marketing
            </span>{' '}
            agency
        </h1>
    </div>
)
