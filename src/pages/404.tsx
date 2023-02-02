import React from 'react'

const NotFound = () => (
    <div className="flex bg-white flex-col gap-[10vw] items-center justify-center w-full h-screen">
        <h1 className="text-6xl font-semibold text-center capitalize md:text-4xl sm:text-5xl font-heading text-black-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary">
                This page has not been created yet. Sorry...
            </span>
        </h1>
        <button
            className="p-[1pt] shadow-xl text-white active:opacity-75 font-heading font-semibold uppercase rounded-lg w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary inline h-auto text-center"
            onClick={() => window.history.back()}
        >
            Go Back
        </button>
    </div>
)

export default NotFound
