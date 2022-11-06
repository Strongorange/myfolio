import React, { useState, useEffect } from "react";

const Section1 = () => {
  const [displayText, setDisplayText] = useState("이찬휘 입니다.");

  return (
    <section className="absolute top-0 flex h-screen w-full bg-amber-100">
      <div className="put-center absolute flex flex-col  font-['Pretendard'] text-[8rem] text-[#ff5c00]">
        <h3>안녕하세요. 저는</h3>
        <h1>{displayText}</h1>
      </div>
    </section>
  );
};

export default Section1;
