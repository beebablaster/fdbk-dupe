import React from "react";
import { StarIcon } from "lucide-react";

interface IProps {
  showNumber?: boolean;
  rating: number;
  readonly?: boolean;
  size?: string | number;
}

export const Rating: React.FC<IProps> = ({ rating, showNumber, readonly, size = "1.3rem" }) => {
  const [prevHovered, setPrevHovered] = React.useState<number>();
  const [hovered, setHovered] = React.useState<number>();
  const [Rating, setRating] = React.useState(rating ? rating : 0);

  const handleClick = (value: number) => {
    if(readonly) return;
    setRating(value);
  }

  const handleHover = (value: number) => {
    if(readonly || hovered === value) return;
    setPrevHovered(hovered);
    setHovered(value);
  }
  return (
    <span className="flex items-center">
      {showNumber && (
        <div className="mr-1">
          {Rating}
        </div>
      )}
      <div className="flex" onMouseLeave={() => setHovered(undefined)}>
        {[1, 2, 3, 4, 5].map((value) => (
          <StarIcon 
            key={value} 
            size={size}
            style={{ "--delay": `${(hovered! - prevHovered!) ? (hovered! - prevHovered!) * 0.05 : value * 0.05}s` } as React.CSSProperties}
            className={`stroke-none transition star
              ${!readonly && "cursor-pointer"} 
              ${value <= Rating ? "fill-star star-active" : "fill-accent"}
              ${value <= hovered! && value > Rating && "fill-star/50"}
              ${value > hovered! && value <= Rating && "opacity-40"}
            `}
            onClick={() => handleClick(value)}
            onMouseOver={() => handleHover(value)} 
          />
        ))}
      </div>
    </span>
  )
}