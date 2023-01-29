import React, { FC } from 'react'

export const Heading = () => (
    <div className="mb-8 w-[70%] h-auto">
        <h1 className="text-4xl font-semibold capitalize font-heading text-black-900">
            <span className="text-2xl italic font-light">your next</span>{' '}
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
