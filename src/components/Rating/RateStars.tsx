import React from "react";
import { RateStar } from "./RateStar";

export const RateStars: React.FC<{ onRatingChange: (rating: number) => void }> = ({ onRatingChange }) => {
  const [rating, setRating] = React.useState(0);
  const iteration = [...Array(5)];

  const ratingWarns = new Map([
      [0, 'Оцените мероприятие'],
      [1, 'Пожалуйста, обьясните причину'],
      [2, "Что-то пошло не так?"],
      [3, "Что можно было бы улучшить?"],
      [4, "Есть ли рекомендации?"],
      [5, 'Отлично!'],
  ]);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
        onRatingChange(newRating); // Call the callback function with new rating
    };

  return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2">
          {iteration.map((_, index) => (
            <RateStar key={index} filled={rating - index > 0} index={index + 1} setRating={handleRatingChange} />
          ))}
        </div>
        <div className={`text-center mt-4 transition-opacity ${rating === 0 ? "invisible" : "visible"}`}>
          {ratingWarns.get(rating)}
        </div>
      </div>
  )
}