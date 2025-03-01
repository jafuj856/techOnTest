import React, { useState } from 'react'
import MobileDrop from './MobileDrop';

function TopBar() {
    const [isOpen,setIsOpen] =useState(false)
  return (
    <div className="w-full  z-30 pt-[34px]  fixed flex items-end justify-between px-[10px] lg:[30px] 2xl:px-[50px] mb-[7px] font-poppins ">
          <div className="flex items-center gap-6 h-fit ">
              
        <img
          src="/topIcon.png"
          className="max-w-[118px] xl:max-w-[130px] 2xl:max-w-[178px] "
          alt=""
        />
        <h1 className="lg:block hidden text-[38px] 2xl:text-[48px] font-[700]">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <img src="/sms.svg" className="w-[30px] md:w-auto" alt="" />
        <svg
          className="lg:block hidden"
          width="1"
          height="43"
          viewBox="0 0 1 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.25"
            y1="-1.09278e-08"
            x2="0.250002"
            y2="43"
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
        <div className="hidden items-center gap-2 lg:flex">
          <img src="/icon.svg" className="max-w-[50px]" alt="" />
          <div>
            <h1 className="text-[#4B66E3] font-[400] text-[24px] 2xl:text-[30px]">
              techon
            </h1>
            <p className="text-[17px] 2xl:text-[20px] font-[400]">Admin</p>
          </div>
        </div>
        {/* lg:button */}
        <button className="hidden lg:flex items-center justify-center gap-2 cursor-pointer">
          <div className="h-2 w-2 rounded-full bg-black" />
          <div className="h-2 w-2 rounded-full bg-black" />
          <div className="h-2 w-2 rounded-full bg-black" />
        </button>
        {/* sm:button */}
        <button
                  onClick={() => {
                      
            setIsOpen(!isOpen); // Toggle the dropdown visibility
          }}
          className="w-[19px] flex flex-col gap-1 cursor-pointer lg:hidden"
        >
          <div className="h-1 w-full rounded-full bg-[#D2F561]" />
          <div className="h-1 w-full rounded-full bg-[#D2F561]" />
          <div className="h-1 w-full rounded-full bg-[#D2F561]" />
        </button>
      </div>
      <MobileDrop isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default TopBar
