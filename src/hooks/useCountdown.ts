import { useEffect, useState } from 'react';

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  const isExpired = countDown < 0;

  useEffect(() => {
    setCountDown(countDownDate - new Date().getTime());
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
      if(isExpired) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, isExpired]);

  const [days, hours, minutes, seconds] = getReturnValues(countDown);

  return { days, hours, minutes, seconds, isExpired };
};
