import React from 'react'
import "chart.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const graph = () => {
    const data = {
        labels :["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
        {
         label: "Items",
        data: [33, 53, 85, 41, 44, 65],
         fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            tension: 0.4,
            },
            {
            label: "Orders",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774",
            tension: 0.4,
            },
        ],
        }
  return (
    <div>
        <Line datasetIdKey="id" data={data} width={700} height={300} />
    </div>
  )
}

export default graph
