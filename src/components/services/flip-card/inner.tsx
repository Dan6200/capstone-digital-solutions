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
            className={
                'flip-card-inner' +
                ((flipA && ' flipA') || '') +
                ((flipB && ' flipB') || '')
            }
            style={{}}
        >
            <Front service={service} />
            <Back service={service} index={index} />
        </div>
    )
}
