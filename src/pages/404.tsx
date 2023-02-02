import React from 'react'

const NotFound = () => (
    <div className="flex bg-white flex-col gap-[10vw] items-center justify-center w-full h-screen">
        <h1 className="text-6xl font-semibold text-center capitalize md:text-4xl sm:text-5xl font-heading text-black-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary">
                This page has not been created yet. Sorry...
            </span>
        </h1>
        <a
            href="#"
            className="text-3xl text-center no-underline capitalize hover:text-primary text-black-800 font-paragraph sm:text-2xl md:text-xl lg:text-lg xl:text-md"
            onClick={() => window.history.back()}
        >
            <p className="placeholder">Go Back</p>
        </a>
    </div>
)

export default NotFound
