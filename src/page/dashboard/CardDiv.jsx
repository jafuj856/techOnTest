import React from 'react'

function CardDiv({text,img,count}) {
    return (
      <div className="rounded-xl bg-[#4B66E3] text-white w-full font-poppins p-2 md:p-4 h-full">
        <div className="flex items-center gap-1 md:gap-4 justify-between text-[5px] md:text-[10px] lg:text-[15px] 2xl:text-[20px]">
          <img src={img} className='max-w-[12px] md:max-w-[24px] lg:max-w-[34px] 2xl:max-w-[56px]' alt="" />
          <p>{text}</p>
            </div>
            <div className='h-[90%] w-full flex items-center justify-center text-[24px] md:text-[30px] lg:text-[52px] xl:text-[92px] 2xl:text-[128px] font-[700]'>
{count}
            </div>
      </div>
    );
}

export default CardDiv
