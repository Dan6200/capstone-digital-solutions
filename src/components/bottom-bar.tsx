//cspell:ignore BottomBar
import React, { FC } from 'react'
React

const BottomBar: FC = () => (
    <div className="flex justify-between w-full text-sm bg-color font-paragraph text-black-800">
        <div className="text-left capitalize">
            &#169; CAPSTONE Digital Solutions. All rights reserved.
        </div>
        <div className="text-center capitalize">terms and conditions</div>
        <div className="text-right capitalize">privacy policy.</div>
    </div>
)

export default BottomBar
