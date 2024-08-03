import React, { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors
);

function Activity() {
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectedvalue,setSelectedvalue]=useState("Weekly")

  function handleOptions(e){
    setSelectedvalue(e.target.value)
  }
  useEffect(() => {
    randomizeValues();
  }, [selectedvalue]);

  const getRandomInt = (min, max) => {
    if (max < min) {
      [min, max] = [max, min];
    }
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  };

  const randomizeValues = () => {
    const newValues = Array.from({ length: 8 }, () => getRandomInt(0, 20000));
    setValues(newValues);

    const newLabels = [0, 5, 9, 13, 17, 21, 25, 27];
    setLabels(newLabels);
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Value",
        data: values,
        backgroundColor: "lightblue",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 20000,
        ticks: {
          color: 'white',
          stepSize: 5000,
          callback: function (value) {
            return value / 1000 + 'k';
          }
        },
        grid: {
          drawOnChartArea: true,
          drawTicks: true,
          color: 'gray',
        }
      },
      x: {
        ticks: {
          color: 'white',
          callback: function (value, index) {
            return labels[index];
          },
        },
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <div className='bg-secondary w-full md:w-3/4 p-3  rounded-md'>
      <div className='mb-4 flex flex-row justify-between'>
        <span className='font-semibold'>Activity</span>
        <div>
        <select id="options" className='rounded-3xl bg-gray-600 text-xs font-semibold text-center h-6' onChange={handleOptions} value={selectedvalue}>
            <option className="text-xs font-semibold" value="Weekly">Weekly</option>
            <option className="text-xs font-semibold" value="Monthly">Monthly</option>
            <option className="text-xs font-semibold" value="Yearly">Yearly</option>
          </select>
        </div>
          
      </div>
      <div className='rounded-md h-64 md:h-64'>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default Activity;
