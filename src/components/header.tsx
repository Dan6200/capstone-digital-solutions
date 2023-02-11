//cspell:ignore Topbar
import React, { FC, useEffect, useRef, useState } from 'react'
import Navbar from './navigation'
import Topbar from './top-bar'

const Header: FC = () => {
    let [scrollStyle, setScrollStyle] = useState(false)
    let [showAtTop, setShowAtTop] = useState(true)
    let header = useRef()
    let top1: number

    let scrollHandler = () => {
        let top = header.current && header.current.offsetTop
        if (top === 0) {
            setShowAtTop(true)
        } else setShowAtTop(false)
        if (top1 && top !== 0 && top1 > top) {
            setScrollStyle(true)
        } else setScrollStyle(false)
        top1 = top
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])

    return (
        <header
            ref={header}
            className="flex sticky header top-0 z-10 opacity-0 flex-col sm:mb-[20vw] lg:py-[1vw] sm:py-[2vw] border-black-500 w-full lg:mb-[10vw] mb-[40vw] p-[5vw]"
            style={{
                ...(showAtTop
                    ? {
                          backgroundColor: 'rgb(255,252,247,0.75)',
                          opacity: 1,
                      }
                    : null),
                ...(scrollStyle
                    ? {
                          opacity: 1,
                          boxShadow: `0px 0px 2px 2px rgba(0,0,0,0.1)`,
                          WebkitBoxShadow: '0px 0px 2px 3px rgba(0,0,0,0.1)',
                          MozBoxShadow: '0px 0px 2px 3px rgba(0,0,0,0.1)',
                          backgroundColor: 'rgb(255,252,247,0.75)',
                      }
                    : null),
            }}
        >
            <Topbar />
            <Navbar />
        </header>
    )
}

export default Header
