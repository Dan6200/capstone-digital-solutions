import React from 'react'

const inputStyle =
    'font-paragraph focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md border-[1px] w-[90%] bg-black-400 text-black-700 border-black-500 capitalize px-[3vw]'

export const SearchBar = () => (
    <div className="flex justify-center p-[3vw] w-full border-black-500">
        <input name="search box" type="text" className={inputStyle} />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[6vw] md:w-[4vw] text-black-800 hover:text-primary md:m-[1vw] m-[2vw]"
            viewBox="0 0 64 64"
            stroke-width="3"
            stroke="currentColor"
            fill="none"
        >
            <circle cx="27.31" cy="25.74" r="18.1" />
            <line x1="39.58" y1="39.04" x2="56.14" y2="57" />
        </svg>
    </div>
)
