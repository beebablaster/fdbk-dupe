import React, { MouseEventHandler } from "react";
import { StarIcon } from "../svg/StarIcon";

interface IProps {
    filled: boolean;
    index: number;
    setRating: (index: number) => void;
    size?: number,
}

export const RateStar: React.FC<IProps> = ({ filled, index, setRating, size = 29 }) => {    
    return (
        <div onClick={() => setRating(index)}>
            <StarIcon filled={filled} size={size} />
        </div>
    )
}