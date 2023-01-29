import React, { FC } from 'react'

export let Body: FC = () => (
    <div className="w-[80%]">
        <p className="text-md font-paragraph mb-8 text-black-800 pb-8">
            Expand your business by using our digital services.
        </p>
        <div className="flex h-auto">
            <div className="rounded-lg w-64 p-[2pt] h-auto bg-gradient-to-br from-primary inline-block to-secondary mr-32">
                <div className="rounded-lg w-full h-full bg-white flex align-middle">
                    <button className="font-bold text-md font-heading uppercase bg-clip-text bg-gradient-to-br from-primary to-secondary text-transparent rounded-lg w-full h-auto leading-[60px]">
                        learn more
                    </button>
                </div>
            </div>
            <button className="text-white font-heading font-bold leading-[64px] uppercase rounded-lg w-64 bg-gradient-to-br from-secondary to-primary inline h-auto text-md text-center">
                get started
            </button>
        </div>
    </div>
)
