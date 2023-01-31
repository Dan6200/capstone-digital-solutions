//cspell:ignore BottomBar semibold
import React, { FC } from 'react'

const fields = [
    { name: 'name', type: 'text', text: 'your name', style: '' },
    { name: 'email', text: 'your email', type: 'email', style: '' },
    { name: 'budget', text: 'your budget', type: 'text', style: '' },
]
// TODO: Break this up!!!
const ContactForm: FC = () => (
    <div className="container flex gap-16 justify-between w-[90%] h-96 mx-auto my-64 px-16 bg-color">
        <div className="my-auto w-[50%]">
            <h3 className="text-2xl font-semibold capitalize text-black-900 font-heading">
                One-Stop shop for your business' digital needs...
            </h3>
        </div>
        <form className="my-auto w-[50%] ">
            {fields.map(
                (f) =>
                    f.name != 'budget' && (
                        <input
                            name={f.name}
                            type={f.type}
                            placeholder={f.text}
                            className="font-paragraph focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md mb-4 border-[1px] w-full bg-black-400 text-black-700 border-black-500 capitalize p-2"
                        />
                    )
            )}
            <textarea
                placeholder="describe what your business requires"
                className="font-paragraph resize-none focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md mb-4 border-[1px] w-full bg-black-400 text-black-700 border-black-500 capitalize p-2 h-32"
            ></textarea>
            <input
                name={fields[2].name}
                type={fields[2].type}
                placeholder={fields[2].text}
                className="font-paragraph focus-visible:outline-none focus:border-[1px] focus:border-primary rounded-md mb-4 border-[1px] w-full bg-black-400 text-black-700 border-black-500 capitalize p-2"
            />
            <button className="block w-full h-auto p-4 rounded-md bg-gradient-to-br from-secondary to-primary">
                <span className="inline mr-8 text-base font-semibold text-white uppercase font-heading">
                    send message
                </span>
                <svg
                    className="inline"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27.5002 0.450166L1.50021 15.4439C-0.649788 16.6877 -0.443538 19.8689 1.85646 20.8127L9.00021 23.7689V29.0439C9.00021 31.9439 12.7002 33.1377 14.4127 30.8314L17.1502 27.1377L24.144 30.0252C24.5127 30.1752 24.9002 30.2502 25.2877 30.2502C25.8002 30.2502 26.3065 30.1189 26.7627 29.8627C27.5627 29.4127 28.1127 28.6127 28.2565 27.7064L31.969 3.50642C32.3502 1.00017 29.6627 -0.793584 27.5002 0.450166ZM12.0002 29.0439V25.0064L14.2877 25.9502L12.0002 29.0439ZM25.2877 27.2502L15.6752 23.2814L24.4377 10.6377C25.1065 9.66892 23.844 8.54392 22.9565 9.31267L9.73771 20.8314L3.00021 18.0439L29.0002 3.04392L25.2877 27.2502Z"
                        fill="#FFFCF7"
                    />
                </svg>
            </button>
        </form>
    </div>
)

export default ContactForm
