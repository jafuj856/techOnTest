import React from 'react'
import BottomSection from './BottomSection'
import ApexChart from '../../componets/ApexChart';
import TabelSection from './TabelSection';

function DashBoard() {
  return (
    <div className="w-full">
      <div className="flex items-start gap-5 w-full flex-col xl:flex-row">
        <ApexChart />
        <TabelSection />
      </div>
      <BottomSection />
    </div>
  );
}

export default DashBoard
