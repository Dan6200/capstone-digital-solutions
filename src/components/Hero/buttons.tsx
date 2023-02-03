import React from 'react'

export let Buttons = () => (
    <div className="flex justify-between w-full md:w-[60%] xl:w-[30%] lg:w-[40%] text-2xl sm:text-xl xl:text-sm lg:text-md md:text-lg sm:w-[80%] leading-[10vw] lg:leading-[5vw] xl:leading-[3vw] sm:leading-[6vw] mx-auto md:mx-0 h-fit">
        <a href="#services">
            <div className="inline-block active:opacity-75 sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] w-[40vw] h-auto p-[1pt] rounded-lg hover:from-secondary hover:to-primary bg-gradient-to-r from-primary to-secondary">
                <div className="flex w-full h-full align-middle bg-white rounded-lg">
                    <button className="w-full h-auto font-semibold text-transparent uppercase shadow-lg hover:from-secondary hover:to-primary hover:shadow-2xl font-heading bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        learn more
                    </button>
                </div>
            </div>
        </a>
        <a href="/contact">
            <button className="p-[1pt] shadow-xl text-white active:opacity-75 font-heading font-semibold uppercase rounded-lg w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary inline h-auto text-center">
                get started
            </button>
        </a>
    </div>
)
