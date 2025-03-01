import React from 'react'

function GradientsDiv() {
  return (
    <div className="fixed h-screen z-0 w-full overflow-hidden bg-[#D2D2D2]">
      <div className="h-full absolute z-10 w-full bg-[#d2d2d20c]"></div>
      <div className="relative h-screen w-full">
        {/* top leftGreen */}
        <div
          style={{
            background: `radial-gradient(50.51% 50.51% at 50% 47.59%, rgba(252, 213, 63, 0.348) 0%, rgba(58, 255, 37, 0) 75.7%)`,
          }}
          className="w-[473.19px] h-[473.19px] absolute -top-36 -left-40"
        />
        {/* violetColor */}
        <div
          style={{
            background: `radial-gradient(50.51% 50.51% at 50% 47.59%,rgba(77, 4, 109, 0.2) 0%, rgba(115, 115, 115, 0) 75.7%)`,
          }}
          className="w-[873.19px] h-[873.19px] absolute -top-80 right-60"
        />
        {/* roseColor */}
        <div
          style={{
            background: `radial-gradient(50.51% 50.51% at 50% 47.59%,rgba(255, 0, 0, 0.2)
 0%, rgba(115, 115, 115, 0) 75.7%)`,
          }}
          className="w-[873.19px] h-[873.19px] absolute -top-8 -right-14"
        />

        {/* <div
          style={{
            background: `radial-gradient(50.51% 50.51% at 50% 47.59%, rgba(252, 213, 63, 0.348) 0%, rgba(115, 115, 115, 0) 75.7%)`,
          }}
          className="w-[1473.19px] h-[1473.19px]  absolute -bottom-56 -left-36"
        /> */}
        <div
          style={{
            background: `radial-gradient(50.51% 50.51% at 50% 47.59%, rgba(58, 255, 37, 0.1882) 0%, rgba(115, 115, 115, 0) 75.7%)`,
          }}
          className="w-[1473.19px] h-[1473.19px]  absolute top-16 -left-36"
        />
      </div>
    </div>
  );
}

export default GradientsDiv
