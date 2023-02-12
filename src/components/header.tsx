//cspell:ignore Topbar
import React, { FC, useLayoutEffect, useRef, useState } from 'react'
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

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])

    let hideHeader = () => {
        console.log('runs')
        let top = header.current && header.current.offsetTop
        if (top === 0) {
            setShowAtTop(true)
        } else setShowAtTop(false)
    }

    useLayoutEffect(() => {
        hideHeader()
    }, [])

    return (
        <header
            ref={header}
            className="flex invisible opacity-0 sticky header top-0 z-10 flex-col lg:py-[1vw] sm:py-[2vw] border-black-500 w-full p-[5vw]"
            style={{
                ...(showAtTop
                    ? {
                          visibility: 'visible',
                          opacity: 100,
                          backgroundColor: 'rgb(255,252,247,0.75)',
                      }
                    : null),
                ...(scrollStyle
                    ? {
                          visibility: 'visible',
                          opacity: 100,
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
