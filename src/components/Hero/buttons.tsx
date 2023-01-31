import React from 'react'

export let Buttons = () => (
    <div className="flex justify-between max-w-lg h-auto w-[50%]">
        <div className="inline-block w-48 h-auto p-[2px] rounded-lg hover:from-secondary hover:to-primary bg-gradient-to-r from-primary to-secondary">
            <div className="flex w-full h-full align-middle bg-white rounded-lg">
                <button className="hover:from-secondary hover:to-primary shadow-lg font-semibold text-sm hover:shadow-2xl font-heading uppercase bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent rounded-lg w-full h-auto leading-[62px]">
                    learn more
                </button>
            </div>
        </div>
        <button className="shadow-xl text-white font-heading font-semibold leading-[64px] uppercase rounded-lg w-48 hover:from-primary hover:shadow-2xl hover:to-secondary bg-gradient-to-r from-secondary to-primary inline h-auto text-sm text-center">
            get started
        </button>
    </div>
)
