import React from 'react'

export let Buttons = () => (
    <div className="flex justify-between w-full text-2xl sm:text-xl sm:w-[80%] mx-auto h-fit">
        <div className="inline-block sm:w-[30vw] w-[40vw] h-auto p-[1pt] rounded-lg hover:from-secondary hover:to-primary bg-gradient-to-r from-primary to-secondary">
            <div className="flex w-full h-full align-middle bg-white rounded-lg">
                <button className="hover:from-secondary hover:to-primary shadow-lg font-semibold hover:shadow-2xl font-heading uppercase bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent w-full h-auto leading-[10vw] sm:leading-[7vw]">
                    learn more
                </button>
            </div>
        </div>
        <button className="shadow-xl text-white font-heading font-semibold leading-[10vw] sm:leading-[7vw] uppercase rounded-lg w-[40vw] sm:w-[30vw] hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary md:text-md to-primary inline h-auto text-center">
            get started
        </button>
    </div>
)
