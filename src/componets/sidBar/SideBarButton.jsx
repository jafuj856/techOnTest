import React from 'react'

function SideBarButton({svg,selected,text}) {
  return (
    <button
      className={`w-[46px] h-[46px] flex items-center justify-center p-2 cursor-pointer ${
        selected === text && "bg-[#D2F561]"
      } rounded-full border-[1px] border-[#0000001A]`}
    >
     {svg}
    </button>
  );
}

export default SideBarButton
