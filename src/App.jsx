import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApexChart from './componets/ApexChart'
import GradientsDiv from './componets/GradientsDiv'
import SideBar from './componets/sidBar/SideBar'
import TabelSection from './page/dashboard/TabelSection'
import DashBoard from './page/dashboard/DashBord'
import TopBar from './componets/topBAr/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GradientsDiv />

      <div className="min-h-screen z-20 bg-amber-700 w-full">
        
          <TopBar />
        <div className='pt-[50px] md:pt-[90px]'/>
        <SideBar />
        <div className="p-6 h-screen relative  lg:ml-[130px]">
        
          <DashBoard />
        </div>
      </div>
    </>
  );
}

export default App
