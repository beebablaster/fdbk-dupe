import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const BarChart2 = () => {
  const data = [
    {
      "name": "01.2023",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "03.2023",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "06.2023",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "09.2023",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "12.2023",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "01.2024",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "02.2024",
      "uv": 3490,
      "pv": 4300
    }
  ]
  
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  )                       
}

export default BarChart2
