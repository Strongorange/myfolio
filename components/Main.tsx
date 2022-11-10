import React, { useState, useEffect, useMemo, forwardRef } from "react";
import { useInterval } from "../utils/useInterval";
import ArrowDown from "../assets/arrow-down.svg";
import MyPhoto from "../assets/my.jpg";
import { useAtom } from "jotai";
import { divRefs } from "../store/myStore";
import { scrollToDiv } from "../utils/scrollToDiv";
import Image from "next/image";
import Particle from "./Particle";

{
  /* <div
          className="absolute bottom-16 left-2/4 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToDiv(eleRefs, 2)}
        >
          <ArrowDown />
        </div> */
}

type PropsType = {};
type RefType = HTMLDivElement;

const Main = forwardRef<RefType, PropsType>((props, ref) => {
  const displayText = useMemo(() => {
    return "만나서 반갑습니다.";
  }, []);
  const displayText2 = useMemo(() => {
    return "웹 프론트엔드 개발자 ";
  }, []);
  const displayText3 = useMemo(() => {
    return `${" "}이찬휘`;
  }, []);
  const displayText4 = useMemo(() => {
    return "입니다.";
  }, []);

  const [landingText, setLandingText] = useState("");
  const [landingText2, setLandingText2] = useState("");
  const [landingText3, setLandingText3] = useState("");
  const [landingText4, setLandingText4] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [textIndex2, setTextIndex2] = useState(0);
  const [textIndex3, setTextIndex3] = useState(0);
  const [textIndex4, setTextIndex4] = useState(0);

  const [showContents, setShowContents] = useState(false);
  const [showParticle, setShowParticle] = useState(false);

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

  useInterval(() => {
    if (textIndex3 >= displayText3.length) {
      return;
    }
    if (textIndex2 >= displayText2.length) {
      setLandingText3((prev) => {
        let result = prev ? prev + displayText3[textIndex3] : displayText3[0];
        setTextIndex3((prev) => prev + 1);
        return result;
      });
    }
  }, 150);

  useInterval(() => {
    if (textIndex4 >= displayText4.length) {
      return;
    }
    if (textIndex3 >= displayText3.length) {
      setLandingText4((prev) => {
        let result = prev ? prev + displayText4[textIndex4] : displayText4[0];
        setTextIndex4((prev) => prev + 1);
        return result;
      });
    }
  }, 150);

  useEffect(() => {
    if (landingText4.length === displayText4.length) {
      setTimeout(() => {
        setShowContents(true);
        setShowParticle(true);
      }, 500);
    }
  }, [landingText4, displayText4]);

  return (
    <div
      className="absolute top-0 flex h-screen w-full px-[15rem] py-[20vh]"
      ref={ref}
    >
      <div className="relative flex h-full w-full flex-col gap-14">
        <div className="flex  w-full flex-col items-start  font-['Pretendard'] text-[3rem] text-[#ff5c00]">
          <h1 className="animate-typingCursor whitespace-pre-line text-[2rem]">
            {landingText}
          </h1>
          <div className="flex-ic flex">
            <h1 className="animate-typingCursor2 whitespace-pre-line text-[5rem]">
              {landingText2}
            </h1>
            <h1 className="animate-typingCursor3 whitespace-pre-line text-[5rem]">
              &nbsp;{landingText3}
            </h1>
            <h1 className="animate-typingCursor4 whitespace-pre-line text-[5rem]">
              &nbsp;{landingText4}
            </h1>
          </div>
        </div>
        {showContents && (
          <div className="flex animate-fadeOnMain justify-between text-[5rem]">
            <div className="">
              <h1>다양한 경험을 추구하는</h1>
              <h2>소개2소개2</h2>
            </div>
            <div className="relative h-[10rem] w-[10rem] overflow-hidden rounded-[50%] md:h-[20rem] md:w-[20rem] xl:h-[30rem] xl:w-[30rem] ">
              <Image
                alt=""
                src={MyPhoto}
                fill
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
              />
            </div>
          </div>
        )}
        {showParticle && <Particle />}
      </div>
    </div>
  );
});

Main.displayName = "Main";

export default Main;
