//cspell:ignore semibold
import React, { FC } from 'react'

const FooterBody: FC = () => {
    return (
        <section className="w-[90%] mx-auto mb-64">
            <h4 className="mb-16 text-xl font-semibold capitalize font-heading">
                let us bring your brand online
            </h4>
            <p className="max-w-4xl mb-16 text-black-800 font-paragraph text-md">
                If you are looking for an agency with exceptional quality and a
                client-centric approach, we absolutely look forward to working
                with you and taking your business to new heights!
            </p>
            <div className="w-[40%]">
                <div className="flex justify-between mx-auto mb-16 text-sm text-black-800 font-paragraph">
                    <span className="mr-4 text-primary">
                        info@capstone-digital-solutions
                    </span>
                    <span>+2349033117211</span>
                </div>
                <button className="shadow-xl text-white font-heading font-semibold leading-[80px] uppercase rounded-lg w-full hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary inline h-auto text-md text-center">
                    click to get started
                </button>
            </div>
        </section>
    )
}

export default FooterBody
