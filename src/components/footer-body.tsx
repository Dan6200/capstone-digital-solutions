//cspell:ignore semibold
import React, { FC } from 'react'

const FooterBody: FC = () => {
    return (
        <section className="mx-auto w-full">
            <h4 className="mb-8 text-2xl font-semibold capitalize">
                let us bring your brand online
            </h4>
            <p className="">
                If you are looking for an agency with exceptional quality and a
                client-centric approach, we absolutely look forward to working
                with you and taking your business to new heights!
            </p>
            <div className="w-96">
                <div className="px-2 mx-auto">
                    <span className="mr-4">
                        info@capstone-digital-solutions
                    </span>
                    <span>+2349033117211</span>
                </div>
                <button className="block w-full p-4 mt-8 uppercase border-2 border-blue-200 text-l">
                    click to get started
                </button>
            </div>
        </section>
    )
}

export default FooterBody
