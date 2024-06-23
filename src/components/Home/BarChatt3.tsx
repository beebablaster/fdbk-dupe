import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChatt3 = () => {
  const data = [
    {
      "name": "01.01.2023",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "01.03.2023",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "01.06.2023",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "01.09.2023",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "01.01.2024",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "01.02.2024",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
  ]
  
  return (
    <ComposedChart width={730} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  )                      
}
