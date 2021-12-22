import React, { useState, useEffect } from "react";

const Timer = ({ init, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(init);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((last) => last - 1);
    }, 1000);

    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      onTimeOut(false);
    }
  }, [remainingTime]);

  return (
    <div className="w-8 h-8 flex justify-center items-center font-bold text-yellow-500 rounded-full bg-black mb-3">
      {remainingTime}
    </div>
  );
};

export default Timer;
