import React from 'react'

const NotFound = () => (
    <div className="flex flex-col gap-[10vw] items-center justify-center w-full h-screen">
        <h1 className="text-6xl font-semibold text-center capitalize md:text-4xl sm:text-5xl font-heading text-black-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary">
                This page has not been created yet. Sorry...
            </span>
        </h1>
        <div>
            <a href="#" onClick={() => window.history.back()}>
                <h3 className="text-3xl mb-[5vw] font-semibold text-center no-underline capitalize hover:text-primary text-black-900 font-heading sm:text-3xl md:text-2xl lg:text-xl xl:text-lg">
                    Please go back
                </h3>
            </a>
        </div>
    </div>
)

export default NotFound
