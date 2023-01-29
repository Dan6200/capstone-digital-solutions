import React, { FC } from 'react'

export let Body: FC = () => (
    <div className="w-[80%]">
        <p className="pb-8 mb-8 text-md font-paragraph text-black-800">
            Expand your business by using our digital services.
        </p>
        <div className="flex h-auto">
            <div className="inline-block w-64 h-auto p-[2px] mr-32 rounded-lg hover:from-secondary hover:to-primary bg-gradient-to-r from-primary to-secondary">
                <div className="flex w-full h-full align-middle bg-white rounded-lg">
                    <button className="hover:from-secondary hover:to-primary shadow-lg font-semibold text-md hover:shadow-2xl font-heading uppercase bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent rounded-lg w-full h-auto leading-[62px]">
                        learn more
                    </button>
                </div>
            </div>
            <button className="shadow-xl text-white font-heading font-semibold leading-[64px] uppercase rounded-lg w-64 hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary inline h-auto text-md text-center">
                get started
            </button>
        </div>
    </div>
)
