import React from "react";

type AwardProps = {
  imgSrc: string;
  description: string;
}

export const Award: React.FC<AwardProps> = ({ imgSrc, description }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <div className={`${selected ? "bg-accent" : ""} transition-colors rounded-md p-2 certificate flex flex-col items-center gap-4`} onClick={() => setSelected(!selected)}>
      <img src={`/achievements/${imgSrc}`} className="w-full aspect-square"/>
      <div className="text-sm text-center">
          {description}
      </div>
    </div>
  )
}