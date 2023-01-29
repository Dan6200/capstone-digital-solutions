import React, { FC } from 'react'

const Topbar: FC = () => {
    return (
        <div className="flex justify-end h-8 mx-auto text-sm font-paragraph">
            <span className="mr-8 text-primary">
                info@capstone-digital-solutions.com
            </span>
            <span className="text-black-800">+2349033117211</span>
        </div>
    )
}

export default Topbar
