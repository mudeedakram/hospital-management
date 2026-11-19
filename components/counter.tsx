"use client";

import { useEffect, useState } from "react";

type CounterProps = {
  target: number;
};


export default function Counter({ target }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;

    const increment = target / totalFrames;

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;

        if (next >= target) {
          clearInterval(interval);
          return target;
        }

        return next;
      });
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [target]);

  const displayValue =
    target >= 1000
      ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}K`
      : Math.floor(count);

  return <>{displayValue}</>;
}
