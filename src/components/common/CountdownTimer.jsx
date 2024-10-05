import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Calculate hours, minutes, and seconds
  const formatTime = (time) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  return (
    <div className="flex flex-col items-center text-3xl font-bold text-start">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium">Days</span>
          <span>
            {String(formatTime(timeLeft).days).padStart(2, "0")}
            <span className="text-button2 ml-2"> : </span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium">Hours</span>
          <span>
            {String(formatTime(timeLeft).hours).padStart(2, "0")}
            <span className="text-button2 ml-2"> : </span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium">Minutes</span>
          <span>
            {String(formatTime(timeLeft).minutes).padStart(2, "0")}
            <span className="text-button2 ml-2"> : </span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium">Seconds</span>
          {String(formatTime(timeLeft).seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
