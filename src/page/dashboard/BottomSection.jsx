import React from 'react'
import CardDiv from './CardDiv';

function BottomSection() {
  return (
    <div className="flex items-start gap-5 mt-5 flex-col xl:flex-row pb-4">
      {/* 111111 */}
      <div
        style={{
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(200px)",
          boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.1)",
          background: "#FFFFFF54",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className=" w-full min-h-[270px] xl:max-w-[36%] p-6 lg:p-6 "
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-[600] text-[10px] lg:text-[20px] 2xl:text-[30px]">
            Documents Expiring{" "}
          </h1>
          <button className="hidden md:block">
            <svg
              width="27"
              height="27"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23.5" cy="23.5" r="23" stroke="black" />
              <path
                d="M30.9959 19.0905C31.0459 18.5405 30.6406 18.0541 30.0905 18.0041L21.1275 17.1893C20.5775 17.1393 20.0911 17.5446 20.0411 18.0946C19.9911 18.6447 20.3964 19.1311 20.9464 19.1811L28.9136 19.9054L28.1893 27.8725C28.1393 28.4225 28.5446 28.9089 29.0946 28.9589C29.6447 29.0089 30.1311 28.6036 30.1811 28.0536L30.9959 19.0905ZM18.6402 29.7682L30.6402 19.7682L29.3598 18.2318L17.3598 28.2318L18.6402 29.7682Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <table className="text-left w-full font-poppins text-[5px] md:text-[10px] 2xl:text-[15px] font-[100]">
          <tr className="pb-3 border-b font-[400]">
            <th className="font-[400] pb-3">Document Type </th>
            <th className="font-[400] pb-3">Document Name </th>
            <th className="font-[400] pb-3">Status </th>
            <th className="font-[400] pb-3">Detail </th>
          </tr>
        </table>
        <div className="flex items-center justify-center w-full mt-4">
          <img src="/nodata.svg" className="max-w-28 w-full" alt="" />
        </div>
      </div>
      {/* 2222222 */}
      <div
        style={{
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(200px)",
          boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.1)",
          background: "#FFFFFF54",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          height: "100%",
        }}
        className=" w-full md:min-h-[270px] xl:max-w-[80%] p-6 lg:p-6 grid grid-cols-4 gap-3 "
      >
        <CardDiv img={"/card1.svg"} count={0} text={"Total Employees"} />
        <CardDiv img={"/card1.svg"} count={0} text={"Total Employees"} />
        <CardDiv img={"/card1.svg"} count={0} text={"Total Employees"} />
        <CardDiv img={"/card1.svg"} count={0} text={"Total Employees"} />
      </div>
    </div>
  );
}

export default BottomSection
