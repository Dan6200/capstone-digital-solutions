import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const NotFound = () => (
    <div className="flex flex-col items-center w-full h-auto bg-white">
        <Header />
        <h1 className="text-5xl font-semibold mb-[15vw] text-center capitalize md:text-3xl sm:text-2xl font-heading w-[90%] text-black-900">
            <span className="text-black-900">
                This page has not been created yet. Sorry...
            </span>
        </h1>
        <button
            className="p-[1pt] shadow-xl mb-[60vw] leading-[12vw] text-white active:opacity-75 font-heading font-semibold uppercase rounded-lg w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] hover:from-black-700 hover:shadow-2xl hover:to-black-900 bg-gradient-to-r from-black-900 to-black-700 inline h-auto text-center"
            onClick={() => window.history.back()}
        >
            Go Back
        </button>
        <Footer />
    </div>
)

export default NotFound
