import Chart from "react-apexcharts";

const DonutChart = ({ darkMode }) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 350,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: darkMode ? ["#dddddd"] : ["#000000"],
        },
      },
      responsive: [
        {
          breakpoint: 1024, // Tablet and smaller
          options: {
            chart: {
              height: 350,
            },
            legend: {
              position: "bottom",
              fontSize: "12px",
            },
          },
        },
        {
          breakpoint: 768, // Mobile and smaller
          options: {
            chart: {
              height: 350,
            },
            legend: {
              position: "bottom",
              fontSize: "10px",
            },
          },
        },
      ],
    },
  };

  return (
    <div
      className="py-6 bg-white rounded-lg p-5 flex items-center justify-center 
      dark:bg-gray-600 max-w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl"
    >
      <Chart options={options.options} series={options.series} type="donut" height="100%" />
    </div>
  );
};

export default DonutChart;
