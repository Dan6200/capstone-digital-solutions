//cspell:ignore Topbar
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Navbar from './navigation'
import Topbar from './top-bar'

let ranAlready = false

const Header: FC = () => {
    let [showHead, setShowHead] = useState(false)
    let [showAtTop, setShowAtTop] = useState(true)
    let header = useRef()

    // fix this
    let showHeader = () => {
        console.log('runs', ranAlready)
        if (showAtTop) return
        setShowHead(true)
        if (ranAlready) return
        ranAlready = true
        timer = setTimeout(() => {
            setShowHead(false)
            ranAlready = false
        }, 500)
    }

    useEffect(() => {
        window.addEventListener('mousemove', showHeader, true)
        return () => {
            window.removeEventListener('mousemove', showHeader, true)
        }
    }, [])

    let showHeaderAtTop = () => {
        let top = header.current && header.current.offsetTop
        if (top === 0) {
            setShowAtTop(true)
            setShowHead(false)
        } else setShowAtTop(false)
    }

    // for when page loads
    useLayoutEffect(() => {
        showHeaderAtTop()
    }, [])

    // for when scrolling
    useLayoutEffect(() => {
        window.addEventListener('scroll', showHeaderAtTop, true)
        return () => {
            window.removeEventListener('scroll', showHeaderAtTop, true)
        }
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
                ...(showHead
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
