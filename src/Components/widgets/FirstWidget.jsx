import React, { useState } from 'react'

import { GoQuestion } from "react-icons/go";

const FirstWidget = () => {
    const [activeTab, setActiveTab] = useState('about-me');

    return (
        <div className="bg-[#363C43] text-[#969696] shadow-xl shadow-black  rounded-2xl py-6 px-8 relative" >
            <GoQuestion className='absolute top-6 left-2 text-xl text-black ' />

            <div className="flex justify-around  items-center p-2 bg-[#171717]  mb-4 rounded-3xl text-lg">

                <button
                    className={`pb-2 transition-all duration-200 ease-in-out ${activeTab === 'about-me' ? 'bg-[#28292F] py-2 px-8 rounded-xl text-white shadow-2xl shadow-[#121213]' : ''}`}
                    onClick={() => setActiveTab('about-me')}
                >
                    About Me
                </button>

                <button
                    className={`pb-2 transition-all duration-200 ease-in-out ${activeTab === 'experiences' ? 'bg-[#28292F] py-2 px-6 rounded-xl text-white shadow-2xl shadow-[#121213]' : ''}`}
                    onClick={() => setActiveTab('experiences')}
                >
                    Experiences
                </button>

                <button
                    className={`pb-2 transition-all duration-200 ease-in-out ${activeTab === 'recommended' ? 'bg-[#28292F] py-2 px-6 rounded-xl text-white shadow-2xl shadow-[#121213]' : ''}`}
                    onClick={() => setActiveTab('recommended')}
                >
                    Recommended
                </button>


            </div>
            <div className='text-xl'>
                {activeTab === 'about-me' &&
                    <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. <br />
                        <br />
                        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                }

                {activeTab === 'experiences' && <p>Content about experiences... <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum minus, maiores ab debitis sequi quas numquam dolorem perspiciatis provident?
                </p>}

                {activeTab === 'recommended' && <p>Content about recommended... <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum neque facere quidem voluptas autem architecto dicta eos provident itaque dolor.</p>}

            </div>
        </div>
    )
}

export default FirstWidget