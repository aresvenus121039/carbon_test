import { useEffect, useState } from "react";
import { fetchPopulation } from "../service";
import { useQuery } from "react-query";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import Loading from "../libs/Loading";
Chart.register(...registerables)

interface LineProps {
  options: ChartOptions<'line'>;
  data: ChartData<'line'>;
}

const optionss: any = {
  title: {
    display: true,
    text: 'Class Strength',
    fontSize: 20,
  },
  legend: {
    display: true,
    position: 'right',
  },
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2
}

let state = {
  labels: [
  ],
  datasets: [
    {
      label: 'Class Strength',
      backgroundColor: [
      ],
      fill: false,
      lineTension: 0.5,
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [],
    },
  ],
}

const Graph = () => {
  const { data, status } = useQuery("population", fetchPopulation);
  useEffect(() => {
    if(status == "success"){
      const labels = data.data.sort((a:any, b:any) => a.Year - b.Year).map((item: any) => item.Year)
      const datas = data.data.sort((a:any, b:any) => a.Year - b.Year).map((item: any) => item.Population)
      state = {
        labels: labels,
        datasets: [
          {
            label: 'Class Strength',
            backgroundColor: [
            ],
            fill: false,
            lineTension: 0.5,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: datas,
          },
        ],
      }
    }
  },[status])

  return (
    <>
      {
        status !== "success" && (
          <Loading />
        )
      }
      {
        status === "success" && (
          <div className="flex justify-center" style={{ position: "relative", height: "auto", width: "90vw" }}>
            <Line
              data={state}
              options={optionss}
            />
          </div>
        )
      }
    </>
  )
}

export default Graph;
