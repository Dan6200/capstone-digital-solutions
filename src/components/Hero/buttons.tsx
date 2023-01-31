import React from 'react'

export let Buttons = () => (
    <div className="flex justify-between w-full h-fit">
        <div className="inline-block w-[40vw] h-auto p-[1pt] rounded-lg hover:from-secondary hover:to-primary bg-gradient-to-r from-primary to-secondary">
            <div className="flex w-full h-full align-middle bg-white rounded-lg">
                <button className="hover:from-secondary hover:to-primary shadow-lg font-semibold text-2xl hover:shadow-2xl font-heading uppercase bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent w-full h-auto leading-[10vw]">
                    learn more
                </button>
            </div>
        </div>
        <button className="shadow-xl text-white font-heading font-semibold leading-[10vw] uppercase rounded-lg w-[40vw] hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary md:text-md to-primary inline h-auto text-2xl text-center">
            get started
        </button>
    </div>
)
