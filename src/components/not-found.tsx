//cspell:disable
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center w-full h-auto bg-white pt-[35vw] sm:pt-[25vw] md:pt-[15vw] lg:pt-[10vw] lg:mb-[10vw] md:mb-[20vw] sm:mb-[30vw] mb-[40vw]">
            <h1 className="text-5xl font-semibold mb-[15vw] sm:mb-[10vw] md:mb-[7vw] lg:mb-[5vw] text-center capitalize lg:text-3xl sm:text-4xl font-heading md:w-[70%] w-[90%] text-black-900">
                <span className="text-black-900">This page does not exist</span>
            </h1>
            <button
                className="p-[1pt] shadow-xl xl:leading-[3vw] lg:leading-[4vw] md:leading-[6vw] sm:leading-[8vw] leading-[10vw] text-white active:opacity-75 font-heading font-semibold uppercase rounded-lg w-[40vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[10vw] hover:from-black-700 hover:shadow-2xl hover:to-black-900 bg-gradient-to-r from-black-900 to-black-700 inline h-auto text-center"
                onClick={() => {
                    router.back()
                }}
            >
                Go Back
            </button>
        </div>
    )
}

export default NotFound
