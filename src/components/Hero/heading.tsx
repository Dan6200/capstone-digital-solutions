import React, { FC } from 'react'

export const Heading = () => (
    <div className="mb-8 w-[70%] h-auto">
        <h1 className="font-heading text-black-900 text-4xl font-semibold capitalize">
            <span className="text-2xl font-light italic">your next</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary">
                web design
            </span>{' '}
            and{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
                digital marketing
            </span>{' '}
            agency
        </h1>
    </div>
)
