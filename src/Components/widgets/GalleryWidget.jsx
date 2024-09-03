import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";

const GalleryWidget = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = () => {

    setImages([...images, 'https://img.freepik.com/free-photo/neo-brutalism-inspired-building_23-2151004635.jpg?t=st=1725343913~exp=1725347513~hmac=ba3f588a6494c2fac8484f0295e9d41cc8001a3e5d4bc2d3e25a4daed9bab86a&w=740']);
  };

  return (
    <div className="bg-[#363C43] text-[#969696] shadow-xl shadow-black  rounded-2xl py-6 px-8 relative  " >

      <GoQuestion className='absolute top-6 left-2 text-xl text-[#A3ADBA] ' />

      <div className="flex justify-between items-center mb-4 ">

        <h2 className="text-xl rounded-2xl font-semibold bg-[#171717] text-white px-9 py-4">Gallery</h2>

        <div className='flex'>

          <div className="bg-[#363C43] rounded-full shadow-lg shadow-black flex justify-center items-center ">

            <button
              className="bg-[#363C43] text-white py-2 px-6 rounded-full shadow-inner shadow-slate-100 h-full"
              onClick={handleAddImage}
            >
              + ADD IMAGE
            </button>

          </div>

          <div className='flex gap-3 ml-8'>

            <div className='drop-shadow-lg w-12 h-12 cursor-pointer rounded-full flex justify-center items-center bg-gradient-to-r from-[#303439] to-[#161718] text-[#6F787C] '>
              <FaArrowLeft className='text-2xl ' />
            </div>

            <div className='drop-shadow-lg cursor-pointer  w-12 h-12 rounded-full flex justify-center items-center bg-gradient-to-r from-[#303439] to-[#161718] text-[#6F787C] '>
              <FaArrowRight />
            </div>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((ele, index) => (
          <img key={index} src={ele} alt={`Gallery ${index}`} className="rounded-lg" />
        ))}
      </div>

    </div>
  );
};

export default GalleryWidget;
