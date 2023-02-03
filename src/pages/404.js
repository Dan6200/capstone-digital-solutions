import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const isBrowser = typeof window !== 'undefined'
const goBack = () => {
    if (isBrowser) {
        window.history.back()
    }
}

const NotFound = () => (
    <div className="flex flex-col items-center w-full h-auto bg-white">
        <Header />
        <h1 className="text-5xl font-semibold mb-[15vw] text-center capitalize lg:text-3xl sm:text-4xl font-heading md:w-[70%] w-[90%] text-black-900">
            <span className="text-black-900">
                This page has not been created yet. Sorry...
            </span>
        </h1>
        <button
            className="p-[1pt] shadow-xl lg:mb-[20vw] md:mb-[30vw] sm:mb-[50vw] mb-[60vw] xl:leading-[4vw] lg:leading-[6vw] md:leading-[8vw] sm:leading-[10vw] leading-[12vw] text-white active:opacity-75 font-heading font-semibold uppercase rounded-lg w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] hover:from-black-700 hover:shadow-2xl hover:to-black-900 bg-gradient-to-r from-black-900 to-black-700 inline h-auto text-center"
            onClick={goBack}
        >
            Go Back
        </button>
        <Footer />
    </div>
)

export default NotFound
