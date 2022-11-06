import React, { useState, useEffect } from "react";

const Section1 = () => {
  const [displayText, setDisplayText] = useState("이찬휘 입니다.");
  const [landingText, setLandingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  return (
    <section className="absolute top-0 flex h-screen w-full bg-amber-100">
      <div className="put-center  absolute flex w-full flex-col items-center font-['Pretendard'] text-[3rem] text-[#ff5c00]">
        <h3>안녕하세요. 저는</h3>
        <h1 className="text-[5rem] text-green-400">{displayText}</h1>
      </div>
    </section>
  );
};

export default Section1;
