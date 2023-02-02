//cspell:ignore BottomBar
import React, { FC } from 'react'
React

const BottomBar: FC = () => (
    <div className="flex flex-col lg:text-sm items-center md:text-md md:flex-row sm:text-lg sm:gap[1vw] gap-[2vw] justify-between w-full text-xl bg-color font-paragraph text-black-800">
        <div className="capitalize">
            &#169; CAPSTONE Digital Solutions. All rights reserved.
        </div>
        <div className="capitalize">terms and conditions</div>
        <div className="capitalize">privacy policy.</div>
    </div>
)

export default BottomBar
