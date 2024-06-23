import React from "react";

export const StatCards = () => {
  const stats = [
    {
      number: 87,
      isPercentage: true,
      text: "посещенных занятий",
      bg: "fill-success",
    },
    {
      number: 36,
      isPercentage: false,
      text: "оставленных отзывов",
      bg: "fill-sky-600 dark:fill-sky-300",
    },
    {
      number: 7,
      isPercentage: false,
      text: "пропущенных занятий",
      bg: "fill-destructive",
    },
    {
      number: 3.5,
      isPercentage: false,
      text: "средняя ваших отзывов",
      bg: "fill-amber-400 dark:fill-amber-300",
    },
  ]
  return(
    <div className="flex gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col overflow-hidden ps-3 relative justify-center items-start w-36 h-40 border rounded-md hover:border-foreground transition">
          <div 
            className={`blob blur absolute top-0 left-0 opacity-20 w-full h-full ${stat.bg}`}
            style={{"--time": 5 + index * 5 + "s", "--amount": index * 2, "--index": index } as React.CSSProperties}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
              <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
            </svg>
          </div>
          <div className="text-xl font-medium">{`${stat.number}${stat.isPercentage ? "%" : ""}`}</div>
          <div className="text-basic">{stat.text}</div>
        </div>
      ))}
    </div>
  )
}