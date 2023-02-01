import React, { FC } from 'react'

const Topbar: FC = () => {
    return (
        <div className="flex justify-between h-[10vw] mx-auto text-2xl sm:text-xl font-paragraph">
            <span className="text-primary">
                info@capstone-digital-solutions.com
            </span>
            <span className="text-black-800">+2349033117211</span>
        </div>
    )
}

export default Topbar
