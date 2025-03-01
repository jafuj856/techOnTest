import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 7.2, 5.3, 3.4, 6.8, 4.5, 9.2],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          dataLabels: {
            enabled: false,
          },
          columnWidth: "80%",
        },
      },
      fill: {
        opacity: 100,
      },
      colors: [
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
        "#C8E764",
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
        "#E9EDF7",
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "bottom",
        labels: {
          show: true,
          style: {
            colors: "#A3AED0",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      states: {
        hover: {
          filter: {
            type: "none",
          },
        },
        active: {
          filter: {
            type: "none",
          },
        },
      },
    },
  });

  return (
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
      className="w-full md:min-h-[360px] xl:max-w-[36%]"
    >
      <div className="w-full flex items-center justify-between p-4 font-[600] text-[16px] lg:text-[20px]">
        <h1 className="font-p">Documents Expiring</h1>
        <button className="hidden md:block">
          <svg
            width="37"
            height="37"
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
      <div className="chart-container flex-1">
        <div id="chart" className="h-full">
          <ReactApexCharts
            options={state.options}
            series={state.series}
            type="bar"
            height="310px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
