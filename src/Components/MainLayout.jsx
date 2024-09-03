import React from 'react'
import FirstWidget from './widgets/FirstWidget'
import GalleryWidget from './widgets/GalleryWidget'

const MainLayout = () => {
    return (
        <div className="flex h-screen bg-[#24272C] ">
            {/* Left half (empty) */}
            <div className="hidden md:block md:w-1/2 "></div>

            {/* Right half (widgets) */}
            <div className="w-full md:w-1/2 p-4 space-y-4 h-90 overflow-y-scroll custom-scrollbar">
                <FirstWidget />

                <hr className='w-4/5  mx-auto border-2 rounded-xl border-gray-300 shadow shadow-[#282828]' />

                <GalleryWidget />

                <hr className='w-4/5 mx-auto border-2 rounded-xl border-gray-300 shadow shadow-[#282828]' />

            </div>
        </div>
    )
}

export default MainLayout