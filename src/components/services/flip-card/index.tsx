import React, { useEffect, useRef, useState } from 'react'
import { FlipCardInner } from './inner'

export const FlipCard = ({ service }: { service: any }) => {
    const [flip, setFlip] = useState(false)
    const card = useRef()

    const toggleFlip = () => {
        setFlip(!flip)
    }

    // TODO: add scroll effect
    const scrollHandler = () => {
        const top = card.current && card.current.getBoundingClientRect().top
        const bottom =
            card.current && card.current.getBoundingClientRect().bottom
        const height = window.screen.height
        const width = window.screen.width
        if (width > 1028) return
        if (
            bottom &&
            top &&
            top >= 0 &&
            bottom >= 0 &&
            bottom <= height &&
            top <= height
        ) {
            setFlip(true)
        } else {
            setFlip(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])
    return (
        <div
            ref={card}
            onClick={toggleFlip}
            className="flip-card mx-auto w-full h-[100vw] lg:h-[40vw] md:h-[60vw] sm:h-[80vw]"
            style={{
                perspective: '1000px',
                backgroundColor: 'transparent',
            }}
        >
            <FlipCardInner flip={flip} service={service} />
        </div>
    )
}
