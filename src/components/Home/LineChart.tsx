import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, ScriptableContext } from "chart.js";

export const LineChart = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);
    const data = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
            {
                data: [0.1, 0.4, 0.2]
            }
        ]
    }
    const options = {
        fill: {
            target: "start",
        },
        backgroundColor: (context: ScriptableContext<"line">) => { 
            const ctx = context.chart.ctx; 
            const gradient = ctx.createLinearGradient(0, 0, 0, 350); 
            gradient.addColorStop(0, "rgba(0, 198, 143, 0.5)"); 
            gradient.addColorStop(1, "rgba(0, 198, 143, 0)"); 
            return gradient; 
        },
        interaction: {
            intersect: false,
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 2,
                borderColor: "green",
            },
            point: {
                radius: 0,
                hitRadius: 0,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                }
            }
        }
    }
    return(
        <div>
            <Line data={data} options={options}  />
        </div>
    )
}