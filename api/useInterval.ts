import { useEffect, useRef } from "react";

interface IUseInterval {
  (callback: () => void, delay: number | null): void;
}

export const useInterval: IUseInterval = (callback, delay) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current!();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
