import { createContext } from 'react'
import React from 'react'

export let HeaderContext = createContext(null)
export type HeaderContextType = {
    mouseCancel?: _.DebouncedFunc<any>
    touchCancel?: _.DebouncedFunc<any>
    setVertMenuShowing?: React.Dispatch<React.SetStateAction<boolean>>
}
