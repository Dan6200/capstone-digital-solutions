//cspell:ignore Topbar
import * as _ from 'lodash'
import React, {
    FC,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import Navbar from './navigation'
import Topbar from './top-bar'

const Header: FC = () => {
    let [showHead, setShowHead] = useState(false)
    let [showAtTop, setShowAtTop] = useState(true)
    let header = useRef()
    let [vertMenuShowing, setVertMenuShowing] = useState(false)

    let debouncedFunc = useCallback(
        _.debounce(
            () => {
                // to prevent the debounce function from running after being called in the last second
                setShowHead(false)
                console.log(vertMenuShowing, 'runs anyways')
            },
            3000,
            { leading: true }
        ),
        []
    )

    let showHeader = () => {
        let top = header.current && header.current.offsetTop
        if (top === 0) return
        setShowHead(true)
        // to prevent the debounce function from being called
        debouncedFunc()
    }

    useEffect(() => {
        window.addEventListener('touchstart', showHeader, true)
        window.addEventListener('touchmove', showHeader, true)
        window.addEventListener('touchend', showHeader, true)
        window.addEventListener('touchcancel', showHeader, true)
        return () => {
            window.removeEventListener('touchstart', showHeader, true)
            window.removeEventListener('touchmove', showHeader, true)
            window.removeEventListener('touchend', showHeader, true)
            window.removeEventListener('touchcancel', showHeader, true)
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
            onClick={() => {
                setShowHead(true)
            }}
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
            <Navbar cancel={debouncedFunc.cancel} />
        </header>
    )
}

export default Header
