import React from 'react'
import { Back } from './back'
import { Front } from './front'

export const FlipCardInner = ({
    flip,
    service,
}: {
    flip: boolean
    service: any
}) => {
    return (
        <div
            className="flip-card-inner"
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                transition: 'transform 2s',
                transformStyle: 'preserve-3d',
                ...(flip ? { transform: 'rotateY(-180deg)' } : null),
            }}
        >
            <Front service={service} />
            <Back service={service} />
        </div>
    )
}
