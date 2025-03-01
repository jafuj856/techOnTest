import React from 'react'

function SideBarButton({
  svg,
  selected,
  text,
  setSelected,
  hoverText,
  setHoverText,
}) {
  return (
      <button
          onMouseEnter={() => setHoverText(text)}
          onMouseLeave={()=>setHoverText(selected)}
      onClick={() => setSelected(text)}
      className={`w-[46px] h-[46px] flex items-center justify-center p-2 cursor-pointer relative z-10 ${
        selected === text && "bg-[#D2F561]"
      } rounded-full border-[1px] border-[#0000001A]`}
    >
      {svg}
    </button>
  );
}

export default SideBarButton
