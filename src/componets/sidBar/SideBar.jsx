import React, { useState, useSyncExternalStore } from 'react'
import SideBarButton from './SideBarButton';

function SideBar() {
   
  const [selected, setSelected] = useState('home')
  const [hoverText,setHoverText] = useState('')
  return (
    <div className="h-[80vh] w-[160px] fixed left-0 hidden flex-col p-4 lg:flex items-center ">
      {/* 1111 */}
      <div className="rounded-full flex flex-col gap-5 bg-[#FFFFFF9C] border-[1px] border-[#0000001A] pb-8 relative">
        {(selected !== "logout" || hoverText !== "logout") && (
          <div
            className={`z-0 transition-all duration-700 ease-in-out  ${
              hoverText === "1"
                ? "top-[66px]"
                : hoverText === "home"
                ? "top-0"
                : hoverText === "2"
                ? "top-[132px]"
                : hoverText === "3"
                ? "top-[198px]"
                : hoverText === "4"
                ? "top-[264px]"
                : hoverText === "5" && "top-[330px]"
            } absolute h-[46px] w-[46px] rounded-full ${
              hoverText === "logout" ? "bg-none" : "bg-[#89b106]"
            }  `}
          />
        )}
        <SideBarButton
          hoverText={hoverText}
          setHoverText={setHoverText}
          setSelected={setSelected}
          svg={
            <svg
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.16666 30.0833V15.8333C6.16666 15.3319 6.27611 14.8569 6.49503 14.4083C6.71395 13.9597 7.0156 13.5902 7.39999 13.3L16.65 6.17496C17.1896 5.75274 17.8062 5.54163 18.5 5.54163C19.1937 5.54163 19.8104 5.75274 20.35 6.17496L29.6 13.3C29.9854 13.5902 30.2876 13.9597 30.5065 14.4083C30.7254 14.8569 30.8344 15.3319 30.8333 15.8333V30.0833C30.8333 30.9541 30.5312 31.6999 29.9268 32.3205C29.3225 32.9412 28.5969 33.251 27.75 33.25H23.125C22.6882 33.25 22.3223 33.098 22.0273 32.794C21.7324 32.49 21.5844 32.1142 21.5833 31.6666V23.75C21.5833 23.3013 21.4353 22.9256 21.1393 22.6226C20.8433 22.3197 20.4774 22.1677 20.0417 22.1666H16.9583C16.5215 22.1666 16.1556 22.3186 15.8607 22.6226C15.5657 22.9266 15.4177 23.3024 15.4167 23.75V31.6666C15.4167 32.1152 15.2687 32.4915 14.9727 32.7955C14.6767 33.0995 14.3108 33.251 13.875 33.25H9.24999C8.40207 33.25 7.67646 32.9402 7.07316 32.3205C6.46985 31.7009 6.16768 30.9552 6.16666 30.0833Z"
                fill="black"
              />
            </svg>
          }
          selected={selected}
          text={"home"}
        />
        <SideBarButton
          hoverText={hoverText}
          setHoverText={setHoverText}
          setSelected={setSelected}
          svg={<img src={"/svg.svg"} />}
          selected={selected}
          text={"1"}
        />
        <SideBarButton
          hoverText={hoverText}
          setHoverText={setHoverText}
          setSelected={setSelected}
          svg={
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.33333 6.66667C8.33333 4.89856 9.03571 3.20286 10.286 1.95262C11.5362 0.702379 13.2319 0 15 0C16.7681 0 18.4638 0.702379 19.714 1.95262C20.9643 3.20286 21.6667 4.89856 21.6667 6.66667C21.6667 8.43478 20.9643 10.1305 19.714 11.3807C18.4638 12.631 16.7681 13.3333 15 13.3333C13.2319 13.3333 11.5362 12.631 10.286 11.3807C9.03571 10.1305 8.33333 8.43478 8.33333 6.66667ZM8.33333 16.6667C6.1232 16.6667 4.00358 17.5446 2.44078 19.1074C0.877974 20.6702 0 22.7899 0 25C0 26.3261 0.526784 27.5979 1.46447 28.5355C2.40215 29.4732 3.67392 30 5 30H25C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25C30 22.7899 29.122 20.6702 27.5592 19.1074C25.9964 17.5446 23.8768 16.6667 21.6667 16.6667H8.33333Z"
                fill="black"
              />
            </svg>
          }
          selected={selected}
          text={"2"}
        />
        <SideBarButton
          hoverText={hoverText}
          setHoverText={setHoverText}
          setSelected={setSelected}
          svg={<img src={"/revenue.svg"} />}
          selected={selected}
          text={"3"}
        />
        <SideBarButton
          hoverText={hoverText}
          setHoverText={setHoverText}
          setSelected={setSelected}
          svg={<img src={"/doller.svg"} />}
          selected={selected}
          text={"4"}
        />
        <SideBarButton
          hoverText={hoverText}
          setHoverText={setHoverText}
          setSelected={setSelected}
          svg={<img src={"/statatic.svg"} />}
          selected={selected}
          text={"5"}
        />
      </div>
      {/* 22222 */}

      <div
        className={`rounded-full flex flex-col gap-6 bg-[#FFFFFF9C] border-[1px] border-[#0000001A] fixed bottom-10 transition-all duration-700 ease-in-out ${
          selected === "logout" ? "h-[46px]" : "h-[130px]"
        }`}
      >
        <div className="h-full flex flex-col relative gap-6">
          <div
            className={` w-[46px] h-[46px] rounded-full transition-all duration-700 ease-in-out top-0`}
          >
            <SideBarButton
              hoverText={hoverText}
              setHoverText={setHoverText}
              setSelected={setSelected}
              svg={
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9M2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                    fill={selected==='logout'?'white':"black"}
                  />
                </svg>
              }
              selected={selected}
              text={"logout"}
            />
          </div>

          <div
            className={`${
              selected === "logout" ? " top-0" : "top-22"
            } w-[46px] h-[46px] rounded-full transition-all duration-700 ease-in-out absolute`}
          >
            <img src="/icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar
