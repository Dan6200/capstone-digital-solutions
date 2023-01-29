import React, { FC } from 'react'
import Images from '../images'
// cspell:ignore semibold

const list: string[] = ['1', '2', '3', '>']
const SlideShow: FC = () => {
    return (
        <div className="block mx-auto w-[1280px] h-[1024px]">
            <div className="flex justify-between w-64 mx-auto">
                {list.map((num) => (
                    <div className="p-6 my-8 mr-2 text-center border">
                        {num}
                    </div>
                ))}
            </div>
            {Images.map((image) => (
                <div className="w-[1024px] mx-auto p-8 border border-blue-300">
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    )
}

export default SlideShow
