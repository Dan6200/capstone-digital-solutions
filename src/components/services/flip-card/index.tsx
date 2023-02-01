import React, { useEffect, useRef, useState } from 'react'
import { FlipCardInner } from './inner'

export const FlipCard = ({ service }: { service: any }) => {
    const [flip, setFlip] = useState(false)
    const card = useRef()

    const toggleFlip = () => {
        setFlip(!flip)
    }
    /*
	 TODO: add scroll effect
	useEffect(() => ({
		window.addEventListener('scroll')
	}) */
    return (
        <div
            ref={card}
            onClick={toggleFlip}
            className="flip-card mx-auto w-full h-[100vw] sm:h-[80vw]"
            style={{
                perspective: '1000px',
                backgroundColor: 'transparent',
            }}
        >
            <FlipCardInner flip={flip} service={service} />
        </div>
    )
}
