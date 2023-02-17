//cspell:ignore Topbar
import * as _ from 'lodash'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { HeaderContext } from './context'
import Navbar from './navigation'
import Topbar from './top-bar'

const Header: FC = () => {
    let [showHead, setShowHead] = useState(false)
    let [showAtTop, setShowAtTop] = useState(true)
    let header = useRef()
    let [vertMenuShowing, setVertMenuShowing] = useState(false)

    let showHeader = () => {
        let top = header.current && header.current.offsetTop
        if (top === 0) return
        setShowHead(true)
        // to prevent the debounce function from being called
        debouncedFuncMouse()
    }

    let debouncedFuncMouse: _.DebouncedFunc<any> = useCallback(
        _.debounce(
            () => {
                // to prevent the debounce function from running after being called in the last second
                setShowHead(false)
            },
            3000,
            { leading: true }
        ),
        []
    )

    let debouncedFuncTouch: _.DebouncedFunc<any> = useCallback(
        _.debounce(
            () => {
                // to prevent the debounce function from running after being called in the last second
                setShowHead(false)
            },
            1500,
            { leading: true }
        ),
        []
    )

    let showHeaderTouch = () => {
        let top = header.current && header.current.offsetTop
        if (top === 0) return
        setShowHead(true)
        debouncedFuncTouch()
    }

    useEffect(() => {
        window.addEventListener('touchstart', showHeaderTouch, true)
        window.addEventListener('touchmove', showHeaderTouch, true)
        window.addEventListener('touchend', showHeaderTouch, true)
        window.addEventListener('touchcancel', showHeaderTouch, true)
        return () => {
            window.removeEventListener('touchstart', showHeaderTouch, true)
            window.removeEventListener('touchmove', showHeaderTouch, true)
            window.removeEventListener('touchend', showHeaderTouch, true)
            window.removeEventListener('touchcancel', showHeaderTouch, true)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('mousemove', showHeader, true)
        return () => {
            window.removeEventListener('mousemove', showHeader, true)
        }
    }, [])

    let showHeaderAtTop = () => {
        let top = header.current && header.current.offsetTop
        if (top === 0 || vertMenuShowing) {
            setShowAtTop(true)
            setShowHead(false)
        } else setShowAtTop(false)
    }

    // for when page loads
    useEffect(() => {
        showHeaderAtTop()
    }, [])

    // for when scrolling
    useEffect(() => {
        window.addEventListener('scroll', showHeaderAtTop, true)
        return () => {
            window.removeEventListener('scroll', showHeaderAtTop, true)
        }
    }, [])

    return (
        <header
            ref={header}
            className="flex invisible opacity-0 sticky header top-0 z-10 flex-col lg:py-[1vw] sm:py-[2vw] border-black-500 w-full p-[5vw]"
            onClick={() => {
                setShowHead(true)
            }}
            style={{
                ...(showAtTop
                    ? {
                          visibility: 'visible',
                          opacity: 100,
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
            <HeaderContext.Provider
                value={{
                    mouseCancel: debouncedFuncMouse.cancel,
                    touchCancel: debouncedFuncTouch.cancel,
                    setVertMenuShowing,
                }}
            >
                <Topbar />
                <Navbar />
            </HeaderContext.Provider>
        </header>
    )
}

export default Header
