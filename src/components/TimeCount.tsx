import React, { useEffect, useState } from "react";

function TimeCount({
  duration,
  isRunning,
}: {
  duration: number;
  isRunning: boolean;
}) {
  const [time, setTime] = useState<number>(duration);
  console.log(time);
  useEffect(() => {
    if (!isRunning) return;
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
  }, [duration, isRunning]);
  return (
    <div>
      <span
        style={{ color: time < 6 ? "red" : "white" }}
        className="font-medium text-2xl "
      >
        {time}s
      </span>
    </div>
  );
}

export default TimeCount;
