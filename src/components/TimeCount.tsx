import React, { useEffect, useState } from "react";

function TimeCount({ duration }: { duration: number }) {
  const [time, setTime] = useState<number>(duration);
  console.log(time);
  useEffect(() => {
    if (!duration) return;
    setTime(duration);
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [duration]);
  return (
    <div>
      <span>{time}</span>
    </div>
  );
}

export default TimeCount;
