import React from 'react'
import TopBar from '../../componets/topBAr/TopBar';
import SideBar from '../../componets/sidBar/SideBar';
import DashBoard from './DashBord';

function DashBoardHome() {
  return (
    <div className="min-h-screen z-20 bg-amber-700 w-full">
      <TopBar />
      <div className="pt-[50px] md:pt-[90px]" />
      <SideBar />
      <div className="p-6 h-screen relative  lg:ml-[130px]">
        <DashBoard />
      </div>
    </div>
  );
}

export default DashBoardHome
