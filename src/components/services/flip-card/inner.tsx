import React from 'react'
import { Back } from './back'
import { Front } from './front'

export const FlipCardInner = ({
    flipA,
    flipB,
    service,
    index,
}: {
    flipA: boolean
    flipB: boolean
    service: any
    index: number
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
                ...(flipA
                    ? {
                          transform: 'rotateY(-180deg)',
                          transitionDelay: '1.5s',
                      }
                    : null),
                ...(flipB
                    ? {
                          transform: 'rotateY(0deg)',
                      }
                    : null),
            }}
        >
            <Front service={service} />
            <Back service={service} index={index} />
        </div>
    )
}
