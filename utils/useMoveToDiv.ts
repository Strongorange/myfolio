import { useRef } from "react";

export const useMoveToDiv = () => {
  const element = useRef<HTMLDivElement | null>(null);
  const moveToElement = (): void => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { element, moveToElement };
};
