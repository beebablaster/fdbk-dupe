import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { colors } from "../constants/colors";

export const BarChart = () => {
  const data = [
    {
      "name": "01.01",
      "attended": 13,
      "missed": 3,
    },
    {
      "name": "08.01",
      "attended": 15,
      "missed": 1,
    },
    {
      "name": "15.01",
      "attended": 14,
      "missed": 2,
    },
    {
      "name": "22.01",
      "attended": 14,
      "missed": 2,
    },
    {
      "name": "01.02",
      "attended": 15,
      "missed": 1,
    },
    {
      "name": "08.02",
      "attended": 12,
      "missed": 4,
    },
    {
      "name": "15.02",
      "attended": 16,
      "missed": 0,
    }
  ]

  return (
    <ResponsiveContainer width="100%" maxHeight={250} aspect={2.9}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorattended" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.primary.light} stopOpacity={0.6} />
            <stop offset="95%" stopColor={colors.primary.light} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colormissed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.destructive.light} stopOpacity={0.6} />
            <stop offset="95%" stopColor={colors.destructive.light} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="attended" stroke={colors.primary.light} fillOpacity={1} fill="url(#colorattended)" />
        <Area type="monotone" dataKey="missed" stroke={colors.destructive.light} fillOpacity={1} fill="url(#colormissed)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}