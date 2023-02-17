// cspell:disable
import { content } from '../data/services/content'

let ServicesPage = () => (
    <div className="pt-[30vw] sm:pt-[20vw] md:pt-[15vw] lg:pt-[10vw]">
        {content.map((subcontent) => (
            <div
                key={subcontent.id}
                id={subcontent.heading.replaceAll(' ', '-')}
                className="w-[90%] mx-auto text-3xl text-left  lg:text-lg xl:text-md md:text-xl sm:text-2xl pt-[15vw] sm:pt-[10vw] md:pt-[5vw]"
            >
                <h3 className="text-4xl md:text-3xl lg:text-2xl xl:text-xl mb-[4vw] italic w-[90%] font-light capitalize border-b-2 border-primary text-black-900 font-heading">
                    {subcontent.heading}
                </h3>
                {subcontent.body.map((paragraph) => (
                    <p
                        key={paragraph.id}
                        className="mb-[4vw] lg:mb-[2vw] break-words text-black-800 font-paragraph"
                    >
                        {paragraph.text}
                    </p>
                ))}
            </div>
        ))}
    </div>
)

export default ServicesPage
