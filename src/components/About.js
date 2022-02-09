import React from 'react'

export default function About(){


    return(
        <section id = 'about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className = "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1>Hi, I'm Donell.</h1>
                    <br className="hidden lg:inline-block" />
                        I am a full stack developer specializing in building responsive websites.
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>
                    <div className='flex justify-center'>
                        <a href = '#contact'
                        className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                            Contact Me
                        </a>
                        <a href = '#projects'
                          className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img className="object-cover object-center rounded"
                      src= "https://avatars.githubusercontent.com/u/70354925?s=400&u=52b06c14e1b4ac9494e273e2a11520b20078c201&v=4"
                      alt = "me" />
                </div>
            </div>
        </section>
    )



}

