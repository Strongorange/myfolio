import React, { useState, useEffect, useMemo, forwardRef } from "react";
import { useInterval } from "../utils/useInterval";
import ArrowDown from "../assets/arrow-down.svg";

type PropsType = {};
type RefType = HTMLDivElement;

const Main = forwardRef<RefType, PropsType>((props, ref) => {
  const displayText = useMemo(() => {
    return "안녕하세요.";
  }, []);

  const displayText2 = useMemo(() => {
    return "저는 이찬휘 입니다.";
  }, []);

  const [landingText, setLandingText] = useState("");
  const [landingText2, setLandingText2] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [textIndex2, setTextIndex2] = useState(0);

  useInterval(() => {
    if (textIndex >= displayText.length) {
      return;
    }

    setLandingText((prev) => {
      let result = prev ? prev + displayText[textIndex] : displayText[0];
      setTextIndex((prev) => prev + 1);
      return result;
    });
  }, 150);

  useInterval(() => {
    if (textIndex2 >= displayText2.length) {
      return;
    }
    if (textIndex >= displayText.length) {
      setLandingText2((prev) => {
        let result = prev ? prev + displayText2[textIndex2] : displayText2[0];
        setTextIndex2((prev) => prev + 1);
        return result;
      });
    }
  }, 150);

  return (
    <div className="absolute top-0 flex h-screen w-full " ref={ref}>
      <div className="relative h-full w-full">
        <div className="put-center  flex w-full flex-col items-center font-['Pretendard'] text-[3rem] text-[#ff5c00]">
          <h1 className="animate-typingCursor whitespace-pre-line text-[5rem] text-green-400">
            {landingText}
          </h1>
          <h1 className="animate-typingCursor2 whitespace-pre-line text-[5rem] text-green-400">
            {landingText2}
          </h1>
        </div>
        <div className="absolute bottom-16 left-2/4 -translate-x-1/2 animate-bounce cursor-pointer">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
});

Main.displayName = "Main";

export default Main;
